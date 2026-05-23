---
type: "medium"
title: "Intradomain Routing: Navigating Within Your Network"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/networking/routing-algorithms/microskills/intradomain-routing|intradomain-routing]]"
learning-time-in-minutes: 4
---
# Intradomain Routing: Navigating Within Your Network

In the world of computer networks, efficiently directing data packets from their source to their destination is crucial. We've discussed how to differentiate between routing *within* a single network and routing *between* different networks. This lesson focuses on **Intradomain Routing**, the practice of routing packets solely within the boundaries of a single, managed network. Think of it as navigating within your own neighborhood.

## What is an Autonomous System (AS)?

Before diving deeper into intradomain routing, it's important to understand the concept of an **Autonomous System (AS)**.

> An Autonomous System (AS) is a collection of IP networks and routers that are under the control of a single administrative entity and present a common routing policy to the internet.

Examples of ASs include:
*   An Internet Service Provider (ISP) network.
*   A large corporate network.
*   A university campus network.

When we talk about intradomain routing, we are specifically referring to the routing protocols and mechanisms used *inside* one of these ASs.

## The Goal of Intradomain Routing

The primary goal of intradomain routing is to find the **best path** for data packets to travel from a source device to a destination device *within the same AS*. What constitutes the "best path" can vary but usually involves factors like:
*   **Shortest Path:** The path with the fewest hops (routers).
*   **Lowest Cost:** Based on metrics like bandwidth, delay, or reliability, often assigned by network administrators.
*   **Least Congestion:** Avoiding heavily utilized links.

## How Intradomain Routing Works: Key Concepts

Intradomain routing protocols operate by exchanging information about the network's topology and link states among routers within the AS. Routers use this information to build their routing tables, which are like road maps for directing traffic.

Two main categories of intradomain routing protocols exist:

### 1. Distance-Vector Routing Protocols

In distance-vector routing, each router advertises its distance (or cost) to every other network *to its directly connected neighbors*. The neighbors then use this information to update their own routing tables.

**Key Characteristics:**
*   **"Routers tell their neighbors what they know."**
*   **Information Exchange:** Routers send their entire routing table (or relevant parts) to their neighbors periodically or when a change occurs.
*   **Metric:** Typically hop count.
*   **Convergence:** Can be slower. Routers need to receive updates from multiple neighbors to confirm path information.
*   **Potential Issues:**
    *   **Count-to-Infinity:** A scenario where routing loops can occur if not handled properly.
    *   **Periodic Updates:** Can consume bandwidth.

**Example Protocols:**
*   **RIP (Routing Information Protocol):** One of the oldest distance-vector protocols, often used in smaller networks. It uses hop count as its metric.
*   **EIGRP (Enhanced Interior Gateway Routing Protocol):** A Cisco proprietary protocol that combines aspects of both distance-vector and link-state protocols.

### 2. Link-State Routing Protocols

In link-state routing, each router builds a complete map of the network's topology. It does this by sending out information about its own directly connected links and the state of those links (e.g., whether they are up or down, and their cost) to *all other routers* in the AS.

**Key Characteristics:**
*   **"Routers tell everyone what they know about their links."**
*   **Information Exchange:** Routers flood Link-State Advertisements (LSAs) or Link-State Packets (LSPs) throughout the network.
*   **Algorithm:** Each router independently runs an algorithm (like Dijkstra's algorithm) on the collected link-state information to calculate the shortest path to every destination.
*   **Convergence:** Generally faster than distance-vector, as all routers have a complete view of the network.
*   **Metric:** Can be more flexible, often based on bandwidth, delay, or administrator-defined costs.
*   **Resource Intensive:** Requires more CPU and memory on routers to store the topology map and run algorithms.

**Example Protocols:**
*   **OSPF (Open Shortest Path First):** A widely used link-state protocol. It divides large networks into areas to manage complexity.
*   **IS-IS (Intermediate System to Intermediate System):** Another robust link-state protocol, often used by ISPs.

## Intradomain vs. Interdomain Routing: A Quick Recap

It's helpful to reinforce the distinction:

| Feature           | Intradomain Routing                         | Interdomain Routing                              |
| :---------------- | :------------------------------------------ | :----------------------------------------------- |
| **Scope**         | Within a single Autonomous System (AS)      | Between different Autonomous Systems (ASs)       |
| **Protocols**     | OSPF, EIGRP, RIP, IS-IS                     | BGP (Border Gateway Protocol)                    |
| **Policy Focus**  | Efficiency, speed, reliability within the AS | Policy-based routing, business relationships     |
| **Decision Basis**| Network topology, link cost, bandwidth      | AS path, network reachability, policy agreements |

## Why Understand Intradomain Routing?

Understanding intradomain routing is fundamental for anyone working with networks. It allows you to:
*   **Design efficient network topologies.**
*   **Troubleshoot connectivity issues** within your own network.
*   **Configure routers** to optimize traffic flow.
*   **Grasp the foundation** upon which interdomain routing (like BGP) builds.

In essence, mastering intradomain routing means you can confidently manage and direct traffic within the confines of your own digital territory.

## Supports

- [[skills/computing/systems-infrastructure/networking/routing-algorithms/microskills/intradomain-routing|Intradomain Routing]]
