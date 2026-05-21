---
type: "medium"
title: "The Linux File System Hierarchy"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/cloud-devops/platform-engineering/linux-system/microskills/linux-file-system-hierarchy|linux-file-system-hierarchy]]"
---
# The Linux File System Hierarchy

Welcome! In this lesson, you'll learn about the fundamental structure of the Linux file system, often referred to as the File System Hierarchy (FHS). Understanding this hierarchy is crucial for navigating and managing your Linux system effectively.

## What is the File System Hierarchy?

Imagine a filing cabinet. You have different drawers for different types of documents (e.g., personal, work, bills). Within those drawers, you have folders, and within folders, you have individual files. The Linux file system works in a similar, organized, and layered fashion. The FHS defines the main directories and their contents in a standard way across most Linux distributions. This standardization makes it easier for users and applications to find files and utilities, regardless of the specific Linux flavor they are using.

At the very top of this hierarchy is the root directory, represented by a single forward slash: `/`. Everything else in the Linux system is located underneath this root directory.

## Key Directories in the Linux File System Hierarchy

While there are many directories in a Linux system, the FHS specifies several key ones that you'll encounter regularly. Let's explore some of the most important:

### `/` (Root Directory)

*   **Purpose:** The topmost directory of the file system. All other directories and files are descendants of the root directory.
*   **Think of it as:** The main entrance to your entire filing cabinet.

### `/bin` (User Binaries)

*   **Purpose:** Contains essential user command binaries (executable programs) that are needed in single-user mode and by all users. These are the fundamental commands you'll use daily.
*   **Examples:** `ls`, `cp`, `mv`, `rm`, `bash`.
*   **Think of it as:** The drawer containing your most frequently used tools, like a hammer or screwdriver.

### `/sbin` (System Binaries)

*   **Purpose:** Contains essential system binaries, usually used by the system administrator (root user) for system maintenance and administration tasks.
*   **Examples:** `fdisk`, `ifconfig`, `shutdown`, `mount`.
*   **Think of it as:** A special toolbox for the manager, containing specialized equipment for repairs and upkeep.

### `/etc` (Configuration Files)

*   **Purpose:** Contains system-wide configuration files. These files control how various programs and services operate.
*   **Examples:** `/etc/passwd` (user account information), `/etc/hosts` (network hostnames), `/etc/ssh/sshd_config` (SSH server configuration).
*   **Think of it as:** The instruction manuals and configuration settings for all your appliances and systems.

### `/home` (User Home Directories)

*   **Purpose:** Contains the home directories for regular users. Each user typically has their own subdirectory within `/home`. This is where users store their personal files, documents, and application settings.
*   **Examples:** `/home/yourusername`, `/home/anotheruser`.
*   **Think of it as:** Each individual's personal workspace or desk, where they keep their personal belongings.

### `/usr` (User Programs and Data)

*   **Purpose:** This directory contains the majority of user-level programs, libraries, documentation, and other shared data. It's further subdivided into subdirectories like `/usr/bin`, `/usr/sbin`, `/usr/lib`, and `/usr/share`.
*   **Think of it as:** A large warehouse holding a vast collection of software, reference materials, and shared components.

### `/var` (Variable Data)

*   **Purpose:** Contains variable data files. This includes files that are expected to grow or change frequently during the operation of the system.
*   **Examples:** Log files (`/var/log`), spool directories for print jobs and mail (`/var/spool`), temporary files used by applications (`/var/tmp`).
*   **Think of it as:** A daily logbook or a temporary holding area for ongoing processes and events.

### `/tmp` (Temporary Files)

*   **Purpose:** Contains temporary files that are created by users and applications. These files are typically deleted upon system reboot.
*   **Think of it as:** A scratchpad or a short-term holding area for notes and temporary materials that you don't need to keep long-term.

### `/dev` (Device Files)

*   **Purpose:** Contains device files, which represent hardware devices attached to the system. These are not regular files but special files that allow the kernel to interact with hardware.
*   **Examples:** `/dev/sda` (first hard disk), `/dev/tty0` (console terminal), `/dev/null` (a black hole for discarding data).
*   **Think of it as:** The control panel and connection points for all your hardware.

### `/proc` (Process Information)

*   **Purpose:** A virtual file system that provides information about running processes and kernel status. It's dynamic and its contents change as processes start and stop.
*   **Think of it as:** A real-time dashboard showing what your system is actively doing.

### `/boot` (Boot Loader Files)

*   **Purpose:** Contains the files needed to boot the Linux system, including the kernel and initial RAM disk.
*   **Think of it as:** The ignition system and starting instructions for your car.

## Practical Navigation

You can use the `ls` command to explore these directories. For example:

*   `ls /` will list the top-level directories in the root.
*   `ls /etc` will show you the configuration files and subdirectories within `/etc`.
*   `cd /home/yourusername` will change your current directory to your home directory.

Understanding the FHS gives you a mental map of your Linux system. When you're looking for a specific configuration file, an executable program, or a user's personal data, knowing where to look significantly speeds up your workflow and troubleshooting efforts.

## Supports

- [[skills/cloud-devops/platform-engineering/linux-system/microskills/linux-file-system-hierarchy|Linux File System Hierarchy]]
