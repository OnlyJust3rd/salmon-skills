---
type: "medium"
title: "Network Segmentation with VLANs"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/systems/networking/network-layer/microskills/network-segmentation|Network Segmentation]]"
  - "[[skills/systems/networking/routing-and-switching/microskills/network-segmentation|Network Segmentation]]"
---
# Network Segmentation with VLANs

In the world of networking, efficiently managing traffic and enhancing security is paramount. A fundamental technique for achieving this is **network segmentation**. This lesson focuses on understanding how Virtual Local Area Networks (VLANs) enable this segmentation.

## What is Network Segmentation?

Network segmentation is the practice of dividing a computer network into smaller, isolated subnetworks. Imagine a large office building. Instead of having everyone's desk in one giant room, you have different departments on different floors or in separate wings. This makes it easier to manage resources, control access, and prevent issues in one area from affecting others. In networking terms, segmentation achieves similar goals:

*   **Improved Performance:** By limiting broadcast traffic to specific segments, you reduce congestion and improve overall network speed.
*   **Enhanced Security:** Isolating sensitive data or devices in separate segments makes it harder for unauthorized users or malware to spread across the entire network.
*   **Simplified Management:** Managing smaller, defined segments is often easier than managing one large, flat network.

## Introducing VLANs

A **VLAN (Virtual Local Area Network)** is a logical grouping of network devices that are configured to communicate as if they were on the same physical network, even if they are physically connected to different switches. VLANs allow you to segment a single physical network into multiple logical broadcast domains.

Think of it like this: You have one large Ethernet switch. Without VLANs, all devices connected to that switch are in the same broadcast domain. If one device sends a broadcast message (like an ARP request), all other devices on the switch will receive it.

With VLANs, you can assign different ports on the switch to different VLANs. For example:

*   Ports 1-8 could be in VLAN 10 (e.g., for the Sales department).
*   Ports 9-16 could be in VLAN 20 (e.g., for the Engineering department).

Now, devices in VLAN 10 can only communicate directly with other devices in VLAN 10. Likewise, devices in VLAN 20 can only communicate with devices in VLAN 20. A broadcast sent by a device in VLAN 10 will *only* be seen by other devices in VLAN 10.

## How VLANs Work

VLANs are implemented at Layer 2 (the Data Link Layer) of the OSI model. The key to VLAN functionality is **tagging**. When a data frame is sent between switches that are configured to support VLANs, a special tag is added to the frame. This tag indicates which VLAN the frame belongs to.

### The 802.1Q Tag

The most common standard for VLAN tagging is **IEEE 802.1Q**. When a frame enters a switch port that is part of a VLAN and needs to traverse a link to another switch (a trunk link), the switch adds a 4-byte tag to the Ethernet header. This tag contains information, including the VLAN ID.

Here’s a simplified look at what an 802.1Q tag adds:

*   **TPID (Tag Protocol Identifier):** Identifies the frame as an 802.1Q tagged frame.
*   **TCI (Tag Control Information):** Contains the Priority Code Point (PCP) for Quality of Service (QoS) and the **VLAN ID (VID)**. The VID is the crucial part that tells the receiving switch which VLAN the frame belongs to.

When the frame arrives at the next switch, the switch reads the VLAN ID from the tag. It then determines if the destination port is in the same VLAN. If it is, the tag is removed, and the frame is forwarded to the appropriate port. If the destination port is in a different VLAN, the frame is dropped (unless a router is involved to facilitate inter-VLAN routing).

### Access Ports vs. Trunk Ports

Switches use different types of ports for VLANs:

*   **Access Ports:** These ports are assigned to a *single* VLAN. Devices connected to access ports (like a PC or a printer) are considered members of that VLAN. Frames entering or leaving an access port are typically untagged, as the switch knows the VLAN context of the port.
*   **Trunk Ports:** These ports are designed to carry traffic for *multiple* VLANs simultaneously. They are used to connect switches together or to connect a switch to a router. Trunk ports use VLAN tagging (like 802.1Q) to identify which VLAN each frame belongs to.

## Benefits of VLANs

*   **Reduced Broadcast Domain Size:** Limits the scope of broadcast traffic, leading to better network performance.
*   **Increased Security:** Isolates traffic between departments or user groups, preventing unauthorized access and limiting the impact of security breaches.
*   **Flexibility:** Devices can be grouped into VLANs logically, regardless of their physical location on the network. This makes moves, adds, and changes much easier.
*   **Cost Savings:** Allows a single physical infrastructure to support multiple logical networks, reducing the need for additional hardware.

## Key Takeaways

*   Network segmentation divides a network into smaller, manageable, and more secure zones.
*   VLANs are a Layer 2 technology that provides logical network segmentation on a single physical network infrastructure.
*   VLANs group devices into broadcast domains that are separate from other VLANs, even if they share the same physical switch.
*   The 802.1Q standard is commonly used to tag frames with their respective VLAN IDs, allowing switches to identify and forward traffic correctly.
*   Access ports are assigned to a single VLAN, while trunk ports carry traffic for multiple VLANs using tagging.

Understanding VLANs is a crucial step in mastering network routing and switching, enabling you to design and manage more efficient, secure, and flexible networks.

## Supports

- [[skills/systems/networking/network-layer/microskills/network-segmentation|Network Segmentation]]
- [[skills/systems/networking/routing-and-switching/microskills/network-segmentation|Network Segmentation]]
