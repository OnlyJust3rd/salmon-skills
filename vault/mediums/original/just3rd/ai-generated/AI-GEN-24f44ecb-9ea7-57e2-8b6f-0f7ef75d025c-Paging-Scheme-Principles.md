---
type: "medium"
title: "Understanding Paging: Principles of Memory Allocation"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/operating-systems/memory-virtualization/microskills/paging-scheme-principles|paging-scheme-principles]]"
learning-time-in-minutes: 5
---
# Understanding Paging: Principles of Memory Allocation

This lesson explores the core principles behind the paging memory allocation scheme, a fundamental concept in memory virtualization.

## What is Paging?

Paging is a memory management scheme that allows the physical address space of a computer to be broken into fixed-size blocks called **frames**, and the logical address space of a process to be broken into blocks of the same size called **pages**. This division allows the operating system to load parts of a process into memory as needed, rather than requiring the entire process to be contiguous in physical memory.

The key idea is to **decouple the logical addresses used by a process from the physical addresses in RAM.**

## Key Components and Concepts

1.  **Pages:** Logical blocks of a process's address space. All pages in a given system have the same size.
2.  **Frames:** Physical blocks of RAM. All frames in a given system have the same size, equal to the page size.
3.  **Page Table:** A data structure maintained by the operating system for each process. It maps logical page numbers to physical frame numbers. When a process accesses a memory location, the CPU uses the page table to translate the logical address into a physical address.
4.  **Page Size:** A crucial parameter determined by the hardware and operating system. Common page sizes range from 4 KB to several MB. The choice of page size impacts performance and memory utilization.
5.  **Page Number (p):** The higher-order bits of a logical address that identify which page the address belongs to.
6.  **Offset (d):** The lower-order bits of a logical address that specify the location within that page.

## How Paging Works: The Translation Process

When a process requests access to a memory location, the following steps occur:

1.  **Logical Address Generation:** The CPU generates a logical address, which is composed of a page number (p) and an offset (d).
2.  **Page Table Lookup:** The Memory Management Unit (MMU), a hardware component, uses the page number (p) to index into the process's page table.
3.  **Frame Number Retrieval:** The page table entry corresponding to page 'p' contains the physical frame number (f) where that page is currently located in RAM.
4.  **Physical Address Formation:** The MMU combines the retrieved frame number (f) with the offset (d) to form the physical address.
5.  **Memory Access:** The CPU then uses this physical address to access the actual location in RAM.

$$
\text{Logical Address} = (p, d)
$$

$$
\text{Physical Address} = (f, d)
$$

## Advantages of Paging

*   **Eliminates External Fragmentation:** Since memory is allocated in fixed-size chunks (frames) and pages can be loaded into any available frame, there's no wasted space between processes.
*   **Supports Non-Contiguous Allocation:** Processes do not need to reside entirely in contiguous blocks of physical memory, enabling efficient use of RAM.
*   **Simplifies Memory Management:** The fixed-size nature of pages and frames simplifies allocation and deallocation logic for the OS.
*   **Enables Virtual Memory:** Paging is a fundamental building block for virtual memory systems, allowing processes to use more memory than physically available by swapping pages to and from secondary storage (disk).

## Disadvantages of Paging

*   **Internal Fragmentation:** If a process's last page is not completely filled, the remaining space in that page (and thus in the allocated frame) is wasted. This is known as internal fragmentation.
*   **Page Table Overhead:** Each process requires a page table, which consumes memory. For processes with large address spaces, the page table itself can become quite large.
*   **Translation Overhead:** The process of translating logical addresses to physical addresses via the page table takes time, adding a slight performance overhead to memory accesses. This is often mitigated by hardware caches like the Translation Lookaside Buffer (TLB).

## Example Scenario

Imagine a system with a page size of 4 KB. A process needs to access memory address 12500.

1.  **Logical Address:** The logical address is conceptual. We need to break it into a page number and an offset.
2.  **Page Number and Offset Calculation:**
    *   If page size is 4 KB (4096 bytes), then 4096 in binary is `1000000000000` (13 bits). The offset will use the lower 12 bits.
    *   12500 in decimal is `11000011100100` in binary.
    *   Assuming our system uses a 13-bit page number and a 12-bit offset:
        *   Page Number (p): The most significant bits. Let's say the page size is 2^12 bytes, so the offset uses 12 bits. The address 12500 (decimal) is `0011000011100100` (padded to 16 bits for clarity if the address space is larger). If the page size is 4KB (2^12 bytes), the offset uses 12 bits.
        *   Let's simplify with a smaller example: Page size = 16 bytes. Offset uses 4 bits.
        *   Logical Address = 26 (decimal).
        *   26 (decimal) = `0001 1010` (binary).
        *   Page Number (p): `0001` (most significant 4 bits, assuming a 8-bit logical address space for simplicity).
        *   Offset (d): `1010` (least significant 4 bits).
3.  **Page Table Lookup:** The process's page table is consulted. Let's say the entry for page `0001` indicates that it's mapped to physical frame `0101`.
4.  **Physical Address:** The MMU combines frame `0101` with offset `1010`. The resulting physical address is `0101 1010`.

This process allows the operating system to flexibly place pages of a process into any available frames in physical memory.

## Supports

- [[skills/computing/systems-infrastructure/operating-systems/memory-virtualization/microskills/paging-scheme-principles|Paging Scheme Principles]]
