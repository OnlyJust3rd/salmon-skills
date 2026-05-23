---
type: "medium"
title: "Interdomain Routing: Navigating the Internet's Highways"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/networking/routing-algorithms/microskills/interdomain-routing|interdomain-routing]]"
learning-time-in-minutes: 4
---
# Interdomain Routing: Navigating the Internet's Highways

In the vast landscape of the internet, data doesn't just travel within a single network. It often needs to hop between different, independently managed networks. This is where **interdomain routing** comes into play. As part of understanding routing algorithms, it's crucial to grasp how information journeys across these boundaries.

## What is Interdomain Routing?

Imagine the internet as a global network of interconnected cities. Each city represents an **Autonomous System (AS)**. An AS is a collection of IP networks and routers operated by a single entity (like an Internet Service Provider or a large organization) that has a clearly defined routing policy and presents a common routing externally to other ASs.

Interdomain routing is the process of exchanging routing information and selecting paths *between* these different Autonomous Systems. When a data packet needs to travel from a device in one AS to a device in another AS, interdomain routing protocols are used to determine the best path across the interconnected ASs.

## Key Concepts in Interdomain Routing

*   **Autonomous System (AS):** A group of IP networks and routers controlled by one entity with a single, clearly defined routing policy. Each AS is assigned a unique Autonomous System Number (ASN).
*   **Border Gateway Protocol (BGP):** The de facto standard protocol for interdomain routing on the internet. BGP is responsible for exchanging reachability information between ASs. It's often referred to as the "protocol of the internet."
*   **Routing Policy:** Each AS defines its own policies for how it will accept routes from neighboring ASs and which routes it will advertise to them. These policies are crucial for managing traffic flow and business relationships.
*   **Path Vector Routing:** BGP is a path vector routing protocol. This means that when advertising a route to a destination network, it includes the sequence of ASs that the route passes through. This "path" information is essential for loop detection and policy enforcement.

## How BGP Works (Simplified)

1.  **Establishing Neighbor Relationships (Peering):** ASs establish connections with their neighbors (other ASs or even different networks within the same AS). These connections are called "peering sessions."
2.  **Exchanging Network Prefixes:** Each AS advertises the IP network prefixes (ranges of IP addresses) that it can reach to its BGP neighbors.
3.  **Building Routing Tables:** Routers within an AS receive these advertisements and build their routing tables. Crucially, they also receive the *path* of ASs that lead to each prefix.
4.  **Path Selection:** When a router needs to send a packet to a destination in another AS, it examines the received BGP routes. It uses a complex decision process, influenced by routing policies and attributes associated with each path, to select the "best" path. This path is not just about the shortest hop count but also considers factors like policy, reliability, and cost.
5.  **Forwarding Traffic:** Once the best path is chosen, the router forwards the packet along that path.

## Why is Interdomain Routing Different from Intradomain Routing?

While both are about finding paths for data, they operate at different scales and with different goals:

| Feature             | Intradomain Routing (e.g., OSPF, IS-IS)                               | Interdomain Routing (BGP)                                                     |
| :------------------ | :-------------------------------------------------------------------- | :---------------------------------------------------------------------------- |
| **Scope**           | Within a single Autonomous System (AS).                               | Between different Autonomous Systems (ASs).                                   |
| **Protocol(s)**     | Link-state (OSPF, IS-IS) or Distance-vector (RIP - older).            | Path-vector (BGP).                                                            |
| **Goal**            | Find the *shortest* path within the AS, optimizing for speed and efficiency. | Find a *suitable* path based on policies, business agreements, and reachability. |
| **Scale**           | Thousands of routes (typically).                                      | Hundreds of thousands or millions of routes (the entire internet routing table). |
| **Convergence Speed**| Fast; designed to react quickly to link failures.                     | Slower; due to scale and the need to propagate policy changes.                  |
| **Complexity**      | Relatively simpler; focuses on network topology.                      | Highly complex; involves policies, attributes, and external relationships.      |
| **Primary Metric**  | Cost (e.g., bandwidth, delay).                                        | Path attributes, policies, and reachability.                                  |

## The Importance of Policies in Interdomain Routing

Unlike intradomain routing, where the primary goal is simply to find the fastest route, interdomain routing is heavily influenced by **policies**. An AS might choose not to advertise certain routes to a particular neighbor, or it might prefer routes that go through specific transit providers for commercial or strategic reasons. BGP's path attributes allow for granular control over these routing decisions.

## In Summary

Interdomain routing, primarily handled by BGP, is the backbone of how data traverses the global internet. It's about navigating the complex relationships and policies between different administrative domains (ASs) to ensure that packets can reach their intended destinations across the world. Understanding BGP and its role in interdomain routing is fundamental to grasping how the internet truly functions.

## Supports

- [[skills/computing/systems-infrastructure/networking/routing-algorithms/microskills/interdomain-routing|Interdomain Routing]]
