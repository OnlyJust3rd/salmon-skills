---
type: "medium"
title: "Implementing Merge Sort in Code"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/computer-science/algorithms/algorithms/microskills/merge-sort-implementation|merge-sort-implementation]]"
learning-time-in-minutes: 2
---
# Implementing Merge Sort in Code

Merge Sort is a classic sorting algorithm that follows the **divide and conquer** strategy. It's known for its efficiency, particularly with large datasets, as it consistently performs in \(O(n \log n)\) time complexity. This lesson focuses on practically implementing Merge Sort in code.

### Core Idea: Divide and Conquer

Merge Sort works by:

1.  **Divide:** Recursively dividing the unsorted list into smaller sublists until each sublist contains only one element (which is inherently sorted).
2.  **Conquer:** Merging these sublists back together in a sorted manner.

The key to Merge Sort lies in the **merge** step, where two already sorted sublists are combined into a single sorted list.

### Practical Implementation (Python Example)

Let's implement Merge Sort in Python.

```python
def merge_sort(arr):
    if len(arr) <= 1:
        return arr  # Base case: a list with 0 or 1 element is already sorted

    # Divide the list into two halves
    mid = len(arr) // 2
    left_half = arr[:mid]
    right_half = arr[mid:]

    # Recursively sort both halves
    left_half = merge_sort(left_half)
    right_half = merge_sort(right_half)

    # Merge the sorted halves
    return merge(left_half, right_half)

def merge(left, right):
    merged = []
    left_index = 0
    right_index = 0

    # Compare elements from both lists and add the smaller one to the merged list
    while left_index < len(left) and right_index < len(right):
        if left[left_index] <= right[right_index]:
            merged.append(left[left_index])
            left_index += 1
        else:
            merged.append(right[right_index])
            right_index += 1

    # Add any remaining elements from the left list
    while left_index < len(left):
        merged.append(left[left_index])
        left_index += 1

    # Add any remaining elements from the right list
    while right_index < len(right):
        merged.append(right[right_index])
        right_index += 1

    return merged

# Example Usage
my_list = [38, 27, 43, 3, 9, 82, 10]
sorted_list = merge_sort(my_list)
print(f"Original list: {my_list}")
print(f"Sorted list: {sorted_list}")
```

**How it works:**

*   The `merge_sort` function handles the recursive division. The base case stops the recursion when a sublist is small enough.
*   The `merge` function is the heart of the algorithm. It takes two sorted lists (`left` and `right`) and iterates through them, picking the smaller element to add to the `merged` list. It continues until one of the lists is exhausted, then appends any remaining elements from the other list.

### Practice Task

Implement the `merge_sort` function in your preferred programming language. Test it with the following list: `[5, 1, 4, 2, 8, 0, 6]`.

### Self-Check Questions

1.  What is the time complexity of Merge Sort?
2.  Describe the "divide" step in Merge Sort.
3.  What is the role of the `merge` function?
4.  When does the recursion in `merge_sort` stop?

## Supports

- [[skills/computing/computer-science/algorithms/algorithms/microskills/merge-sort-implementation|Merge Sort Implementation]]
