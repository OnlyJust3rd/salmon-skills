---
type: "medium"
title: "Using Command-Line Tools for Basic System Monitoring"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/cloud-devops/platform-engineering/system-monitoring/microskills/command-line-monitoring-tools|Command-Line Monitoring Tools]]"
---
# Using Command-Line Tools for Basic System Monitoring

When you need to understand how your system is performing *right now*, command-line tools are your fastest and most direct allies. They allow you to quickly query and display key metrics, helping you to "Apply" the skill of "Implement Basic Monitoring" by giving you real-time data. This lesson focuses on a few essential command-line utilities for tracking system performance.

## Why Command-Line Tools?

*   **Immediacy:** Get instant feedback on system status.
*   **Resource Efficiency:** They use minimal system resources themselves.
*   **Scripting Power:** Easily integrated into scripts for automated checks.
*   **Ubiquity:** Available on virtually all Linux/Unix-based systems.

These tools are crucial for observing the "Golden Signals" – Latency, Traffic, Errors, and Saturation – which are fundamental to understanding system health.

## Essential Command-Line Tools

Let's explore some of the most common and useful tools for real-time monitoring.

### 1. `top` (Table Of Processes)

`top` provides a dynamic, real-time view of a running system. It displays system summary information as well as a list of processes or threads currently being managed by the kernel.

**How to Use:**

Simply type `top` in your terminal and press Enter.

```bash
top
```

**Key Metrics You'll See:**

*   **`%Cpu(s)`:** Shows CPU usage broken down into user, system, nice, idle, wait, and other states.
    *   `us`: User CPU time
    *   `sy`: System CPU time
    *   `ni`: Nice CPU time
    *   `id`: Idle CPU time
    *   `wa`: I/O wait time
*   **`KiB Mem` / `MiB Mem`:** Total, free, used, and buff/cache memory.
*   **`KiB Swap` / `MiB Swap`:** Total, free, and used swap space.
*   **Process List:**
    *   `PID`: Process ID
    *   `USER`: Owner of the process
    *   `%CPU`: CPU utilization by the process
    *   `%MEM`: Memory utilization by the process
    *   `COMMAND`: Command name

**Interpreting `top` Output:**

*   **High `%Cpu(s)` (especially `us` or `sy`):** Indicates the CPU is busy. If `wa` is high, it suggests processes are waiting for I/O operations to complete.
*   **Low `id`:** Means the CPU is mostly active.
*   **High `%MEM` for specific processes:** Points to memory-hungry applications.
*   **Increasing swap usage:** Can indicate a system is running out of physical RAM.

**Exiting `top`:** Press `q`.

### 2. `htop` (Interactive Process Viewer)

`htop` is an enhanced, interactive version of `top`. It offers a more user-friendly interface with colorized output, mouse support, and easier process management. If it's not installed, you might need to install it with your system's package manager (e.g., `sudo apt install htop` or `sudo yum install htop`).

**How to Use:**

Type `htop` and press Enter.

```bash
htop
```

**Key Features:**

*   **Graphical Representation:** Uses bars to show CPU, Memory, and Swap usage at the top.
*   **Easier Navigation:** Use arrow keys to select processes and F-keys for actions like killing a process (F9) or searching (F3).
*   **Sorting:** Easily sort processes by CPU, Memory, or other metrics.

**Interpreting `htop` Output:**

Similar to `top`, but the visual representation makes it quicker to spot trends and anomalies. The color coding can also highlight processes that are CPU-bound (red) or memory-bound (green/blue).

**Exiting `htop`:** Press `q` or `F10`.

### 3. `vmstat` (Virtual Memory Statistics)

`vmstat` reports information about processes, memory, paging, block IO, traps, and CPU activity. It's particularly useful for understanding memory and swap activity.

**How to Use:**

The basic command provides a snapshot. For continuous monitoring, you can specify an interval and count.

```bash
vmstat 1 5
```

This command will report every 1 second for a total of 5 times.

**Key Metrics You'll See:**

*   **`r`:** The number of runnable processes (running or waiting to run).
*   **`b`:** The number of processes in uninterruptible sleep (usually waiting for I/O).
*   **`swpd`:** The amount of virtual memory used (swapped out).
*   **`free`:** The amount of idle memory.
*   **`buff`:** The amount of memory used as buffers.
*   **`cache`:** The amount of memory used as cache.
*   **`si`:** Amount of memory swapped in from disk.
*   **`so`:** Amount of memory swapped out to disk.
*   **`bi`:** Blocks received from a block device.
*   **`bo`:** Blocks sent to a block device.
*   **`in`:** The number of interrupts per second.
*   **`cs`:** The number of context switches per second.
*   **`us`:** Non-kernel CPU time.
*   **`sy`:** Kernel CPU time.
*   **`id`:** Idle CPU time.
*   **`wa`:** I/O wait CPU time.

**Interpreting `vmstat` Output:**

*   **High `r` and `b`:** Indicates high system load or I/O contention.
*   **Non-zero `si` and `so`:** Suggests the system is actively swapping memory, which can be a sign of memory pressure.
*   **High `bi` and `bo`:** Points to heavy disk activity.

### 4. `iostat` (Input/Output Statistics)

`iostat` is used to monitor system input/output device loading. It provides statistics for CPU utilization, disk utilization, and transfer rates.

**How to Use:**

Like `vmstat`, you can get a snapshot or continuous output.

```bash
iostat -xz 2
```

This command will report extended statistics (`-x`), including percentages (`-z`), every 2 seconds.

**Key Metrics You'll See:**

*   **`%util`:** Percentage of CPU time during which I/O requests were issued to the device. When this value is close to 100%, the device is saturated.
*   **`await`:** The average I/O wait time, in milliseconds.
*   **`svctm`:** The average service time for I/O requests, in milliseconds.
*   **`r/s`, `w/s`:** Reads and writes per second.
*   **`rkB/s`, `wkB/s`:** Read and write kilobytes per second.

**Interpreting `iostat` Output:**

*   **High `%util` for a disk:** Indicates the disk is a bottleneck.
*   **High `await`:** Suggests requests are taking a long time to be processed by the disk.
*   **Comparing `svctm` and `await`:** If `await` is much larger than `svctm`, it often means that requests are spending a lot of time waiting in a queue for the device to become free.

## Putting It Together

These tools provide a window into your system's health. Regularly using them allows you to:

*   **Identify immediate performance issues:** Is the CPU maxed out? Is memory full?
*   **Pinpoint resource bottlenecks:** Is a specific disk or process consuming all resources?
*   **Establish a baseline:** Understand what "normal" looks like so you can spot deviations.

By practicing with these command-line utilities, you'll build the essential skills to "Implement Basic Monitoring" effectively.

## Supports

- [[skills/cloud-devops/platform-engineering/system-monitoring/microskills/command-line-monitoring-tools|Command-Line Monitoring Tools]]
