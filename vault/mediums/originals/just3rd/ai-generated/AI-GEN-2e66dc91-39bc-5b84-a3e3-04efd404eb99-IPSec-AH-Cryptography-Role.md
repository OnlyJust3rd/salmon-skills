---
type: "medium"
title: "Understanding IPSec Authentication Header (AH) Cryptography Role"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/security-privacy/cybersecurity/applied-cryptography/microskills/ipsec-ah-cryptography-role|ipsec-ah-cryptography-role]]"
learning-time-in-minutes: 3
---
# Understanding IPSec Authentication Header (AH) Cryptography Role

IPSec, or Internet Protocol Security, is a suite of protocols used to secure IP communications. A key component of IPSec is the Authentication Header (AH). This lesson focuses on understanding the role of cryptography within the IPSec AH.

## What is IPSec AH?

The IPSec Authentication Header (AH) is a security protocol that provides data integrity, authentication, and anti-replay protection for IP packets. It operates at the Network Layer (Layer 3) of the OSI model. Unlike other IPSec protocols, AH does *not* provide confidentiality (encryption). Its primary goal is to ensure that the data you send arrives at its destination without being tampered with and that it originates from a trusted source.

### How AH Works with Cryptography

AH achieves its goals by calculating a hash (a fixed-size string of characters) of the IP packet and sending this hash in the AH header. The receiving system recalculates the hash and compares it to the one received. If they match, it verifies the integrity and authenticity of the packet.

Specifically, AH covers:

*   **The entire IP packet, excluding mutable fields** (like the IP header's Time To Live field, which changes as the packet travels). This ensures that even parts of the original IP header that aren't encrypted are still authenticated.
*   **The AH header itself.**

The cryptographic function used is typically a keyed hash algorithm, such as HMAC-SHA256. The "keyed" aspect means a secret key is used in the hashing process, making it a Message Authentication Code (MAC). This key is shared between the sender and receiver, ensuring that only authorized parties can generate a valid MAC.

## Practical Scenario

Imagine a company that needs to send sensitive configuration data between two servers within its private network. While encryption might not be strictly necessary for this internal traffic, ensuring that the configuration hasn't been altered by an internal attacker is crucial.

In this scenario, IPSec with AH can be implemented:

1.  **Server A** wants to send a configuration update to **Server B**.
2.  Server A uses IPSec AH to create a packet containing the configuration data. It calculates a MAC of the entire packet using a pre-shared secret key and appends this MAC in the AH header.
3.  The packet travels over the network.
4.  **Server B** receives the packet. It uses the same pre-shared secret key to recalculate the MAC of the received packet.
5.  Server B compares its calculated MAC with the MAC received in the AH header.
    *   If they match, Server B is confident that the configuration data is authentic (came from Server A) and has not been modified in transit.
    *   If they don't match, Server B discards the packet, as its integrity or authenticity is compromised.

This use of AH provides assurance without the overhead of encrypting the data, making it efficient for scenarios where integrity and authentication are the primary concerns.

## Practice Task

Explore the configuration settings for IPSec on a network device (like a router or firewall) that supports AH. Identify where the authentication algorithm (e.g., SHA256) and the shared secret key are configured for AH.

## Self-Check Questions

1.  What are the three main security services provided by IPSec AH?
2.  Which layer of the OSI model does IPSec AH operate at?
3.  Why is it important that AH covers most of the IP packet, including parts of the IP header?
4.  What is the difference between encryption and authentication in the context of network security?

## Supports

- [[skills/computing/security-privacy/cybersecurity/applied-cryptography/microskills/ipsec-ah-cryptography-role|IPSec (AH) Cryptography Role]]
