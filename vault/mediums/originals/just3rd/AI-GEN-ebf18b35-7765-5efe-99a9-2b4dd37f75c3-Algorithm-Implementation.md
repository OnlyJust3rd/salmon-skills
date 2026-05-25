---
type: "medium"
title: "Algorithm Implementation: Translating Logic to Code"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/computer-science/algorithms/algorithmic-thinking/microskills/algorithm-implementation|algorithm-implementation]]"
related-skills:
  - "[[skills/computing/computer-science/algorithms/algorithmic-thinking/algorithmic-thinking|algorithmic-thinking]]"
learning-time-in-minutes: 2
---
# Algorithm Implementation: Translating Logic to Code

You've understood an algorithm and how it solves a problem. Now, it's time to bring that logic to life by writing code. This means translating the steps of an algorithm into a programming language that a computer can understand and execute.

This skill is crucial for implementing algorithms to solve real-world problems. It bridges the gap between theoretical understanding and practical application.

### Practical Example: Linear Search in Python

Let's say we have a list of numbers and we want to find if a specific number exists within that list. A simple algorithm for this is **Linear Search**.

**Algorithm Logic:**
1. Start at the beginning of the list.
2. Compare the current item with the target number.
3. If they match, you've found the number, and you can stop.
4. If they don't match, move to the next item in the list.
5. Repeat steps 2-4 until you reach the end of the list.
6. If you reach the end without finding the number, it's not in the list.

**Python Implementation:**

```python
def linear_search(data_list, target):
    """
    Implements the linear search algorithm to find a target value in a list.

    Args:
        data_list: The list of items to search within.
        target: The value to search for.

    Returns:
        The index of the target if found, otherwise -1.
    """
    for index in range(len(data_list)):
        if data_list[index] == target:
            return index  # Target found, return its index
    return -1  # Target not found after checking the whole list

# Example usage:
my_numbers = [10, 25, 8, 42, 15, 30]
search_value = 42
not_present_value = 99

index_found = linear_search(my_numbers, search_value)
index_not_found = linear_search(my_numbers, not_present_value)

print(f"Searching for {search_value}: Index is {index_found}")
print(f"Searching for {not_present_value}: Index is {index_not_found}")
```

In this code:
- The `linear_search` function takes a `data_list` and a `target` value.
- It iterates through each `index` of the `data_list` using `range(len(data_list))`.
- The `if data_list[index] == target:` line directly translates the comparison step of the algorithm.
- `return index` or `return -1` handles the exit conditions (found or not found).

### Practice Task

Imagine you have a list of student scores, and you need to find the score of a specific student based on their position (index) in the list. Implement a Python function called `get_score_by_index` that takes a list of scores and an index, and returns the score at that index. If the index is out of bounds (e.g., negative or larger than the list size), return a message like "Invalid index".

**Hint:** You'll need to check the validity of the index before accessing the list element.

### Self-Check Questions

1.  What is the primary purpose of implementing an algorithm in code?
2.  In the `linear_search` example, which part of the code directly corresponds to the "compare the current item with the target number" step of the algorithm?
3.  What would happen if you tried to access an index that doesn't exist in a Python list without checking for it first?
4.  How does the `return` statement help in translating the "stop when found" or "stop when not found" logic of an algorithm?

## Supports

- [[skills/computing/computer-science/algorithms/algorithmic-thinking/microskills/algorithm-implementation|Algorithm Implementation]]
- [[skills/computing/computer-science/algorithms/algorithms/microskills/algorithm-implementation|Algorithm Implementation]]
