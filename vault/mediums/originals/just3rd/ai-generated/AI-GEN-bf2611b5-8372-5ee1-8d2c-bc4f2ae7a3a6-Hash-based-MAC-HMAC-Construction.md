---
type: "medium"
title: "Understanding HMAC Construction"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/security-privacy/cybersecurity/message-integrity-mechanisms/microskills/hash-based-mac-hmac-construction|hash-based-mac-hmac-construction]]"
learning-time-in-minutes: 3
---
# Understanding HMAC Construction

This lesson breaks down how Hash-based Message Authentication Codes (HMACs) are constructed. Understanding this construction is crucial for ensuring data integrity and authenticating messages.

## What is an HMAC?

An HMAC is a specific type of MAC that uses a cryptographic hash function as part of its algorithm. It's designed to verify both the data integrity *and* the authenticity of a message. This means it can tell you if the message has been tampered with, and also confirm that the message came from the expected sender.

HMACs are widely used in security protocols like TLS/SSL, IPsec, and others.

## The Core Idea: Hashing with a Secret Key

At its heart, an HMAC is a hash function combined with a secret key. However, simply hashing the message and the key together isn't secure. A clever construction is needed to prevent certain types of attacks, like length extension attacks.

The standard HMAC construction, defined in RFC 2104, involves using the hash function twice.

## HMAC Construction Steps

Let's break down the construction process for an HMAC.

**Inputs:**

*   **K:** The secret key.
*   **M:** The message to be authenticated.
*   **H:** A cryptographic hash function (e.g., SHA-256, SHA-3).
*   **B:** The block size of the hash function (e.g., 64 bytes for SHA-256).
*   **L:** The output size of the hash function (e.g., 32 bytes for SHA-256).

**Steps:**

1.  **Key Preparation:**
    *   If the key `K` is longer than the block size `B`, hash `K` to produce a new key of length `L`.
    *   If the key `K` is shorter than the block size `B`, pad it with zero bytes (`0x00`) on the right until it reaches length `B`.
    *   This ensures the key used in the next steps is always exactly `B` bytes long.

2.  **Inner Padding (`ipad`):**
    *   Create an `ipad` value by XORing the prepared key with a constant byte string of `0x36` repeated `B` times.
    *   `ipad = K XOR (0x36 repeated B times)`

3.  **Outer Padding (`opad`):**
    *   Create an `opad` value by XORing the prepared key with a constant byte string of `0x5c` repeated `B` times.
    *   `opad = K XOR (0x5c repeated B times)`

4.  **First Hash:**
    *   Concatenate `ipad` and the message `M`.
    *   Hash this combined value using `H`.
    *   `inner_hash = H(ipad || M)`

5.  **Second Hash:**
    *   Concatenate `opad` and the `inner_hash` calculated in the previous step.
    *   Hash this combined value using `H`.
    *   `HMAC = H(opad || inner_hash)`

The resulting `HMAC` is the authentication tag that is sent along with the message.

### Pseudocode Example

```pseudocode
function HMAC(K, M, H):
  // B: block size of H
  // L: output size of H

  // Step 1: Key Preparation
  if length(K) > B:
    K = H(K)
  if length(K) < B:
    K = K + 0x00 * (B - length(K)) // Pad with zeros

  // Step 2 & 3: Padding
  ipad = K XOR (0x36 * B)
  opad = K XOR (0x5c * B)

  // Step 4: First Hash
  inner_hash = H(ipad || M)

  // Step 5: Second Hash
  HMAC_tag = H(opad || inner_hash)

  return HMAC_tag
```

## Why This Construction?

The double hashing and padding with specific constants (`0x36` and `0x5c`) are not arbitrary. They are crucial for security.

*   **Preventing Collision Attacks:** The construction helps to resist certain hash function weaknesses.
*   **Preventing Length Extension Attacks:** A simpler construction like `H(K || M)` could be vulnerable. If an attacker knows the hash of `K || M`, they can sometimes calculate the hash of `K || M || appended_data` without knowing `K`. The HMAC construction prevents this by hashing the result of the first hash, which is of fixed length and doesn't reveal the internal state in a way that allows extension.

## In Summary

The HMAC construction involves:
1.  Preparing the secret key to match the hash function's block size.
2.  XORing the key with two different padding constants (`ipad` and `opad`).
3.  Hashing the `ipad` XORed key with the message.
4.  Hashing the `opad` XORed key with the result of the first hash.

This process creates a robust authentication tag that ensures both data integrity and authenticity.

## Supports

- [[skills/computing/security-privacy/cybersecurity/message-integrity-mechanisms/microskills/hash-based-mac-hmac-construction|Hash-based MAC (HMAC) Construction]]
