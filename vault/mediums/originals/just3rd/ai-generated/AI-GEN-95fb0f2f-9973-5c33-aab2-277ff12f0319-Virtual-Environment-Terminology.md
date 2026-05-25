---
type: "medium"
title: "Virtual Environment Terminology"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/compute-runtime/system-virtualization/microskills/virtual-environment-terminology|virtual-environment-terminology]]"
learning-time-in-minutes: 4
---
# Virtual Environment Terminology

In the world of system virtualization, we often use specific terms to describe the components and concepts involved. Understanding these terms is crucial for comprehending how operating system concepts are mapped to virtual environments. This lesson focuses on the key vocabulary you'll encounter.

## Core Concepts in Virtualization

Virtualization allows us to run multiple operating systems and applications on a single physical machine. To do this effectively, we create a layer of abstraction that separates the virtual environments from the underlying hardware.

### Key Terms You Need to Know

Let's break down some of the most important terms:

*   **Host Machine (or Host System):** This is the actual physical computer that runs the virtualization software. It's the machine with the real CPU, RAM, storage, and network interfaces. Think of it as the "parent" machine.

*   **Guest Machine (or Guest System):** This is the virtual computer that runs *on* the host machine. Each guest machine has its own operating system and applications, completely isolated from other guests and the host. You can have multiple guest machines on a single host.

*   **Virtual Machine (VM):** This is another term for a guest machine. It's the software-based emulation of a physical computer.

*   **Hypervisor (or Virtual Machine Monitor - VMM):** This is the software, firmware, or hardware that creates and runs virtual machines. It's the core component that manages the host system's resources and allocates them to the guest machines. There are two main types:
    *   **Type 1 Hypervisor (Bare-metal):** These run directly on the host hardware, without an underlying operating system. Examples include VMware ESXi, Microsoft Hyper-V (when installed as a standalone server), and Xen.
    *   **Type 2 Hypervisor (Hosted):** These run as an application on top of a conventional operating system (like Windows, macOS, or Linux). Examples include VMware Workstation, Oracle VirtualBox, and Parallels Desktop.

*   **Virtualization Platform:** This refers to the entire software stack that enables virtualization, often encompassing the hypervisor and management tools.

*   **Virtual Hardware:** This refers to the simulated hardware components presented to a guest operating system. When you create a VM, you configure its virtual CPU, virtual RAM, virtual disk, and virtual network interfaces. These are not physical components but are mapped by the hypervisor to the host's physical resources.

*   **Virtual Disk:** This is a file on the host machine that acts as the hard drive for a guest machine. Common formats include `.vmdk` (VMware), `.vdi` (VirtualBox), and `.vhdx` (Hyper-V).

*   **Virtual Network Interface Card (vNIC):** This is a virtual representation of a network adapter that allows a guest machine to communicate over a network. The hypervisor manages how these vNICs connect to the host's physical network interfaces or to other virtual networks.

*   **Snapshot:** This is a point-in-time copy of a virtual machine's state, including its disk contents, memory, and configuration. Snapshots are incredibly useful for backing up a VM before making significant changes or for reverting to a previous working state.

*   **Guest OS:** The operating system installed and running *inside* a virtual machine.

*   **Host OS:** The operating system running on the physical host machine, if a Type 2 hypervisor is used.

### How These Terms Relate to OS Concepts

When we talk about mapping OS concepts to virtual environments, these terms become our building blocks:

*   **CPU:** The guest OS sees a **virtual CPU**. The hypervisor allocates time slices of the **host machine's** physical CPU cores to the virtual CPUs of the guest VMs.

*   **Memory:** The guest OS requests and uses **virtual RAM**. The hypervisor reserves a portion of the **host machine's** physical RAM for each VM.

*   **Disk:** The guest OS interacts with a **virtual disk**, which is essentially a large file (or set of files) residing on the **host machine's** storage.

*   **Network:** The guest OS uses a **vNIC**, which the hypervisor configures to connect to the **host machine's** physical network hardware or to isolated virtual networks.

By understanding these fundamental terms, you'll be well-equipped to grasp how traditional operating system components are represented and managed within a virtualized infrastructure.

## Supports

- [[skills/computing/systems-infrastructure/compute-runtime/system-virtualization/microskills/virtual-environment-terminology|Virtual Environment Terminology]]
