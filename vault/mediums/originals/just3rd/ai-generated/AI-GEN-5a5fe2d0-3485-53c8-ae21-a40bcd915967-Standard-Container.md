---
type: medium
title: Using Standard Containers in C++
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[standard-container|standard-container]]"
related-skills:
  - "[[skills/computing/programming/programming-languages/cpp-programming/cpp-programming|cpp-programming]]"
learning-time-in-minutes: 2
---
# Using Standard Containers in C++

To implement basic C++ programs, understanding how to store and manage collections of data is crucial. The C++ Standard Library provides powerful tools called *containers* that handle this for you. These are pre-built data structures that offer efficient ways to organize your data.

## What are Standard Containers?

Standard containers are classes that store objects. They abstract away the low-level details of memory management and organization, allowing you to focus on using the data. Common examples include `std::vector`, `std::list`, and `std::map`.

## `std::vector`: A Dynamic Array

`std::vector` is like a dynamic array. It stores elements contiguously in memory, which means it's very fast to access elements by their position (index). It can also grow or shrink as needed.

### Practical Example: Storing User Scores

Imagine you're creating a simple game and need to keep track of player scores.

```cpp
#include <iostream>
#include <vector>

int main() {
    // Declare a vector to store integers (scores)
    std::vector<int> scores;

    // Add some scores to the vector
    scores.push_back(150);
    scores.push_back(220);
    scores.push_back(90);

    // Access and print scores
    std::cout << "First score: " << scores[0] << std::endl; // Access by index
    std::cout << "All scores:" << std::endl;

    // Iterate through the vector
    for (int score : scores) {
        std::cout << score << std::endl;
    }

    // Get the number of scores
    std::cout << "Total scores: " << scores.size() << std::endl;

    return 0;
}
```

In this example, `scores.push_back()` adds elements to the end of the vector, and we can access them directly using their index `scores[0]`. The `for (int score : scores)` loop is a convenient way to iterate over all elements.

### Practice Task

Create a C++ program that uses `std::vector` to store a list of strings (e.g., names of fruits). Add at least three fruit names to the vector and then print each name to the console.

### Self-Check Questions

1.  What is the primary advantage of using `std::vector` for storing data?
2.  How do you add an element to the end of a `std::vector`?
3.  If you have a `std::vector` named `my_vector`, how would you print the element at the third position (index 2)?

## Supports

- [[standard-container|Standard Container]]
