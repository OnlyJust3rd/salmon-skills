---
type: "medium"
title: "System Performance Metrics in Linux"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/cloud-devops/platform-engineering/linux-system/microskills/system-performance-metrics|System Performance Metrics]]"
---
# System Performance Metrics in Linux

To effectively monitor your Linux system's health and manage its processes, understanding key performance metrics is essential. These indicators provide insights into how your system is utilizing its resources. This lesson focuses on identifying and interpreting these crucial metrics.

## Why Monitor System Performance?

Before diving into the metrics, consider why this is important. Monitoring helps you:

*   **Identify bottlenecks:** Pinpoint which resource (CPU, memory, disk I/O, network) is limiting performance.
*   **Detect issues early:** Catch problems before they impact users or cause system failures.
*   **Optimize resource usage:** Understand where resources are being consumed and how to reallocate them.
*   **Plan for capacity:** Forecast future needs based on current trends.

## Key System Performance Metrics

We'll cover the primary metrics you'll encounter when analyzing Linux system performance.

### 1. CPU Usage

This metric indicates how busy your system's central processing unit is. High CPU usage can mean your system is overloaded or that a specific process is consuming excessive resources.

*   **User CPU:** Time spent executing user-level processes.
*   **System CPU (Kernel CPU):** Time spent by the kernel executing system calls and managing the system.
*   **Idle CPU:** Time the CPU is not busy. Ideally, this should be reasonably high for a healthy system under normal load.
*   **Wait I/O:** Time the CPU spends waiting for I/O operations (like disk reads/writes) to complete. High wait I/O can indicate a disk bottleneck.
*   **Steal:** Time a virtual CPU waits for a physical CPU, relevant in virtualized environments.

### 2. Memory Usage

This metric shows how your system's RAM (Random Access Memory) is being utilized. Understanding memory usage is crucial for preventing slowdowns caused by swapping.

*   **Total Memory:** The total amount of RAM installed.
*   **Free Memory:** Memory that is not currently used by any process or cache.
*   **Used Memory:** Memory occupied by running processes and system activities.
*   **Cached/Buffered Memory:** Linux uses free RAM to cache frequently accessed data from disk to speed up I/O operations. This memory is readily available to applications if needed. High cache usage is generally good.
*   **Swap Usage:** When RAM is full, Linux moves less-used data from RAM to a dedicated disk space called swap. Excessive swap usage (swapping) is a strong indicator of insufficient RAM and significantly degrades performance.

### 3. Disk I/O (Input/Output)

Disk I/O metrics measure the rate at which data is read from or written to storage devices. High disk activity can be a bottleneck, especially for applications that rely heavily on disk access.

*   **Read/Write Operations per Second (IOPS):** The number of read and write operations a disk performs in one second.
*   **Throughput (Bytes per Second):** The amount of data transferred to and from the disk per second.
*   **Queue Length:** The number of pending I/O requests waiting for the disk. A consistently high queue length suggests the disk cannot keep up with the demand.

### 4. Network Usage

Network metrics track the data sent and received by your system over its network interfaces. This is vital for identifying network bottlenecks or unusual network traffic.

*   **Bytes Sent/Received:** The amount of data transmitted and received.
*   **Packets Sent/Received:** The number of data packets sent and received.
*   **Errors/Dropped Packets:** Indicate problems with network communication.

## Practical Application: Using Commands

Linux provides several powerful command-line tools to view these metrics.

### Viewing CPU and Memory Usage

The `top` command is a dynamic, real-time view of running processes and system resource usage.

```bash
top
```

When you run `top`, you'll see a summary at the top and a list of processes below. Pay attention to the `%Cpu(s)` and `KiB Mem` (or `MiB Mem`) lines for overall CPU and memory status.

**Key fields in `top`:**

*   `us`: User CPU percentage
*   `sy`: System CPU percentage
*   `id`: Idle CPU percentage
*   `wa`: Wait I/O percentage
*   `total`: Total physical memory
*   `free`: Free memory
*   `used`: Used memory
*   `buff/cache`: Buffered and cached memory
*   `Swap: total`, `free`, `used`: Swap space usage

The `htop` command is an interactive and more user-friendly alternative to `top`. If not installed, you can typically install it using your distribution's package manager (e.g., `sudo apt install htop` on Debian/Ubuntu or `sudo yum install htop` on CentOS/RHEL).

```bash
htop
```

### Viewing Disk I/O

The `iostat` command provides statistics for CPU utilization and I/O statistics for devices and partitions.

```bash
iostat -dx 5
```

The `-d` option shows device utilization, `-x` shows extended statistics, and `5` means it will update the output every 5 seconds.

**Key fields in `iostat`:**

*   `r/s`: Reads per second
*   `w/s`: Writes per second
*   `rkB/s`: Kilobytes read per second
*   `wkB/s`: Kilobytes written per second
*   `await`: The average time in milliseconds for I/O requests issued to the device to be served. This includes the time spent by the requests in queue and the time spent servicing them.
*   `svctm`: The average service time in milliseconds for I/O requests issued to the device.
*   `%util`: Percentage of CPU time during which I/O requests were issued to the device (bandwidth utilization for the device).

### Viewing Network Usage

The `iftop` command provides a real-time display of network bandwidth usage. Like `htop`, it might need to be installed separately.

```bash
sudo iftop
```

`iftop` will show you which hosts you are communicating with and the amount of data being transferred. This is excellent for identifying which connections are consuming the most bandwidth.

## Mistakes to Avoid

*   **Ignoring Idle CPU:** While a high idle percentage is good, extremely high idle could mean the system is underutilized.
*   **Confusing Cache with Free Memory:** Linux aggressively uses RAM for caching. This memory is not "lost" and is available if applications need it. Treat `free` memory alone as less critical than the sum of `free` and `cached/buffered`.
*   **Focusing Solely on CPU:** A system can be slow due to disk or network issues, even with low CPU usage.
*   **Not Understanding Swap:** High swap usage is a red flag for performance issues.

By understanding and monitoring these fundamental system performance metrics, you gain the ability to diagnose and address performance-related challenges on your Linux system.

## Supports

- [[skills/cloud-devops/platform-engineering/linux-system/microskills/system-performance-metrics|System Performance Metrics]]
