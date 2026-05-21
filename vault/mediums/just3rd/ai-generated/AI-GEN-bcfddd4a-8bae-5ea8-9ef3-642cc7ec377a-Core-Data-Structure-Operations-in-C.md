---
type: "medium"
title: "Core Data Structure Operations in C"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/c-programming/microskills/core-data-structure-operations-in-c|core-data-structure-operations-in-c]]"
---
# Core Data Structure Operations in C

This lesson focuses on implementing fundamental operations for data structures in C. We'll cover `traverse`, `insert`, `search`, and `delete` operations. These operations are the building blocks for most data structure implementations.

## Explanation

Data structures are ways to organize and store data efficiently. The operations we'll discuss allow us to interact with this stored data.

*   **Traverse:** Visiting each element in the data structure, usually in a specific order.
*   **Insert:** Adding a new element to the data structure.
*   **Search:** Finding a specific element within the data structure.
*   **Delete:** Removing a specific element from the data structure.

We'll illustrate these operations using a singly linked list as our example data structure.

## Practical Example: Linked List Operations

A singly linked list consists of nodes, where each node contains data and a pointer to the next node.

```c
#include <stdio.h>
#include <stdlib.h>

// Define a node structure
struct Node {
    int data;
    struct Node* next;
};

// Function to create a new node
struct Node* createNode(int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    if (newNode == NULL) {
        printf("Memory allocation failed!\n");
        exit(1);
    }
    newNode->data = data;
    newNode->next = NULL;
    return newNode;
}

// Traverse: Print all elements in the list
void traverse(struct Node* head) {
    struct Node* current = head;
    printf("List: ");
    while (current != NULL) {
        printf("%d -> ", current->data);
        current = current->next;
    }
    printf("NULL\n");
}

// Insert: Add a node at the end of the list
struct Node* insert(struct Node* head, int data) {
    struct Node* newNode = createNode(data);
    if (head == NULL) {
        return newNode; // New node is the first node
    }
    struct Node* current = head;
    while (current->next != NULL) {
        current = current->next;
    }
    current->next = newNode;
    return head; // Return original head
}

// Search: Find a node with specific data
struct Node* search(struct Node* head, int data) {
    struct Node* current = head;
    while (current != NULL) {
        if (current->data == data) {
            return current; // Found the node
        }
        current = current->next;
    }
    return NULL; // Node not found
}

// Delete: Remove a node with specific data
struct Node* deleteNode(struct Node* head, int data) {
    struct Node* current = head;
    struct Node* prev = NULL;

    // If the head node itself holds the data to be deleted
    if (current != NULL && current->data == data) {
        head = current->next; // Changed head
        free(current);        // Free old head
        return head;
    }

    // Search for the key to be deleted, keep track of the previous node
    while (current != NULL && current->data != data) {
        prev = current;
        current = current->next;
    }

    // If data was not present in linked list
    if (current == NULL) return head;

    // Unlink the node from linked list
    prev->next = current->next;

    free(current); // Free memory
    return head;
}

int main() {
    struct Node* head = NULL;

    head = insert(head, 10);
    head = insert(head, 20);
    head = insert(head, 30);

    traverse(head); // Output: List: 10 -> 20 -> 30 -> NULL

    struct Node* foundNode = search(head, 20);
    if (foundNode) {
        printf("Found node with data: %d\n", foundNode->data); // Output: Found node with data: 20
    } else {
        printf("Node not found.\n");
    }

    head = deleteNode(head, 20);
    traverse(head); // Output: List: 10 -> 30 -> NULL

    return 0;
}
```

In this example:
*   `createNode` allocates memory for a new node.
*   `traverse` iterates through the list.
*   `insert` adds a new node at the end.
*   `search` looks for a node with a specific value.
*   `deleteNode` removes a node by adjusting pointers and freeing memory.

## Practice Task

1.  Modify the `insert` function to insert a new node at the beginning of the linked list.
2.  Implement a `deleteFirst` function to remove the first node of the linked list.
3.  Write a `main` function that demonstrates inserting at the beginning, traversing, and then deleting the first node.

## Self-Check Questions

1.  What is the main difference between `traverse` and `search` operations?
2.  Why is it important to keep track of the `previous` node in the `deleteNode` function?
3.  What would happen if `free(current)` was not called in the `deleteNode` function?

## Supports

- [[skills/programming/programming-languages/c-programming/microskills/core-data-structure-operations-in-c|Core Data Structure Operations in C]]
