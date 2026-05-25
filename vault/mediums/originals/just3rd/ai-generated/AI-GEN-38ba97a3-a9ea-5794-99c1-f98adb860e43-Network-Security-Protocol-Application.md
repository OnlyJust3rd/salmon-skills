---
type: "medium"
title: "Network Security Protocol Application: A Simplified IPSec Example"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/security-privacy/cybersecurity/applied-cryptography/microskills/network-security-protocol-application|network-security-protocol-application]]"
learning-time-in-minutes: 4
---
# Network Security Protocol Application: A Simplified IPSec Example

This lesson will guide you in applying basic cryptographic concepts to understand how network security protocols work. We'll use a simplified model of IPSec to illustrate these principles.

## What You'll Learn

You'll learn to demonstrate the application of cryptographic principles within a simplified model of IPSec, focusing on the roles of Authentication Header (AH) and Encapsulating Security Payload (ESP) in both transport and tunnel modes.

## Understanding IPSec's Role

IPSec (Internet Protocol Security) is a suite of protocols that provide cryptographic protection to IP packets. It ensures data integrity, authentication, and confidentiality. Two key protocols within IPSec are AH and ESP.

*   **Authentication Header (AH):** Provides data integrity and origin authentication, but not confidentiality. It works by calculating a hash of the packet and sending it along.
*   **Encapsulating Security Payload (ESP):** Provides confidentiality (encryption), data integrity, and origin authentication. It can also provide anti-replay protection.

IPSec operates in two modes:

*   **Transport Mode:** Secures the payload of the IP packet. The original IP header is largely preserved. Typically used for host-to-host communication.
*   **Tunnel Mode:** Encapsulates the entire original IP packet (header and payload) within a new IP packet. This is often used for VPNs to secure traffic between networks.

## Practical Scenario: Securing a Connection

Imagine two computers, Alice and Bob, on separate networks that need to communicate securely over an untrusted internet. They decide to use IPSec in tunnel mode.

1.  **Setup:** Alice's network gateway and Bob's network gateway will act as IPSec endpoints.
2.  **Tunnel Establishment:** Alice wants to send a sensitive document to Bob. Her gateway will initiate an IPSec tunnel to Bob's gateway.
3.  **Packet Processing (Alice's Gateway):**
    *   The original IP packet from Alice's machine to Bob's machine is created.
    *   Since they are using tunnel mode and want confidentiality and integrity, ESP will be used.
    *   **Encryption:** The original IP packet (header and payload) is encrypted using a symmetric key agreed upon between the gateways.
    *   **Hashing (Integrity):** A cryptographic hash (e.g., SHA-256) is calculated over the encrypted packet and a sequence number. This hash is appended as the Integrity Check Value (ICV).
    *   **Encapsulation:** The encrypted packet, along with the ICV and a new ESP header, is then wrapped in a *new* IP packet. This new IP packet will have the source IP of Alice's gateway and the destination IP of Bob's gateway.
4.  **Transmission:** The new IP packet travels across the internet.
5.  **Packet Processing (Bob's Gateway):**
    *   Bob's gateway receives the outer IP packet.
    *   It strips off the outer IP header.
    *   It identifies the ESP header and uses the pre-shared key to decrypt the payload.
    *   It recalculates the hash of the decrypted packet and compares it with the received ICV. If they match, the data is verified as intact and authentic.
    *   The original IP packet (now decrypted and verified) is extracted and forwarded to Bob's machine.

This process ensures that even if an attacker intercepts the packet on the internet, they cannot read its contents (due to encryption) and cannot tamper with it without detection (due to the integrity check).

## Practice Task

Imagine you are configuring IPSec for a VPN between two branch offices. You need to secure all traffic between the offices.

*   **Which mode would you likely choose?** (Transport or Tunnel)
*   **Which protocol would you primarily use if you need to protect the data from being read?** (AH or ESP)
*   **Why is a sequence number important in the ESP header when providing anti-replay protection?**

## Self-Check Questions

1.  What is the primary difference in security services offered by AH versus ESP?
2.  In transport mode, what part of the original IP packet is protected?
3.  In tunnel mode, what is encapsulated within the new IP packet?
4.  How does IPSec use cryptographic hashing to ensure data integrity?

## Supports

- [[skills/computing/security-privacy/cybersecurity/applied-cryptography/microskills/network-security-protocol-application|Network Security Protocol Application]]
