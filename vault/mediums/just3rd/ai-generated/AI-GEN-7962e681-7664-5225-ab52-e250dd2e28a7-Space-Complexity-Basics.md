---
type: "medium"
title: "Understanding Space Complexity: How Much Memory Does Your Program Use?"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/algorithms/computational-complexity-analysis/microskills/space-complexity-basics|Space Complexity Basics]]"
---
# Understanding Space Complexity: How Much Memory Does Your Program Use?

In the world of computer science, we often think about how fast a program runs (time complexity). Equally important is how much memory (space complexity) it uses. This lesson focuses on understanding the basics of space complexity.

## What is Space Complexity?

Space complexity measures the amount of memory an algorithm needs to run as a function of the size of its input. Think of it like packing for a trip: how much suitcase space do you need depending on how long your trip is?

We usually analyze space complexity in terms of **auxiliary space** (extra memory used by the algorithm) and **input space** (memory used to store the input itself). For simplicity, we often focus on auxiliary space, as the input space is usually given.

## Why Does Space Complexity Matter?

While memory is generally cheaper than it used to be, it's not infinite. Large programs or programs running on devices with limited memory (like mobile phones or embedded systems) can run into problems if their space complexity is too high. A program that uses an excessive amount of memory might crash or become very slow due to the system struggling to manage it.

## Practical Scenario: Storing User Data

Imagine you're building a social media application. You need to store information about each user, such as their username, profile picture URL, and a list of their friends.

Let's say you have a function that processes a list of users.

Consider this simple Python example:

```python
def process_user_list(users):
    # This list will store the usernames of all users
    usernames = []
    for user in users:
        usernames.append(user['username'])
    return usernames

# Example usage:
all_users = [
    {'username': 'alice', 'id': 101},
    {'username': 'bob', 'id': 102},
    {'username': 'charlie', 'id': 103}
]

processed_names = process_user_list(all_users)
print(processed_names)
```

In this `process_user_list` function, what is the space complexity?

The input `users` is a list. However, the **auxiliary space** is created by the `usernames` list. If the input `users` list contains `n` users, the `usernames` list will also grow to store `n` usernames. Therefore, the space required by the `usernames` list grows linearly with the number of users.

We would say the space complexity of this function is **O(n)**, meaning the memory usage grows proportionally to the number of users (`n`).

## Practice Task

Consider the following Python function that takes a list of numbers and returns a new list containing only the even numbers.

```python
def get_even_numbers(numbers):
    even_list = []
    for num in numbers:
        if num % 2 == 0:
            even_list.append(num)
    return even_list

my_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_numbers_only = get_even_numbers(my_numbers)
print(even_numbers_only)
```

What is the auxiliary space complexity of the `get_even_numbers` function? Assume the input list `numbers` has `n` elements.

## Self-Check Questions

1.  What is space complexity primarily concerned with?
2.  If an algorithm uses a fixed amount of extra memory regardless of the input size, what would its auxiliary space complexity be? (Hint: Think about constant values).
3.  In the `process_user_list` example, what part of the memory usage are we focusing on when we say the space complexity is O(n)?

## Supports

- [[skills/programming/algorithms/computational-complexity-analysis/microskills/space-complexity-basics|Space Complexity Basics]]
