---
type: "medium"
title: "Integrity: Ensuring Information is Unaltered"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/security/cybersecurity/cryptographic-fundamentals/microskills/integrity|integrity]]"
---
# Integrity: Ensuring Information is Unaltered

In the world of secure communication, we're building on the foundational principles of Cryptographic Fundamentals. Today, we're focusing on **integrity**, a critical pillar that ensures the information you send and receive hasn't been tampered with.

## What is Integrity?

Integrity, in the context of communication security, means that data remains **accurate and complete** throughout its lifecycle. It's about guaranteeing that information has not been accidentally or maliciously altered, modified, or deleted from the moment it was created until it reaches its intended recipient. Think of it as a digital seal of authenticity for your messages.

Without integrity, even if a message is kept secret and you know who sent it, you can't trust its content.

## Why is Integrity Important?

Imagine these scenarios:

*   **Financial Transactions:** If the amount of a bank transfer is altered, it could lead to significant financial loss.
*   **Medical Records:** Changes to patient data could result in incorrect diagnoses or treatments.
*   **Software Updates:** Malicious modification of software updates could introduce viruses or backdoors.
*   **Legal Documents:** Altering a contract could invalidate its terms or create legal disputes.

Integrity measures prevent such unauthorized modifications, building trust in digital communications.

## How is Integrity Achieved?

A common method to ensure integrity is through the use of **hashing functions**.

A hash function takes an input (your message, file, or any data) and produces a fixed-size string of characters, called a **hash** or **message digest**. This hash is unique to the input data. If even a single bit of the input data is changed, the resulting hash will be completely different.

Here's a simplified look at the process:

1.  **Sender:**
    *   Takes the original message.
    *   Computes a hash of the message using a secure hash algorithm (like SHA-256).
    *   Sends the original message *and* its computed hash to the recipient.

2.  **Recipient:**
    *   Receives the message and the hash.
    *   Independently computes a hash of the *received* message using the *same* hash algorithm.
    *   Compares the hash they computed with the hash sent by the sender.

    *   **If the hashes match:** The recipient can be confident that the message has not been altered during transit.
    *   **If the hashes do not match:** The message has been tampered with, and the recipient should discard it or flag it as suspicious.

**Example Scenario:**

Alice wants to send a confidential report to Bob. She also wants Bob to be sure the report hasn't been changed.

1.  **Alice's Action:**
    *   Alice writes her report: "The project is on schedule. Budget is at 80%."
    *   She uses SHA-256 to hash this report. Let's say the resulting hash is `a1b2c3d4e5f6...` (this is a simplified representation).
    *   Alice sends an email to Bob containing:
        *   The report: "The project is on schedule. Budget is at 80%."
        *   The hash: `a1b2c3d4e5f6...`

2.  **Bob's Action:**
    *   Bob receives Alice's email.
    *   He takes the received report: "The project is on schedule. Budget is at 80%."
    *   He uses SHA-256 to compute the hash of this *received* report. The computed hash is `a1b2c3d4e5f6...`
    *   Bob compares his computed hash with the hash Alice sent. They match! Bob knows the report is exactly as Alice intended.

**What if an attacker intercepts?**

Suppose an attacker intercepts Alice's email and changes the report to: "The project is delayed. Budget is at 120%."

*   The attacker might *try* to change the hash as well, but they don't know the *original* hash Alice calculated, and recalculating it would require knowing the original message's state. Even if they could generate a new hash for their altered message, it wouldn't match Alice's original hash.
*   When Bob receives the altered report and calculates its hash, it will be different from Alice's original hash. For example, it might be `z9y8x7w6v5u4...`.
*   Bob compares `z9y8x7w6v5u4...` with Alice's original hash `a1b2c3d4e5f6...`. They don't match. Bob knows the report has been altered.

## Practice Task

Imagine you've downloaded a software file from a website. The website provides a SHA-256 hash for the file.

1.  Describe the steps you would take to verify the integrity of the downloaded file using the provided hash.
2.  What would be the implication if the hash you calculate for the downloaded file does *not* match the hash provided by the website?

## Self-Check Questions

1.  What is the primary goal of ensuring data integrity?
2.  How does a hash function help in verifying data integrity?
3.  What action should a recipient take if the computed hash of a received message does not match the sender's provided hash?
4.  Can a hash function encrypt data? Explain why or why not.

## Supports

- [[skills/security/cybersecurity/cryptographic-fundamentals/microskills/integrity|Integrity]]
