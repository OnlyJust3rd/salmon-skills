---
type: "medium"
title: "Understanding Network Loops and STP"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/data/data-platforms/data-link-layer/microskills/network-loop-prevention|network-loop-prevention]]"
---
# Understanding Network Loops and STP

In a network, redundant paths can seem like a good thing for reliability. However, without proper management, these redundant paths can create dangerous network loops. This lesson will help you understand how these loops form and how the Spanning Tree Protocol (STP) prevents them, specifically focusing on its role in avoiding redundant paths.

## What is a Network Loop?

A network loop occurs when there are multiple active paths between two network devices, and traffic can continuously circulate between them. Imagine two switches connected together, and then each switch is also connected to a third switch. If there's a connection from switch 1 to switch 3, and another connection from switch 1 to switch 2, and then switch 2 to switch 3, traffic might go in circles.

This continuous circulation of traffic, known as a broadcast storm, quickly consumes network bandwidth and CPU resources on the switches. This leads to:

*   **Broadcast Storms:** Every frame sent is flooded, and since there's a loop, these flooded frames will endlessly repeat.
*   **MAC Address Table Instability:** Switches learn MAC addresses by observing the source MAC address of incoming frames. In a loop, a device's MAC address can appear on multiple ports, causing the switch to constantly update its MAC address table, leading to instability and dropped frames.
*   **Network Unavailability:** The overwhelming traffic and instability can bring the entire network down.

## How STP Prevents Redundant Paths

The Spanning Tree Protocol (STP) is designed to prevent these loops by intelligently disabling redundant links. It achieves this by creating a loop-free logical topology from an otherwise redundant physical topology.

Here's the core idea:

1.  **Electing a Root Bridge:** All switches participating in STP elect a single switch as the "Root Bridge." This is the central point of the spanning tree.
2.  **Determining Root Ports:** For every non-root switch, the port that offers the lowest cost path to the Root Bridge is designated as the "Root Port."
3.  **Determining Designated Ports:** On each network segment (link between two switches), the switch with the lowest cost path to the Root Bridge designates one of its ports as the "Designated Port." This port is responsible for forwarding traffic on that segment.
4.  **Blocking Redundant Ports:** Any port that is not a Root Port or a Designated Port is put into a "Blocking" state. These ports are effectively disabled, preventing any traffic forwarding and thus breaking potential loops.

By making these decisions, STP ensures that there is only one active path between any two points in the network, effectively eliminating the possibility of loops while still allowing for a redundant path to be activated if the primary path fails.

## Practical Scenario

Consider a small office network with three switches (Switch A, Switch B, and Switch C).

*   Switch A is connected to Switch B.
*   Switch B is connected to Switch C.
*   Switch A is *also* connected to Switch C (creating a redundant link).

Without STP: If a broadcast frame arrives at Switch A destined for a device connected to Switch C, Switch A might send it to Switch B. Switch B, seeing a redundant path, might also send it back to Switch A, or forward it to Switch C. Switch C might then send it back to Switch A, creating a loop.

With STP:
1.  STP runs and elects one switch as the Root Bridge (let's say Switch A).
2.  Switch B determines its Root Port is the link to Switch A.
3.  Switch C determines its Root Port is the link to Switch A (assuming the A-C link is preferred due to cost).
4.  On the segment between Switch B and Switch C, one switch will become the Designated Port.
5.  The *other* port on that B-C segment (likely the one on Switch B if Switch C has a better path to the root via A) will be placed in a **Blocking state**. This actively prevents the B-C link from forwarding traffic *in that direction*, thus breaking the loop.

The network remains operational, but the direct connection between Switch B and Switch C is logically disabled by STP. If the direct link between Switch A and Switch C were to fail, STP would detect this and reconfigure the network, potentially unblocking the B-C link to restore connectivity.

## Practice Task

Imagine you have a network with four switches (SW1, SW2, SW3, SW4) connected as follows:

*   SW1 to SW2
*   SW1 to SW3
*   SW2 to SW4
*   SW3 to SW4
*   SW2 to SW3 (this creates a loop!)

If SW1 is elected as the Root Bridge and all links have the same cost:

1.  Identify the Root Port for SW2 and SW3.
2.  Identify the Designated Port for the link between SW2 and SW4.
3.  Which port will likely be placed in a Blocking state to prevent a loop?

## Self-Check Questions

1.  What are the three main problems caused by network loops?
2.  What is the primary goal of the Spanning Tree Protocol?
3.  What is the role of a "Root Port" in STP?
4.  What happens to a port that is neither a Root Port nor a Designated Port?

## Supports

- [[skills/data/data-platforms/data-link-layer/microskills/network-loop-prevention|Network Loop Prevention]]
