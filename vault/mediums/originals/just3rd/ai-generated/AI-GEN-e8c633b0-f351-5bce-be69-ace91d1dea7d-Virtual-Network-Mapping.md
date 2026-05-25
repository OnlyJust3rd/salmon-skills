---
type: "medium"
title: "Virtual Network Mapping"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/compute-runtime/system-virtualization/microskills/virtual-network-mapping|virtual-network-mapping]]"
learning-time-in-minutes: 5
---
# Virtual Network Mapping

In system virtualization, understanding how the network is handled is crucial. This lesson focuses on how physical network interfaces are virtualized, allowing virtual machines (VMs) to communicate. This knowledge helps us map traditional networking concepts to the virtual environment.

## What is Virtual Network Mapping?

At its core, virtual network mapping is the process of translating the physical network capabilities of a host machine into virtual network components that VMs can use. Instead of each VM having its own dedicated physical network card, virtualization software creates virtual network interfaces (vNICs) for each VM. These vNICs then connect to virtual switches, which in turn are linked to the host's physical network interface card(s) (NICs).

### Key Terms:

*   **Physical NIC (pNIC):** The actual network interface card installed in the host server. This is what connects your server to the physical network.
*   **Virtual NIC (vNIC):** A software-based representation of a network interface card within a virtual machine. Each VM gets one or more vNICs.
*   **Virtual Switch (vSwitch):** A software program that functions like a physical network switch. It connects multiple vNICs together and allows them to communicate with each other and with the physical network.
*   **Virtual Machine (VM):** An emulated computer system that runs on top of a host operating system, sharing the host's hardware resources.

## How Physical NICs Become Virtual

Imagine a physical network switch. It has multiple ports where you plug in network cables. Devices connected to the same switch can communicate. A virtual switch operates similarly but entirely in software.

Here's a simplified breakdown of the mapping process:

1.  **Host's Physical NIC:** The host server has one or more physical NICs that are connected to the external physical network (e.g., your office network, the internet).
2.  **Virtualization Software:** The hypervisor (the software that creates and runs VMs, like VMware ESXi, Microsoft Hyper-V, or KVM) manages the host's resources.
3.  **Virtual Switch Creation:** The hypervisor creates one or more virtual switches. These vSwitches exist within the hypervisor's memory and are responsible for managing network traffic for the VMs.
4.  **Connecting vNICs to vSwitch:** When you create a VM and configure its network adapter, you're essentially creating a vNIC for that VM. This vNIC is then connected to a specific port on one of the vSwitches.
5.  **vSwitch to pNIC Bridging:** The vSwitch needs to send traffic out to the physical network and receive traffic from it. This is achieved by "binding" or "associating" the vSwitch to one or more of the host's physical NICs. Traffic destined for the external network from a VM's vNIC will be sent by the vSwitch to the host's pNIC. Similarly, traffic arriving at the pNIC from the physical network will be directed by the vSwitch to the appropriate VM's vNIC.

### Analogy:

Think of the host's physical NIC as the main road leading out of your neighborhood. The virtual switches are like smaller internal roads and intersections within your neighborhood. Each house (VM) has its own driveway (vNIC) connecting to these internal roads. When you want to go somewhere outside the neighborhood, your car (network traffic) travels from your driveway to the internal roads, then to the main road, and out.

## Types of Virtual Network Connections

Virtual switches offer flexibility. They can be configured to allow VMs to communicate in different ways:

*   **Internal Network:** VMs connected to the same vSwitch can communicate with each other, but they cannot reach the external physical network. This is useful for creating isolated lab environments or for multi-tier applications where internal communication is key.
*   **External Network (Bridged Mode):** The vSwitch is bridged to a physical NIC. This allows VMs to appear as if they are directly connected to the physical network, getting their own IP addresses from the same subnet as the host and other physical machines.
*   **NAT (Network Address Translation):** The vSwitch uses NAT to allow VMs to access the external network. The VMs use private IP addresses, and the vSwitch translates these to the host's IP address when traffic goes out. This is common when you don't want or can't assign public IP addresses directly to VMs, or for creating isolated networks.

## Practical Implications

Understanding virtual network mapping is vital for:

*   **Troubleshooting Network Issues:** If a VM can't connect to the network, you need to check its vNIC configuration, the vSwitch it's connected to, and the binding of that vSwitch to the physical NIC.
*   **Network Design:** Deciding how many vSwitches to create and how to connect them to physical NICs impacts network performance, security, and isolation.
*   **Performance Optimization:** Properly configuring vSwitches and NIC teaming (using multiple physical NICs for redundancy and increased bandwidth) can significantly improve network throughput for your VMs.

By grasping these concepts, you can effectively manage and utilize the network resources within your virtualized environment, ensuring your VMs can communicate reliably and efficiently.

## Supports

- [[skills/computing/systems-infrastructure/compute-runtime/system-virtualization/microskills/virtual-network-mapping|Virtual Network Mapping]]
