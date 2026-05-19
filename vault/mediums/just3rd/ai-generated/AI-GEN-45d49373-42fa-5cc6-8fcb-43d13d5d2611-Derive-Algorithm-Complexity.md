---
type: "medium"
title: "Deriving Algorithm Complexity"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/algorithms/algorithm-efficiency-analysis/microskills/derive-algorithm-complexity|Derive Algorithm Complexity]]"
---
# Deriving Algorithm Complexity

Understanding how an algorithm's resource usage scales with input size is crucial for building efficient software. This lesson focuses on how to analyze code or pseudocode to determine its Big O time and space complexity. This directly contributes to analyzing and comparing algorithm complexity, a key outcome in Algorithm Efficiency Analysis.

## What is Big O Notation?

Big O notation describes the upper bound of an algorithm's running time or memory usage as the input size ($n$) grows. It focuses on the dominant term and ignores constant factors, representing the "worst-case" scenario.

*   **Time Complexity:** How the execution time of an algorithm grows with the input size.
*   **Space Complexity:** How the memory usage of an algorithm grows with the input size.

## Analyzing Code for Complexity

We analyze code by looking at the fundamental operations and how many times they are executed in relation to the input size.

### Common Complexity Patterns:

*   **Constant Time, \(O(1)\):** The number of operations does not depend on the input size.
*   **Logarithmic Time, \(O(\log n)\):** The number of operations grows logarithmically, often seen in divide-and-conquer algorithms (e.g., binary search).
*   **Linear Time, \(O(n)\):** The number of operations grows linearly with the input size, typically involving a single loop through the input.
*   **Linearithmic Time, \(O(n \log n)\):** A common complexity for efficient sorting algorithms.
*   **Quadratic Time, \(O(n^2)\):** The number of operations grows quadratically, often involving nested loops over the input.
*   **Exponential Time, \(O(2^n)\):** The number of operations doubles with each addition to the input size; very inefficient for larger inputs.

### Step-by-Step Analysis:

1.  **Identify the Input:** Determine what represents the input size ($n$).
2.  **Count Basic Operations:** Analyze loops, recursive calls, and function calls.
3.  **Focus on Dominant Terms:** Ignore constant factors and lower-order terms.
4.  **Consider Worst-Case:** Assume the input that leads to the maximum number of operations.

## Practical Example: Finding the Maximum Element

Let's analyze the time complexity of finding the maximum element in an array.

**Pseudocode:**

```
function findMax(array):
  max_value = array[0]
  for i from 1 to length(array) - 1:
    if array[i] > max_value:
      max_value = array[i]
  return max_value
```

**Analysis:**

1.  **Input:** The input size is $n$, the length of the `array`.
2.  **Operations:**
    *   `max_value = array[0]` is a single operation.
    *   The `for` loop iterates $n-1$ times.
    *   Inside the loop, the `if` condition and potential assignment are constant time operations.
3.  **Dominant Term:** The loop executes roughly $n$ times.
4.  **Worst-Case:** The loop will always execute $n-1$ times regardless of the array's contents.

**Conclusion:** The time complexity is linear, \(O(n)\).

For **space complexity**, this function only uses a few variables (`max_value`, `i`), regardless of the input size. Thus, its space complexity is constant, \(O(1)\).

## Practice Task

Analyze the following pseudocode for its Big O time complexity. Assume `items` is a list of size $n$.

```
function process_items(items):
  for i from 0 to length(items) - 1:
    for j from 0 to length(items) - 1:
      print(items[i], items[j])
```

What is the Big O time complexity of `process_items`?

## Self-Check Questions

1.  What is the primary goal of Big O notation?
2.  If an algorithm has a time complexity of \(O(n^2)\), how would its execution time likely change if you doubled the input size?
3.  Consider a function that only performs a few arithmetic operations on fixed-size variables, without loops or recursion. What is its Big O time complexity?
4.  What is the difference between time complexity and space complexity?

## Supports

- [[skills/programming/algorithms/algorithm-efficiency-analysis/microskills/derive-algorithm-complexity|Derive Algorithm Complexity]]
