---
type: "medium"
title: "Cryptography's Place in the OSI Model"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/security/cybersecurity/applied-cryptography/microskills/cryptography-application-at-osi-layers|Cryptography Application at OSI Layers]]"
---
# Cryptography's Place in the OSI Model

Understanding how cryptography fits into network communication protocols is crucial for applied cryptography. We'll explore how cryptographic functions are applied at different layers of the Open Systems Interconnection (OSI) model.

### Why it Matters

Different security needs are addressed at different layers. Some protocols provide security for individual data packets, while others secure entire communication sessions. Knowing where cryptography operates helps us understand the scope and limitations of various security protocols.

### Cryptography Across the Layers

The OSI model breaks down network communication into seven distinct layers. Cryptography can be implemented at several of these layers, providing security relevant to that layer's function.

*   **Layer 2 (Data Link Layer):** While less common for broad protocol security, encryption can be applied here for specific hardware-level security, like securing wireless access points (e.g., WPA2/3 uses cryptographic techniques). This protects data between two directly connected devices.

*   **Layer 3 (Network Layer):** This is where protocols like **IPsec** operate.
    *   **AH (Authentication Header):** Provides integrity and authentication for IP packets but not encryption.
    *   **ESP (Encapsulating Security Payload):** Offers confidentiality (encryption), integrity, and authentication.
        *   **Transport Mode:** Secures the payload of the IP packet. The IP header remains visible.
        *   **Tunnel Mode:** Encrypts the entire original IP packet (header and payload) and adds a new IP header. This is often used for VPNs.

*   **Layer 4 (Transport Layer):** **SSL/TLS (Secure Sockets Layer/Transport Layer Security)** is a prime example here. It secures connections between applications by encrypting data at the transport layer. This ensures that data exchanged between a client and server (like in web browsing or email) is private and hasn't been tampered with.

*   **Layer 5 (Session Layer):** While not directly implementing encryption protocols, this layer manages the communication sessions that TLS or IPsec might secure.

*   **Layer 6 (Presentation Layer):** Protocols like **PGP (Pretty Good Privacy)** can be considered to operate conceptually around this layer for securing application data (like emails) before it's passed down to lower layers for transmission. PGP encrypts and signs messages.

*   **Layer 7 (Application Layer):** Some applications implement their own encryption. **Kerberos** is a network authentication protocol that often operates at this layer, using cryptography to authenticate users to services without sending passwords over the network.

### Practical Scenario

Imagine you are sending a sensitive document via email.
1.  **PGP** might be used to encrypt the document itself (Presentation Layer concept).
2.  The encrypted email is then sent. **TLS** might secure the connection between your email client and the email server (Transport Layer).
3.  If your company uses a VPN to connect to its internal network, **IPsec (in tunnel mode)** would encrypt all your network traffic, including the email, from your computer to the VPN gateway (Network Layer).

### Practice Task

For each protocol listed below, identify the primary OSI layer(s) where its cryptographic functions are applied:

*   IPsec (ESP in Transport Mode)
*   SSL/TLS
*   PGP
*   Kerberos

### Self-Check Questions

1.  What is the main difference in security provided by AH versus ESP in IPsec?
2.  When would you choose IPsec tunnel mode over transport mode?
3.  Why is it beneficial for SSL/TLS to operate at the transport layer?
4.  How does PGP relate to the OSI model's concept of data presentation before transmission?

## Supports

- [[skills/security/cybersecurity/applied-cryptography/microskills/cryptography-application-at-osi-layers|Cryptography Application at OSI Layers]]
