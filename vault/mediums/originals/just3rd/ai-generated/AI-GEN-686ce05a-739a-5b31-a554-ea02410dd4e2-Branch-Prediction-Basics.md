---
type: "medium"
title: "Branch Prediction Basics: Taming Control Hazards"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/computer-architecture/pipelined-architecture/microskills/branch-prediction-basics|branch-prediction-basics]]"
learning-time-in-minutes: 5
---
# Branch Prediction Basics: Taming Control Hazards

In a pipelined processor, smooth execution is key. However, branches in code introduce a significant hurdle: **control hazards**. When the processor encounters a branch instruction, it doesn't immediately know which path to take until the branch condition is evaluated. This uncertainty can stall the pipeline, wasting precious clock cycles. Branch prediction is a technique to **mitigate these control hazard penalties** by making an educated guess about the branch's outcome.

## The Problem: Pipeline Stalls from Branches

Imagine your pipelined processor fetching instructions. When it hits a conditional branch, like `if (x > 0)`, it needs to know if `x > 0` is true or false to fetch the *next* instruction. If it guesses wrong, all the instructions it speculatively fetched and started executing down the wrong path must be discarded, and the pipeline has to restart fetching from the correct instruction. This is a costly stall.

Consider this simple pipeline:

| Stage      | Fetch | Decode | Execute | Memory | Writeback |
| :--------- | :---- | :----- | :------ | :----- | :-------- |
| Instruction 1 | X     |        |         |        |           |
| Instruction 2 |       | X      |         |        |           |
| Instruction 3 |       |        | X       |        |           |
| Instruction 4 |       |        |         | X      |           |
| Instruction 5 |       |        |         |        | X         |

Now, if Instruction 3 is a branch and the processor doesn't know the outcome, it might fetch Instruction 4 speculatively. If the branch is *not* taken, Instruction 4 and potentially subsequent instructions are useless.

## The Solution: Predicting the Future

Branch prediction aims to **guess the outcome of a branch instruction *before* it's actually determined**. This allows the pipeline to continue fetching and executing instructions speculatively along the predicted path.

### Types of Branch Prediction

1.  **Static Branch Prediction:** This is the simplest form. The prediction is fixed at compile time or based on the instruction's type.
    *   **Always Taken:** Assumes a branch will always be taken. Good for loops that typically execute many times.
    *   **Always Not Taken:** Assumes a branch will never be taken. Good for error handling or cleanup code.
    *   **Backward Taken, Forward Not Taken (BTFNT):** A common heuristic. Backward branches (e.g., loop back edges) are usually taken, while forward branches (e.g., `if` statements that skip code) are often not taken.

2.  **Dynamic Branch Prediction:** This approach learns from the past behavior of branches during program execution. It uses hardware to keep track of recent branch outcomes and makes predictions based on these history patterns.
    *   **1-bit Predictor:** Remembers the last outcome of a branch. If it was taken last time, predict taken. If not taken, predict not taken. Simple, but can be wrong twice for branches that alternate.
    *   **2-bit Predictor (Saturating Counter):** Uses a 2-bit counter to track branch history. This provides a bit more "inertia" and requires two consecutive mispredictions in the same direction to flip the prediction. The states typically represent:
        *   Strongly Not Taken
        *   Weakly Not Taken
        *   Weakly Taken
        *   Strongly Taken

### How Prediction Reduces Penalties

The core idea is to keep the pipeline full. When a branch instruction arrives:

1.  **Prediction:** The branch predictor guesses the outcome (taken or not taken).
2.  **Speculative Fetch:** The processor *immediately* starts fetching instructions from the predicted target address (or the next sequential instruction).
3.  **Execution:** These speculatively fetched instructions proceed through the pipeline.
4.  **Resolution:** When the branch instruction's condition is finally evaluated:
    *   **Correct Prediction:** Great! The speculatively executed instructions are correct and can proceed. No stall occurs, or a minimal penalty.
    *   **Incorrect Prediction (Misprediction):** Oops! The speculatively executed instructions are wrong. The processor must **flush** the pipeline, discarding all work done on those instructions, and then restart fetching from the correct path. This incurs a penalty, but it's often much less than stalling the entire pipeline until the branch outcome is known.

## Conceptual Impact on CPI

**CPI (Cycles Per Instruction)** is a measure of processor efficiency. A lower CPI means the processor completes instructions faster.

*   **No Branch Prediction / Frequent Stalls:** In a pipeline without effective branch prediction, every control branch can potentially cause a stall of several cycles. This significantly increases the CPI.
*   **With Branch Prediction:**
    *   **High Prediction Accuracy:** If the branch predictor is highly accurate (e.g., 90%+), mispredictions are infrequent. The pipeline largely runs at its ideal speed. The CPI approaches the ideal pipeline CPI (e.g., 1 for a 5-stage pipeline without any hazards).
    *   **Low Prediction Accuracy:** If the predictor is often wrong, the frequent mispredictions and pipeline flushes will lead to a higher CPI, negating much of the benefit of pipelining.

**Example:**
Consider a program with 100 instructions, including 10 branches. Assume an ideal pipeline CPI of 1.
*   **Scenario A (No Prediction/Stall):** Each branch causes a 3-cycle stall.
    *   Total cycles = 100 instructions + (10 branches * 3 stall cycles/branch) = 130 cycles.
    *   Effective CPI = 130 / 100 = 1.3.
*   **Scenario B (Branch Prediction with 90% Accuracy):** A branch misprediction costs 3 cycles.
    *   Correct predictions = 10 branches * 0.90 = 9 branches.
    *   Mispredictions = 10 branches * 0.10 = 1 branch.
    *   Total cycles = 100 instructions + (1 * 3 misprediction cycles) = 103 cycles.
    *   Effective CPI = 103 / 100 = 1.03.

This simple example highlights how a good branch predictor dramatically improves performance by reducing the effective CPI.

## Key Takeaway

Branch prediction is a vital technique for modern pipelined architectures. By making intelligent guesses about branch outcomes, processors can keep their pipelines flowing, significantly reducing the performance impact of control hazards and bringing the effective CPI closer to the ideal. The accuracy of the branch predictor is paramount in achieving this performance gain.

## Supports

- [[skills/computing/hardware-embedded/computer-architecture/pipelined-architecture/microskills/branch-prediction-basics|Branch Prediction Basics]]
