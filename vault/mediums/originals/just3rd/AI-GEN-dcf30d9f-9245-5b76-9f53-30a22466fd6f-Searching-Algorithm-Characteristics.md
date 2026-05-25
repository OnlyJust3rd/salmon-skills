---
type: "medium"
title: "Searching Algorithm Characteristics"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/computer-science/algorithms/algorithms/microskills/searching-algorithm-characteristics|searching-algorithm-characteristics]]"
related-skills:
  - "[[skills/computing/computer-science/algorithms/algorithms/algorithms|algorithms]]"
learning-time-in-minutes: 3
---
# Searching Algorithm Characteristics

Understanding how to search for information efficiently is a fundamental skill in computer science. Searching algorithms are designed to find a specific element (or elements) within a data structure. Different algorithms have distinct characteristics that make them suitable for different situations.

### What are Searching Algorithms?

At their core, searching algorithms are procedures that check for the presence of a specific value within a collection of data. They can be categorized based on how they traverse the data and the assumptions they make about the data's organization.

### Key Characteristics

When we talk about the characteristics of searching algorithms, we often consider:

*   **How they operate:** Do they look at every item one by one, or do they use a more clever approach?
*   **Data requirements:** Do they need the data to be sorted, or can they work with unsorted data?
*   **Efficiency:** How fast are they, especially as the amount of data grows? This is often described using Big O notation.

### Practical Example: Finding a Word in a Dictionary

Imagine you have a physical dictionary.

*   **Linear Search:** If you were to open the dictionary at the first page and read every single word until you found "algorithm," that would be like a **linear search**. It works, but it can be slow if the word is near the end. This method doesn't require the dictionary to be sorted (though dictionaries are).

*   **Binary Search:** A more efficient way is to open the dictionary roughly in the middle. If the word you're looking for comes alphabetically *after* the words on that page, you know you only need to search the second half. If it comes *before*, you search the first half. You repeat this process, narrowing down the search space each time. This is similar to a **binary search**, which requires the data (the words in the dictionary) to be sorted alphabetically.

### Practice Task

Think about the following scenarios and identify which searching algorithm characteristic is most relevant:

1.  You need to find a specific customer's record in a database that is **not** sorted by customer name.
2.  You need to find a specific book on a library shelf where the books are arranged alphabetically by title.
3.  You are looking for a single phone number in a phone book where names are listed alphabetically.

### Self-Check Questions

1.  What is the primary goal of a searching algorithm?
2.  What is a key difference between linear search and binary search in terms of data organization?
3.  If data is not sorted, which type of search is generally more appropriate to start with?

## Supports

- [[skills/computing/computer-science/algorithms/algorithms/microskills/searching-algorithm-characteristics|Searching Algorithm Characteristics]]
