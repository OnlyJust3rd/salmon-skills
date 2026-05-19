---
type: "medium"
title: "Contiguous File Allocation"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/systems/operating-systems/i-o-and-file-systems/microskills/contiguous-file-allocation|Contiguous File Allocation]]"
---
# Contiguous File Allocation

Understanding how files are stored on a disk is fundamental to managing data effectively. In this lesson, we will focus on a straightforward method called **contiguous file allocation**. This method is one of the ways an operating system can keep track of where different parts of a file are located on the storage device.

## What is Contiguous File Allocation?

Imagine your storage device, like a hard drive, as a long street made up of many parking spots (called blocks or sectors). With contiguous file allocation, an entire file is stored in a single, unbroken sequence of these parking spots.

**Key Idea:** A file occupies a contiguous range of blocks on the disk.

This means that if a file needs 10 blocks, and block 50 is free, the file will occupy blocks 50 through 59. There will be no other files or parts of other files in between these blocks.

### How it Works

1.  **File Creation:** When you create a new file, the operating system finds a free contiguous space on the disk that is large enough to hold the entire file.
2.  **Allocation:** This contiguous space is then allocated to the file. The operating system records the starting block number and the length (number of blocks) of this allocated space. This information is stored in the file's metadata (often in a directory entry).
3.  **Access:** To read or write to the file, the operating system uses the starting block number and length to access all the blocks sequentially.

### Example

Let's say our disk has 100 blocks, numbered 0 to 99.

*   A file named `report.txt` needs 5 blocks.
*   The operating system finds that blocks 20 through 24 are free.
*   It allocates blocks 20, 21, 22, 23, and 24 to `report.txt`.
*   The file's metadata will store: Start Block = 20, Length = 5.

If you access `report.txt`, the system knows to read from block 20, then 21, 22, 23, and finally 24.

## Advantages of Contiguous Allocation

Contiguous allocation offers some significant benefits, primarily related to speed:

*   **Fast Access:** Because all the blocks for a file are together, reading or writing is very fast. The disk head doesn't need to move around a lot. It can read the entire file in one continuous operation. This is similar to reading a book where all the pages of a chapter are in order.
*   **Simple Implementation:** It's relatively easy for the operating system to manage. It just needs to track free space and allocated blocks.

## Disadvantages and Implications

Despite its speed, contiguous allocation has some major drawbacks that limit its practical use in modern file systems:

*   **External Fragmentation:** This is the biggest problem. Over time, as files are created, deleted, and modified, the free space on the disk gets broken up into small, scattered chunks. Even if the total amount of free space is large, you might not be able to find a single *contiguous* block of space large enough for a new file.

    **Analogy:** Imagine a parking lot where cars come and go. If cars only park in full rows, eventually you might have many empty spots spread across different rows, but no single row completely empty for a new, long vehicle.

*   **File Size Limitations:** Once a file is allocated a contiguous space, its size is fixed. If you want to add more data to a file and it runs out of its allocated space, you can't simply extend it into the next available block if that block is already occupied by another file. You would typically have to create a new, larger file, copy the old data, and then append the new data. This is inefficient and can be problematic.
*   **Difficulty in Deleting and Modifying:** Deleting a file simply marks its blocks as free. However, modifying a file (especially growing it) is difficult, as explained above.

## When is Contiguous Allocation Used?

Due to its significant fragmentation issues, contiguous allocation is **rarely used for general-purpose file systems** on modern operating systems (like Windows, macOS, or Linux).

However, you might find it in:

*   **Older file systems:** Some early operating systems used it.
*   **Specific embedded systems or dedicated storage:** Where file sizes are predictable and don't change often, or for performance-critical applications where simplicity and speed of sequential reads are paramount.
*   **CD-ROMs and DVDs:** These are read-only media, so files are written once in a contiguous manner and never modified.

## Summary

Contiguous file allocation is a simple method where an entire file is stored in one unbroken sequence of disk blocks. It offers excellent read/write performance but suffers from severe external fragmentation and inflexibility when files need to grow. These drawbacks make it unsuitable for most modern file systems, which opt for more sophisticated allocation methods.

## Supports

- [[skills/systems/operating-systems/i-o-and-file-systems/microskills/contiguous-file-allocation|Contiguous File Allocation]]
