---
type: "medium"
title: "Digital Signature Verification (RSA)"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/algorithms/asymmetric-algorithm-mechanics/microskills/digital-signature-verification-rsa|digital-signature-verification-rsa]]"
---
# Digital Signature Verification (RSA)

Digital signatures are a critical component of secure communication, ensuring authenticity and integrity. This lesson focuses on understanding how the RSA algorithm verifies a digital signature.

## What is RSA Signature Verification?

In asymmetric cryptography, a digital signature is created using the sender's *private key* and can be verified using their corresponding *public key*. For RSA, this process relies on modular exponentiation. When a sender signs a message, they essentially encrypt a hash of the message using their private key. The recipient then uses the sender's public key to "decrypt" this signature and compare it to a newly generated hash of the received message. If they match, the signature is valid.

The core mathematical operations involved are:

*   **Signing (Sender Side - Simplified):**
    1.  Hash the message to get a message digest \(m\).
    2.  Compute the signature: \(s = m^d \pmod{n}\), where \(d\) is the private exponent and \(n\) is the modulus.

*   **Verification (Receiver Side):**
    1.  Obtain the sender's public key \((e, n)\).
    2.  Receive the message \(M\) and the signature \(s\).
    3.  Hash the received message \(M\) to get a message digest \(m'\).
    4.  "Decrypt" the signature using the public key: \(m_{decrypted} = s^e \pmod{n}\).
    5.  Compare \(m_{decrypted}\) with \(m'\). If \(m_{decrypted} = m'\), the signature is valid.

## Practical Scenario

Imagine Alice wants to send a confidential document to Bob and wants Bob to be absolutely sure it came from her and hasn't been tampered with.

1.  **Alice Signs:**
    *   Alice hashes her document to create a short message digest.
    *   She then uses her RSA private key (\(d, n\)) to compute a signature \(s\) from the hash.
    *   Alice sends the document, the signature \(s\), and her public key (\(e, n\)) to Bob.

2.  **Bob Verifies:**
    *   Bob receives the document, \(s\), and Alice's public key (\(e, n\)).
    *   Bob hashes the *received* document himself to get a new digest, \(m'\).
    *   Bob uses Alice's public key to compute \(m_{decrypted} = s^e \pmod{n}\).
    *   Bob compares \(m_{decrypted}\) with his own computed hash \(m'\). If they are identical, Bob knows the document is from Alice (authenticity) and has not been altered (integrity).

## Practice Task

Suppose Alice uses RSA with the following keys:
*   Public key: \((e=65537, n=3233)\)
*   Private key: \((d=17, n=3233)\) (Note: This is a simplified example, actual RSA key generation is more complex).

Alice sends a message to Bob. She hashes the message to get a digest \(m = 123\).
She then computes the signature: \(s = m^d \pmod{n} = 123^{17} \pmod{3233}\).

**Your Task:**
Calculate the signature \(s\) that Alice would generate.

Then, assume Bob receives a message and a signature \(s = 855\). Bob hashes the received message and gets \(m' = 123\). Use Alice's public key \((e=65537, n=3233)\) to verify if the signature is valid.

## Self-Check Questions

1.  What are the two main security properties provided by digital signatures?
2.  Which of the sender's keys is used for signing, and which of the sender's keys is used for verification?
3.  Why is hashing the message before signing important for RSA digital signatures?

## Supports

- [[skills/programming/algorithms/asymmetric-algorithm-mechanics/microskills/digital-signature-verification-rsa|Digital Signature Verification (RSA)]]
