---
type: medium
title: Network Topology for Interconnection
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[network-topology-for-interconnection|network-topology-for-interconnection]]"
learning-time-in-minutes: 4
---
# Network Topology for Interconnection

Understanding how to connect Local Area Networks (LANs) is crucial for building larger, more capable networks. This lesson focuses on the fundamental concepts of network topology as they apply to interconnecting LANs. By understanding these basic structures, you'll be able to grasp how devices and networks communicate across larger distances.

### Why Interconnect LANs?

Imagine you have multiple departments within a company, each with its own LAN. To share resources like printers, servers, or to allow communication between departments, these individual LANs need to be connected. This interconnection allows for a seamless flow of data, making the overall network more efficient and functional.

### Key Concepts in LAN Interconnection Topologies

When we talk about interconnecting LANs, we're essentially defining the physical or logical arrangement of these connections. While many complex topologies exist for wide-area networks, at the LAN interconnection level, we often see these fundamental concepts at play:

*   **Bus Topology (Less Common for Interconnection):** In a pure bus topology, all devices share a single communication line. While simple for a single LAN, extending this to interconnect multiple LANs becomes inefficient and prone to collisions. It's rarely used for modern LAN interconnection.

*   **Star Topology (Common within a LAN, basis for interconnection):** In a star topology, all devices connect to a central hub or switch. For LAN interconnection, this central device acts as the focal point. Multiple LANs can connect to a central router or switch, which then directs traffic between them.

*   **Mesh Topology (Full vs. Partial):**
    *   **Full Mesh:** Every device is directly connected to every other device. This is highly redundant but very expensive and complex to implement, especially for large networks.
    *   **Partial Mesh:** Some devices are connected to multiple other devices, but not all. This offers a balance between redundancy and cost, and is more practical for interconnecting multiple LANs where certain connections are more critical.

*   **Ring Topology (Less Common for Interconnection):** Devices are connected in a circular fashion, with data passing from one to the next. Similar to bus, it's less efficient for complex interconnection scenarios.

*   **Hybrid Topology:** This is the most common approach in real-world scenarios. It combines elements of different topologies to achieve specific goals. For instance, you might have multiple star-shaped LANs connected via a partial mesh backbone.

### Practical Example: Connecting Departmental LANs

Consider a small company with three departments: Sales, Engineering, and HR. Each department has its own LAN.

*   **Sales LAN:** Uses a switch.
*   **Engineering LAN:** Uses a switch.
*   **HR LAN:** Uses a switch.

To allow these departments to communicate and share a central server located in Engineering, we can interconnect them using a central router.

**Scenario:**

1.  Each departmental switch connects to a central router.
2.  The router acts as the gateway for traffic between the LANs.
3.  The central server in Engineering is also connected to the Engineering switch, making it accessible to other departments through the router.

This setup utilizes a hybrid topology: each departmental LAN is a star topology (devices to switch), and the connection of these LANs to the central router forms a star-like connection to the router. If we had a secondary connection between the Sales and HR LANs for faster direct communication, it would introduce elements of a partial mesh.

### Practice Task

Imagine you are tasked with connecting two small office LANs that need to share files and printers. One office has 10 computers, and the other has 15.

1.  Draw a diagram illustrating how you would connect these two LANs using a router.
2.  Identify the type of topology you have predominantly used for interconnecting the LANs.

### Self-Check Questions

1.  Which network topology is generally considered too complex and expensive for interconnecting more than a few LANs?
2.  What is the primary advantage of using a hybrid topology for LAN interconnection?
3.  In the departmental LAN example, what device acts as the central point for directing traffic between the Sales, Engineering, and HR LANs?

## Supports

- [[network-topology-for-interconnection|Network Topology for Interconnection]]
