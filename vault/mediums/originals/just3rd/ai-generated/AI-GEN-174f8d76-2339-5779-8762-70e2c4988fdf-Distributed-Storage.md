---
type: "medium"
title: "Understanding Hadoop Distributed Storage: Data Across the Cluster"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/data-ai/data-engineering-platforms/apache-hadoop/microskills/distributed-storage|distributed-storage]]"
learning-time-in-minutes: 3
---
# Understanding Hadoop Distributed Storage: Data Across the Cluster

Hadoop Distributed Storage, specifically the Hadoop Distributed File System (HDFS), is designed to store massive datasets across many machines (nodes) in a cluster. Instead of storing a single large file on one disk, HDFS breaks files into smaller pieces called **blocks** and distributes these blocks across different nodes. This approach is fundamental to Hadoop's ability to handle big data.

## Why Distribute Data?

Imagine trying to store a petabyte of data on a single computer. It's not practical or reliable. Distributing data offers several key advantages:

*   **Fault Tolerance:** If one node fails, the data isn't lost. HDFS replicates blocks across multiple nodes. If a node goes down, other nodes still have copies of the data.
*   **Scalability:** As your data grows, you can simply add more nodes to the cluster to store more blocks.
*   **Parallel Processing:** Because data is spread out, multiple machines can read different parts of a file simultaneously, speeding up processing.

## How it Works: Blocks and Replication

When you upload a file to HDFS, it's divided into blocks. The default block size in Hadoop is 128MB, but this can be configured. Each block is then copied (replicated) to multiple other nodes in the cluster. The default replication factor is 3, meaning each block will exist on three different nodes.

The **NameNode** is a special node in the cluster that keeps track of where all these blocks are stored. It manages the file system's metadata – essentially, the directory structure and which blocks belong to which files, and on which DataNodes (nodes that store data blocks) they reside. The actual data blocks are stored on **DataNodes**.

## Practical Scenario

Let's say you have a 500MB log file you want to store in HDFS.

1.  **File Splitting:** HDFS splits the 500MB file into blocks. With a 128MB block size, you'd have approximately four blocks (128MB x 3 = 384MB, leaving 116MB for the last block).
2.  **Block Distribution:** These four blocks are then sent to different DataNodes in the cluster.
3.  **Replication:** For each block, HDFS creates two additional copies and sends them to other DataNodes. So, Block 1 will exist on DataNode A, DataNode B, and DataNode C. Block 2 will exist on DataNode D, DataNode E, and DataNode F, and so on.
4.  **Metadata Update:** The NameNode records that FileX's Block 1 is located on DataNodes A, B, and C, and so forth for all blocks.

If DataNode B fails, HDFS knows that Block 1 is still available on DataNode A and DataNode C. It will then automatically create a new copy of Block 1 on another available DataNode to maintain the replication factor of 3.

## Practice Task

Imagine you have a 10GB video file.

*   How many 128MB blocks would this file be roughly divided into?
*   If the replication factor is 3, how many total copies of this file's data would exist across the cluster?

## Self-Check Questions

1.  What is the primary purpose of distributing data in Hadoop?
2.  What are HDFS "blocks," and why are they important?
3.  What role does the NameNode play in distributed storage?
4.  What happens if a DataNode containing a block fails?

## Supports

- [[skills/computing/data-ai/data-engineering-platforms/apache-hadoop/microskills/distributed-storage|Distributed Storage]]
