---
type: "medium"
title: "Algorithm Category Identification"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/computer-science/algorithms/algorithms/microskills/algorithm-category-identification|algorithm-category-identification]]"
learning-time-in-minutes: 3
---
# Algorithm Category Identification

Understanding how algorithms are categorized helps us discuss and choose the right ones for specific tasks. This lesson focuses on identifying these broad categories.

## What are Algorithm Categories?

Algorithms can be grouped based on their fundamental approach or the problem they solve. For sorting algorithms, we often look at *how* they rearrange data. For searching algorithms, we consider *how* they find a specific item within a dataset. Knowing these categories allows us to recall their general properties without needing to remember every single algorithm.

### Common Categories

Here are some key categories you should be able to recognize:

*   **Sorting Algorithms:**
    *   **Comparison Sorts:** These algorithms sort data by comparing pairs of elements. Examples include Bubble Sort, Insertion Sort, Merge Sort, and Quick Sort.
    *   **Non-Comparison Sorts:** These algorithms sort data without directly comparing elements. They often rely on properties of the data itself, like the range of values. Examples include Counting Sort and Radix Sort.

*   **Searching Algorithms:**
    *   **Linear Search:** Examines each element in a list sequentially until a match is found or the list ends.
    *   **Binary Search:** Efficiently searches a *sorted* list by repeatedly dividing the search interval in half.

## Practical Scenario

Imagine you have a large list of customer IDs, and you need to find a specific customer's record.

*   If the customer IDs are **unsorted**, you might initially think of a **Linear Search** to go through each one. However, this would be very slow for a large list.
*    If the customer IDs were **sorted**, you would immediately think of **Binary Search** as a much faster option.

Now, consider another task: organizing a list of student scores from lowest to highest.

*   You could use a **Comparison Sort** like **Bubble Sort** (though inefficient for large lists) or **Merge Sort** (more efficient).
*   If you knew the scores were within a very specific, small range (e.g., 0-100), a **Non-Comparison Sort** like **Counting Sort** might be even faster for this specific sorting task.

## Practice Task

Review the following algorithm names and assign them to their primary category.

1.  Merge Sort
2.  Linear Search
3.  Quick Sort
4.  Binary Search
5.  Counting Sort

## Self-Check Questions

1.  Which type of sorting algorithm relies on comparing elements against each other?
2.  What is the key requirement for Binary Search to work effectively?
3.  If an algorithm sorts numbers by looking at their digits (ones place, tens place, etc.), what category of sorting algorithm is it likely to be?
4.  You have a very large, unsorted list of items. Which searching algorithm category is *not* a good choice for finding an item quickly?

## Supports

- [[skills/computing/computer-science/algorithms/algorithms/microskills/algorithm-category-identification|Algorithm Category Identification]]
