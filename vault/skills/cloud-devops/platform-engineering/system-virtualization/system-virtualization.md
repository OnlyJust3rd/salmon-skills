---
type: "Skill"
title: "System Virtualization"
tags:
  - "cpe"
  - "skill"
contributors:
  - "[[contributors/just3rd|just3rd]]"
competencies:
  - "[[skills/cloud-devops/platform-engineering/system-virtualization/competencies/L1-build-container-images|L1-build-container-images]]"
  - "[[skills/cloud-devops/platform-engineering/system-virtualization/competencies/L1-container-fundamentals|L1-container-fundamentals]]"
  - "[[skills/cloud-devops/platform-engineering/system-virtualization/competencies/L1-map-os-concepts-to-virtual-environments|L1-map-os-concepts-to-virtual-environments]]"
  - "[[skills/cloud-devops/platform-engineering/system-virtualization/competencies/L1-virtual-resource-management|L1-virtual-resource-management]]"
  - "[[skills/cloud-devops/platform-engineering/system-virtualization/competencies/L1-vm-vs-container-concepts|L1-vm-vs-container-concepts]]"
  - "[[skills/cloud-devops/platform-engineering/system-virtualization/competencies/L3-compare-hypervisor-use-cases|L3-compare-hypervisor-use-cases]]"
standard-competency:
  - "[[skills/cloud-devops/platform-engineering/system-virtualization/competencies/L3-compare-hypervisor-use-cases|L3-compare-hypervisor-use-cases]]"
microskills:
  - "[[skills/cloud-devops/platform-engineering/system-virtualization/microskills/application-dependency-packaging|application-dependency-packaging]]"
  - "[[skills/cloud-devops/platform-engineering/system-virtualization/microskills/consistent-environment-behavior|consistent-environment-behavior]]"
  - "[[skills/cloud-devops/platform-engineering/system-virtualization/microskills/container-architecture|container-architecture]]"
  - "[[skills/cloud-devops/platform-engineering/system-virtualization/microskills/container-image-building-process|container-image-building-process]]"
  - "[[skills/cloud-devops/platform-engineering/system-virtualization/microskills/container-image-structure|container-image-structure]]"
  - "[[skills/cloud-devops/platform-engineering/system-virtualization/microskills/containerization-principles|containerization-principles]]"
  - "[[skills/cloud-devops/platform-engineering/system-virtualization/microskills/dockerfile-construction|dockerfile-construction]]"
  - "[[skills/cloud-devops/platform-engineering/system-virtualization/microskills/dockerfile-instructions|dockerfile-instructions]]"
  - "[[skills/cloud-devops/platform-engineering/system-virtualization/microskills/hardware-virtualization|hardware-virtualization]]"
  - "[[skills/cloud-devops/platform-engineering/system-virtualization/microskills/hypervisor-performance-characteristics|hypervisor-performance-characteristics]]"
  - "[[skills/cloud-devops/platform-engineering/system-virtualization/microskills/isolation-mechanisms|isolation-mechanisms]]"
  - "[[skills/cloud-devops/platform-engineering/system-virtualization/microskills/linux-kernel-role-in-containers|linux-kernel-role-in-containers]]"
  - "[[skills/cloud-devops/platform-engineering/system-virtualization/microskills/os-level-virtualization-application|os-level-virtualization-application]]"
  - "[[skills/cloud-devops/platform-engineering/system-virtualization/microskills/os-level-virtualization|os-level-virtualization]]"
  - "[[skills/cloud-devops/platform-engineering/system-virtualization/microskills/resource-abstraction|resource-abstraction]]"
  - "[[skills/cloud-devops/platform-engineering/system-virtualization/microskills/type-1-hypervisor-architecture|type-1-hypervisor-architecture]]"
  - "[[skills/cloud-devops/platform-engineering/system-virtualization/microskills/type-1-use-cases|type-1-use-cases]]"
  - "[[skills/cloud-devops/platform-engineering/system-virtualization/microskills/type-2-hypervisor-architecture|type-2-hypervisor-architecture]]"
  - "[[skills/cloud-devops/platform-engineering/system-virtualization/microskills/type-2-use-cases|type-2-use-cases]]"
  - "[[skills/cloud-devops/platform-engineering/system-virtualization/microskills/virtual-cpu-allocation|virtual-cpu-allocation]]"
  - "[[skills/cloud-devops/platform-engineering/system-virtualization/microskills/virtual-cpu-mapping|virtual-cpu-mapping]]"
  - "[[skills/cloud-devops/platform-engineering/system-virtualization/microskills/virtual-disk-i-o-management|virtual-disk-i-o-management]]"
  - "[[skills/cloud-devops/platform-engineering/system-virtualization/microskills/virtual-disk-mapping|virtual-disk-mapping]]"
  - "[[skills/cloud-devops/platform-engineering/system-virtualization/microskills/virtual-environment-terminology|virtual-environment-terminology]]"
  - "[[skills/cloud-devops/platform-engineering/system-virtualization/microskills/virtual-machine-architecture|virtual-machine-architecture]]"
  - "[[skills/cloud-devops/platform-engineering/system-virtualization/microskills/virtual-memory-allocation|virtual-memory-allocation]]"
  - "[[skills/cloud-devops/platform-engineering/system-virtualization/microskills/virtual-memory-mapping|virtual-memory-mapping]]"
  - "[[skills/cloud-devops/platform-engineering/system-virtualization/microskills/virtual-network-management|virtual-network-management]]"
  - "[[skills/cloud-devops/platform-engineering/system-virtualization/microskills/virtual-network-mapping|virtual-network-mapping]]"
---

# System Virtualization

Describe how traditional OS concepts (CPU, memory, disk, network) are mapped to virtual environments. Differentiate between hardware virtualization (virtual machines) and OS-level virtualization (containers). Compare Type-1 bare-metal hypervisors (e.g., Proxmox, VMware ESXi) versus Type-2 hosted hypervisors (e.g., VMware Workstation). Explain the concept of containers for packaging applications and their dependencies for consistent behavior across different environments. Describe the Linux kernel mechanics and the layered structure of Docker images.

## Competencies

- [[skills/cloud-devops/platform-engineering/system-virtualization/competencies/L1-map-os-concepts-to-virtual-environments|L2- Map OS Concepts to Virtual Environments]]
- [[skills/cloud-devops/platform-engineering/system-virtualization/competencies/L1-virtual-resource-management|L2- Virtual Resource Management]]
- [[skills/cloud-devops/platform-engineering/system-virtualization/competencies/L1-vm-vs-container-concepts|L2- VM vs. Container Concepts]]
- [[skills/cloud-devops/platform-engineering/system-virtualization/competencies/L3-compare-hypervisor-use-cases|L4- Compare Hypervisor Use Cases]]
- [[skills/cloud-devops/platform-engineering/system-virtualization/competencies/L1-container-fundamentals|L2- Container Fundamentals]]
- [[skills/cloud-devops/platform-engineering/system-virtualization/competencies/L1-build-container-images|L2- Build Container Images]]

## Microskills

- [[skills/cloud-devops/platform-engineering/system-virtualization/microskills/application-dependency-packaging|Application Dependency Packaging]]
- [[skills/cloud-devops/platform-engineering/system-virtualization/microskills/consistent-environment-behavior|Consistent Environment Behavior]]
- [[skills/cloud-devops/platform-engineering/system-virtualization/microskills/container-architecture|Container Architecture]]
- [[skills/cloud-devops/platform-engineering/system-virtualization/microskills/container-image-building-process|Container Image Building Process]]
- [[skills/cloud-devops/platform-engineering/system-virtualization/microskills/container-image-structure|Container Image Structure]]
- [[skills/cloud-devops/platform-engineering/system-virtualization/microskills/containerization-principles|Containerization Principles]]
- [[skills/cloud-devops/platform-engineering/system-virtualization/microskills/dockerfile-construction|Dockerfile Construction]]
- [[skills/cloud-devops/platform-engineering/system-virtualization/microskills/dockerfile-instructions|Dockerfile Instructions]]
- [[skills/cloud-devops/platform-engineering/system-virtualization/microskills/hardware-virtualization|Hardware Virtualization]]
- [[skills/cloud-devops/platform-engineering/system-virtualization/microskills/hypervisor-performance-characteristics|Hypervisor Performance Characteristics]]
- [[skills/cloud-devops/platform-engineering/system-virtualization/microskills/isolation-mechanisms|Isolation Mechanisms]]
- [[skills/cloud-devops/platform-engineering/system-virtualization/microskills/linux-kernel-role-in-containers|Linux Kernel Role in Containers]]
- [[skills/cloud-devops/platform-engineering/system-virtualization/microskills/os-level-virtualization|OS-Level Virtualization]]
- [[skills/cloud-devops/platform-engineering/system-virtualization/microskills/os-level-virtualization-application|OS-Level Virtualization Application]]
- [[skills/cloud-devops/platform-engineering/system-virtualization/microskills/resource-abstraction|Resource Abstraction]]
- [[skills/cloud-devops/platform-engineering/system-virtualization/microskills/type-1-hypervisor-architecture|Type-1 Hypervisor Architecture]]
- [[skills/cloud-devops/platform-engineering/system-virtualization/microskills/type-1-use-cases|Type-1 Use Cases]]
- [[skills/cloud-devops/platform-engineering/system-virtualization/microskills/type-2-hypervisor-architecture|Type-2 Hypervisor Architecture]]
- [[skills/cloud-devops/platform-engineering/system-virtualization/microskills/type-2-use-cases|Type-2 Use Cases]]
- [[skills/cloud-devops/platform-engineering/system-virtualization/microskills/virtual-cpu-allocation|Virtual CPU Allocation]]
- [[skills/cloud-devops/platform-engineering/system-virtualization/microskills/virtual-cpu-mapping|Virtual CPU Mapping]]
- [[skills/cloud-devops/platform-engineering/system-virtualization/microskills/virtual-disk-i-o-management|Virtual Disk I/O Management]]
- [[skills/cloud-devops/platform-engineering/system-virtualization/microskills/virtual-disk-mapping|Virtual Disk Mapping]]
- [[skills/cloud-devops/platform-engineering/system-virtualization/microskills/virtual-environment-terminology|Virtual Environment Terminology]]
- [[skills/cloud-devops/platform-engineering/system-virtualization/microskills/virtual-machine-architecture|Virtual Machine Architecture]]
- [[skills/cloud-devops/platform-engineering/system-virtualization/microskills/virtual-memory-allocation|Virtual Memory Allocation]]
- [[skills/cloud-devops/platform-engineering/system-virtualization/microskills/virtual-memory-mapping|Virtual Memory Mapping]]
- [[skills/cloud-devops/platform-engineering/system-virtualization/microskills/virtual-network-management|Virtual Network Management]]
- [[skills/cloud-devops/platform-engineering/system-virtualization/microskills/virtual-network-mapping|Virtual Network Mapping]]
