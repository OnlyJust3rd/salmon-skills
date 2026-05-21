---
type: "medium"
title: "Packet Forwarding with Static Routes"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/algorithms/routing-algorithms/microskills/packet-forwarding-with-static-routes|packet-forwarding-with-static-routes]]"
---
# Packet Forwarding with Static Routes

Understanding how data packets travel across a network is fundamental to routing. This lesson focuses on **Packet Forwarding with Static Routes**, explaining the mechanics of data movement when routes are manually configured.

## What is Packet Forwarding?

Packet forwarding is the process by which a network device, like a router, receives an incoming data packet and decides where to send it next to reach its final destination. Think of it like a postal worker looking at an address on an envelope and deciding which sorting bin to put it in.

In a network, routers maintain **routing tables**. These tables are essentially maps that tell the router which path to take for different destinations.

## How Static Routes Work for Packet Forwarding

Static routing involves manually configuring these routes in the routing table. Unlike dynamic routing protocols (which automatically learn routes), static routes are fixed and do not change unless a network administrator modifies them.

When a router receives a packet, it performs the following steps to forward it:

1.  **Examine the Destination IP Address:** The router looks at the destination IP address in the packet's header.

2.  **Consult the Routing Table:** The router searches its routing table for an entry that matches the destination IP address. The matching process typically involves finding the **most specific match**. This means if there are multiple routes that could potentially lead to the destination, the router will choose the one with the longest network prefix match.

    *   **Example:**
        If the destination IP is `192.168.1.50` and the routing table has these entries:
        *   `192.168.0.0/16` via `Interface 1`
        *   `192.168.1.0/24` via `Interface 2`
        The router will choose the `192.168.1.0/24` route because `/24` is a more specific match than `/16`.

3.  **Determine the Next Hop and Outgoing Interface:** Once a matching route is found, the routing table will specify:
    *   **Next Hop IP Address:** The IP address of the next router in the path.
    *   **Outgoing Interface:** The physical or logical port on the current router through which the packet should be sent.

4.  **Forward the Packet:** The router then forwards the packet out of the specified outgoing interface towards the next hop. If the destination is directly connected, the packet is delivered without needing a next hop.

5.  **Decrement TTL (Time-To-Live):** The router also decrements the Time-To-Live (TTL) value in the packet header. This prevents packets from endlessly looping in the network. If the TTL reaches zero, the packet is discarded.

## A Simple Scenario

Let's imagine a small network with three routers: R1, R2, and R3.

*   **R1** needs to send a packet to a host on R3's network.
*   **Static Routes:**
    *   On **R1**, a static route is configured: `Destination: 10.0.3.0/24`, `Next Hop: 192.168.1.2` (R2's interface facing R1), `Outgoing Interface: Ethernet0/0`.
    *   On **R2**, a static route is configured: `Destination: 10.0.3.0/24`, `Next Hop: 10.0.2.2` (R3's interface facing R2), `Outgoing Interface: Ethernet0/1`.
    *   **R3** has a directly connected route to its network `10.0.3.0/24`.

**Packet Journey:**

1.  A packet originates from a device on R1's network, destined for an IP address like `10.0.3.50`.
2.  The packet arrives at **R1**.
3.  R1 examines the destination IP `10.0.3.50` and checks its routing table. It finds the static route `10.0.3.0/24` pointing to `192.168.1.2` via `Ethernet0/0`.
4.  R1 decrements the TTL, updates the packet's MAC address for the next hop (R2's interface), and forwards the packet out of `Ethernet0/0` towards R2.
5.  The packet arrives at **R2**.
6.  R2 examines the destination IP `10.0.3.50` and checks its routing table. It finds the static route `10.0.3.0/24` pointing to `10.0.2.2` via `Ethernet0/1`.
7.  R2 decrements the TTL, updates the packet's MAC address for the next hop (R3's interface), and forwards the packet out of `Ethernet0/1` towards R3.
8.  The packet arrives at **R3**.
9.  R3 recognizes that `10.0.3.0/24` is a directly connected network. It then delivers the packet to the destination host `10.0.3.50`.

This step-by-step process, guided by the statically configured routes, ensures that packets reach their intended destinations even in simple network topologies.

## Supports

- [[skills/programming/algorithms/routing-algorithms/microskills/packet-forwarding-with-static-routes|Packet Forwarding with Static Routes]]
