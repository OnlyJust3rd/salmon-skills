---
type: "medium"
title: "Operand Forwarding: When It Works and When It Doesn't"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/computer-architecture/pipelined-architecture/microskills/operand-forwarding-reasoning|operand-forwarding-reasoning]]"
learning-time-in-minutes: 7
---
# Operand Forwarding: When It Works and When It Doesn't

This lesson focuses on a crucial technique for handling data hazards in pipelined architectures: operand forwarding. We'll explore *when* forwarding can successfully resolve a hazard and, importantly, *when* it falls short. This understanding is key to evaluating the effectiveness of hazard mitigation strategies and their impact on pipeline performance (CPI/throughput).

## The Data Hazard Problem

In a pipelined processor, instructions flow through different stages concurrently. A data hazard occurs when an instruction needs the result of a previous instruction that has not yet been completed and written back to the register file.

Consider this simple sequence:

1.  `ADD R1, R2, R3`  (Adds R2 and R3, stores in R1)
2.  `SUB R4, R1, R5`  (Subtracts R5 from R1, stores in R4)

If the `ADD` instruction is still in its execution stage when the `SUB` instruction reaches its decode stage and needs the value of `R1`, a hazard exists. The `SUB` instruction will get an incorrect (stale) value of `R1` if nothing is done.

## Operand Forwarding: The Concept

Operand forwarding, also known as bypassing, is a technique that mitigates data hazards by sending the result of an instruction directly from the execution stage where it's produced to the decode or execute stage of a subsequent instruction that needs it. This avoids the need to wait for the result to be written back to the register file.

Think of it like a conveyor belt. Instead of waiting for an item to be placed on a shelf (register file) and then picked up, the item is directly passed from the production point to the next station that requires it.

## When Operand Forwarding Works: The "Happy Path"

Operand forwarding is highly effective when the following conditions are met:

*   **Dependency:** The dependent instruction (the one needing the data) requires the result produced by a previous instruction.
*   **Timing:** The result is available in an *intermediate pipeline stage* (e.g., the Memory Access (MEM) stage or the Execute (EX) stage) *before* the dependent instruction needs it in its Decode (ID) or Execute (EX) stage.

Let's visualize this with a classic 5-stage pipeline (IF, ID, EX, MEM, WB - Instruction Fetch, Instruction Decode, Execute, Memory Access, Write Back):

**Scenario: Forwarding from MEM to EX**

Consider:
1.  `LOAD R1, 0(R2)`  (Loads data into R1 from memory)
2.  `ADD R3, R1, R4`   (Uses R1)

*   The `LOAD` instruction calculates the data to be loaded in the **EX** stage and fetches it from memory in the **MEM** stage.
*   The `ADD` instruction needs `R1` in its **EX** stage.

If the `LOAD` instruction is one cycle ahead of `ADD`, the data for `R1` will be available from the `LOAD`'s MEM stage *at the same time* the `ADD` instruction needs it in its EX stage.

| Instruction | IF | ID | EX | MEM | WB |
| :---------- | :- | :- | :- | :- | :- |
| `LOAD R1...`|    |    |    | `R1` Data |    |
| `ADD R3...` |    |    | `R1` Needed |    |    |

With forwarding, the data produced in the `LOAD`'s MEM stage can be *forwarded directly* to the `ADD`'s EX stage. This allows the `ADD` instruction to proceed without stalling.

**Scenario: Forwarding from EX to EX**

Consider:
1.  `ADD R1, R2, R3`
2.  `SUB R4, R1, R5`

*   The `ADD` instruction calculates the result in its **EX** stage.
*   The `SUB` instruction needs `R1` in its **EX** stage.

If the `ADD` instruction is one cycle ahead of `SUB`, the result of `ADD` will be available from its EX stage *at the same time* the `SUB` instruction needs it in its EX stage.

| Instruction | IF | ID | EX     | MEM | WB |
| :---------- | :- | :- | :----- | :- | :- |
| `ADD R1...` |    |    | `R1` Result |    |    |
| `SUB R4...` |    |    | `R1` Needed |    |    |

Forwarding from the `ADD`'s EX stage to the `SUB`'s EX stage resolves this hazard.

## When Operand Forwarding Cannot Help: The Limitations

Forwarding is not a silver bullet. There are situations where it simply cannot prevent a stall because the required data is not available *early enough*.

### 1. RAW Hazard with Load-Use Dependency

This is the most classic example where forwarding alone is insufficient.

Consider:
1.  `LOAD R1, 0(R2)`
2.  `ADD R3, R1, R4`
3.  `SUB R5, R1, R6`

*   The `LOAD` instruction computes the memory address in EX, fetches data in MEM, and writes it back in WB.
*   The `ADD` instruction needs `R1` in its EX stage.
*   The `SUB` instruction also needs `R1` in its EX stage.

Let's trace the data availability for `R1`:

| Instruction | IF | ID | EX | MEM  | WB |
| :---------- | :- | :- | :- | :--- | :- |
| `LOAD R1...`|    |    |    | Data |    |
| `ADD R3...` |    |    | Needs `R1` |    |    |
| `SUB R5...` |    |    | Needs `R1` |    |    |

The `LOAD` instruction fetches the data in the **MEM** stage. However, the `ADD` instruction needs `R1` in its **EX** stage, which occurs *before* the MEM stage. Even with forwarding, the data from `LOAD`'s MEM stage isn't available until *after* `ADD` has already passed its EX stage and is moving into MEM.

**Result:** The `ADD` instruction *must stall* for one cycle. The `LOAD` instruction must complete its MEM stage before the `ADD` instruction can proceed to its MEM stage (or a forwarded value can reach its EX stage).

```
+--------+----+----+----+-----+----+
| Instr  | IF | ID | EX | MEM | WB |
+--------+----+----+----+-----+----+
| LOAD   |    |    |    | Data|    |  <-- Data available here for subsequent instructions
| ADD    |    |    | STALL|    |    |  <-- Stalls waiting for LOAD's MEM stage
| SUB    |    |    |    | STALL|    |  <-- Also stalls because ADD is stalled
+--------+----+----+----+-----+----+
```

After the stall, the pipeline looks like this:

```
+--------+----+----+----+-----+----+
| Instr  | IF | ID | EX | MEM | WB |
+--------+----+----+----+-----+----+
| LOAD   |    |    |    | Data|    |
| ADD    |    | STALL| Ex | Mem |    |  <-- Now uses data from LOAD
| SUB    |    |    |    | STALL|    |  <-- Now can proceed after ADD
+--------+----+----+----+-----+----+
```

Forwarding *does* help `SUB`. Once `ADD` has its data (either through stall or forwarding), `ADD` can forward its result to `SUB` if `SUB` needs it in the same cycle `ADD` writes it back, or in the next cycle's EX stage. However, the initial stall due to the load-use hazard is unavoidable with just forwarding.

### 2. Forwarding from WB Stage (Not Really Forwarding)

If an instruction needs a result that is only available after it's written back to the register file (WB stage), forwarding cannot help. This typically means the dependent instruction will have to stall. This scenario is rare for typical instruction sets but can occur with specific microarchitectural implementations or complex data dependencies. In most practical pipelined architectures, results needed by subsequent instructions are typically available by the MEM stage, allowing for effective forwarding.

## Reasoning Exercise

Consider the following code snippet and a 5-stage pipeline (IF, ID, EX, MEM, WB). For each hazard, determine if operand forwarding can resolve it. If not, indicate how many stalls are required.

```assembly
1. MUL R1, R2, R3  ; R1 = R2 * R3
2. ADD R4, R1, R5  ; R4 = R1 + R5
3. SUB R6, R1, R7  ; R6 = R1 - R7
```

*   **Hazard 1: `ADD` depending on `MUL`'s `R1`**
    *   `MUL` computes the result in its EX stage.
    *   `ADD` needs `R1` in its EX stage.
    *   Can forwarding resolve this? Yes, from `MUL`'s EX to `ADD`'s EX. Stalls: 0.

*   **Hazard 2: `SUB` depending on `MUL`'s `R1`**
    *   `MUL` computes `R1` in its EX stage.
    *   `SUB` needs `R1` in its EX stage.
    *   If `ADD` is also executing, `SUB` might need to wait for `ADD` to finish using the forwarded value or wait for the write-back. However, if `SUB` immediately follows `ADD`, `SUB` can also be forwarded from `ADD`'s EX stage, or directly from `MUL`'s EX stage if `ADD` stalls.
    *   **Crucial Point:** If `ADD` does *not* stall and gets forwarded data from `MUL`'s EX, then `ADD` will complete its EX stage and forward its result to `SUB` if `SUB` needs it in the *same cycle* `ADD`'s result is ready.
    *   A more precise analysis involves how the forwarding logic prioritizes: if `MUL` writes to `R1` and `ADD` needs it, and `SUB` also needs it, the forwarding unit will typically pick the result from the latest producing stage. In this case, `ADD` depends on `MUL`. If `ADD` stalls for 1 cycle, then `MUL`'s WB stage is available for `ADD`'s EX stage. Then `ADD`'s EX stage can forward to `SUB`'s EX stage.
    *   Let's reconsider:
        *   `MUL` EX -> `ADD` EX: Forwarding works. No stall needed for this dependency.
        *   `MUL` EX -> `SUB` EX: If `ADD` executes normally (no stall), its EX stage will happen after `MUL`'s EX stage. `SUB` needs `R1`. `SUB`'s EX stage happens after `ADD`'s EX stage.
        *   If `ADD` takes data from `MUL`'s EX, `ADD`'s EX stage completes. Then `ADD` can forward its result to `SUB`'s EX stage.
        *   However, if `ADD` needed the result from `MUL`'s WB, then `ADD` would stall.
        *   **Correct Logic:** `MUL` produces `R1` in EX. `ADD` needs `R1` in EX. Forward `MUL.EX` -> `ADD.EX`. `SUB` needs `R1` in EX. `SUB` is after `ADD`.
            *   If `ADD` got `R1` from `MUL.EX`, `ADD` will produce its result in `ADD.EX`. This result can be forwarded to `SUB.EX`. Stalls: 0.

Let's assume a more standard scenario where forwarding from EX stage is available.

```
Cycle: 1    2    3    4    5    6
       IF   ID   EX   MEM  WB
MUL    IF   ID   EX (R1)
ADD         IF   ID   EX (R1) <--- Needs R1 from MUL.EX. Forwarded.
SUB              IF   ID   EX (R1) <--- Needs R1. Mul.EX is forwarded to ADD. ADD.EX will produce result. This can be forwarded to SUB.EX.
```
In this simplified scenario, with full forwarding capabilities from the EX stage, no stalls are *strictly* necessary for these specific dependencies between adjacent instructions.

## Conclusion

Operand forwarding is a powerful technique for reducing pipeline stalls by providing results from producing instructions to consuming instructions earlier than waiting for register write-back. However, it cannot overcome all data hazards, most notably the load-use hazard where the data is fetched from memory, which requires at least one stall cycle. Understanding these limitations is crucial for analyzing and optimizing pipeline performance.

## Supports

- [[skills/computing/hardware-embedded/computer-architecture/pipelined-architecture/microskills/operand-forwarding-reasoning|Operand Forwarding Reasoning]]
