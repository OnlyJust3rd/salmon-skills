---
type: "medium"
title: "Virtual Disk Mapping: Understanding Storage in Virtual Machines"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/cloud-devops/platform-engineering/system-virtualization/microskills/virtual-disk-mapping|Virtual Disk Mapping]]"
---
# Virtual Disk Mapping: Understanding Storage in Virtual Machines

When we talk about virtualizing a system, one of the fundamental aspects we need to understand is how storage works. This lesson focuses on **Virtual Disk Mapping**, which is crucial for understanding how physical storage is presented to virtual machines (VMs). This is a key part of mapping operating system (OS) concepts to virtual environments.

## Core Idea: Abstraction of Storage

In a traditional physical system, the OS directly interacts with physical hard drives, SSDs, or other storage devices. It manages partitions, file systems, and data. In a virtual environment, this direct interaction is abstracted. The hypervisor, the software that creates and runs VMs, is responsible for presenting virtual storage devices to the guest OS running inside the VM.

The guest OS believes it's interacting with a physical disk, but in reality, it's communicating with a virtual disk file or a logical unit number (LUN) that the hypervisor manages.

## How it Works: Virtual Disk Files

The most common way to map storage to a VM is by using **virtual disk files**. These are special files that reside on the host machine's physical storage and act as the "hard drive" for the VM. The guest OS sees these files as actual disks.

### Common Virtual Disk File Formats

Different virtualization platforms use different file formats:

*   **VMDK (Virtual Machine Disk):** Used by VMware products.
*   **VHD/VHDX (Virtual Hard Disk):** Used by Microsoft Hyper-V and Virtual PC.
*   **QCOW2 (QEMU Copy-On-Write Version 2):** Widely used with KVM and QEMU.

These formats are essentially containers that hold the data that the guest OS writes.

### Key Virtual Environment Terms

*   **Host Machine:** The physical computer running the hypervisor.
*   **Guest OS:** The operating system running *inside* the virtual machine.
*   **Hypervisor:** The software layer that creates and manages VMs.
*   **Virtual Disk File:** A file on the host that emulates a physical disk for the VM.
*   **Datastore:** In VMware environments, a logical storage repository where virtual disk files and other VM files are stored.

## Types of Virtual Disk Provisioning

When you create a virtual disk, you have choices about how the storage is managed. These choices impact performance, disk space usage, and how the virtual disk file grows.

### 1. Thick Provisioning

With thick provisioning, the entire space allocated for the virtual disk is reserved on the host's physical storage from the moment the virtual disk is created.

*   **Lazy Zeroed:** Space is allocated, but the blocks are only zeroed out (cleaned) when data is first written to them by the guest OS. This is faster to create but can have a slight performance impact on the first write to a block.
*   **Eager Zeroed:** Space is allocated, and all blocks are immediately zeroed out. This is slower to create but offers the best performance for the guest OS as all blocks are pre-initialized.

**When to Use Thick Provisioning:**
*   When you need predictable performance.
*   When you want to ensure sufficient space is immediately available to prevent out-of-space errors on the host.
*   For critical production workloads where performance is paramount.

### 2. Thin Provisioning

With thin provisioning, the virtual disk file starts small and grows dynamically as data is written by the guest OS. Only the space that is actually used by the guest OS is consumed on the host's physical storage.

**When to Use Thin Provisioning:**
*   When storage space on the host is limited, and you want to maximize its utilization.
*   For development, testing, or non-critical workloads where growth is gradual.
*   To avoid over-provisioning storage.

**Important Consideration for Thin Provisioning:**
You must monitor the *actual* used space within the thin-provisioned virtual disk. If the guest OS fills up the virtual disk, and there's no more physical space available on the host (or its datastore), the VM can crash or experience severe performance issues. Tools exist to "unmap" or "trim" unused blocks from thin-provisioned disks, reclaiming space on the host.

## Example Scenario

Imagine you are setting up a new web server VM.

1.  **Physical Storage:** Your host machine has a 1TB SSD.
2.  **Hypervisor:** You are using VMware ESXi.
3.  **Datastore:** You have configured a datastore on your 1TB SSD.
4.  **Virtual Machine:** You create a new VM for your web server.
5.  **Virtual Disk Creation:** You decide to create a virtual disk for the web server's operating system and application data.
    *   **Option A (Thick Provisioning - Lazy Zeroed):** You allocate 100GB for the virtual disk. A 100GB VMDK file is created on the datastore, but initially, it might only consume a few megabytes. As the OS installs and writes data, the file grows up to 100GB.
    *   **Option B (Thin Provisioning):** You allocate 100GB for the virtual disk. The VMDK file starts very small, perhaps a few megabytes. As the OS installs and data is written, the VMDK file on the datastore will grow, but it will never exceed 100GB, and it will only take up the space that is actually used by the guest OS.

The guest OS on your web server VM will see a 100GB hard drive, regardless of whether you chose thick or thin provisioning. It's the hypervisor's job to manage the underlying physical storage.

Understanding virtual disk mapping is fundamental to managing storage resources effectively in a virtualized environment, ensuring your VMs have the storage they need while optimizing the use of your physical hardware.

## Supports

- [[skills/cloud-devops/platform-engineering/system-virtualization/microskills/virtual-disk-mapping|Virtual Disk Mapping]]
