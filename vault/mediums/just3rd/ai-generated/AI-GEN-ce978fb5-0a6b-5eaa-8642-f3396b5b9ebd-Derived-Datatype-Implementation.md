---
type: "medium"
title: "Understanding Derived Datatypes in MPI"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/systems/high-performance-computing/parallel-programming/microskills/derived-datatype-implementation|Derived Datatype Implementation]]"
---
# Understanding Derived Datatypes in MPI

In parallel programming, efficient communication is crucial for performance. MPI (Message Passing Interface) provides mechanisms to send and receive data between processes. While basic MPI calls handle contiguous data well, situations often arise where data is scattered, non-contiguous, or has a specific structure. Directly sending such data can be inefficient due to repeated small sends or complex packing/unpacking operations. This is where MPI derived datatypes come into play, offering a powerful way to represent complex data structures for communication.

## What are Derived Datatypes?

Derived datatypes allow you to define new data representations that MPI can understand for sending and receiving. Instead of sending a block of memory, you can construct a datatype that describes how your data is laid out in memory, even if it's not contiguous. Think of it as creating a "template" for your data that MPI uses to assemble the message on the sending side and reconstruct it on the receiving side.

This is particularly useful for:

*   **Non-contiguous data:** Arrays with a stride (e.g., sending every Nth element), or data scattered across different memory locations.
*   **Heterogeneous data structures:** Structs or records containing different data types (integers, floats, characters) in a specific order.
*   **Optimizing message representation:** By defining a derived datatype, MPI can often pack the data more efficiently than manual packing, reducing overhead.

## The Core Idea: Describing Data Layout

MPI derived datatypes are built using two fundamental concepts:

1.  **Basic MPI Datatypes:** These are the standard types MPI understands, like `MPI_INT`, `MPI_FLOAT`, `MPI_CHAR`, etc.
2.  **Constructors:** These are MPI functions that combine basic datatypes and other derived datatypes to create more complex ones.

### Key Constructors

The most common constructors for creating derived datatypes are:

*   `MPI_Type_contiguous`: Creates a datatype by repeating a basic or existing derived datatype multiple times. This is useful for sending an array of a certain type.
*   `MPI_Type_vector`: Creates a datatype by specifying a block length, a stride, and a count. This is powerful for sending data with gaps, like columns of a 2D array.
*   `MPI_Type_indexed`: Creates a datatype by specifying an array of block lengths and an array of displacements. This offers the most flexibility for arbitrary data layouts.

Let's look at an example of how you might use `MPI_Type_vector` to send a column from a 2D array.

## Worked Example: Sending a Column of a 2D Array

Imagine you have a 2D array stored row-major in memory, and you want to send a specific column to another process. A direct send would require iterating through the column and sending each element individually, or packing it into a contiguous buffer first. Using a derived datatype can simplify this.

Consider a 2D array `A[rows][cols]`. We want to send the `j`-th column.

```c
#include <mpi.h>
#include <stdio.h>

int main(int argc, char *argv[]) {
    int rank, size;
    MPI_Comm comm = MPI_COMM_WORLD;
    MPI_Datatype col_type;
    int rows = 5, cols = 4;
    int matrix[5][4] = {
        {0, 1, 2, 3},
        {4, 5, 6, 7},
        {8, 9, 10, 11},
        {12, 13, 14, 15},
        {16, 17, 18, 19}
    };
    int recv_buffer[5]; // To receive a column
    int i, j = 1; // We want to send/receive the second column (index 1)

    MPI_Init(&argc, &argv);
    MPI_Comm_rank(comm, &rank);
    MPI_Comm_size(comm, &size);

    if (size < 2) {
        fprintf(stderr, "This program requires at least 2 processes.\n");
        MPI_Abort(comm, 1);
    }

    // --- Create the derived datatype for a column ---

    // blocklength: number of elements in each block (here, each element of the column)
    // count: number of blocks (here, the number of rows)
    // stride: the distance in elements between the start of consecutive blocks
    //         For a column, the elements are 'rows' apart in memory.
    // base type: MPI_INT (each element is an integer)
    MPI_Type_vector(rows, 1, cols, MPI_INT, &col_type);

    // Commit the datatype so MPI can use it
    MPI_Type_commit(&col_type);

    if (rank == 0) {
        // Send the column (column index j) from the matrix
        // The 'matrix' is the base address. The displacement points to the start of the column.
        MPI_Send(&matrix[0][j], 1, col_type, 1, 0, comm);
        printf("Process 0 sent column %d\n", j);
    } else if (rank == 1) {
        // Receive the column into the recv_buffer
        // The 'recv_buffer' is the base address.
        MPI_Recv(recv_buffer, rows, MPI_INT, 0, 0, comm, MPI_STATUS_IGNORE);
        printf("Process 1 received column:\n");
        for (i = 0; i < rows; i++) {
            printf("%d ", recv_buffer[i]);
        }
        printf("\n");
    }

    // Free the datatype when no longer needed
    MPI_Type_free(&col_type);

    MPI_Finalize();
    return 0;
}
```

### How it Works:

1.  **`MPI_Type_vector(rows, 1, cols, MPI_INT, &col_type);`**:
    *   `rows`: We want to receive `rows` elements in total for our column.
    *   `1`: Each "block" consists of `1` integer element.
    *   `cols`: The `stride` is `cols` because to get to the next element in the same column in the next row, you need to skip `cols` elements in memory (the width of a row).
    *   `MPI_INT`: The basic datatype of each element.
    *   `&col_type`: Pointer to the new derived datatype handle.

2.  **`MPI_Type_commit(&col_type);`**: This step makes the newly defined datatype known to MPI for use in send/receive operations.

3.  **`MPI_Send(&matrix[0][j], 1, col_type, 1, 0, comm);`**:
    *   `&matrix[0][j]`: This is the starting address of the data to be sent. In our case, it's the first element of the `j`-th column.
    *   `1`: We are sending one instance of our `col_type` derived datatype. MPI will use the definition of `col_type` to figure out how many actual `MPI_INT`s to send and their layout.
    *   `col_type`: The derived datatype we just created.

4.  **`MPI_Recv(recv_buffer, rows, MPI_INT, 0, 0, comm, MPI_STATUS_IGNORE);`**:
    *   `recv_buffer`: The destination buffer.
    *   `rows`: The number of basic `MPI_INT` elements expected. MPI knows from `col_type` that this corresponds to one column of our `rows` x `cols` conceptual structure.
    *   `MPI_INT`: The basic datatype that the receiver expects to be placed into `recv_buffer`.

5.  **`MPI_Type_free(&col_type);`**: It's good practice to free derived datatypes when they are no longer needed to reclaim resources.

## Benefits of Derived Datatypes

*   **Code Simplicity:** Reduces the need for manual data packing and unpacking loops, making your parallel code cleaner and easier to understand.
*   **Performance:** MPI implementations are highly optimized. Using derived datatypes allows MPI to manage the data transfer more efficiently, often leading to better performance than manual packing, especially on certain network architectures.
*   **Portability:** Derived datatypes abstract away the specific memory layout of your data, making your code more portable across different architectures and compilers.

By understanding and using MPI derived datatypes, you can significantly enhance the efficiency and readability of your parallel programs when dealing with complex data communication patterns.

## Supports

- [[skills/systems/high-performance-computing/parallel-programming/microskills/derived-datatype-implementation|Derived Datatype Implementation]]
