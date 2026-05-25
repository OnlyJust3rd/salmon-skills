---
type: medium
title: Simulating Intradomain Routing Protocol Flow
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[simulated-network-scenarios|simulated-network-scenarios]]"
learning-time-in-minutes: 4
---
# Simulating Intradomain Routing Protocol Flow

In this lesson, we'll explore how to apply routing concepts by simulating the operational flow of an intradomain routing protocol within a controlled environment. This allows us to observe and understand the protocol's behavior without impacting a live network.

## The Importance of Simulation

Simulating network scenarios is crucial for learning and testing routing protocols. It offers several advantages:

*   **Safety:** You can experiment with configurations, trigger events, and observe outcomes without disrupting actual users or critical services.
*   **Reproducibility:** Scenarios can be saved and replayed, ensuring consistent learning experiences and troubleshooting.
*   **Visibility:** Simulation tools often provide detailed packet captures, routing table dumps, and LSA/RTE updates, giving deep insight into the protocol's inner workings.
*   **Scalability:** You can build and test complex network topologies that might be impractical or expensive to set up physically.

## Choosing a Simulation Tool

Several powerful network simulators are available. For learning intradomain routing protocols, tools like Cisco Packet Tracer, GNS3, or EVE-NG are excellent choices. These tools allow you to:

*   Drag and drop network devices (routers, switches).
*   Connect them using virtual links.
*   Configure interfaces and IP addresses.
*   Implement routing protocols like OSPF, EIGRP, or RIP.
*   Generate traffic to test routing paths.

For this lesson, we'll conceptually walk through a simulation using a generic simulator.

## A Simulated Scenario: OSPF in a Small Enterprise Network

Let's imagine a small enterprise network with three routers: R1, R2, and R3. We want to configure OSPF (Open Shortest Path First) to enable routing between them.

**Network Topology:**

*   R1 is connected to R2 via an Ethernet link.
*   R2 is connected to R3 via another Ethernet link.
*   Each router has a loopback interface for management purposes.

**Simulation Steps:**

1.  **Topology Setup:**
    *   In your chosen simulator, create three router instances (R1, R2, R3).
    *   Add the necessary interfaces to each router. For example, GigabitEthernet0/0 on R1 connected to GigabitEthernet0/0 on R2, and GigabitEthernet0/1 on R2 connected to GigabitEthernet0/1 on R3.
    *   Configure loopback interfaces (e.g., Loopback0 on each router).

2.  **IP Addressing:**
    *   Assign IP addresses to the interfaces.
        *   R1 Gi0/0: 192.168.1.1/24
        *   R2 Gi0/0: 192.168.1.2/24
        *   R2 Gi0/1: 192.168.2.1/24
        *   R3 Gi0/1: 192.168.2.2/24
        *   R1 Lo0: 1.1.1.1/32
        *   R2 Lo0: 2.2.2.2/32
        *   R3 Lo0: 3.3.3.3/32

3.  **OSPF Configuration:**
    *   **Enable OSPF on each router:**
        ```
        router ospf 1
        ```
        (The number `1` is the OSPF process ID, which only needs to be consistent on a single router but can be different across routers.)

    *   **Define the networks OSPF should advertise and the area:**
        On R1:
        ```
        network 192.168.1.0 0.0.0.255 area 0
        network 1.1.1.1 0.0.0.0 area 0
        ```
        On R2:
        ```
        network 192.168.1.0 0.0.0.255 area 0
        network 192.168.2.0 0.0.0.255 area 0
        network 2.2.2.2 0.0.0.0 area 0
        ```
        On R3:
        ```
        network 192.168.2.0 0.0.0.255 area 0
        network 3.3.3.3 0.0.0.0 area 0
        ```
        *   `network <network-address> <wildcard-mask> area <area-id>`: This command tells OSPF to look for interfaces matching this IP address and wildcard mask and to include them in OSPF. The wildcard mask is the inverse of a subnet mask. `0.0.0.255` matches any IP in the `192.168.1.x` range. `0.0.0.0` for loopbacks matches the exact IP. `area 0` signifies the backbone area.

4.  **Observing the Flow:**
    *   **Neighbor Adjacencies:** Once OSPF is configured and interfaces are up, routers will start exchanging OSPF Hello packets. You can typically see these in the simulator's packet capture tool. Look for Hellos destined for multicast address `224.0.0.5`.
    *   When R1 and R2 detect each other (matching OSPF Hello parameters), they will form an **adjacency**. They will then exchange Link State Advertisements (LSAs).
    *   Similarly, R2 and R3 will form an adjacency.
    *   **Routing Table Population:** After the adjacency is established and LSAs are exchanged and flooded, each router will build its Link State Database (LSDB). Then, each router runs the Shortest Path First (SPF) algorithm (Dijkstra's algorithm) on its LSDB to calculate the best path to each destination.
    *   You can view the routing tables using commands like `show ip route ospf` (on Cisco-like devices) or by inspecting the simulator's routing information pane.

**Expected Routing Table Entries (after convergence):**

On R1:
*   Route to `192.168.2.0/24` via `192.168.1.2` (R2's Gi0/0)
*   Route to `3.3.3.3/32` via `192.168.1.2` (R2's Gi0/0)
*   Route to `2.2.2.2/32` via `192.168.1.2` (R2's Gi0/0)

On R3:
*   Route to `192.168.1.0/24` via `192.168.2.1` (R2's Gi0/1)
*   Route to `1.1.1.1/32` via `192.168.2.1` (R2's Gi0/1)
*   Route to `2.2.2.2/32` via `192.168.2.1` (R2's Gi0/1)

On R2:
*   Route to `1.1.1.1/32` via `192.168.1.1` (R1's Gi0/0)
*   Route to `3.3.3.3/32` via `192.168.2.2` (R3's Gi0/1)

## Simulating Changes and Events

The power of simulation lies in its ability to test dynamic changes:

*   **Link Failure:** Shut down an interface (e.g., R1's Gi0/0). Observe how OSPF detects the failure, removes the neighbor, runs SPF again, and updates its routing table. Traffic will be rerouted.
*   **New Link Addition:** Add another router and link. See how OSPF discovers the new routes and updates the routing tables.
*   **Metric Changes:** Modify interface costs to see how OSPF recalculates shortest paths.

By actively performing these simulations and observing the protocol's reaction, you gain a practical understanding of how intradomain routing protocols operate and adapt to network changes.

## Supports

- [[simulated-network-scenarios|Simulated Network Scenarios]]
