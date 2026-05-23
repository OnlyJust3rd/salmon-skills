---
type: "medium"
title: "Frame Forwarding: How Switches Learn and Direct Traffic"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/networking/routing-and-switching/microskills/frame-forwarding|frame-forwarding]]"
learning-time-in-minutes: 5
---
# Frame Forwarding: How Switches Learn and Direct Traffic

In the world of computer networks, specifically within local area networks (LANs), switches are the workhorses that efficiently direct traffic. Unlike older hubs that blindly broadcast data, switches are intelligent devices. This intelligence comes from their ability to learn and use MAC addresses to forward data frames. This lesson will help you **understand how switches use MAC addresses for frame forwarding**.

## What is a MAC Address?

Every network interface card (NIC) in a device – your laptop, phone, a server – has a unique identifier burned into its hardware. This is called the **Media Access Control (MAC) address**. Think of it as a physical serial number for your network adapter.

*   **Format:** MAC addresses are typically represented as six groups of two hexadecimal characters, separated by colons or hyphens. For example: `00:1A:2B:3C:4D:5E` or `00-1A-2B-3C-4D-5E`.
*   **Uniqueness:** Officially, MAC addresses are globally unique, assigned by the manufacturer.
*   **Layer:** MAC addresses operate at Layer 2 (Data Link Layer) of the OSI model.

## The Switch's Learning Process: The MAC Address Table

When a switch is first powered on, it doesn't know where any devices are. It operates in a learning mode. Here's how it builds its knowledge base, called the **MAC address table** (or CAM table):

1.  **Receiving a Frame:** When a frame arrives at one of the switch's ports, the switch examines the **source MAC address** of that frame.
2.  **Recording the Source:** The switch notes which port the frame came from and associates that port number with the source MAC address it just saw.
3.  **Populating the Table:** This information (MAC Address | Port Number) is added to the switch's MAC address table.

**Example:**

Imagine a switch with four ports (Port 1, Port 2, Port 3, Port 4).

*   A frame arrives at **Port 1** with a source MAC address of `AA:BB:CC:01:01:01`.
*   The switch adds an entry to its table: `AA:BB:CC:01:01:01 | Port 1`.
*   Later, a frame arrives at **Port 2** with a source MAC address of `DD:EE:FF:02:02:02`.
*   The switch adds: `DD:EE:FF:02:02:02 | Port 2`.

This process happens continuously as devices on the network send traffic. The switch learns the location of devices connected to its ports.

## Frame Forwarding: Directing Traffic Intelligently

Once the switch has learned the MAC addresses of devices, it can forward frames efficiently. When a frame arrives, the switch looks at the **destination MAC address** in the frame's header.

1.  **Lookup in MAC Table:** The switch consults its MAC address table to find an entry matching the destination MAC address.
2.  **Forwarding Decision:**
    *   **Known Destination:** If a match is found, the switch forwards the frame *only* out the port associated with that MAC address. This is the key to efficient switching; traffic is sent only where it needs to go, avoiding unnecessary broadcast.
    *   **Unknown Destination (Flooding):** If the destination MAC address is *not* found in the table, the switch doesn't know where to send the frame. In this case, it will **flood** the frame. This means it will forward a copy of the frame out *all* ports *except* the one it arrived on. This ensures that the destination device will eventually receive the frame, and when it responds, the switch will learn its MAC address.
    *   **Same Port:** If the source and destination MAC addresses are the same, or if the destination MAC address is learned on the *same port* the frame arrived on, the switch will typically drop the frame.

**Example Continued:**

Our switch has learned:
*   `AA:BB:CC:01:01:01 | Port 1`
*   `DD:EE:FF:02:02:02 | Port 2`

Now, a frame arrives at **Port 3** with a destination MAC address of `AA:BB:CC:01:01:01`.

*   The switch looks up `AA:BB:CC:01:01:01` in its table.
*   It finds a match: `AA:BB:CC:01:01:01 | Port 1`.
*   The switch forwards the frame *only* out **Port 1**.

What if a frame arrives at **Port 3** with a destination MAC address of `11:22:33:03:03:03` and this MAC address is *not* in the table?

*   The switch cannot find `11:22:33:03:03:03` in its table.
*   It will **flood** the frame. It sends a copy out Port 1, Port 2, and Port 4 (but not Port 3, where it arrived).

## The Role of Broadcast and Multicast Addresses

There are special MAC addresses:

*   **Broadcast Address:** `FF:FF:FF:FF:FF:FF`. When a frame is sent to this address, the switch floods it out to all ports (except the ingress port), ensuring all devices on the segment receive it. This is how initial ARP requests work.
*   **Multicast Addresses:** A specific range of MAC addresses used for sending data to a group of devices. Switches will forward multicast frames to ports that have joined that multicast group.

## Key Takeaways

*   Switches build a **MAC address table** by learning the source MAC addresses of incoming frames and the ports they arrive on.
*   When forwarding, switches look up the **destination MAC address** in their table.
*   If the destination is known, the frame is forwarded to that specific port.
*   If the destination is unknown, the frame is **flooded** to all other ports.
*   This learning and forwarding process makes switches much more efficient than hubs for directing traffic within a network.

## Supports

- [[skills/computing/systems-infrastructure/networking/routing-and-switching/microskills/frame-forwarding|Frame Forwarding]]
