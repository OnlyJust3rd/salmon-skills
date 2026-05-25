---
type: "medium"
title: "Digital Signature Processes"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/security-privacy/cybersecurity/message-integrity-mechanisms/microskills/digital-signature-processes|digital-signature-processes]]"
learning-time-in-minutes: 4
---
# Digital Signature Processes

Digital signatures are a crucial component of message integrity mechanisms. They provide a way to verify that a message hasn't been tampered with and to confirm the sender's identity. This lesson will focus on understanding the step-by-step processes involved in creating and verifying a digital signature.

## The Two Core Processes: Signing and Verification

At its heart, digital signature technology involves two main, interconnected processes:

1.  **Signing:** The process by which a sender creates a digital signature for a message.
2.  **Verification:** The process by which a recipient checks if the digital signature is valid for the received message.

These processes rely on asymmetric cryptography, which uses a pair of keys: a private key (kept secret by the owner) and a public key (shared with others).

## Signing a Message: The Sender's Role

When a sender wants to digitally sign a message, they perform the following steps:

1.  **Hashing the Message:**
    The first step is to create a unique, fixed-size fingerprint of the message using a cryptographic hash function (like SHA-256). This fingerprint is called a message digest or hash.
    *   **Why hash?** Hashing ensures that even a tiny change in the message will result in a completely different hash. This makes it efficient to check for alterations.
    *   **Example:** If the message is "Hello world!", the hash function might produce a long string like `a591a6d40bf420404a011733cfd79463607c1d3d78472ef1041d13136e0312e3`. If you change "Hello world!" to "Hello world!!", the hash will be entirely different.

2.  **Encrypting the Hash with the Private Key:**
    The sender then takes the message digest (the hash) and encrypts it using their **private key**. This encrypted hash is the digital signature.
    *   **Purpose:** Only the sender, possessing their private key, can perform this encryption. This is the foundation of non-repudiation – the sender cannot later deny sending the message.

3.  **Combining Signature and Message:**
    The digital signature (the encrypted hash) is then appended to the original message, and the entire package is sent to the recipient.

**Pseudocode for Signing:**

```
function signMessage(message, privateKey):
  messageDigest = hash(message)
  digitalSignature = encrypt(messageDigest, privateKey)
  return message + digitalSignature
```

## Verifying a Message: The Recipient's Role

When a recipient receives a message and its accompanying digital signature, they perform these steps to verify its authenticity and integrity:

1.  **Separating the Message and Signature:**
    The recipient first separates the original message from the digital signature.

2.  **Hashing the Received Message:**
    The recipient then independently calculates the hash of the *received* message using the *same hash function* that the sender used.

3.  **Decrypting the Digital Signature:**
    The recipient takes the received digital signature and decrypts it using the sender's **public key**.
    *   **Why the public key?** Because public keys are paired with private keys, anyone can use the sender's public key to decrypt something encrypted by their private key. This is the core of asymmetric cryptography's verification capability.
    *   **What this yields:** The result of this decryption should be the original message digest that the sender created.

4.  **Comparing the Hashes:**
    Finally, the recipient compares the hash they calculated in step 2 with the decrypted hash from step 3.

    *   **If the hashes match:** The signature is valid. This means the message has not been altered since it was signed, and it was indeed signed by the owner of the private key corresponding to the public key used for decryption.
    *   **If the hashes do not match:** The signature is invalid. This could mean the message was tampered with, or the wrong public key was used for verification, or the signature was not created with the corresponding private key.

**Pseudocode for Verification:**

```
function verifyMessage(receivedMessage, receivedSignature, senderPublicKey):
  receivedMessageDigest = hash(receivedMessage)
  originalMessageDigest = decrypt(receivedSignature, senderPublicKey)

  if receivedMessageDigest == originalMessageDigest:
    return "Signature is valid"
  else:
    return "Signature is invalid"
```

## Role of Algorithms like RSA and El Gamal

Algorithms like RSA and El Gamal are foundational to digital signatures. They provide the mathematical basis for the asymmetric encryption and decryption needed in the signing and verification processes.

*   **RSA:** This algorithm, named after its inventors Rivest, Shamir, and Adleman, uses a pair of keys derived from the product of two large prime numbers. It's widely used for both encryption and digital signatures.
*   **El Gamal:** This is another public-key cryptosystem that can be used for both encryption and digital signatures. It's based on the difficulty of the discrete logarithm problem.

These algorithms ensure that the encryption performed by a private key can only be reliably reversed by the corresponding public key, and vice-versa, enabling the secure creation and validation of digital signatures.

## Supports

- [[skills/computing/security-privacy/cybersecurity/message-integrity-mechanisms/microskills/digital-signature-processes|Digital Signature Processes]]
