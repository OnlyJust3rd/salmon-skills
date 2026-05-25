---
type: medium
title: Connecting Local Area Networks (LANs)
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[lan-interconnection-methods|lan-interconnection-methods]]"
learning-time-in-minutes: 4
---
# Connecting Local Area Networks (LANs)

In the Data Link Layer, we've learned about how devices within a single Local Area Network (LAN) communicate. But what happens when you have multiple LANs that need to talk to each other? This is where LAN interconnection methods come into play, allowing us to extend our network reach beyond a single physical location. Understanding these methods helps us build larger, more robust networks.

## Bridging LANs: The Basics

Think of a bridge as a smart connector. It sits between two or more LANs and learns the MAC addresses of devices on each segment. When a data frame arrives, the bridge examines the destination MAC address. If the destination is on the same LAN segment as the source, the bridge discards the frame (preventing unnecessary traffic). If the destination is on a different LAN segment, the bridge forwards the frame to that specific segment. This intelligent forwarding reduces congestion and improves network efficiency.

## Repeaters and Hubs: Simple Signal Boosters

Repeaters and hubs are simpler devices. A **repeater** simply regenerates and retransmits a signal, extending the physical reach of a single LAN segment. A **hub** acts like a multi-port repeater; it receives a signal on one port and broadcasts it out to all other connected ports. While easy to implement, hubs create collision domains, meaning if two devices try to send data simultaneously, a collision occurs, and both transmissions fail. This is generally inefficient for modern networks.

## Routers: The Gatekeepers of Networks

Routers operate at a higher layer (Network Layer) than bridges but are crucial for interconnecting distinct LANs, especially when they need to communicate across different IP subnets. Routers don't just look at MAC addresses; they examine IP addresses to make forwarding decisions. They maintain routing tables that map IP network addresses to the best path to reach them. This makes routers ideal for connecting different departments within an organization, or even connecting your local network to the internet.

## Practical Scenario

Imagine a small company with two departments: Sales and Engineering.

*   **Sales Department:** Has its own LAN segment for its computers and printers.
*   **Engineering Department:** Has its own LAN segment for its development machines and servers.

Both departments need to share a common printer located in the Engineering LAN and access a central file server also in the Engineering LAN.

Here's how they might be interconnected:

1.  **Using a Switch with VLANs:** If both departments are physically in the same building and share network infrastructure, a managed switch can be configured with Virtual LANs (VLANs). VLANs logically segment a single physical network into multiple broadcast domains. Devices within the same VLAN can communicate directly, but communication between VLANs requires a router.
2.  **Using a Router:** If the departments are in different buildings or need to be on separate IP subnets for security or management reasons, a router is the solution. The router would have an interface connected to the Sales LAN and another interface connected to the Engineering LAN. It would learn how to route traffic between the two IP subnets, allowing Sales computers to reach the Engineering printer and file server.

## Practice Task

Consider a scenario where you have three LAN segments: `LAN_A`, `LAN_B`, and `LAN_C`. `LAN_A` needs to communicate with both `LAN_B` and `LAN_C`. `LAN_B` and `LAN_C` do not need to communicate directly with each other.

Describe a suitable interconnection method for these LANs and explain *why* it's suitable.

## Self-Check Questions

1.  What is the primary difference in how a bridge and a hub forward data?
2.  When would you choose a router over a bridge for interconnecting LANs?
3.  Explain the concept of a collision domain and which devices tend to create larger ones.
4.  If two LANs are on the same IP subnet and need to exchange data, what layer 2 device might be used to connect them?

## Supports

- [[lan-interconnection-methods|LAN Interconnection Methods]]
