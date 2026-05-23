---
type: medium
title: "C Structs and Pointers: Building Blocks for Linked Structures"
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[c-structs-and-pointers|c-structs-and-pointers]]"
learning-time-in-minutes: 2
---
# C Structs and Pointers: Building Blocks for Linked Structures

In C programming, when we talk about implementing data structures beyond simple arrays, `struct` and pointers become our best friends. They allow us to create flexible, dynamic data arrangements. This lesson focuses on how to apply these concepts to build foundational linked data structures.

## The Power of Structs and Pointers

A `struct` in C is a user-defined data type that allows you to group together variables of different data types under a single name. This is perfect for representing individual elements within a data structure, like a node in a linked list.

Pointers, on the other hand, are variables that store the memory address of another variable. When used with structs, pointers enable us to link these struct instances together, creating chains of data. This is the core idea behind linked lists, where each element (node) points to the next one.

## Practical Application: A Simple Linked List Node

Let's imagine we're building a linked list to store a sequence of integers. Each item in our list will be a "node." A node needs to hold two things: the data itself and a way to point to the *next* node in the sequence.

```c
#include <stdio.h>
#include <stdlib.h> // For malloc and free

// Define the structure for a node
struct Node {
    int data;            // The data the node will hold
    struct Node *next;   // A pointer to the next node in the list
};

int main() {
    // Create the first node
    struct Node *head = (struct Node *)malloc(sizeof(struct Node));
    if (head == NULL) {
        printf("Memory allocation failed!\n");
        return 1; // Indicate an error
    }
    head->data = 10;
    head->next = NULL; // Initially, it doesn't point to anything

    // Create a second node
    struct Node *secondNode = (struct Node *)malloc(sizeof(struct Node));
    if (secondNode == NULL) {
        printf("Memory allocation failed!\n");
        free(head); // Free previously allocated memory
        return 1;
    }
    secondNode->data = 20;
    secondNode->next = NULL;

    // Link the first node to the second node
    head->next = secondNode;

    // Now, head points to a list containing 10 -> 20

    // Accessing data:
    printf("First node data: %d\n", head->data);
    printf("Second node data: %d\n", head->next->data); // Using pointer to access second node's data

    // Remember to free allocated memory when done to prevent memory leaks
    free(head);
    free(secondNode);

    return 0;
}
```

In this example:
*   `struct Node` defines the blueprint for our nodes.
*   `struct Node *next;` is the crucial pointer. It's a pointer to *another* `struct Node`. This is how we create the chain.
*   `malloc(sizeof(struct Node))` dynamically allocates memory for a new node.
*   `head->next = secondNode;` establishes the link.

## Practice Task

1.  Modify the `main` function above to create a third node with data `30`.
2.  Link the `secondNode` to this new third node.
3.  Add a `printf` statement to display the data of the third node by traversing through the `head` pointer.
4.  Ensure you `free` the memory for the third node as well.

## Self-Check Questions

1.  What is the primary purpose of a `struct` in this context?
2.  How does a pointer enable the creation of linked structures?
3.  Why is it important to use `malloc` and `free` when working with dynamically allocated memory for structs?
4.  What would happen if you forgot to initialize `head->next` to `NULL` for the first node created?

## Supports

- [[c-structs-and-pointers|C Structs and Pointers]]
