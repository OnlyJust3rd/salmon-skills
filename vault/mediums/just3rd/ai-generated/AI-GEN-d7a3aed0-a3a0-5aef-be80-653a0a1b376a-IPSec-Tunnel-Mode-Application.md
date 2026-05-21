---
type: "medium"
title: "IPSec Tunnel Mode Application"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/security/cybersecurity/applied-cryptography/microskills/ipsec-tunnel-mode-application|ipsec-tunnel-mode-application]]"
---
# IPSec Tunnel Mode Application

This lesson focuses on applying cryptographic principles within IPSec tunnel mode. You'll learn how IPSec uses encryption and authentication to create a secure tunnel between two endpoints, protecting data as it traverses an untrusted network.

## Understanding IPSec Tunnel Mode

IPSec (Internet Protocol Security) is a suite of protocols that provide security at the IP layer. Tunnel mode is one of the two primary modes of operation for IPSec (the other being transport mode).

In **tunnel mode**:

*   The entire original IP packet (header and payload) is encapsulated within a new IP packet.
*   The new IP header contains the source and destination addresses of the IPSec gateways (e.g., routers or firewalls) that are establishing the tunnel.
*   The original IP packet is encrypted and/or authenticated and placed in the payload of the new packet.

This is ideal for securing communications between networks (e.g., connecting two branch offices over the internet) or between a remote host and a network gateway.

## Practical Scenario: Site-to-Site VPN

Imagine two companies, "Alpha Corp" and "Beta Inc," needing to securely share sensitive data between their respective office networks, which are geographically separated. They decide to use IPSec tunnel mode to create a Virtual Private Network (VPN) over the public internet.

Here's a simplified breakdown of how it works:

1.  **Packet Origination:** A user in Alpha Corp sends a packet destined for a server in Beta Inc. This packet originates from Alpha Corp's internal network.
2.  **Tunnel Entry:** The packet reaches Alpha Corp's IPSec gateway (e.g., a VPN-enabled router).
3.  **Encapsulation & Encryption (ESP):** The gateway uses the IPSec Encapsulating Security Payload (ESP) protocol.
    *   The original IP packet is encrypted.
    *   A new IP header is added, with the source and destination IP addresses being Alpha Corp's gateway and Beta Inc's gateway, respectively.
    *   ESP trailers are added for integrity checks and padding.
4.  **Transmission:** The newly formed, encrypted packet travels across the public internet.
5.  **Tunnel Exit:** The packet arrives at Beta Inc's IPSec gateway.
6.  **Decryption & Decapsulation:** Beta Inc's gateway recognizes the IPSec headers.
    *   It decrypts the payload using the pre-shared keys or certificates established during tunnel setup.
    *   It verifies the integrity of the decrypted packet.
    *   It removes the outer IP header and the IPSec ESP headers/trailers.
7.  **Packet Forwarding:** The original IP packet is now reconstructed and forwarded to the intended server within Beta Inc's internal network.

The data, while traversing the insecure internet, is protected from eavesdropping and tampering because it was encrypted and authenticated by IPSec.

## Practice Task

Consider the following network scenario:

*   **Network A:** Internal IP range 192.168.1.0/24
*   **Network B:** Internal IP range 192.168.2.0/24
*   **Gateway A (Alpha Corp):** Public IP 203.0.113.1, Internal IP 192.168.1.1
*   **Gateway B (Beta Inc):** Public IP 198.51.100.1, Internal IP 192.168.2.1

A user at 192.168.1.100 wants to access a server at 192.168.2.50.

Describe the path of the IP packet from origin to destination, detailing which parts are encrypted and what the outer IP header would contain when the packet is between Gateway A and Gateway B, assuming ESP is used for confidentiality and integrity.

## Self-Check Questions

1.  In IPSec tunnel mode, what part of the original packet is typically encrypted?
2.  What are the source and destination IP addresses of the *outer* IP header when a packet is traversing an IPSec tunnel between two gateways?
3.  Why is tunnel mode preferred for connecting entire networks over the internet compared to transport mode?

## Supports

- [[skills/security/cybersecurity/applied-cryptography/microskills/ipsec-tunnel-mode-application|IPSec Tunnel Mode Application]]
