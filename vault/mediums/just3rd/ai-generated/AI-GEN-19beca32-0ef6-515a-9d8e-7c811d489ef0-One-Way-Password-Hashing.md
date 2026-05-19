---
type: "medium"
title: "Understanding One-Way Password Hashing"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/security/cybersecurity/cybersecurity/microskills/one-way-password-hashing|One-Way Password Hashing]]"
---
# Understanding One-Way Password Hashing

In the realm of cybersecurity, protecting user credentials is paramount. Storing passwords in plain text is a significant security risk. One-Way Password Hashing is a fundamental technique to safeguard this sensitive information.

## What is One-Way Hashing?

One-way hashing, also known as cryptographic hashing, is a process that takes an input (like a password) and converts it into a fixed-size string of characters, called a hash. The key characteristics of a one-way hash function are:

*   **Deterministic:** The same input will always produce the same output hash.
*   **Irreversible:** It's computationally infeasible to reverse the process and derive the original input from its hash. This is the "one-way" aspect.
*   **Collision Resistance:** It's extremely difficult to find two different inputs that produce the same hash output.

Think of it like a meat grinder. You can put meat into it and get ground meat out. However, you can't take the ground meat and magically turn it back into the original cut of meat.

## Why is it Important?

When a user creates an account, their password isn't stored directly in the database. Instead, the system calculates the hash of the password and stores that hash. When the user logs in, the system hashes the password they enter and compares it to the stored hash. If they match, the user is authenticated.

This approach means that even if a malicious actor gains access to the database, they won't find the actual passwords, only their hashed versions. This significantly reduces the impact of a data breach.

## Practical Scenario

Imagine a user named Alice creates an account on a website.

1.  **User Input:** Alice enters her password: `SecureP@ssw0rd123`.
2.  **Hashing:** The website's server uses a strong hashing algorithm (like Argon2 or bcrypt) to compute a hash of `SecureP@ssw0rd123`. Let's represent this hash as `a1b2c3d4e5f67890...` (a much longer string in reality).
3.  **Storage:** The website stores Alice's username and the generated hash `a1b2c3d4e5f67890...` in its user database. The original password `SecureP@ssw0rd123` is discarded.

Later, Alice logs in again.

1.  **User Input:** Alice enters her password: `SecureP@ssw0rd123`.
2.  **Hashing:** The server again hashes the entered password `SecureP@ssw0rd123` using the *same* hashing algorithm. It generates the *exact same* hash: `a1b2c3d4e5f67890...`.
3.  **Comparison:** The server compares the newly generated hash with the stored hash for Alice's account. Since they match, Alice is logged in successfully.

If a hacker stole the database and found the entry for Alice, they would only see `a1b2c3d4e5f67890...`, not her actual password.

## Practice Task

Consider the following pseudocode representing a simplified password hashing process:

```pseudocode
FUNCTION hash_password(password):
  // This is a placeholder for a strong, modern hashing algorithm
  // In reality, you would use libraries like bcrypt, scrypt, or Argon2
  hashed_value = perform_one_way_hash(password)
  RETURN hashed_value

FUNCTION verify_password(stored_hash, provided_password):
  computed_hash = hash_password(provided_password)
  IF computed_hash IS EQUAL TO stored_hash:
    RETURN TRUE // Passwords match
  ELSE:
    RETURN FALSE // Passwords do not match
```

Explain, in your own words, what would happen in the `verify_password` function if the `provided_password` was incorrect, assuming `stored_hash` was generated from the correct password.

## Self-Check Questions

1.  Why is it insecure to store user passwords in plain text?
2.  What does it mean for a hashing algorithm to be "one-way"?
3.  If you know the hash of a password, can you always find the original password? Explain why or why not.
4.  What is the primary benefit of using one-way hashing for storing passwords?

## Supports

- [[skills/security/cybersecurity/cybersecurity/microskills/one-way-password-hashing|One-Way Password Hashing]]
