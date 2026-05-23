---
type: "medium"
title: "Understanding Big O Notation"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/computer-science/data-structures/data-structure-principles/microskills/big-o-notation-principles|big-o-notation-principles]]"
learning-time-in-minutes: 4
---
# Understanding Big O Notation

Big O notation is a way to describe how the runtime or memory usage of an algorithm scales as the input size grows. It helps us understand the efficiency of different algorithms, especially when dealing with large datasets. Think of it as a standardized way to categorize algorithms based on their performance characteristics.

### Why Does It Matter?

When you're building software, efficiency is crucial. An algorithm that works perfectly on a small dataset might become unacceptably slow or consume too much memory when that dataset grows. Big O notation gives us a common language to discuss and compare these scaling behaviors.

### Core Principles

Big O focuses on the **worst-case scenario** and the **dominant term** as the input size (often represented by \(n\)) approaches infinity. We ignore constant factors and lower-order terms because, as \(n\) gets very large, they have a negligible impact on the overall growth rate.

Here are some common Big O complexities, from most efficient to least efficient:

*   **O(1) - Constant Time:** The time taken is independent of the input size.
    *   *Example:* Accessing an element in an array by its index. No matter how big the array, retrieving `array[5]` takes the same amount of time.

*   **O(log n) - Logarithmic Time:** The time taken increases logarithmically with the input size. This is very efficient, meaning doubling the input size only adds a small, constant amount of work.
    *   *Example:* Binary search. Each step halves the search space.

*   **O(n) - Linear Time:** The time taken increases directly with the input size. Doubling the input size roughly doubles the time taken.
    *   *Example:* Iterating through a list or array once to find a specific element.

*   **O(n log n) - Linearithmic Time:** A common complexity for efficient sorting algorithms. Better than quadratic but worse than linear.
    *   *Example:* Merge Sort, Quick Sort (average case).

*   **O(n^2) - Quadratic Time:** The time taken increases with the square of the input size. Doubling the input size quadruples the time.
    *   *Example:* Nested loops where each loop iterates over the input size. A bubble sort algorithm often falls into this category.

*   **O(2^n) - Exponential Time:** The time taken doubles with each addition to the input size. These algorithms become impractical very quickly for even moderately sized inputs.
    *   *Example:* Some brute-force algorithms, like finding all possible subsets of a set.

### Practical Example: Searching for a Name

Imagine you have a list of names and you need to find a specific one.

**Scenario 1: Unsorted List**

If the list is unsorted, in the worst case, you might have to check every single name.

```
names = ["Alice", "Bob", "Charlie", "David", "Eve"]
search_name = "David"

# Pseudocode for searching
found = False
for name in names:
  if name == search_name:
    found = True
    break
```

In this case, if the name is at the end or not present, you check all \(n\) names. This is **O(n)**.

**Scenario 2: Sorted List with Binary Search**

If the list is sorted, you can use binary search, which is much faster.

```
sorted_names = ["Alice", "Bob", "Charlie", "David", "Eve"]
search_name = "David"

# Pseudocode for binary search
low = 0
high = len(sorted_names) - 1

while low <= high:
  mid = (low + high) // 2
  if sorted_names[mid] == search_name:
    # Found
    break
  elif sorted_names[mid] < search_name:
    low = mid + 1
  else:
    high = mid - 1
```

With binary search, you repeatedly divide the search interval in half. For a list of 100 names, you'd need at most about 7 comparisons. For 1000 names, about 10 comparisons. This is **O(log n)**.

Comparing O(n) and O(log n), it's clear that O(log n) scales much better as the list grows.

### Practice Task

Consider the following pseudocode for finding the sum of all elements in a 2D array (matrix).

```pseudocode
function sum_matrix(matrix):
  total_sum = 0
  rows = number of rows in matrix
  columns = number of columns in matrix

  for i from 0 to rows - 1:
    for j from 0 to columns - 1:
      total_sum = total_sum + matrix[i][j]

  return total_sum
```

What is the Big O notation for this `sum_matrix` function if the matrix has \(R\) rows and \(C\) columns? Explain your reasoning.

### Self-Check Questions

1.  What is the primary goal of Big O notation?
2.  Which Big O complexity represents an algorithm whose runtime is not affected by the input size?
3.  If an algorithm has a complexity of O(n^2), and you double the input size, how much would you expect the runtime to increase (approximately)?
4.  Why do we ignore constant factors and lower-order terms when determining Big O complexity?

## Supports

- [[skills/computing/computer-science/data-structures/data-structure-principles/microskills/big-o-notation-principles|Big O Notation Principles]]
