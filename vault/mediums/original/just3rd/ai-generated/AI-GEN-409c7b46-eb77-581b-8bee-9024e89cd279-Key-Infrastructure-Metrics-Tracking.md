---
type: "medium"
title: "Tracking Key Infrastructure Metrics"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/observability-operations/system-monitoring/microskills/key-infrastructure-metrics-tracking|key-infrastructure-metrics-tracking]]"
learning-time-in-minutes: 4
---
# Tracking Key Infrastructure Metrics

To effectively implement basic system monitoring, we first need to understand how to track the fundamental metrics that tell us about our infrastructure's health. This lesson focuses on **Key Infrastructure Metrics Tracking**, specifically CPU, memory, disk I/O, and network throughput. By learning to monitor these, you'll be able to observe current values and identify potential issues before they impact users.

## Why Track These Metrics?

These four metrics are the "Golden Signals" of system performance. They provide a high-level overview of your system's resource utilization and can quickly reveal bottlenecks or impending failures.

*   **CPU Usage:** High CPU can mean your system is overworked, struggling to process requests, or running inefficiently.
*   **Memory Usage:** Excessive memory usage can lead to swapping (using disk as RAM, which is much slower) or out-of-memory errors, crashing applications.
*   **Disk I/O:** High disk read/write activity can slow down applications that rely on data storage.
*   **Network Throughput:** Congested network can lead to slow response times and dropped connections.

## Monitoring Tools

We'll use common command-line tools available on most Linux-based systems for this practical demonstration.

### CPU and Memory

The `top` command is a powerful real-time system monitor.

**How to Use `top`:**

1.  Open your terminal.
2.  Type `top` and press Enter.

You'll see a dynamic, real-time view of your system's processes.

**Key Information in `top`:**

*   **`%Cpu(s)` line:**
    *   `us`: User space CPU usage.
    *   `sy`: System (kernel) space CPU usage.
    *   `id`: Idle CPU time. A low idle percentage indicates high overall CPU utilization.
    *   `wa`: I/O wait time. High `wa` suggests the CPU is waiting for disk operations, pointing to a disk I/O bottleneck.
*   **`MiB Mem` line:**
    *   `total`: Total physical RAM.
    *   `free`: Amount of RAM that is completely unused.
    *   `used`: Amount of RAM currently in use.
    *   `buff/cache`: Memory used by the kernel for buffers and page cache. This is generally good, as it speeds up disk access. A high number here is often not an immediate concern for RAM availability.
*   **`MiB Swap` line:** Shows swap space usage. High swap usage indicates that your system is running out of physical RAM and resorting to slower disk storage.

**Example Output Snippet:**

```
top - 10:00:00 up 10 days,  2:30,  2 users,  load average: 0.15, 0.20, 0.25
%Cpu(s):  2.0 us,  1.0 sy, 97.0 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st
MiB Mem :   4096.0 total,   2048.0 free,   1024.0 used,   1024.0 buff/cache
MiB Swap:   2048.0 total,   2048.0 free,      0.0 used.   3072.0 avail Mem
```

In this snippet, CPU is mostly idle (`97.0 id`). Memory usage is moderate, with ample free RAM and no swap used.

### Disk I/O

The `iostat` command provides detailed statistics about disk I/O.

**How to Use `iostat`:**

1.  Open your terminal.
2.  Type `iostat -dx 5` and press Enter.
    *   `-d`: Display device utilization.
    *   `-x`: Display extended statistics.
    *   `5`: Update the report every 5 seconds.

**Key Information in `iostat`:**

*   `%util`: The percentage of time the device was busy. Consistently high (`>90%`) indicates a potential bottleneck.
*   `r/s` and `w/s`: Reads and writes per second.
*   `rkB/s` and `wkB/s`: Kilobytes read and written per second (throughput).
*   `await`: The average time in milliseconds for I/O requests issued to the device to be served. This includes queue time and service time. High `await` times are a strong indicator of slow disk performance.

**Example Output Snippet:**

```
Device            r/s     w/s    rkB/s    wkB/s  rrqm/s  wrqm/s  %rrqm  %wrqm  r_await  w_await  aq-sz  aqu-sz  %util
sda              10.0    5.0     100.0    50.0     0.0     0.0    0.0    0.0     5.00    10.00    0.10    0.50   15.00
```

Here, `sda` shows low utilization (`15.00%`) and low await times, indicating no disk bottleneck.

### Network Throughput

The `iftop` command provides a real-time display of network bandwidth usage.

**How to Use `iftop`:**

1.  Open your terminal.
2.  Type `sudo iftop -i <interface>` and press Enter.
    *   Replace `<interface>` with your network interface name (e.g., `eth0`, `enp0s3`). You can find your interface name using `ip a`.
    *   `sudo` is usually required to capture network traffic.

**Key Information in `iftop`:**

*   A list of source-destination IP addresses and the bandwidth they are consuming.
*   The total bandwidth usage on the interface.

**Example Output Snippet:**

```
b1.example.com:80 <- 192.168.1.100:54321       6Kbps 0.1bps 0.1bps
                     192.168.1.100:54321 -> b1.example.com:80       2Kbps 0.0bps 0.0bps
```

This shows connections and their current bandwidth usage. By observing patterns, you can identify which connections are consuming the most bandwidth.

## Practical Application

When you implement basic monitoring, use these tools to establish a baseline for your system's normal operation during typical workloads.

*   **Observe `top`:** What is the typical CPU usage during normal operations? How much memory is usually free? Is swap ever used?
*   **Check `iostat`:** What are the average disk read/write speeds? Is disk utilization consistently high?
*   **Monitor `iftop`:** What is the typical network traffic? Are there any unexpected spikes?

By regularly checking these metrics, you'll develop an intuition for what "normal" looks like, making it easier to spot anomalies that require further investigation.

## Supports

- [[skills/computing/systems-infrastructure/observability-operations/system-monitoring/microskills/key-infrastructure-metrics-tracking|Key Infrastructure Metrics Tracking]]
