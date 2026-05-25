---
type: "medium"
title: "Parallel Model Terminology"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/compute-runtime/high-performance-computing/parallel-programming/microskills/parallel-model-terminology|parallel-model-terminology]]"
learning-time-in-minutes: 4
---
# Parallel Model Terminology

Welcome to this lesson on **Parallel Model Terminology**. Understanding these fundamental terms is the first step in grasping how different parallel programming models work. We'll focus on recalling the core vocabulary that describes how parallel computations communicate and share data.

## What are Parallel Programming Models?

Before diving into terminology, remember that parallel programming models are conceptual frameworks that help us think about and organize parallel computations. They define how multiple processing units (like cores on a CPU or separate computers) work together to solve a problem faster.

## Key Terms in Parallel Programming Models

Let's break down the essential terms you'll encounter when discussing parallel programming models.

### 1. Process

A **process** is an instance of a computer program that is being executed. Each process has its own independent memory space. When you open an application, the operating system creates a process for it. In parallel programming, multiple processes can run concurrently, either on the same machine or on different machines.

*   **Key Characteristic:** Independent memory space. Communication between processes typically requires explicit mechanisms like message passing.

### 2. Thread

A **thread** is the smallest unit of execution within a process. Multiple threads can exist within a single process, and they share the same memory space. This allows threads to communicate and share data more easily than separate processes.

*   **Key Characteristic:** Shared memory space within a process. This makes data sharing efficient but requires careful synchronization to avoid race conditions.

### 3. Shared Memory

In a **shared memory** model, all processing units can directly access a common pool of memory. This means any data written by one processor can be read by another. This is common in multi-core processors where all cores share the main RAM.

*   **Analogy:** Imagine a group of people working at a single large whiteboard. Everyone can see and write on the whiteboard.
*   **Key Characteristic:** Easy data sharing, but requires careful management (synchronization) to prevent conflicts.

### 4. Distributed Memory

In a **distributed memory** model, each processing unit has its own private memory. Processors cannot directly access each other's memory. To share data, processors must explicitly send messages to each other. This is common in clusters of computers.

*   **Analogy:** Imagine a team of people, each with their own notepad. To share information, they have to write a note and hand it to someone else.
*   **Key Characteristic:** Each unit has its own memory. Communication is explicit via message passing.

### 5. Message Passing

**Message passing** is a communication mechanism used primarily in distributed memory systems. Processors explicitly send and receive messages to exchange data. Libraries like MPI (Message Passing Interface) are widely used for this purpose.

*   **Example:** Processor A wants to send data to Processor B. It formulates a message containing the data and sends it to B. Processor B then needs to be ready to receive this message.
*   **Key Characteristic:** Explicit send/receive operations define data exchange.

### 6. Data Parallelism

**Data parallelism** is a technique where the same operation is performed concurrently on different parts of a large dataset. The dataset is divided among multiple processing units, and each unit processes its assigned chunk.

*   **Example:** Imagine having a huge list of numbers and wanting to double each one. With data parallelism, you could give one processor the first half of the list, another processor the second half, and both processors double their respective halves simultaneously.
*   **Key Characteristic:** Focuses on distributing data for parallel processing.

### 7. Task Parallelism

**Task parallelism** is a technique where different tasks or sub-problems of a larger problem are executed concurrently. This is often used when a problem can be broken down into independent or semi-independent stages.

*   **Example:** In a complex simulation, one task might be calculating fluid dynamics, while another simultaneously handles heat transfer.
*   **Key Characteristic:** Focuses on distributing different computational tasks.

## Connecting the Terms

These terms are interconnected and help us categorize parallel programming models:

*   **Shared-memory models** often utilize **threads** that communicate through the shared memory.
*   **Distributed-memory models** rely on **processes** that communicate using **message passing**.
*   Both data and task parallelism can be implemented using either shared or distributed memory approaches.

## Quick Recall Check

Let's test your memory with a few questions:

1.  Which term describes an independent instance of a running program with its own memory?
2.  What is the smallest unit of execution that shares memory with other units within the same process?
3.  In which memory model can all processors directly access a single pool of memory?
4.  What communication method is crucial for distributed memory systems?
5.  When the same operation is applied to different parts of a dataset concurrently, what type of parallelism is it?

This foundational terminology will serve you well as we explore the different parallel programming models in more detail.

## Supports

- [[skills/computing/systems-infrastructure/compute-runtime/high-performance-computing/parallel-programming/microskills/parallel-model-terminology|Parallel Model Terminology]]
