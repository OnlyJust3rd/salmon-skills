---
type: "medium"
title: "Page Table Functionality"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/computer-architecture/memory-hierarchy/microskills/page-table-functionality|page-table-functionality]]"
related-skills:
  - "[[skills/computing/hardware-embedded/computer-architecture/memory-hierarchy/memory-hierarchy|memory-hierarchy]]"
learning-time-in-minutes: 4
---
# Page Table Functionality

In the world of computer memory, we often want to give programs the illusion of having more memory than physically available. This is where virtual memory comes in, and at its heart, the **page table** plays a crucial role. Think of it as a translator, mapping addresses that a program uses to the actual physical locations in RAM.

## What is a Page Table?

A page table is a data structure used by a virtual memory system in many modern operating systems. Its primary job is to translate virtual addresses, which are used by a running program, into physical addresses, which refer to actual locations in the computer's RAM (Random Access Memory).

### Why Do We Need Page Tables?

1.  **Memory Management:** They allow the operating system to manage memory efficiently. Instead of a program having exclusive access to a block of RAM, memory can be shared and allocated dynamically.
2.  **Protection:** Page tables help enforce memory protection. Each page can have associated permissions (read, write, execute), and the page table ensures that a program can only access memory it's allowed to.
3.  **Larger Address Space:** They enable a program to use a virtual address space that is much larger than the physical RAM available. This is achieved by keeping only the actively used parts of a program in RAM and storing the rest on slower storage like a hard drive (swapping or paging).

## The Structure of a Page Table

The core idea behind virtual memory is **paging**. Memory is divided into fixed-size blocks called **pages**. The page table keeps track of these pages.

A typical page table is an array or a list. Each entry in the page table, often called a **page table entry (PTE)**, corresponds to a virtual page. A PTE typically contains the following information:

*   **Physical Frame Number (PFN):** This is the most important part. It tells us which physical memory frame (a block of RAM of the same size as a page) currently holds the virtual page.
*   **Present Bit (P):** A flag indicating whether the corresponding page is currently in physical RAM (P=1) or has been swapped out to disk (P=0).
*   **Dirty Bit (D):** Indicates if the page has been modified since it was loaded into memory. This is important for deciding whether to write it back to disk when it's removed from RAM.
*   **Access Bits (e.g., Read/Write/Execute Permissions):** These bits control what operations a program can perform on that page.
*   **Other Control Bits:** May include bits for caching, referencing, etc.

### How Translation Works (Simplified)

When a program needs to access a memory location (a virtual address), the CPU uses the page table to find the corresponding physical address:

1.  The virtual address is split into two parts: a **Virtual Page Number (VPN)** and an **Offset**.
2.  The **VPN** is used as an index into the page table to find the correct PTE.
3.  The **PTE** is consulted.
    *   If the **Present Bit (P)** is set (page is in RAM), the **Physical Frame Number (PFN)** from the PTE is combined with the **Offset** from the virtual address to form the final **Physical Address**.
    *   If the **Present Bit (P)** is *not* set (page is on disk), a **page fault** occurs. The operating system then needs to:
        *   Find the page on disk.
        *   Find a free frame in physical RAM.
        *   Load the page from disk into the free frame.
        *   Update the PTE with the new PFN and set the Present bit.
        *   Restart the instruction that caused the page fault.

### Example Scenario

Let's say we have a system where:
*   Pages are 4KB (4096 bytes).
*   Virtual addresses are 32-bit.
*   Physical addresses are 32-bit.

A virtual address `0x00401A2C` needs to be translated.
If the Virtual Page Number (VPN) is the first 20 bits and the Offset is the last 12 bits:

*   `0x00401A2C` in binary is `0000 0000 0000 0000 0100 0001 1010 0010 1100`
*   VPN: `0000 0000 0000 0000 0100 0001 1010` (first 20 bits) = `0x00401A`
*   Offset: `0010 1100` (last 12 bits) = `0x2C`

The CPU would look up the PTE for VPN `0x00401A`. Let's assume that PTE contains:
*   PFN: `0x0015`
*   Present Bit: `1` (Page is in RAM)

The physical address is formed by combining the PFN and the Offset:
Physical Address = (PFN << 12) | Offset
Physical Address = (`0x0015` << 12) | `0x2C`
Physical Address = `0x0015000` | `0x2C`
Physical Address = `0x001502C`

This physical address `0x001502C` is then used to access the actual data in RAM.

## Key Takeaways

*   Page tables are essential for virtual memory, enabling efficient memory management, protection, and larger address spaces.
*   Each entry in a page table (PTE) maps a virtual page to a physical frame and contains crucial status bits like the Present bit.
*   When a requested page is not in RAM (Present bit is 0), a page fault occurs, triggering the OS to load the page from disk.

## Supports

- [[skills/computing/hardware-embedded/computer-architecture/memory-hierarchy/microskills/page-table-functionality|Page Table Functionality]]
