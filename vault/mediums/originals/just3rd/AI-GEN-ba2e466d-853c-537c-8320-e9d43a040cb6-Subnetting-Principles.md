---
type: medium
title: Understanding Subnetting Principles
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[subnetting-principles|subnetting-principles]]"
related-skills:
  - "[[skills/computing/systems-infrastructure/computer-network/network-layers/network-layer/network-layer|network-layer]]"
learning-time-in-minutes: 4
---
# Understanding Subnetting Principles

In the realm of network communication, IP addressing is fundamental. To effectively manage and organize these addresses, we employ a technique called subnetting. This lesson will help you understand the core principles of subnetting, which is a crucial part of defining IP addressing and forwarding concepts.

## What is Subnetting?

Imagine you have a large plot of land (your IP network) and you need to divide it into smaller, more manageable sections for different purposes (smaller networks or subnets). Subnetting is the process of taking a single IP network and dividing it into multiple smaller IP networks.

Why do we do this?

*   **Efficiency:** It allows for more efficient use of IP addresses. Instead of having one large block of addresses that might be underutilized, you can create smaller blocks tailored to the needs of specific groups of devices.
*   **Organization:** It helps in organizing networks logically. You can assign different subnets to different departments, floors, or types of devices (e.g., servers, workstations, printers).
*   **Security:** Subnetting can improve security by isolating traffic. You can set up firewall rules between subnets, limiting communication to only what is necessary.
*   **Performance:** Smaller broadcast domains lead to less network congestion and improved performance. When a device sends a broadcast message, it only reaches devices within its own subnet, not the entire network.

## How Subnetting Works: The Role of the Subnet Mask

The key to subnetting lies in the **subnet mask**. An IP address is divided into two parts: the **network portion** and the **host portion**. The subnet mask is a 32-bit number that tells us which part of the IP address is the network portion and which is the host portion.

In a standard classful network, the network portion is implicitly defined by the IP address class. However, with subnetting, we "borrow" bits from the host portion to create new, smaller network IDs.

A subnet mask consists of a series of `1`s followed by a series of `0`s.

*   The `1`s in the subnet mask indicate the **network bits**.
*   The `0`s in the subnet mask indicate the **host bits**.

By changing the position of the `1`s and `0`s in the subnet mask, we can create different subnet sizes.

### Example: Default Class C Network

Consider a Class C network with the IP address `192.168.1.0`.
The default subnet mask for a Class C network is `255.255.255.0`.
In binary, this is:

`11111111.11111111.11111111.00000000`

*   The first 24 bits (`1`s) represent the **network portion**. This means `192.168.1` is the network ID.
*   The last 8 bits (`0`s) represent the **host portion**. This allows for $2^8 - 2 = 254$ usable host addresses.

### Subnetting a Class C Network

Let's say we want to divide this `192.168.1.0/24` network into two smaller subnets. We need to borrow bits from the host portion to create new network IDs.

To create two subnets, we need $2$ network IDs. This requires us to borrow at least 1 bit from the host portion ($2^1 = 2$).

If we borrow 1 bit from the host portion, our new subnet mask will have 25 ones and 7 zeros in the last octet.

The new subnet mask will be: `255.255.255.128`
In binary: `11111111.11111111.11111111.10000000`

Now, the first 25 bits are the network portion. Let's see how this divides our network:

*   **Subnet 1:**
    *   The borrowed bit is `0`.
    *   Network portion: `192.168.1.0` (represented by the first 25 bits `11111111.11111111.11111111.10000000` where the 25th bit is 0)
    *   Host portion: The remaining 7 bits can be used for hosts.
    *   Usable hosts: $2^7 - 2 = 128 - 2 = 126$
    *   First usable IP: `192.168.1.1`
    *   Last usable IP: `192.168.1.126`
    *   Broadcast IP: `192.168.1.127`

*   **Subnet 2:**
    *   The borrowed bit is `1`.
    *   Network portion: `192.168.1.128` (represented by the first 25 bits `11111111.11111111.11111111.10000000` where the 25th bit is 1)
    *   Host portion: The remaining 7 bits can be used for hosts.
    *   Usable hosts: $2^7 - 2 = 128 - 2 = 126$
    *   First usable IP: `192.168.1.129`
    *   Last usable IP: `192.168.1.254`
    *   Broadcast IP: `192.168.1.255`

### Key Takeaways for Subnetting

*   **Borrowing Bits:** Subnetting involves borrowing bits from the host portion of an IP address to create new network bits.
*   **Subnet Mask:** The subnet mask defines the boundary between the network and host portions, and is crucial for identifying subnets.
*   **Number of Subnets:** If you borrow 'n' bits, you can create $2^n$ subnets.
*   **Number of Hosts per Subnet:** If 'h' bits remain for hosts, you can have $2^h - 2$ usable host addresses per subnet. (We subtract 2 for the network address and the broadcast address).

Understanding these basic principles of subnetting is a vital step in mastering IP addressing and forwarding concepts.

## Supports

- [[subnetting-principles|Subnetting Principles]]
