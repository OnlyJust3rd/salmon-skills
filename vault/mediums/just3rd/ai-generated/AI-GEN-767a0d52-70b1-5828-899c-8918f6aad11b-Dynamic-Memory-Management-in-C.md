---
type: "medium"
title: "Dynamic Memory Management in C: `malloc` and `free`"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/c-programming/microskills/dynamic-memory-management-in-c|Dynamic Memory Management in C]]"
---
# Dynamic Memory Management in C: `malloc` and `free`

When building data structures like linked lists, stacks, and queues in C, we often don't know the exact size needed at compile time. This is where dynamic memory management comes in. We'll focus on the two core functions: `malloc` (memory allocation) and `free` (memory deallocation).

## The Core Idea

*   **`malloc(size_t size)`**: This function allocates a block of memory of the specified `size` (in bytes) from the heap. It returns a pointer to the beginning of the allocated block. If allocation fails (e.g., not enough memory), it returns `NULL`.
*   **`free(void *ptr)`**: This function deallocates the memory block pointed to by `ptr`. This memory is then returned to the system and can be reused. It's crucial to `free` memory that is no longer needed to prevent memory leaks.

## Practical Scenario: Building a Node for a Linked List

Imagine you're creating a linked list. Each node in the list needs to store some data and a pointer to the next node. We can't declare an array of nodes of a fixed size because a linked list can grow or shrink.

Here's how you'd use `malloc` and `free` to manage memory for a single node:

```c
#include <stdio.h>
#include <stdlib.h>

// Define a structure for a node in a linked list
struct Node {
    int data;
    struct Node *next;
};

int main() {
    struct Node *newNode;

    // 1. Allocate memory for a new node
    // sizeof(struct Node) gives us the total bytes needed for one node
    newNode = (struct Node *)malloc(sizeof(struct Node));

    // 2. Check if allocation was successful
    if (newNode == NULL) {
        printf("Memory allocation failed!\n");
        return 1; // Indicate an error
    }

    // 3. Initialize the node's data
    newNode->data = 10;
    newNode->next = NULL; // Initially, the new node doesn't point to anything

    printf("Node created with data: %d\n", newNode->data);

    // ... (later, when the node is no longer needed)

    // 4. Free the allocated memory
    free(newNode);
    newNode = NULL; // Good practice to set the pointer to NULL after freeing

    printf("Memory for the node has been freed.\n");

    return 0;
}
```

**How it works:**
1.  `malloc(sizeof(struct Node))` requests enough memory to hold an entire `struct Node`.
2.  We *cast* the returned `void*` pointer to `(struct Node *)` because we know we're expecting a pointer to our node structure.
3.  We **must** check if `newNode` is `NULL`. If it is, our program can't proceed with this node.
4.  When `newNode` is no longer needed (e.g., the node is being removed from the list), `free(newNode)` returns that memory to the system. Setting `newNode = NULL` prevents accidental use of the freed memory (a dangling pointer).

## Practice Task

Write a C program that:
1.  Allocates memory for an integer using `malloc`.
2.  Assigns the value `42` to the allocated integer.
3.  Prints the value.
4.  Frees the allocated memory.
5.  Attempts to print the value again (this should result in undefined behavior, highlighting why `free` is important).

## Self-Check Questions

1.  What is the primary purpose of `malloc`?
2.  Why is it crucial to check the return value of `malloc`?
3.  What happens if you forget to `free` memory that is no longer used?
4.  What is a "dangling pointer," and how can setting a pointer to `NULL` after `free` help prevent it?

## Supports

- [[skills/programming/programming-languages/c-programming/microskills/dynamic-memory-management-in-c|Dynamic Memory Management in C]]
