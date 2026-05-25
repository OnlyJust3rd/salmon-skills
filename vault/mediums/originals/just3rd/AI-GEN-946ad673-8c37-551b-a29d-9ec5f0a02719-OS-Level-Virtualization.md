---
type: "medium"
title: "Understanding OS-Level Virtualization: Shared Kernels"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/compute-runtime/system-virtualization/microskills/os-level-virtualization|os-level-virtualization]]"
related-skills:
  - "[[skills/computing/systems-infrastructure/compute-runtime/system-virtualization/system-virtualization|system-virtualization]]"
learning-time-in-minutes: 4
---
# Understanding OS-Level Virtualization: Shared Kernels

This lesson dives into the core concept of OS-level virtualization, also known as containerization. We'll explore how containers achieve their lightweight nature by sharing the host operating system's kernel. This is a key differentiator when comparing containers to traditional virtual machines.

## What is OS-Level Virtualization?

OS-level virtualization allows multiple isolated user-space environments to run on a single host operating system kernel. Think of it as creating separate "boxes" within your existing OS, where applications and their dependencies can live independently without interfering with each other or the host.

The fundamental principle here is **sharing**. Unlike virtual machines that virtualize the entire hardware stack, containers virtualize the operating system itself. This means each container doesn't need its own full copy of an operating system, including its kernel.

### Key Concepts:

*   **Host OS:** The underlying operating system on which the containers are running (e.g., Linux, Windows).
*   **Container Engine:** Software like Docker or Podman that manages the lifecycle of containers.
*   **Container Image:** A read-only template containing the application code, libraries, dependencies, and configuration needed to run an application.
*   **Container Instance:** A running, executable version of a container image.

## The Shared Kernel: The Magic Behind Containers

The most significant aspect of OS-level virtualization is that **all containers running on a host share the same host operating system kernel.**

Imagine your host OS kernel as the central manager of your computer's resources – CPU, memory, network, and file system. Instead of each container needing its own, independent manager, they all interact with and are managed by this single, shared kernel.

This sharing has profound implications:

*   **Reduced Overhead:** Since there's no need to boot and run a separate OS kernel for each container, resource usage is dramatically lower. This means more containers can run on the same hardware compared to virtual machines.
*   **Faster Startup Times:** Containers can start almost instantaneously because they don't need to go through the full OS boot process. They are essentially just starting a process or a group of processes isolated from others.
*   **Smaller Footprint:** Container images are typically much smaller than VM images because they don't include an entire operating system.

### How it Works (Simplified):

The host OS kernel provides specific features that enable containerization. On Linux, these are primarily:

*   **Namespaces:** These isolate resources for a container, such as process IDs (PID), network interfaces, mount points, user IDs (UID), and inter-process communication (IPC). Each container gets its own "view" of these resources, making it appear as if it's running in its own isolated environment.
*   **Control Groups (cgroups):** These limit and monitor resource usage (CPU, memory, I/O) for a container. This prevents one container from hogging all the resources and impacting other containers or the host system.

For example, when a container wants to create a new process, the host kernel, through namespaces, ensures that this new process is only visible within that container's PID namespace. Similarly, cgroups would dictate how much CPU time that process, and others within its container, are allowed to consume.

## Analogy: An Apartment Building vs. Separate Houses

To better understand the shared kernel concept, let's use an analogy:

*   **Virtual Machines (VMs):** Think of each VM as a separate house. Each house has its own foundation (hardware), its own plumbing, electrical system, and a complete set of utilities (its own OS kernel). Building and maintaining each house requires significant resources.
*   **Containers:** Think of containers as apartments within a single apartment building. The building itself has a shared foundation, a shared main water line, and a shared electrical grid (the host OS kernel). Each apartment is a distinct living space (isolated environment) with its own furniture and decor (applications and dependencies), but they all rely on the building's underlying infrastructure.

This analogy highlights how containers leverage shared resources, making them more efficient.

## Key Takeaway

The crucial point to remember about OS-level virtualization (containers) is the **shared host OS kernel**. This is what enables their speed, efficiency, and lightweight nature. While they provide isolation for applications, they do so by partitioning and managing resources provided by a single, underlying operating system kernel, rather than emulating hardware to run entirely separate operating systems.

## Supports

- [[skills/computing/systems-infrastructure/compute-runtime/system-virtualization/microskills/os-level-virtualization|OS-Level Virtualization]]
