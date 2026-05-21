---
type: "medium"
title: "Monitoring Processes with `top` and `htop`"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/cloud-devops/platform-engineering/linux-system/microskills/process-monitoring-tools|process-monitoring-tools]]"
---
# Monitoring Processes with `top` and `htop`

This lesson will focus on using command-line tools to monitor processes running on your Linux system, a key aspect of managing system performance. We'll cover two powerful utilities: `top` and `htop`.

## Understanding Process Monitoring

When you run applications or services on a Linux system, they exist as *processes*. Each process consumes system resources like CPU time, memory, and disk I/O. Understanding which processes are running, how much resources they're using, and their status is crucial for:

*   **Identifying performance bottlenecks:** A single runaway process can slow down your entire system.
*   **Troubleshooting issues:** If an application is misbehaving, you can often see its status and resource usage.
*   **Resource management:** Ensuring that critical processes have enough resources and that no process is hogging them unnecessarily.

## `top`: The Classic Process Viewer

`top` is a standard utility found on virtually all Linux distributions. It provides a dynamic, real-time view of running processes.

### How to Use `top`

1.  **Open your terminal.**
2.  **Type `top` and press Enter.**

    ```bash
    top
    ```

You will see a screen that updates every few seconds. Let's break down the key areas:

*   **First line (System Summary):**
    *   `top - HH:MM:SS up D days, HH:MM, U users, load average: X.XX, Y.YY, Z.ZZ`
        *   `HH:MM:SS`: Current time.
        *   `up D days, HH:MM`: System uptime.
        *   `U users`: Number of logged-in users.
        *   `load average: X.XX, Y.YY, Z.ZZ`: System load over the last 1, 5, and 15 minutes. A load average higher than the number of CPU cores can indicate the system is overloaded.

*   **Second line (Tasks):**
    *   `Tasks: Total, running, sleeping, stopped, zombie`
        *   Shows the total number of processes and how many are in different states (running, waiting, etc.).

*   **Third line (CPU States):**
    *   `%Cpu(s): us, sy, ni, id, wa, hi, si, st`
        *   `us`: User CPU time.
        *   `sy`: System CPU time.
        *   `ni`: Nice (prioritized) CPU time.
        *   `id`: Idle CPU time (most important for checking if CPU is free).
        *   `wa`: I/O wait time (CPU waiting for disk operations).
        *   `hi`, `si`, `st`: Hardware/virtual interrupt times.

*   **Fourth and Fifth lines (Memory Usage):**
    *   `MiB Mem : total, free, used, buff/cache`
        *   Shows physical RAM usage.
    *   `MiB Swap: total, free, used. avail Mem`
        *   Shows swap space usage. `avail Mem` is a better indicator of available memory than `free`.

*   **Process List (the main table):**
    *   `PID`: Process ID (unique identifier).
    *   `USER`: Owner of the process.
    *   `PR`: Priority.
    *   `NI`: Nice value (lower is higher priority).
    *   `VIRT`: Virtual memory size.
    *   `RES`: Resident Memory size (actual physical RAM used).
    *   `SHR`: Shared Memory size.
    *   `S`: Process status (R=running, S=sleeping, Z=zombie, T=stopped).
    *   `%CPU`: Percentage of CPU time used by this process.
    *   `%MEM`: Percentage of physical RAM used by this process.
    *   `TIME+`: Total CPU time used by the process.
    *   `COMMAND`: The command that started the process.

### Common `top` Commands

While `top` is running, you can interact with it:

*   `k`: Kill a process. You'll be prompted for the PID.
*   `r`: Renice a process (change its priority). You'll be prompted for PID and the new nice value.
*   `M`: Sort by memory usage.
*   `P`: Sort by CPU usage (default).
*   `q`: Quit `top`.
*   `h`: Display help.

## `htop`: An Enhanced Process Viewer

`htop` is an interactive and user-friendly alternative to `top`. It's not always installed by default but is highly recommended. If it's not installed, you can typically install it with your distribution's package manager (e.g., `sudo apt install htop` or `sudo yum install htop`).

### How to Use `htop`

1.  **Open your terminal.**
2.  **Type `htop` and press Enter.**

    ```bash
    htop
    ```

`htop` offers a much more visual and interactive experience:

*   **Color-coded display:** Makes it easier to distinguish different types of processes or resource usage.
*   **Function key shortcuts:** Clearly displayed at the bottom of the screen.
*   **Mouse support:** You can often click on process names to select them.
*   **Easier process management:** Killing and renicing processes is more intuitive.

### Key Features of `htop`

*   **Header:** Similar to `top`, it shows CPU usage (per core), memory, and swap usage in a more graphical way.
*   **Process List:**
    *   Easily scrollable.
    *   Columns are configurable.
    *   Processes can be tree-viewed (`t` key) to see parent-child relationships.
*   **Footer (Function Keys):**
    *   `F1 Help`: Displays help.
    *   `F2 Setup`: Customize display options.
    *   `F3 Search`: Find a specific process.
    *   `F4 Filter`: Filter the list by command name.
    *   `F5 Tree`: Toggle tree view.
    *   `F6 SortBy`: Choose sorting column.
    *   `F7 Nice -`: Decrease process priority.
    *   `F8 Nice +`: Increase process priority.
    *   `F9 Kill`: Send a signal to a process (you choose the signal, e.g., SIGTERM, SIGKILL).
    *   `F10 Quit`: Exit `htop`.

### Example Scenario: Identifying a Resource Hog

Imagine your system is sluggish. You open `top` or `htop`. You'd look at the `%CPU` and `%MEM` columns, sorted in descending order.

**Using `top`:**
Press `P` to sort by CPU. If a process consistently shows a high `%CPU` (e.g., 80-100%), investigate its `COMMAND`. If it's an application you don't recognize or expect, you might consider killing it using `k` if it's taking too many resources.

**Using `htop`:**
`htop` often makes this easier with its visual bars. Scroll through the list, and you'll quickly spot the process consuming the most CPU or memory. You can then use `F9` to send a signal to terminate it.

## Conclusion

Mastering `top` and `htop` provides you with essential tools for understanding and managing the processes running on your Linux system. By regularly monitoring your system's performance using these utilities, you can proactively identify and resolve issues, ensuring a smooth and efficient computing experience.

## Supports

- [[skills/cloud-devops/platform-engineering/linux-system/microskills/process-monitoring-tools|Process Monitoring Tools]]
