---
type: "medium"
title: "Illustrating Intradomain Routing Protocol Flow"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/networking/routing-algorithms/microskills/intradomain-routing-protocol-operations|intradomain-routing-protocol-operations]]"
learning-time-in-minutes: 5
---
# Illustrating Intradomain Routing Protocol Flow

This lesson will guide you through applying your understanding of intradomain routing protocols to illustrate their operational flow. We will focus on the step-by-step process that these protocols use to exchange information and determine the best paths within a network.

## Understanding the Core Problem

Within any network, routers need a way to communicate with each other to build a map of the network topology. This map, often called a routing table, tells each router how to forward traffic towards its destination. Intradomain routing protocols are the specialized communication systems that enable this map-building process. They operate *within* a single administrative domain (like a company's internal network), distinguishing them from interdomain protocols that connect different networks.

## The Goal: Tracing the Flow

To illustrate the operational flow, we need to visualize how information is generated, exchanged, and processed by the routers involved. We'll use a simplified example of a common intradomain protocol to demonstrate this.

### Protocol Focus: RIP (Routing Information Protocol) - A Distance-Vector Example

RIP is a foundational distance-vector routing protocol. Its core mechanism involves routers periodically sharing their entire routing tables with their directly connected neighbors. The "distance" in distance-vector refers to hop count, where each router hop is considered one unit of distance.

### Key Concepts in RIP Flow

*   **Routing Table:** Each router maintains a table listing known network destinations, the next hop router to reach them, and the metric (hop count) to get there.
*   **Update Messages:** Routers send periodic "update" messages containing their routing table information to their neighbors.
*   **Convergence:** The process by which all routers in the network have consistent and accurate routing information.
*   **Hop Count Limit:** RIP has a maximum hop count (typically 15) to prevent routing loops.

### Step-by-Step Flow Illustration (Simplified Scenario)

Let's consider a small network with four routers: R1, R2, R3, and R4.

**Initial State:** Assume R1 is directly connected to Network A. R2 is connected to R1 and Network B. R3 is connected to R2 and Network C. R4 is connected to R3 and Network D.

1.  **Initialization:**
    *   R1 knows how to reach Network A with a hop count of 0 (directly connected).
    *   R2 knows how to reach Network B with a hop count of 0.
    *   R3 knows how to reach Network C with a hop count of 0.
    *   R4 knows how to reach Network D with a hop count of 0.

2.  **First Exchange (R1 to R2, R2 to R1):**
    *   R1 sends an update to R2, advertising that it can reach Network A with a metric of 0.
    *   R2 receives this. Since R2 is directly connected to R1, it adds 1 hop to the metric for Network A. R2's routing table now includes:
        *   Network A: Next Hop = R1, Metric = 1
        *   Network B: Next Hop = Directly Connected, Metric = 0

3.  **Second Exchange (R2 to R3, R3 to R2):**
    *   R2 sends an update to R3, advertising its known routes:
        *   Network A: Next Hop = R1, Metric = 1
        *   Network B: Next Hop = Directly Connected, Metric = 0
    *   R3 receives this. R3 adds 1 hop to the metrics for R2's advertised routes:
        *   Network A: Next Hop = R2, Metric = 2
        *   Network B: Next Hop = R2, Metric = 1
        *   Network C: Next Hop = Directly Connected, Metric = 0

4.  **Continuing the Propagation:** This process continues. R3 will eventually send its updated routing table to R4, and R4 will propagate its knowledge.

    *   **Example of a Route Update:**
        *   Imagine R1 advertises Network A (Metric 0).
        *   R2 receives it, adds 1, and advertises Network A to R3 (Metric 1).
        *   R3 receives it, adds 1, and advertises Network A to R4 (Metric 2).
        *   Now, if R1 goes down, R2 will eventually learn this. When R2 has no direct path to A, it will stop advertising it. This information will then propagate through the network, causing R3 and R4 to remove or update their routes to Network A.

### Illustrating with a Diagram

A powerful way to illustrate this flow is with a simple diagram showing routers and the information they exchange.

```
      +-------+       +-------+       +-------+       +-------+
      |       |       |       |       |       |       |       |
      |  R1   |-------|  R2   |-------|  R3   |-------|  R4   |
      |       |       |       |       |       |       |       |
      +-------+       +-------+       +-------+       +-------+
         |               |               |               |
      Network A       Network B       Network C       Network D
```

**Flow Example Visualization:**

*   **Initial:**
    *   R1: { A: 0 }
    *   R2: { B: 0 }
    *   R3: { C: 0 }
    *   R4: { D: 0 }

*   **After R1 sends to R2, R2 to R3:**
    *   R1: { A: 0 }
    *   R2: { A: 1 (via R1), B: 0 }
    *   R3: { A: 2 (via R2), B: 1 (via R2), C: 0 }
    *   R4: { D: 0 }

*   **After R3 sends to R4:**
    *   R1: { A: 0 }
    *   R2: { A: 1 (via R1), B: 0 }
    *   R3: { A: 2 (via R2), B: 1 (via R2), C: 0 }
    *   R4: { A: 3 (via R3), B: 2 (via R3), C: 1 (via R3), D: 0 }

### Applying Your Understanding

To demonstrate your grasp of this microskill:

1.  **Choose an Intradomain Protocol:** Select either RIP (distance-vector) or OSPF (link-state).
2.  **Create a Simple Network Topology:** Draw a diagram of 3-5 routers connected in a way that allows for interesting path choices.
3.  **Trace the Protocol Flow:**
    *   For **RIP:** Show how routing tables evolve as updates are exchanged and incremented. Illustrate how a change in the network (e.g., a link failure) propagates.
    *   For **OSPF:** Focus on the exchange of Link State Advertisements (LSAs), how routers build their Link State Databases (LSDBs), and how the shortest path tree is calculated.
4.  **Highlight Key Milestones:** Point out when routes are learned, updated, or invalidated.

By walking through these steps and visualizing the information flow, you can effectively illustrate the operational flow of an intradomain routing protocol.

## Supports

- [[skills/computing/systems-infrastructure/networking/routing-algorithms/microskills/intradomain-routing-protocol-operations|Intradomain Routing Protocol Operations]]
