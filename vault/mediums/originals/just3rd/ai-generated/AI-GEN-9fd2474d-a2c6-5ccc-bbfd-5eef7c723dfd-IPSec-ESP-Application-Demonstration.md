---
type: "medium"
title: "IPSec ESP Application Demonstration"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/security-privacy/cybersecurity/applied-cryptography/microskills/ipsec-esp-application-demonstration|ipsec-esp-application-demonstration]]"
learning-time-in-minutes: 3
---
# IPSec ESP Application Demonstration

This lesson demonstrates how to apply cryptographic principles using a simplified model of IPSec's Encapsulating Security Payload (ESP). We'll focus on how ESP provides confidentiality and integrity for network traffic.

## What is IPSec ESP?

IPSec ESP is a protocol used to secure IP communications. Its primary functions are:

*   **Confidentiality:** Encrypting the data payload to prevent eavesdropping.
*   **Integrity:** Ensuring the data has not been tampered with during transit.
*   **Authentication (Optional):** Verifying the origin of the data.

We'll focus on the confidentiality and integrity aspects for this demonstration. ESP can operate in two modes:

*   **Transport Mode:** Encrypts and authenticates only the payload of the IP packet. The original IP header is mostly retained.
*   **Tunnel Mode:** Encrypts and authenticates the entire original IP packet, which is then encapsulated within a new IP packet.

For simplicity, we will illustrate the core cryptographic operations of ESP without delving into the complexities of packet encapsulation or full protocol negotiation.

## Practical Scenario: Securing a Simple Data Transfer

Imagine two systems, Host A and Host B, need to exchange a sensitive message securely over an untrusted network. We can simulate how ESP would protect this message.

Let's assume:

*   A shared secret key `K_secret` is pre-established between Host A and Host B.
*   We will use a symmetric encryption algorithm like AES (e.g., AES-GCM for combined encryption and authentication).
*   We will use a hashing algorithm like SHA-256 for integrity.

**Data to be sent:** `MySecretMessage`

### Step 1: Confidentiality (Encryption)

Host A encrypts the message using `K_secret` and AES.

**Pseudocode:**
```
ciphertext = AES_Encrypt(K_secret, "MySecretMessage")
```

Let's say the `ciphertext` is a hexadecimal string: `a1b2c3d4e5f67890...`

### Step 2: Integrity (Hashing/Authentication Tag)

To ensure the message hasn't been altered, Host A calculates a Message Authentication Code (MAC) or an authentication tag using `K_secret` and the *original* plaintext message, or a combination of plaintext and ciphertext depending on the mode and algorithm (like AES-GCM). For AES-GCM, this is handled as part of the authenticated encryption process.

**Pseudocode (Simplified for AES-GCM):**
```
(ciphertext, authentication_tag) = AES_GCM_Encrypt(K_secret, nonce, "MySecretMessage")
```
Let's assume the `authentication_tag` is `tag123`.

The data that would be transmitted would include the `ciphertext` and the `authentication_tag`.

### Step 3: Reception and Verification at Host B

Host B receives the `ciphertext` and `authentication_tag`.

1.  **Decryption:** Host B uses `K_secret` to decrypt the `ciphertext`.
    ```
    decrypted_message = AES_Decrypt(K_secret, ciphertext)
    ```
    If the decryption is successful, Host B will retrieve the original message (or something close, depending on padding).

2.  **Verification:** Host B independently calculates the authentication tag using `K_secret`, the `nonce`, and the *received* `ciphertext`.
    ```
    calculated_tag = AES_GCM_Verify(K_secret, nonce, ciphertext)
    ```
    Then, Host B compares its `calculated_tag` with the `received_tag` (`tag123`).

    *   If `calculated_tag == received_tag`, the message is authentic and has not been tampered with.
    *   If they don't match, the message has been modified or is not from the expected sender.

## Practice Task

Imagine you have a simple text message: "Payment details: $500, account 12345".

1.  Describe how you would encrypt this message using a symmetric key for confidentiality. What cryptographic primitive would you use?
2.  Explain how you would ensure the integrity of this message using a cryptographic hash function or an authentication tag.
3.  What would happen at the receiving end if an attacker intercepted the message and changed "$500" to "$5000" before it reached the recipient, assuming ESP was properly applied?

## Self-Check Questions

*   What are the two primary security services provided by IPSec ESP?
*   In your own words, why is it important to use both encryption and an integrity check for secure communication?
*   What is the role of the shared secret key (`K_secret`) in the ESP process?

## Supports

- [[skills/computing/security-privacy/cybersecurity/applied-cryptography/microskills/ipsec-esp-application-demonstration|IPSec (ESP) Application Demonstration]]
