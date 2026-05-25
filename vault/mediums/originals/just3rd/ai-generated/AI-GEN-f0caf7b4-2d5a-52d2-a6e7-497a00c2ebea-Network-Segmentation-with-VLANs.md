---
type: medium
title: Network Segmentation with VLANs
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[network-segmentation-with-vlans|network-segmentation-with-vlans]]"
related-skills:
  - "[[skills/computing/systems-infrastructure/computer-network/data-link-layer/data-link-layer|data-link-layer]]"
learning-time-in-minutes: 3
---
# Network Segmentation with VLANs

VLANs, or Virtual Local Area Networks, allow you to divide a single physical network into multiple logical networks. Think of it like creating separate departments within a single office building, each with its own communication channels and security. This segmentation is a key function of the Data Link Layer, helping to manage traffic and improve network performance.

## What is Network Segmentation with VLANs?

Normally, all devices connected to the same switch are in the same broadcast domain. This means that if one device sends a broadcast message (like an ARP request), every other device on that switch receives it. As networks grow, this can lead to excessive broadcast traffic, slowing down the network.

VLANs solve this by allowing you to assign ports on a switch to specific VLANs. Devices in one VLAN can communicate with each other, but they cannot directly communicate with devices in another VLAN unless a router is involved to route traffic between them. This creates smaller, more manageable broadcast domains.

## Practical Scenario: A Small Business Network

Imagine a small business with 50 employees. They have a single physical switch connecting everyone. The employees can be broadly categorized into three groups:

1.  **Sales Team:** Needs access to the CRM and sales reports.
2.  **Engineering Team:** Needs access to development servers and design software.
3.  **Administration Team:** Handles HR, finance, and general office tasks.

Without VLANs, all 50 devices share the same network. If the Engineering team initiates a large file transfer, it could impact the performance of the Sales team accessing the CRM. Also, a security breach on one workstation could potentially affect all devices on the network more easily.

### Implementing VLANs

We can use VLANs to segment this network logically:

*   **VLAN 10: Sales**
*   **VLAN 20: Engineering**
*   **VLAN 30: Administration**

We would configure the switch to assign ports connected to Sales team computers to VLAN 10, Engineering team computers to VLAN 20, and Administration team computers to VLAN 30.

Now, broadcast traffic originating from a Sales team computer will only be seen by other devices in VLAN 10. This significantly reduces unnecessary network traffic for the Engineering and Administration teams. If a security issue arises within the Sales team, it's contained within VLAN 10, making it harder to spread to other departments.

### Benefits of VLANs

*   **Improved Performance:** By reducing broadcast domains, VLANs lessen network congestion and improve overall speed.
*   **Enhanced Security:** VLANs isolate traffic between different groups of users or devices, limiting the impact of security breaches and controlling access to specific resources.
*   **Increased Flexibility:** Network changes, like moving an employee to a different department, can be handled by simply reassigning their switch port to a different VLAN, rather than physically re-cabling.
*   **Better Network Management:** Segmentation makes it easier to manage and troubleshoot network issues for specific groups of users.

## Practice Task

Consider a school network with a single switch. You have computers in the "Library" (for student research) and "Computer Lab" (for teacher instruction).

1.  How would you use VLANs to segment these two areas?
2.  What would be the primary benefit of doing this for the "Library" users?

## Self-Check Questions

1.  What is the main purpose of a VLAN in a network?
2.  If a device in VLAN 10 sends a broadcast message, which other devices will receive it?
3.  Besides performance, what is another significant advantage of using VLANs?
4.  Can devices in different VLANs communicate directly with each other without any additional equipment?

## Supports

- [[network-segmentation-with-vlans|Network Segmentation with VLANs]]
