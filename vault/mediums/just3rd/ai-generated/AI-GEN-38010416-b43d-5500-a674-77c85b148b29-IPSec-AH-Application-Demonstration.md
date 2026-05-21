---
type: "medium"
title: "IPSec AH: Ensuring Data Integrity and Authenticity"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/security/cybersecurity/applied-cryptography/microskills/ipsec-ah-application-demonstration|ipsec-ah-application-demonstration]]"
---
# IPSec AH: Ensuring Data Integrity and Authenticity

This lesson demonstrates how the Authentication Header (AH) in IPSec provides data integrity and origin authentication. We'll explore its core function and how it's applied in a simplified scenario.

## What is IPSec AH?

The IPSec Authentication Header (AH) is a security protocol that provides connectionless integrity, data origin authentication, and anti-replay protection for IP packets. It achieves this by adding a header to each IP packet that contains an integrity check value (ICV) or checksum. This checksum is calculated over the IP header and the payload, ensuring that any modification to the packet during transit will invalidate the checksum, thus detecting tampering. AH does not provide confidentiality (encryption).

## How AH Works (Simplified)

1.  **Packet Preparation:** Before sending, the sender calculates a hash of the original IP header and the payload.
2.  **AH Header Addition:** This hash (ICV) is placed in the AH header, which is then inserted between the original IP header and the payload.
3.  **Transmission:** The packet is sent across the network.
4.  **Verification:** The receiver recalculates the hash using the same fields as the sender. It then compares this newly calculated hash with the ICV in the received AH header.
5.  **Validation:** If the hashes match, the packet is considered authentic and has not been tampered with. If they don't match, the packet is discarded.

## Practical Scenario: Secure Communication Between Two Servers

Imagine two servers, Server A and Server B, that need to exchange sensitive configuration data. To ensure this data isn't altered or spoofed during transit, they decide to use IPSec with AH in **transport mode**.

**Mode:** Transport Mode
**Protocol:** AH

**Steps:**

1.  **Server A wants to send configuration data to Server B.**
2.  **Data Packaging:** Server A prepares an IP packet containing the configuration data.
3.  **AH Header Generation:** Server A computes an ICV over the relevant parts of its IP header and the configuration data.
4.  **AH Header Insertion:** The AH header, containing the ICV, is added to the packet. The packet now looks conceptually like this:
    `[Original IP Header] -> [AH Header (with ICV)] -> [Configuration Data]`
5.  **Transmission:** The packet is sent from Server A to Server B.
6.  **Verification at Server B:** Server B receives the packet. It extracts the original IP header and the configuration data.
7.  **Hash Recalculation:** Server B recalculates the ICV based on the received IP header and configuration data using the same algorithm Server A used.
8.  **Comparison:** Server B compares its calculated ICV with the ICV found in the AH header.
9.  **Outcome:**
    *   If they match, Server B trusts that the configuration data is genuine and has not been modified.
    *   If they don't match, Server B discards the packet, recognizing potential tampering or corruption.

## Practice Task

Imagine you are designing a system where a sensor periodically reports its readings to a central server. To ensure the integrity of these readings, you decide to implement IPSec AH in transport mode.

**Task:** Describe the process from the sensor sending a reading to the server receiving and validating it, focusing on the role of the AH header. What specific information does the AH header help protect from modification?

## Self-Check Questions

1.  What are the two primary security services provided by IPSec AH?
2.  Does IPSec AH provide encryption? Explain why or why not.
3.  In the context of our server-to-server scenario, if a network device in between modified the configuration data being sent, what would happen at Server B when it tries to verify the packet?

## Supports

- [[skills/security/cybersecurity/applied-cryptography/microskills/ipsec-ah-application-demonstration|IPSec (AH) Application Demonstration]]
