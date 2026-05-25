---
type: medium
title: "Understanding Subnetting: Dividing the IP Address Space"
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[subnetting-concept|subnetting-concept]]"
learning-time-in-minutes: 5
---
# Understanding Subnetting: Dividing the IP Address Space

This lesson will help you understand the fundamental concept of subnetting within the Network Layer of networking. By the end, you'll grasp how IP address space is divided and why this division is so crucial.

## What is Subnetting?

Imagine you have a large plot of land (your IP address space) and you need to build several distinct neighborhoods on it. You wouldn't just assign a single address to the entire plot. Instead, you'd divide it into smaller, manageable lots, each with its own unique addressing scheme. Subnetting in IP networking is very similar.

**Subnetting** is the process of taking a large block of IP addresses and dividing it into multiple smaller, logically distinct blocks called **subnets**. These subnets are created by borrowing bits from the host portion of an IP address and using them to define the subnet.

### The IP Address Structure

To understand subnetting, we first need to recall the structure of an IP address. An IPv4 address is a 32-bit number, typically represented in dotted-decimal notation (e.g., `192.168.1.0`). This address is logically divided into two parts:

1.  **Network Portion:** Identifies the specific network.
2.  **Host Portion:** Identifies a specific device (host) within that network.

The boundary between the network and host portions is determined by the **subnet mask**. The subnet mask is also a 32-bit number, where bits set to '1' indicate the network portion, and bits set to '0' indicate the host portion.

For example, in the IP address `192.168.1.10` with a subnet mask of `255.255.255.0`:

*   `192.168.1` is the network portion.
*   `.10` is the host portion.
*   The subnet mask `255.255.255.0` tells us that the first 24 bits are for the network and the last 8 bits are for hosts.

## The Mechanics of Subnetting

When you subnet, you effectively extend the network portion of the IP address by using bits from the host portion. These borrowed bits become part of the **subnet ID**.

Let's take a common private IP address range: `192.168.0.0/24`.
Here, the `/24` indicates that the first 24 bits are the network portion, and the remaining 8 bits are for hosts. This gives us a single network with `2^8 - 2 = 254` usable host addresses.

Suppose we want to divide this `/24` network into two smaller subnets. We can borrow just **one bit** from the host portion.

*   **Original:** `192.168.0.xxx` (8 host bits)
*   **Subnetting (borrowing 1 bit):** The network portion now becomes 25 bits (`/25`). The last bit of the original network portion (which is the first bit of the host portion) is now used as a subnet bit.

Consider the binary representation of `192.168.0.0`:
`11000000.10101000.00000000.00000000`

With a `/24` mask, the first 24 bits are network:
`11000000.10101000.00000000`.`00000000` (host)

If we borrow 1 bit for subnetting, our new network mask is `/25`. The binary representation of the IP address effectively has an extra bit designated for the subnet:

`11000000.10101000.00000000`.**0**`.0000000` (subnet bit highlighted in bold)
`11000000.10101000.00000000`.**1**`.0000000` (subnet bit highlighted in bold)

This single borrowed bit creates two possible values for that bit: `0` and `1`. Each value defines a distinct subnet.

**Subnet 1 (subnet bit is 0):**
`192.168.0.0` with a `/25` mask (`255.255.255.128`).
This network will have addresses from `192.168.0.0` to `192.168.0.127`.

**Subnet 2 (subnet bit is 1):**
`192.168.0.128` with a `/25` mask (`255.255.255.128`).
This network will have addresses from `192.168.0.128` to `192.168.0.255`.

Each of these new subnets has a smaller host portion (7 bits in this case), meaning fewer available host addresses per subnet (`2^7 - 2 = 126` usable hosts).

### The Role of the Subnet Mask

The subnet mask is crucial because it defines the boundary of the network and host portions for each subnet. In our `/25` example, the subnet mask would be `255.255.255.128`.

*   `255` in binary is `11111111`.
*   `128` in binary is `10000000`.

So, `255.255.255.128` in binary is:
`11111111.11111111.11111111`.**1**`0000000`

The '1's indicate the combined network and subnet portion, and the '0's indicate the host portion.

## Key Concepts in Subnetting

*   **Subnet ID:** The first IP address in a subnet, representing the network address for that subnet. It's determined by setting all host bits to '0'.
*   **Broadcast Address:** The last IP address in a subnet, used to send data to all hosts within that subnet. It's determined by setting all host bits to '1'.
*   **Usable Host Addresses:** The addresses between the subnet ID and the broadcast address that can be assigned to individual devices. The number of usable hosts is calculated as $$2^h - 2$$, where $$h$$ is the number of host bits in the subnet.

## Analogy Check

Think of a postal service.

*   **IP Address:** The full street address (e.g., 123 Main Street, Anytown, CA 90210).
*   **Network Portion:** The city and state (Anytown, CA). This helps route mail to the correct general area.
*   **Host Portion:** The street number and house number (123 Main Street). This identifies the specific recipient.
*   **Subnetting:** Dividing a large city (a large IP network) into smaller neighborhoods or districts (subnets). Each district might have its own internal street naming convention or postal code prefix, making mail delivery more efficient within that district.

By understanding subnetting, you gain the ability to segment your network logically, which is a fundamental building block for efficient network management and security.

## Supports

- [[subnetting-concept|Subnetting Concept]]
