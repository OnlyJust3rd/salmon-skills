---
type: "medium"
title: "Common Cryptographic Hash Functions"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/security-privacy/cybersecurity/cryptographic-fundamentals/microskills/common-cryptographic-hash-functions|common-cryptographic-hash-functions]]"
learning-time-in-minutes: 3
---
# Common Cryptographic Hash Functions

In the realm of Cryptographic Fundamentals, understanding hash functions is crucial. A cryptographic hash function is a mathematical algorithm that takes an input (or 'message') of any size and produces a fixed-size string of characters, which is typically a sequence of letters and numbers. This output is called a hash value, hash code, digest, or simply hash. The key characteristic of a cryptographic hash function is that it's a one-way process – it's easy to compute the hash from the message, but computationally infeasible to reverse the process and derive the original message from its hash.

Think of it like a unique digital fingerprint for data. Even a tiny change in the original data will result in a completely different hash. This makes them invaluable for verifying data integrity.

## Why are Hash Functions Important?

Hash functions are fundamental building blocks in many cryptographic applications, including:

*   **Data Integrity:** Ensuring that data hasn't been tampered with. If you hash a file and store the hash, you can later re-hash the file and compare it to the stored hash. If they match, the file is unchanged.
*   **Password Storage:** Instead of storing passwords directly (which is highly insecure), systems store the hash of the password. When a user logs in, the system hashes the entered password and compares it to the stored hash.
*   **Digital Signatures:** Used in conjunction with encryption to authenticate and verify the integrity of digital documents.
*   **Blockchain Technology:** Each block in a blockchain contains the hash of the previous block, creating a secure and immutable chain.

## Examples of Common Cryptographic Hash Functions

While many hash functions exist, some are more widely recognized and used than others. Here are a few common examples you should be aware of:

*   **MD5 (Message-Digest Algorithm 5):** Though once very popular, MD5 is now considered cryptographically broken and should not be used for security-sensitive applications. It produces a 128-bit hash value.
*   **SHA-1 (Secure Hash Algorithm 1):** Similar to MD5, SHA-1 is also considered insecure due to discovered vulnerabilities and is being phased out. It produces a 160-bit hash value.
*   **SHA-2 Family (SHA-256, SHA-512, etc.):** This is a set of secure hash functions that are currently widely used and considered secure.
    *   **SHA-256:** Produces a 256-bit hash value and is extremely common.
    *   **SHA-512:** Produces a 512-bit hash value, offering even greater security.
*   **SHA-3 (Secure Hash Algorithm 3):** The latest generation of SHA hash functions, designed with a different internal structure than SHA-2, providing an alternative and secure option.

## Practical Scenario

Imagine you've downloaded a large software file from the internet. How do you know if the download was successful and the file wasn't corrupted or maliciously altered during transmission? The software provider will often publish the SHA-256 hash of the file. You can then run a SHA-256 hashing tool on your downloaded file. If the hash you compute matches the one provided by the developer, you can be confident that the file is genuine and intact.

## Practice Task

For this exercise, your goal is to simply recall and list the names of common cryptographic hash functions.

**Task:** Write down the names of at least three widely recognized cryptographic hash functions.

## Self-Check Questions

1.  What is the primary purpose of a cryptographic hash function in terms of data?
2.  Name one hash function that is **no longer considered secure** for modern applications.
3.  What does SHA-256 stand for, and what is its output size?
4.  Why is it important to use up-to-date and secure hash functions?

## Supports

- [[skills/computing/security-privacy/cybersecurity/cryptographic-fundamentals/microskills/common-cryptographic-hash-functions|Common Cryptographic Hash Functions]]
