---
type: "medium"
title: "Executing Foster's Parallel Design Methodology"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/algorithms/parallel-algorithm/microskills/parallel-design-methodology-execution|parallel-design-methodology-execution]]"
---
# Executing Foster's Parallel Design Methodology

This lesson will guide you through the practical execution of Foster's parallel design methodology. We will focus on applying its core steps to transform a sequential problem into a simple parallel application.

## Understanding Foster's Methodology

Foster's methodology provides a structured approach to parallel algorithm design. It's particularly useful when you need to break down a problem into manageable, parallelizable components. The core idea is to think about the problem in terms of **decomposition**, **communication**, and **mapping**.

### The Four Key Steps

Foster's methodology can be summarized into four distinct steps:

1.  **Decomposition:** How can the problem be divided into smaller, independent tasks?
2.  **Communication:** How will these tasks exchange data and synchronize?
3.  **Agglomeration:** Can tasks be combined to reduce communication overhead or improve load balancing?
4.  **Mapping:** How will the tasks be assigned to the available processing elements?

## Applying the Methodology: A Worked Example

Let's apply these steps to a common problem: **calculating the sum of a large list of numbers.**

### The Problem: Summing a Large List

Imagine you have a list of one million integers and you need to find their sum.

### Step 1: Decomposition

How can we break this down? The simplest way is to divide the list into roughly equal sub-lists. Each sub-list can then be summed independently.

*   **Sequential Approach:** One processor iterates through the entire list, adding each number to a running total.
*   **Parallel Decomposition:** We can split the list into `P` sub-lists, where `P` is the number of processors we plan to use. Each processor will be responsible for summing one of these sub-lists.

For example, if we have 4 processors:
*   Processor 1 sums elements 0 to 249,999.
*   Processor 2 sums elements 250,000 to 499,999.
*   Processor 3 sums elements 500,000 to 749,999.
*   Processor 4 sums elements 750,000 to 999,999.

### Step 2: Communication

After each processor sums its sub-list, we need to combine these partial sums to get the final total. This requires communication.

*   **Requirement:** The partial sums from each processor must be gathered.
*   **Mechanism:** A common pattern is a **reduction operation**. In this case, it's a summation reduction. One processor (often processor 0) can collect the partial sums from all other processors and add them to its own.

### Step 3: Agglomeration

Agglomeration involves combining tasks. In this simple example, the tasks (summing a sub-list) are already quite small. Combining them might not be beneficial, and could even increase overhead if not done carefully.

*   **Consideration:** If the sub-lists were extremely small (e.g., only a few numbers per sub-list), we might combine several sub-lists into a single task for a processor. This would reduce the number of independent tasks and potentially the communication needed to gather partial sums.
*   **In our current example:** For a list of one million numbers and a reasonable number of processors (say, 4 or 8), the sub-list sums are likely substantial enough that further agglomeration isn't necessary or beneficial. We'll stick with each processor handling one sub-list sum.

### Step 4: Mapping

Mapping is about assigning the decomposed tasks to the physical or virtual processing elements.

*   **Problem:** We have `P` tasks (summing sub-lists) and `P` processors.
*   **Solution:** A straightforward mapping is to assign the `i`-th sub-list summation task to the `i`-th processor.

### Bringing it Together: A Pseudocode Sketch

Here's a conceptual outline of how a parallel sum might look using this methodology:

```pseudocode
// Assume N is the total number of elements, P is the number of processors
// Each processor 'my_rank' has access to the full list (or a portion)
// and knows 'P'

// --- Decomposition ---
start_index = (N / P) * my_rank
end_index = (N / P) * (my_rank + 1) - 1
if my_rank == P - 1: // Ensure the last processor handles any remainder
    end_index = N - 1

partial_sum = 0
for i from start_index to end_index:
    partial_sum += list[i]

// --- Communication (Reduction) ---
// Send partial_sum to processor 0 and receive other partial sums
// This is a simplified representation of a reduction operation
// In real-world libraries (like MPI), this is a built-in function

// Example with a conceptual 'reduce' function:
// reduce(partial_sum, global_sum, operation=SUM, root=0)

// If my_rank == 0:
//     global_sum = partial_sum
// else:
//     // receive partial_sum from my_rank and add to global_sum (done by reduce)

// --- Agglomeration ---
// In this example, no agglomeration was performed in Step 3.
// The tasks remained as individual sub-list sums.

// --- Mapping ---
// The mapping is implicit: task 'i' (summing sub-list i) is executed on processor 'i'.

// --- Final Result ---
// If my_rank == 0, global_sum now holds the total sum.
```

### Key Takeaways for Applying Foster's Methodology

*   **Think Decomposably:** Can the problem be broken into smaller, independent parts?
*   **Identify Communication Needs Early:** How will the parts talk to each other? What data needs to be exchanged?
*   **Consider Agglomeration for Efficiency:** If tasks are too fine-grained, can they be combined to reduce overhead?
*   **Map Logically:** How do the tasks fit onto the available hardware?

By systematically applying these steps, you can move from a sequential problem statement to a robust parallel design. Remember that the goal is not always to find the *most* parallel solution, but a *practical* and *efficient* one for your specific problem and target platform.

## Supports

- [[skills/programming/algorithms/parallel-algorithm/microskills/parallel-design-methodology-execution|Parallel Design Methodology Execution]]
