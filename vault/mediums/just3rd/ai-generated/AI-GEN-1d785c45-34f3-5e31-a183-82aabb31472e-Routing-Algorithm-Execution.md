---
type: "medium"
title: "Routing Algorithm Execution: Tracing a Packet's Journey"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/algorithms/routing-algorithms/microskills/routing-algorithm-execution|routing-algorithm-execution]]"
---
# Routing Algorithm Execution: Tracing a Packet's Journey

This lesson focuses on **visualizing the workings of routing protocols** by illustrating the operational flow of a given intradomain routing protocol. We'll apply our understanding of how routers make forwarding decisions.

## Understanding the Router's Decision-Making Process

Imagine a packet arriving at a router. The router doesn't just guess where to send it. It has a map, known as a **routing table**, that tells it the best path to reach various destinations. This routing table is built and maintained by routing protocols.

### Key Components

*   **Routing Table:** A database within a router that stores information about network paths. Each entry typically includes:
    *   **Destination Network:** The IP address range of the target network.
    *   **Next Hop:** The IP address of the next router on the path to the destination.
    *   **Outgoing Interface:** The physical or logical interface on the current router through which the packet should be sent.
    *   **Metric:** A value indicating the "cost" or "preference" of a particular path (e.g., hop count, bandwidth, delay). Lower metrics are generally preferred.

*   **Routing Protocol:** The set of rules and messages exchanged between routers to build and update their routing tables. Examples of intradomain protocols include RIP, OSPF, and EIGRP.

*   **Packet Forwarding:** The process by which a router examines a packet's destination IP address, looks up the corresponding entry in its routing table, and sends the packet out the specified interface to the next hop.

## Illustrating Intradomain Protocol Flow: A Simple Scenario

Let's walk through how a packet moves from Router A to Router D in a small network using a hypothetical routing protocol that prioritizes the shortest path (fewest hops).

**Network Topology:**

```
Router A -- (Link 1) -- Router B -- (Link 2) -- Router C -- (Link 3) -- Router D
```

**Router Routing Tables (Initial State - assuming direct connections are known):**

**Router A:**
| Destination Network | Next Hop | Outgoing Interface | Metric |
| :------------------ | :------- | :----------------- | :----- |
| Router B's Network  | -        | Link 1             | 0      |
| Router C's Network  | Router B | Link 1             | 1      |
| Router D's Network  | Router B | Link 1             | 2      |

**Router B:**
| Destination Network | Next Hop | Outgoing Interface | Metric |
| :------------------ | :------- | :----------------- | :----- |
| Router A's Network  | -        | Link 1             | 0      |
| Router C's Network  | -        | Link 2             | 0      |
| Router D's Network  | Router C | Link 2             | 1      |

**Router C:**
| Destination Network | Next Hop | Outgoing Interface | Metric |
| :------------------ | :------- | :----------------- | :----- |
| Router A's Network  | Router B | Link 2             | 1      |
| Router B's Network  | -        | Link 2             | 0      |
| Router D's Network  | -        | Link 3             | 0      |

**Router D:**
| Destination Network | Next Hop | Outgoing Interface | Metric |
| :------------------ | :------- | :----------------- | :----- |
| Router A's Network  | Router C | Link 3             | 2      |
| Router B's Network  | Router C | Link 3             | 1      |
| Router C's Network  | -        | Link 3             | 0      |

**Scenario: Packet from Host X (on Router A's network) to Host Y (on Router D's network).**

1.  **Packet Originates:** Host X (with IP address 192.168.1.10) wants to send data to Host Y (with IP address 10.10.10.20).
2.  **Packet Reaches Router A:** Host X sends the packet to its default gateway, Router A. Router A receives the packet.
3.  **Router A Examines Packet:** Router A looks at the destination IP address: 10.10.10.20. It consults its routing table.
    *   It finds the entry for Router D's network (which contains 10.10.10.20).
    *   The table indicates the **Next Hop is Router B** and the **Outgoing Interface is Link 1**.
    *   The **Metric is 2**.
4.  **Router A Forwards Packet:** Router A forwards the packet out of Link 1 towards Router B.
5.  **Packet Reaches Router B:** Router B receives the packet. The destination IP address (10.10.10.20) is not on any directly connected network for Router B.
6.  **Router B Examines Packet:** Router B consults its routing table.
    *   It finds the entry for Router D's network.
    *   The table indicates the **Next Hop is Router C** and the **Outgoing Interface is Link 2**.
    *   The **Metric is 1**.
7.  **Router B Forwards Packet:** Router B forwards the packet out of Link 2 towards Router C.
8.  **Packet Reaches Router C:** Router C receives the packet. The destination IP address (10.10.10.20) is not on any directly connected network for Router C.
9.  **Router C Examines Packet:** Router C consults its routing table.
    *   It finds the entry for Router D's network.
    *   The table indicates the **Next Hop is '-' (meaning the destination is directly connected)** and the **Outgoing Interface is Link 3**.
    *   The **Metric is 0**.
10. **Router C Forwards Packet:** Router C forwards the packet out of Link 3.
11. **Packet Reaches Router D:** Router D receives the packet. The destination IP address (10.10.10.20) is on a network directly connected to Router D.
12. **Packet Reaches Host Y:** Router D forwards the packet to Host Y.

### How Routing Protocols Build Tables

The routing tables shown above are a result of the routing protocol's operation. For example, in a distance-vector protocol like RIP:

*   Routers periodically exchange their entire routing tables with their directly connected neighbors.
*   When Router B receives Router A's table, it learns that it can reach Router D via Router A with a metric of 2 (1 hop to Router A + 1 hop from Router A to Router D). Router B already knows it can reach Router D via Router C with a metric of 1. Since 1 is less than 2, Router B keeps its original path to Router D via Router C.
*   Similarly, Router C receives information from Router B and updates its table.

This process continues until all routers have a consistent view of the network's topology and the best paths to each destination.

## Practice Activity

Consider the following network and a packet originating from Host P to Host Q.

```
      (Link A)
Router 1 -------- Router 2
      |            |
 (Link B)       (Link C)
      |            |
Router 3 -------- Router 4
      (Link D)

Host P ---- Router 1
Host Q ---- Router 4
```

Assume a routing protocol that uses hop count as the metric.

1.  **Draw the initial routing tables for Router 1, Router 2, Router 3, and Router 4**, showing only directly connected networks.
2.  **Trace the path of a packet** from Host P to Host Q, detailing the decision-making process at each router (Router 1, Router 2, Router 4). What is the next hop and outgoing interface at each step?
3.  **Describe how the routing tables would be updated** based on the routing protocol exchanging information. For instance, how would Router 2 learn about a path to Router 3's network?

## Supports

- [[skills/programming/algorithms/routing-algorithms/microskills/routing-algorithm-execution|Routing Algorithm Execution]]
