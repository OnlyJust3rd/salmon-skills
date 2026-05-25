---
type: "medium"
title: "Cryptographic Implementation Differences: AH vs. ESP in IPSec"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/security-privacy/cybersecurity/applied-cryptography/microskills/cryptographic-implementation-differences|cryptographic-implementation-differences]]"
learning-time-in-minutes: 3
---
# Cryptographic Implementation Differences: AH vs. ESP in IPSec

This lesson focuses on analyzing the distinct cryptographic components and strategies used by the Authentication Header (AH) and Encapsulating Security Payload (ESP) protocols within IPSec. Understanding these differences is crucial for choosing the appropriate security services for network communications.

## Key Differences

IPSec offers two primary security protocols: AH and ESP. While both provide integrity and authentication, they differ significantly in their approach and the services they offer.

*   **Authentication Header (AH):**
    *   **Primary Goal:** Provides strong data integrity and origin authentication.
    *   **Cryptographic Use:** Uses cryptographic hash functions (like SHA-256) to create an integrity check value (ICV) for the entire packet (including IP headers, where mutable fields are handled).
    *   **Confidentiality:** Does *not* provide confidentiality. The packet's payload remains unencrypted.
    *   **Protocol Number:** IP Protocol 51.

*   **Encapsulating Security Payload (ESP):**
    *   **Primary Goal:** Provides confidentiality, data integrity, and origin authentication.
    *   **Cryptographic Use:** Can be used in two modes:
        *   **Transport Mode:** Encrypts and authenticates only the payload of the IP packet. The original IP header is largely preserved.
        *   **Tunnel Mode:** Encrypts and authenticates the entire original IP packet and adds a new IP header. This is often used for VPNs.
    *   **Encryption Algorithms:** Supports a wide range of encryption algorithms (like AES).
    *   **Authentication:** Can optionally provide integrity and authentication using similar hash functions as AH.
    *   **Protocol Number:** IP Protocol 50.

## Practical Scenario

Imagine you are securing communication between two corporate offices.

*   **Scenario 1: Sensitive Data, No Network Hiding Needed**
    If your primary concern is ensuring that the data transmitted between offices is encrypted and cannot be read by eavesdroppers, and you don't need to hide the source and destination IP addresses from intermediate network devices, ESP in transport mode would be a good choice. It encrypts the actual data, providing confidentiality.

*   **Scenario 2: Verifying Data Integrity, Public Network Transit**
    If your main requirement is to guarantee that the data sent has not been tampered with in transit and to verify its origin, but the data itself is not sensitive and can be transmitted in the clear (e.g., status updates), then AH would be suitable. AH ensures the integrity and authenticity of the packet, but leaves the data readable.

*   **Scenario 3: Secure VPN Tunnel**
    For establishing a secure Virtual Private Network (VPN) between two networks, where all traffic between the networks needs to be protected and hidden from external observers, ESP in tunnel mode is the standard solution. It encrypts the entire original IP packet and adds a new IP header, effectively creating a secure tunnel.

## Practice Task

Consider a scenario where an organization is transmitting financial transaction data over the internet. The data is highly sensitive and must remain confidential. Additionally, the organization needs to ensure that the data has not been altered during transmission and can verify the sender's identity.

Based on the cryptographic implementations of AH and ESP, which protocol (or combination of protocols) would be most appropriate for this scenario, and why?

## Self-Check Questions

1.  What is the primary security service that AH provides which ESP can optionally provide?
2.  Which IPSec protocol is essential for achieving confidentiality of the IP packet's payload?
3.  In what scenario would you choose AH over ESP?
4.  What is the key difference in how AH and ESP handle IP headers in their respective services?

## Supports

- [[skills/computing/security-privacy/cybersecurity/applied-cryptography/microskills/cryptographic-implementation-differences|Cryptographic Implementation Differences]]
