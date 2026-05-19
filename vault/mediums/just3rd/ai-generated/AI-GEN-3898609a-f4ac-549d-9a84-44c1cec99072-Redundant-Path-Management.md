---
type: "medium"
title: "Managing Redundant Paths with Spanning Tree Protocol (STP)"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/data/data-platforms/data-link-layer/microskills/redundant-path-management|Redundant Path Management]]"
---
# Managing Redundant Paths with Spanning Tree Protocol (STP)

In networks, having multiple paths between devices is often desirable for redundancy. If one link fails, traffic can be rerouted. However, these redundant paths can create serious problems if not managed correctly. This lesson focuses on how the Spanning Tree Protocol (STP) helps ensure network stability when multiple links are present, directly addressing the need for redundant path management within the Data Link Layer.

## Why Redundant Paths Can Be Tricky

Imagine a simple network with three switches, and each switch is connected to every other switch. This creates redundant paths. While this is good for uptime, it introduces a potential issue: network loops.

A network loop occurs when data can travel in a circle. For instance, Switch A sends a frame to Switch B, which sends it back to Switch A. If this continues, the frame will be forwarded endlessly, consuming bandwidth and overwhelming switch memory. This broadcast storm effectively paralyzes the network.

## How Spanning Tree Protocol (STP) Works

STP is a Layer 2 protocol designed specifically to prevent these network loops by intelligently blocking redundant paths. It doesn't eliminate the physical connections; instead, it logically disables certain links to create a single, loop-free path between any two points on the network.

Here’s a simplified overview of its core functions:

1.  **Electing a Root Bridge:** STP designates one switch as the "Root Bridge." This is the central point of the spanning tree. All other paths are calculated relative to the Root Bridge.
2.  **Determining Root Ports:** On each non-root switch, the port with the lowest cost to reach the Root Bridge is selected as the "Root Port." This port is always active and used for forwarding traffic towards the Root Bridge.
3.  **Identifying Designated Ports:** For each network segment (link between switches), the switch with the lowest cost path to the Root Bridge sends out a "Designated Bridge." The port on that Designated Bridge connected to the segment becomes the "Designated Port." This port is also active and used for forwarding traffic away from the Root Bridge.
4.  **Blocking Redundant Ports:** Any port that is not a Root Port or a Designated Port is placed in a "Blocking" state. These ports are still physically connected but do not forward user data. They act as backups; if an active link fails, STP can unblock a previously blocked port to restore connectivity.

STP uses Bridge Protocol Data Units (BPDUs) to exchange information between switches and make these decisions.

## Practical Scenario: Preventing a Broadcast Storm

Consider a small office network with three switches (SW1, SW2, SW3) connected in a triangle.

*   SW1 is connected to SW2.
*   SW2 is connected to SW3.
*   SW3 is connected back to SW1.

Without STP, if a broadcast frame arrives at SW1 from a connected PC, SW1 would forward it to SW2 and SW3. SW2 would then forward it to SW1 and SW3, and SW3 would forward it to SW1 and SW2, creating a loop.

With STP enabled:

1.  **Root Bridge Election:** The switches elect a Root Bridge (let's say SW1).
2.  **Root Ports:** SW2's port connected to SW1 becomes its Root Port. SW3's port connected to SW1 becomes its Root Port.
3.  **Designated Ports:** SW1's ports connected to SW2 and SW3 are Designated Ports. SW2's port connected to SW3 becomes a Designated Port.
4.  **Blocked Port:** The link between SW2 and SW3 is now redundant. STP will put one of the ports on either SW2 or SW3 (connected to the other) into a Blocking state. For example, SW2's port connected to SW3 might be blocked.

Now, if a broadcast frame enters the network, it will be forwarded by the active paths (Root Ports and Designated Ports) but will not loop back indefinitely because the redundant link is blocked. If the link between SW1 and SW2 fails, STP will detect this, unblock the previously blocked port between SW2 and SW3, and reroute traffic.

## Practice Task

Imagine you have a network with four switches (S1, S2, S3, S4) connected as follows:

*   S1 is connected to S2.
*   S1 is connected to S3.
*   S2 is connected to S3.
*   S2 is connected to S4.
*   S3 is connected to S4.

If S1 is elected as the Root Bridge, which ports would likely be in a Blocking state to prevent loops? Briefly explain your reasoning for one of these blocked ports.

## Self-Check Questions

1.  What is the primary purpose of Spanning Tree Protocol?
2.  What is a "network loop," and why is it problematic?
3.  In STP, what is the role of the Root Bridge?
4.  What distinguishes a "Root Port" from a "Designated Port"?
5.  What happens to ports that are neither Root Ports nor Designated Ports?

## Supports

- [[skills/data/data-platforms/data-link-layer/microskills/redundant-path-management|Redundant Path Management]]
