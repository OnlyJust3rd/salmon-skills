---
type: "medium"
title: "Digital Signatures with RSA: Generation"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/security-privacy/cybersecurity/asymmetric-algorithm-mechanics/microskills/digital-signature-generation-rsa|digital-signature-generation-rsa]]"
learning-time-in-minutes: 3
---
# Digital Signatures with RSA: Generation

This lesson focuses on understanding how RSA is used to create digital signatures, a fundamental aspect of asymmetric cryptography. A digital signature provides authenticity, integrity, and non-repudiation for digital messages.

### What is a Digital Signature?

In essence, a digital signature is like a handwritten signature but for the digital world. It's a cryptographic mechanism that allows a sender to sign a message in such a way that the recipient can verify who sent it and that it hasn't been tampered with.

### How RSA Generates a Digital Signature

RSA's signature generation process leverages its public and private key pair. The core idea is to "sign" a message using the sender's *private key* and then verify that signature using the sender's *public key*.

The process typically involves these steps:

1.  **Hashing the Message:** First, the message is processed through a cryptographic hash function (like SHA-256). This creates a fixed-size "fingerprint" of the message, called a hash digest. If even a single bit of the message changes, the hash digest will be entirely different.

2.  **"Encrypting" the Hash:** The sender then uses their *private key* to "encrypt" this hash digest. This encrypted hash is the digital signature.

3.  **Combining Signature and Message:** The digital signature is then sent along with the original message.

Let's represent this mathematically, assuming \(m\) is the message, \(H(m)\) is the hash of the message, \(d\) is the private exponent, and \(n\) is the modulus from the RSA key pair:

\[ \text{Signature} = S = (H(m))^d \pmod{n} \]

### Practical Scenario

Imagine Alice wants to send a sensitive contract to Bob. She wants to ensure Bob knows it's really from her and that the contract hasn't been altered during transit.

1.  **Alice hashes the contract:** She takes the contract text and runs it through SHA-256, generating a unique hash value.
2.  **Alice signs the hash:** Using her RSA private key, she "encrypts" this hash value. This encrypted hash is her digital signature.
3.  **Alice sends:** She sends Bob the original contract and her digital signature.

Bob can then use Alice's public key to verify the signature. If the verification is successful, he knows:
*   The message came from Alice (authenticity).
*   The message hasn't been modified since Alice signed it (integrity).

### Practice Task

Consider Alice sending a message: "The meeting is at 3 PM."

1.  **Generate a hypothetical hash digest:** Imagine a 256-bit hash value for this message (you don't need to actually compute it, just represent it).
2.  **Describe the signing step:** Explain what Alice does with her private key and the hash digest to create the signature, referring to the mathematical concept of modular exponentiation.

### Self-Check Questions

1.  Which key is used to *generate* a digital signature in RSA?
2.  What is the purpose of hashing the message before signing?
3.  What are the three main security properties that a digital signature provides?

## Supports

- [[skills/computing/security-privacy/cybersecurity/asymmetric-algorithm-mechanics/microskills/digital-signature-generation-rsa|Digital Signature Generation (RSA)]]
