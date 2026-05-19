---
type: "medium"
title: "Understanding Space Complexity with Big O"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/algorithms/algorithm-efficiency-analysis/microskills/space-complexity-analysis|Space Complexity Analysis]]"
  - "[[skills/programming/algorithms/computational-complexity-analysis/microskills/space-complexity-analysis|Space Complexity Analysis]]"
---
# Understanding Space Complexity with Big O

When we analyze algorithms, we often focus on how much time they take to run. However, algorithms also use memory, or *space*. Understanding how much memory an algorithm needs, especially as the input size grows, is crucial. This is where **space complexity** comes in, and we use Big O notation to describe it, just like with time complexity.

## What is Space Complexity?

Space complexity measures the total amount of computer memory an algorithm needs to run its course. This includes:

*   **Input Space:** The space taken by the input data itself.
*   **Auxiliary Space:** The extra space used by the algorithm during its execution. This is often what we focus on when analyzing an algorithm's space efficiency, as the input space is usually fixed by the problem.

Big O notation helps us express how this memory usage scales with the size of the input.

## Common Space Complexities

Let's look at some common Big O notations for space complexity:

*   **\(O(1)\) - Constant Space:** The algorithm uses a fixed amount of memory, regardless of the input size.
*   **\(O(\log n)\) - Logarithmic Space:** The memory usage grows logarithmically with the input size. This is very efficient.
*   **\(O(n)\) - Linear Space:** The memory usage grows directly in proportion to the input size.
*   **\(O(n^2)\) - Quadratic Space:** The memory usage grows with the square of the input size. This can quickly become very memory-intensive.

## Practical Example: Storing Data

Imagine you have a list of `n` numbers.

**Scenario 1: Summing the Numbers**

If you just need to calculate the sum of these numbers, you might use a single variable to store the running total.

```python
def sum_list(numbers):
  total = 0 # This is a single variable
  for number in numbers:
    total += number
  return total
```

In this case, the `total` variable takes up a constant amount of space, regardless of how many numbers are in the `numbers` list. The space complexity is **\(O(1)\)**.

**Scenario 2: Reversing the List**

Now, suppose you want to create a *new* list that is the reverse of the original list.

```python
def reverse_list(numbers):
  reversed_numbers = [] # A new list is created
  for i in range(len(numbers) - 1, -1, -1):
    reversed_numbers.append(numbers[i])
  return reversed_numbers
```

Here, you are creating a `reversed_numbers` list. If the original list has `n` elements, the new list will also have `n` elements. The amount of memory used by `reversed_numbers` grows directly with `n`. Therefore, the space complexity is **\(O(n)\)**.

## Practice Task

Consider the following Python function that finds the maximum element in a list. What is its space complexity? Explain your reasoning.

```python
def find_max(numbers):
  if not numbers:
    return None
  max_val = numbers[0] # Initialize with the first element
  for number in numbers:
    if number > max_val:
      max_val = number
  return max_val
```

## Self-Check Questions

1.  What is the primary difference between input space and auxiliary space in space complexity?
2.  If an algorithm uses a fixed number of variables, what is its typical space complexity?
3.  When might an algorithm have a space complexity of \(O(n)\)? Provide a brief example scenario.

## Supports

- [[skills/programming/algorithms/algorithm-efficiency-analysis/microskills/space-complexity-analysis|Space Complexity Analysis]]
- [[skills/programming/algorithms/computational-complexity-analysis/microskills/space-complexity-analysis|Space Complexity Analysis]]
