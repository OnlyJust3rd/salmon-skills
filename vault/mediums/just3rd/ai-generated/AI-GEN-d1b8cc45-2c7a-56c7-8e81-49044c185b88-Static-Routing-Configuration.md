---
type: "medium"
title: "Static Routing Configuration: Defining the Path"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/algorithms/routing-algorithms/microskills/static-routing-configuration|Static Routing Configuration]]"
---
# Static Routing Configuration: Defining the Path

This lesson focuses on how to configure static routes, a fundamental aspect of static routing principles. Understanding static route configuration is crucial for manually controlling how data packets travel across a network.

## What is a Static Route?

A static route is a manually configured entry in a router's routing table. Unlike dynamic routing protocols (like OSPF or BGP) where routers learn about network paths automatically, static routes are explicitly defined by a network administrator. This means the administrator tells the router: "To reach network X, send the packet out interface Y or to next-hop router Z."

## Why Use Static Routes?

While dynamic routing is common in large, complex networks, static routes have their place:

*   **Simplicity:** For small, stable networks, static routes are easier to configure and manage.
*   **Predictability:** You know exactly where traffic will go.
*   **Security:** They can prevent routers from accepting routes learned from untrusted sources.
*   **Specific Control:** Useful for overriding dynamic routing or directing traffic to a specific gateway.

## Anatomy of a Static Route Configuration

The basic information needed to define a static route includes:

1.  **Destination Network:** The IP address and subnet mask of the network you want to reach.
2.  **Next-Hop IP Address or Exit Interface:** How the router should send the packet.
    *   **Next-Hop IP Address:** The IP address of the next router in the path towards the destination network. This is used when the router has multiple paths to reach the destination and you want to specify one.
    *   **Exit Interface:** The specific interface on the current router that the packet should be sent out of. This is often used for directly connected networks.

### Common Configuration Commands (Cisco IOS Example)

While syntax varies between router vendors (e.g., Cisco, Juniper, MikroTik), the underlying concepts are similar. Here's a common example using Cisco IOS syntax:

```
ip route <destination_network> <subnet_mask> <next_hop_ip_address | exit_interface>
```

Let's break this down with an example.

**Scenario:**

Imagine a simple network with two routers, R1 and R2, connected by a direct link.

*   R1 has an interface connected to Network A (192.168.1.0/24).
*   R2 has an interface connected to Network B (192.168.2.0/24).
*   R1 and R2 are connected via a serial link with IP addresses 10.0.0.1 (on R1) and 10.0.0.2 (on R2).

**Goal:** Configure R1 to know how to reach Network B, and R2 to know how to reach Network A.

**1. Configuring R1 to reach Network B (192.168.2.0/24):**

On R1, we want to tell it that to reach `192.168.2.0/24`, it should send the packet to R2. R2's IP address on the connected link is `10.0.0.2`.

```
R1(config)# ip route 192.168.2.0 255.255.255.0 10.0.0.2
```

**Explanation:**

*   `ip route`: The command to add a static route.
*   `192.168.2.0`: The destination network address.
*   `255.255.255.0`: The subnet mask for the destination network.
*   `10.0.0.2`: The IP address of the next-hop router (R2).

Alternatively, if we know that the serial interface on R1 is the only way out to reach R2, we could use the exit interface. Let's assume R1's serial interface IP is `10.0.0.1` and it connects to R2's `10.0.0.2`. If the destination network is only reachable via this serial interface, the configuration might look like this:

```
R1(config)# ip route 192.168.2.0 255.255.255.0 Serial0/0/0
```

**Explanation:**

*   `Serial0/0/0`: The exit interface on R1. This tells R1 to forward any packet destined for `192.168.2.0/24` out of its Serial0/0/0 interface.

**2. Configuring R2 to reach Network A (192.168.1.0/24):**

On R2, we want to tell it that to reach `192.168.1.0/24`, it should send the packet to R1. R1's IP address on the connected link is `10.0.0.1`.

```
R2(config)# ip route 192.168.1.0 255.255.255.0 10.0.0.1
```

**Verification:**

After configuring the static routes, you can verify them using commands like `show ip route` (on Cisco IOS). You'll see entries marked with 'S' for static routes.

```
R1# show ip route
      192.168.1.0/24 is directly connected, GigabitEthernet0/0
      10.0.0.0/30 is directly connected, Serial0/0/0
      192.168.2.0/24 [1/0] via 10.0.0.2
```

In the output above, `192.168.2.0/24 [1/0] via 10.0.0.2` shows a static route to `192.168.2.0/24`. The `[1/0]` indicates administrative distance (1 for static routes by default) and metric (0 for static routes).

## Key Takeaways

*   Static routes are manually defined paths.
*   Configuration requires the destination network, its subnet mask, and either a next-hop IP address or an exit interface.
*   They are useful for small, predictable networks or when explicit control over traffic flow is needed.
*   Understanding the syntax for your specific router operating system is essential.

## Supports

- [[skills/programming/algorithms/routing-algorithms/microskills/static-routing-configuration|Static Routing Configuration]]
