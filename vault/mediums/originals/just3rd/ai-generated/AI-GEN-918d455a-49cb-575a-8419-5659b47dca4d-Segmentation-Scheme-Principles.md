---
type: "medium"
title: "Segmentation Scheme Principles"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/compute-runtime/operating-systems/memory-virtualization/microskills/segmentation-scheme-principles|segmentation-scheme-principles]]"
learning-time-in-minutes: 4
---
# Segmentation Scheme Principles

This lesson explores the core principles behind the **segmentation** memory allocation scheme. Understanding segmentation is a crucial step in analyzing different memory management techniques within the broader skill of Memory Virtualization.

## What is Segmentation?

Segmentation is a memory management technique that divides a program's memory space into logical units called **segments**. Unlike paging, where memory is divided into fixed-size blocks, segmentation uses variable-sized segments. Each segment typically corresponds to a logical unit of the program, such as:

*   **Code segment:** Contains the executable instructions.
*   **Data segment:** Stores global and static variables.
*   **Stack segment:** Used for local variables, function parameters, and return addresses.
*   **Heap segment:** For dynamic memory allocation.

### Key Principles

1.  **Logical Division:** The primary principle is to view memory as a collection of meaningful logical units from the programmer's perspective. This contrasts with physical memory, which is a contiguous block of bytes.

2.  **Variable-Sized Segments:** Each segment can have a different size, depending on the actual requirements of that logical unit within the program.

3.  **Address Translation:** The system needs a mechanism to translate a **logical address** (used by the program) into a **physical address** (where the data actually resides in RAM). This translation is handled by a hardware component called the **Segmentation Unit**.

4.  **Protection:** Segmentation naturally lends itself to protection mechanisms. Each segment can have associated protection attributes (e.g., read-only, read-write, execute-only), preventing a program from accidentally or maliciously modifying code or data in other segments.

5.  **Sharing:** Segments can be shared between different processes. For example, a common library's code segment could be loaded once and shared by multiple applications.

## How Segmentation Works

When a program needs to access data or instructions, it uses a logical address. This logical address is typically a pair: `(segment number, offset)`.

*   **Segment Number:** Identifies which segment the program is trying to access.
*   **Offset:** Specifies the location within that particular segment.

The **segmentation unit** (often part of the CPU's Memory Management Unit - MMU) uses this logical address to find the corresponding physical address. It performs the following steps:

1.  **Segment Table Lookup:** The system maintains a **segment table** for each process. Each entry in the segment table contains:
    *   **Base Address:** The starting physical address of the segment in memory.
    *   **Limit:** The size of the segment.

2.  **Address Validation:** The segmentation unit checks if the provided `offset` is within the `limit` of the segment. If `offset >= limit`, an access violation (segmentation fault) occurs.

3.  **Physical Address Calculation:** If the offset is valid, the physical address is calculated by adding the segment's base address to the offset:

    $$
    \text{Physical Address} = \text{Segment Base Address} + \text{Offset}
    $$

4.  **Access Control:** The segmentation unit also checks the protection attributes associated with the segment to ensure the requested operation (read, write, execute) is permitted.

## Example Scenario

Consider a simple program with two segments:

*   **Segment 0 (Code):** Base Address = 1000, Limit = 500
*   **Segment 1 (Data):** Base Address = 2000, Limit = 300

A program instruction might generate a logical address of `(0, 150)`.

1.  The segmentation unit looks up segment 0 in the segment table.
2.  It finds the base address (1000) and limit (500).
3.  It checks if the offset (150) is less than the limit (500). Yes, it is.
4.  It calculates the physical address: `1000 + 150 = 1150`.
5.  It checks protection for the code segment. If the instruction is to execute, and the segment is marked as executable, the access is allowed.

If the logical address were `(1, 350)`:

1.  The segmentation unit looks up segment 1.
2.  It finds the base address (2000) and limit (300).
3.  It checks if the offset (350) is less than the limit (300). No, it is not.
4.  A segmentation fault would be triggered because the offset is out of bounds.

## Advantages of Segmentation

*   **Logical Organization:** Aligns memory management with the program's logical structure, making it easier for programmers to reason about.
*   **Efficient Sharing:** Facilitates sharing of common code or data segments between processes.
*   **Granular Protection:** Allows for fine-grained protection of different program components.

## Disadvantages of Segmentation

*   **External Fragmentation:** Because segments are variable in size, memory can become fragmented into small, unusable holes between allocated segments. This is known as external fragmentation. Over time, it may become impossible to allocate a large new segment even if the total free memory is sufficient.
*   **Complexity:** Managing variable-sized segments and their tables can be more complex than managing fixed-size pages.
*   **Overhead:** Maintaining segment tables and performing address translations adds some overhead.

Understanding these core principles sets the stage for comparing segmentation with other memory allocation schemes like paging.

## Supports

- [[skills/computing/systems-infrastructure/compute-runtime/operating-systems/memory-virtualization/microskills/segmentation-scheme-principles|Segmentation Scheme Principles]]
