---
type: "medium"
title: "Applying Merge Sort in Practice"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/computer-science/algorithms/algorithms/microskills/sorting-algorithm-application|sorting-algorithm-application]]"
learning-time-in-minutes: 2
---
# Applying Merge Sort in Practice

Merge Sort is a powerful sorting algorithm known for its efficiency, especially with larger datasets. Its core principle is "divide and conquer": break the problem down into smaller, manageable parts, solve them, and then combine the solutions.

### Why Use Merge Sort?

Merge Sort consistently performs sorting in \(O(n \log n)\) time complexity, making it a reliable choice when predictable performance is crucial, unlike some other algorithms that can degrade to \(O(n^2)\) in worst-case scenarios. It's also a *stable* sort, meaning that elements with equal keys maintain their relative order in the sorted output.

### Practical Scenario: Organizing Customer Records

Imagine you have a list of customer records, each with a unique ID. You need to sort these records by their ID to efficiently look up specific customers or process them in order. Merge Sort is an excellent algorithm for this task.

### Implementing Merge Sort in Python

Here's how you can apply Merge Sort to sort a list of customer IDs.

```python
def merge_sort(arr):
    if len(arr) <= 1:
        return arr

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

    # Compare elements from both halves and add the smaller one to merged list
    while left_index < len(left) and right_index < len(right):
        if left[left_index] < right[right_index]:
            merged.append(left[left_index])
            left_index += 1
        else:
            merged.append(right[right_index])
            right_index += 1

    # Append any remaining elements from left or right halves
    while left_index < len(left):
        merged.append(left[left_index])
        left_index += 1
    while right_index < len(right):
        merged.append(right[right_index])
        right_index += 1

    return merged

# Example usage with customer IDs
customer_ids = [101, 55, 23, 89, 12, 78, 3, 100]
sorted_customer_ids = merge_sort(customer_ids)
print(f"Original IDs: {customer_ids}")
print(f"Sorted IDs: {sorted_customer_ids}")
```

**How it works:**

1.  **Divide:** The `merge_sort` function repeatedly splits the list until each sublist contains only one element (which is inherently sorted).
2.  **Conquer:** The `merge` function then takes these single-element lists and merges them back together in sorted order. It compares elements from the two input lists and picks the smaller one to add to the new, merged list.
3.  **Combine:** This merging process continues until the entire list is sorted.

### Practice Task

1.  Take the following unsorted list of product prices: `[19.99, 5.50, 100.00, 2.75, 45.00, 8.99]`.
2.  Manually trace the `merge_sort` and `merge` functions for this list, or implement the Python code and run it.
3.  Present the original and sorted lists.

### Self-Check Questions

1.  What is the time complexity of Merge Sort?
2.  Why is Merge Sort considered a stable sorting algorithm?
3.  In the `merge` function, what happens if an element in the `left` list is equal to an element in the `right` list?

## Supports

- [[skills/computing/computer-science/algorithms/algorithms/microskills/sorting-algorithm-application|Sorting Algorithm Application]]
