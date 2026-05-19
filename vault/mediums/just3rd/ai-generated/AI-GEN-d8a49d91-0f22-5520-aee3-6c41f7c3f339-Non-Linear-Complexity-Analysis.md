---
type: "medium"
title: "Distinguishing Non-Linear Algorithmic Complexities: \\(O(\\log n)\\), \\(O(n \\log n)\\), and \\(O(n^2)\\)"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/algorithms/computational-complexity-analysis/microskills/non-linear-complexity-analysis|Non-Linear Complexity Analysis]]"
---
# Distinguishing Non-Linear Algorithmic Complexities: \(O(\log n)\), \(O(n \log n)\), and \(O(n^2)\)

Understanding how an algorithm's runtime scales with input size is crucial for building efficient software. This lesson focuses on differentiating between common non-linear time complexities: logarithmic (\(O(\log n)\)), linearithmic (\(O(n \log n)\)), and quadratic (\(O(n^2)\)).

## The Core Idea: How Operations Grow

These notations describe the **upper bound** of an algorithm's execution time as the input size (\(n\)) increases. Instead of counting exact operations, we focus on the dominant term that dictates the growth rate.

*   **\(O(\log n)\) (Logarithmic):** The number of operations grows very slowly as \(n\) increases. Each step effectively halves the problem size. This is incredibly efficient for large datasets.
*   **\(O(n \log n)\) (Linearithmic):** A good balance between linear and quadratic. It's common in efficient sorting algorithms. The operations grow a bit faster than linear, but much slower than quadratic.
*   **\(O(n^2)\) (Quadratic):** The number of operations grows significantly as \(n\) increases. For every element, the algorithm performs operations proportional to the total number of elements. This can become very slow for large inputs.

## Practical Examples and Scenarios

Let's see how these apply in real-world algorithms.

### \(O(\log n)\): Binary Search

Imagine searching for a word in a dictionary. You don't start from "aardvark" and check every word. You open the dictionary roughly in the middle, see if your word comes before or after that page, and then repeat the process on the relevant half.

**Scenario:** Searching for a specific customer ID in a sorted list of millions of customer IDs.

```python
def binary_search(sorted_list, target):
    low = 0
    high = len(sorted_list) - 1
    while low <= high:
        mid = (low + high) // 2
        if sorted_list[mid] == target:
            return mid
        elif sorted_list[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1 # Not found
```

In `binary_search`, each comparison cuts the search space in half. If you have \(n\) items, you'll need approximately \(\log_2 n\) steps to find the item.

### \(O(n \log n)\): Merge Sort

Merge sort works by dividing a list into halves, recursively sorting each half, and then merging the sorted halves back together. The "divide" step is logarithmic, and the "merge" step for each level is linear across all elements.

**Scenario:** Sorting a large dataset of employee records by hire date. Many efficient sorting algorithms like Merge Sort, Quick Sort (average case), and Heap Sort exhibit this complexity.

**Conceptual Example:**
1.  Divide the array: \(n\) elements \(\rightarrow\) \(n/2\) and \(n/2\)
2.  Recursively sort each half: \(O(\log n)\) levels of recursion.
3.  Merge sorted halves: At each level, merging all elements takes \(O(n)\) time.

Total time: \(O(n) \times O(\log n) = O(n \log n)\).

### \(O(n^2)\): Bubble Sort or Nested Loops for Pairwise Comparisons

Bubble sort is a classic example. It repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. This process is repeated until the list is sorted.

**Scenario:** Comparing every student's grade against every other student's grade to find out which pairs have a difference of less than 5 points.

```python
def find_close_grades(grades):
    n = len(grades)
    for i in range(n):
        for j in range(i + 1, n): # Compare each element with every other element after it
            if abs(grades[i] - grades[j]) < 5:
                print(f"Grades {grades[i]} and {grades[j]} are close.")
```

In this `find_close_grades` example, the outer loop runs \(n\) times, and the inner loop runs approximately \(n/2\) times on average for each iteration of the outer loop. This results in \(n \times n/2\) operations, which simplifies to \(O(n^2)\).

## Practice Task

Consider the following pseudocode snippets. For each, determine if its time complexity is likely \(O(\log n)\), \(O(n \log n)\), or \(O(n^2)\).

1.  A function that iterates through an array, and for each element, it iterates through the *entire remaining portion* of the array.
2.  A function that halves the search space of a problem in each step.
3.  A sorting algorithm that divides the input into two halves, recursively sorts each half, and then combines the results efficiently.

## Self-Check Questions

1.  If an algorithm has a time complexity of \(O(\log n)\), how would its runtime change if you doubled the input size (\(n\))?
2.  When would you prefer an \(O(n \log n)\) algorithm over an \(O(n^2)\) algorithm?
3.  What is the key characteristic of an algorithm that leads to \(O(n^2)\) complexity in terms of its operations?

## Supports

- [[skills/programming/algorithms/computational-complexity-analysis/microskills/non-linear-complexity-analysis|Non-Linear Complexity Analysis]]
