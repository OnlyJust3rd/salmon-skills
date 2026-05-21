---
type: "medium"
title: "Estimating CPI Impact of Hazard Mitigation Techniques"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/hardware-embedded/electronics-embedded/pipelined-architecture/microskills/cpi-impact-estimation|cpi-impact-estimation]]"
---
# Estimating CPI Impact of Hazard Mitigation Techniques

In pipelined architectures, hazards can significantly degrade performance. Understanding how different mitigation techniques affect the Cycles Per Instruction (CPI) is crucial for evaluating their effectiveness. This lesson focuses on estimating the impact of common mitigation strategies: stalling, forwarding, and branch prediction, on CPI.

## Understanding CPI

CPI is a fundamental metric representing the average number of clock cycles required to execute one instruction. A lower CPI indicates better performance. In an ideal pipeline with no hazards, the CPI would be 1. However, hazards introduce stalls, increasing the CPI.

The ideal CPI is calculated as:
$$ \text{Ideal CPI} = 1 $$

The actual CPI is influenced by pipeline stalls caused by various hazards:
$$ \text{Actual CPI} = \text{Ideal CPI} + \text{Pipeline Stall Cycles per Instruction} $$

Our goal is to estimate the "Pipeline Stall Cycles per Instruction" for different mitigation techniques.

## Mitigation Techniques and Their CPI Impact

### 1. Stalling (Bubble Insertion)

**Concept:** Stalling, also known as pipeline bubbling, is the simplest hazard mitigation technique. When a hazard is detected, the pipeline stage that needs the data or resource is stalled, and a "bubble" (a no-operation state) is inserted into the pipeline. This allows the stalled stage to eventually receive the required data or resource without affecting the progress of other instructions in different pipeline stages.

**Impact on CPI:** Stalling directly increases CPI. Each stall cycle adds a cycle to the execution of an instruction that encountered a hazard.

**Estimation Model:**
If an instruction encounters a hazard that requires $k$ stall cycles, the CPI increases by $\frac{k}{\text{Number of instructions}}$.

Consider a sequence of instructions where one instruction causes a data hazard that requires 2 stall cycles. If we execute 100 instructions, and this stall happens once:
*   Total stall cycles = 2
*   Total instructions = 100
*   Stall cycles per instruction = $\frac{2}{100} = 0.02$
*   Actual CPI = $1 + 0.02 = 1.02$

**Scenario Example:**
Imagine a load instruction followed immediately by an instruction that uses the loaded data. This is a common data hazard. Without mitigation, the pipeline might stall for 2 cycles.

*   **Ideal CPI:** 1
*   **Hazard Type:** Data Hazard (RAW - Read After Write)
*   **Stall Cycles ($k$):** 2
*   **Estimated CPI:** $1 + \frac{2}{\text{Number of instructions}}$ (If this stall occurs for every instruction, CPI would be $1+2=3$. If it occurs rarely, the impact is minimal.)

**Key Takeaway:** Stalling is simple but can be very inefficient if hazards are frequent. Its CPI impact is directly proportional to the number of stall cycles and inversely proportional to the total number of instructions.

### 2. Forwarding (Bypass)

**Concept:** Forwarding, or bypassing, is a technique to resolve data hazards by providing the result of an instruction to subsequent dependent instructions as soon as it is produced, even before it is written back to the register file. This avoids the need for stalls.

**Impact on CPI:** Forwarding aims to eliminate or reduce stall cycles, thereby improving CPI. Ideally, with perfect forwarding, many data hazards would not cause any stalls.

**Estimation Model:**
Forwarding effectively reduces the stall cycles caused by data dependencies. If forwarding can resolve a hazard that would have otherwise caused $k$ stall cycles, the CPI improvement is $\frac{k}{\text{Number of instructions}}$.

Consider the same load instruction followed by a dependent instruction. With forwarding:
*   The result of the load is forwarded directly to the dependent instruction.
*   Stall cycles saved = 2 (in the previous example).
*   If this hazard scenario occurred for 100 instructions:
    *   Stall cycles saved = $2 \times 100 = 200$
    *   Total instructions = 100
    *   CPI improvement = $\frac{200}{100} = 2$. This is not quite right. Let's reframe.

A better way to think about the *impact* on CPI:
If a hazard *would have* caused $k$ stalls, but forwarding resolves it, the CPI contribution from that specific hazard is reduced from $1 + \frac{k}{1}$ (if it happened to every instruction) to 1. The *improvement* in CPI is thus $\frac{k}{1}$.

**Scenario Example:**
Load instruction followed by an ADD instruction that uses the loaded value.

*   **Without Forwarding (Stalling):** CPI might increase significantly (e.g., 3).
*   **With Forwarding:** The result from the Load stage can be forwarded to the Execute stage of the ADD instruction, potentially allowing execution to proceed with no stall cycles.
*   **Estimated CPI Impact:** Forwarding aims to bring the CPI close to the ideal CPI (1) for data hazards it can resolve. The CPI improvement is measured by the stall cycles that are *avoided*.

**Key Takeaway:** Forwarding is highly effective at reducing CPI for data hazards. Its effectiveness depends on the availability of forwarding paths and the types of dependencies.

### 3. Branch Prediction

**Concept:** Branch prediction is used to handle control hazards (branches). When a branch instruction is encountered, the pipeline doesn't know whether to fetch instructions from the target address (if the branch is taken) or the sequential address (if the branch is not taken). Branch predictors guess the outcome. If the prediction is correct, no stall cycles are incurred. If the prediction is incorrect, the incorrectly fetched instructions must be flushed, and new instructions fetched from the correct path, incurring stall cycles.

**Impact on CPI:** The CPI impact of branch prediction is directly related to the prediction accuracy. Higher accuracy means fewer mispredictions and lower CPI.

**Estimation Model:**
Let $P_{correct}$ be the probability of a correct branch prediction and $P_{mispredict}$ be the probability of a misprediction ($P_{correct} + P_{mispredict} = 1$).
Let $k$ be the number of stall cycles incurred on a branch misprediction (this depends on the pipeline depth).

The average stall cycles per branch instruction due to mispredictions can be estimated as:
$$ \text{Stall Cycles per Branch} = P_{mispredict} \times k $$

To estimate the impact on overall CPI, we need to know the fraction of instructions that are branches. Let $F_{branch}$ be the fraction of instructions that are branches.

$$ \text{Pipeline Stall Cycles per Instruction} \approx F_{branch} \times P_{mispredict} \times k $$

**Scenario Example:**
Consider a pipeline with a depth of 5 stages (meaning $k=5$ stall cycles on misprediction, as we need to flush 5 instructions).
Suppose 20% of instructions are branches ($F_{branch} = 0.2$).
Suppose the branch predictor has an accuracy of 90% ($P_{correct} = 0.9$), meaning $P_{mispredict} = 0.1$.

*   **Stall Cycles per Branch:** $0.1 \times 5 = 0.5$ cycles.
*   **Pipeline Stall Cycles per Instruction:** $0.2 \times 0.1 \times 5 = 0.1$ cycles.
*   **Estimated CPI:** $1 + 0.1 = 1.1$.

**Table: Comparing Mitigation Techniques**

| Technique         | Primary Hazard Addressed | CPI Impact Mechanism                                   | Typical CPI Improvement | Trade-offs                                               |
| :---------------- | :----------------------- | :----------------------------------------------------- | :---------------------- | :------------------------------------------------------- |
| **Stalling**      | Data, Structural         | Inserts idle cycles (bubbles)                          | None (or degradation)   | Simple, but significant performance loss                 |
| **Forwarding**    | Data (RAW)               | Eliminates/reduces stalls by providing intermediate results | Significant reduction   | Requires extra hardware for bypass paths                 |
| **Branch Pred.**  | Control (Branches)       | Reduces stalls by guessing branch outcome              | Varies with accuracy    | Mispredictions cause significant stalls; complexity of predictor |

**Conclusion:**

Evaluating the impact of hazard mitigation techniques on CPI requires understanding the frequency of hazards, the number of stall cycles each hazard typically causes, and the effectiveness of the mitigation strategy. Simple models allow us to estimate the expected CPI and throughput improvements, guiding the design and analysis of pipelined processors. Forwarding and accurate branch prediction are key to achieving low CPI values approaching the ideal.

## Supports

- [[skills/hardware-embedded/electronics-embedded/pipelined-architecture/microskills/cpi-impact-estimation|CPI Impact Estimation]]
