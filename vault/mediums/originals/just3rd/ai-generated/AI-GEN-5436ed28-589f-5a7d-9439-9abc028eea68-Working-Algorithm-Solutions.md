---
type: "medium"
title: "Implementing a Simple Search Algorithm"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/computer-science/algorithms/algorithms/microskills/working-algorithm-solutions|working-algorithm-solutions]]"
related-skills:
  - "[[skills/computing/computer-science/algorithms/algorithms/algorithms|algorithms]]"
learning-time-in-minutes: 2
---
# Implementing a Simple Search Algorithm

This lesson focuses on taking an algorithm and translating it into working code that can solve a problem. We'll use a common scenario: finding an item in a list. This requires us to **apply** our understanding of algorithms to **implement** a solution.

## What is a Working Algorithm Solution?

An algorithm is a set of instructions. A working algorithm solution means you've written actual code (in a programming language) that follows those instructions and correctly performs the task the algorithm was designed for. This code should be executable and produce the expected output.

## Practical Example: Finding a Book in a Digital Library

Imagine you have a digital library where books are stored in a list, sorted alphabetically by title. You want to find a specific book. A simple approach is to go through the list one by one until you find it. This is the "Linear Search" algorithm.

Let's say your library has the following book titles:

*   "The Hitchhiker's Guide to the Galaxy"
*   "Pride and Prejudice"
*   "1984"
*   "To Kill a Mockingbird"
*   "Brave New World"

You are looking for "1984".

Here's how we can implement this in Python:

```python
def linear_search(book_list, target_book):
  """
  Searches for a target book in a list of books using linear search.

  Args:
    book_list: A list of book titles (strings).
    target_book: The book title to search for (string).

  Returns:
    The index of the target book if found, otherwise -1.
  """
  for index, book in enumerate(book_list):
    if book == target_book:
      return index  # Found the book, return its position
  return -1  # Book not found after checking the entire list

# Our digital library
library_books = [
    "The Hitchhiker's Guide to the Galaxy",
    "Pride and Prejudice",
    "1984",
    "To Kill a Mockingbird",
    "Brave New World"
]

# The book we want to find
book_to_find = "1984"

# Execute the search
found_index = linear_search(library_books, book_to_find)

if found_index != -1:
  print(f"'{book_to_find}' found at index: {found_index}")
else:
  print(f"'{book_to_find}' not found in the library.")

# Let's try searching for a book that isn't there
book_not_in_library = "Moby Dick"
found_index_not_found = linear_search(library_books, book_not_in_library)

if found_index_not_found != -1:
  print(f"'{book_not_in_library}' found at index: {found_index_not_found}")
else:
  print(f"'{book_not_in_library}' not found in the library.")
```

In this code:
*   `linear_search` is our function that implements the algorithm.
*   `book_list` is the input data (our library).
*   `target_book` is the item we're looking for.
*   `enumerate` helps us get both the index and the item as we loop.
*   The `if book == target_book:` condition checks if we've found our target.
*   If found, we `return index`. If the loop finishes without finding it, we `return -1`.

## Practice Task

Implement the same linear search algorithm in a programming language of your choice (e.g., JavaScript, Java, C++).

Your implementation should:
1.  Take an array (or list) of numbers and a target number as input.
2.  Return the index of the target number if it exists in the array.
3.  Return -1 if the target number is not found.

Test your implementation with a sample array and a few different target numbers, including ones that are present and ones that are absent.

## Self-Check Questions

1.  What does the `enumerate()` function do in the Python example?
2.  What is the purpose of returning `-1` in the `linear_search` function?
3.  If you had a very large library, would linear search be the most efficient way to find a book? Why or why not?

## Supports

- [[skills/computing/computer-science/algorithms/algorithms/microskills/working-algorithm-solutions|Working Algorithm Solutions]]
