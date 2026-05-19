---
type: "medium"
title: "El Gamal Mechanics: A Practical Walkthrough"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/algorithms/asymmetric-algorithm-mechanics/microskills/el-gamal-mechanics|El Gamal Mechanics]]"
---
# El Gamal Mechanics: A Practical Walkthrough

This lesson focuses on understanding the practical mechanics of the El Gamal cryptosystem by applying its mathematical foundations. We'll walk through the encryption and decryption process to illustrate how it works.

The El Gamal cryptosystem is an asymmetric algorithm that uses a public key for encryption and a private key for decryption. Its security relies on the difficulty of the discrete logarithm problem.

### The Core Operations

El Gamal involves the following steps:

1.  **Key Generation:**
    *   Choose a large prime number \(p\) and a primitive root \(g\) modulo \(p\).
    *   Choose a private key \(a\) such that \(1 \le a < p-1\).
    *   Calculate the public key \(h = g^a \pmod{p}\).
    *   The public key is \((p, g, h)\), and the private key is \(a\).

2.  **Encryption:** To encrypt a message \(M\) (where \(M\) is an integer \(0 \le M < p\)):
    *   Choose a random secret integer \(k\) such that \(1 \le k < p-1\).
    *   Calculate \(c_1 = g^k \pmod{p}\).
    *   Calculate \(c_2 = M \cdot h^k \pmod{p}\).
    *   The ciphertext is the pair \((c_1, c_2)\).

3.  **Decryption:** To decrypt the ciphertext \((c_1, c_2)\):
    *   Calculate \(s = c_1^a \pmod{p}\).
    *   Calculate the multiplicative inverse of \(s\) modulo \(p\), denoted as \(s^{-1}\). This means \(s \cdot s^{-1} \equiv 1 \pmod{p}\).
    *   Recover the message \(M = c_2 \cdot s^{-1} \pmod{p}\).

### Practical Example

Let's use a simplified example with small numbers to illustrate.

*   **Key Generation:**
    *   Choose \(p = 23\).
    *   Choose a primitive root \(g = 5\).
    *   Choose a private key \(a = 7\).
    *   Calculate the public key \(h = g^a \pmod{p} = 5^7 \pmod{23}\).
        \(5^7 = 78125\).
        \(78125 \div 23 = 3396\) remainder \(17\). So, \(h = 17\).
    *   **Public Key:** \((p=23, g=5, h=17)\)
    *   **Private Key:** \(a=7\)

*   **Encryption:** Let's encrypt the message \(M = 15\).
    *   Choose a random secret \(k = 10\).
    *   Calculate \(c_1 = g^k \pmod{p} = 5^{10} \pmod{23}\).
        \(5^{10} = 9765625\).
        \(9765625 \div 23 = 424592\) remainder \(9\). So, \(c_1 = 9\).
    *   Calculate \(c_2 = M \cdot h^k \pmod{p} = 15 \cdot 17^{10} \pmod{23}\).
        First, \(17^{10} \pmod{23}\):
        \(17 \equiv -6 \pmod{23}\)
        \((-6)^{10} \equiv 6^{10} \pmod{23}\)
        \(6^2 = 36 \equiv 13 \pmod{23}\)
        \(6^4 \equiv 13^2 = 169 \equiv 8 \pmod{23}\)
        \(6^8 \equiv 8^2 = 64 \equiv 18 \pmod{23}\)
        \(6^{10} = 6^8 \cdot 6^2 \equiv 18 \cdot 13 \pmod{23}\)
        \(18 \cdot 13 = 234\).
        \(234 \div 23 = 10\) remainder \(4\). So, \(17^{10} \equiv 4 \pmod{23}\).
        Now, \(c_2 = 15 \cdot 4 \pmod{23} = 60 \pmod{23}\).
        \(60 \div 23 = 2\) remainder \(14\). So, \(c_2 = 14\).
    *   **Ciphertext:** \((c_1=9, c_2=14)\)

*   **Decryption:** Using the private key \(a=7\) to decrypt \((9, 14)\).
    *   Calculate \(s = c_1^a \pmod{p} = 9^7 \pmod{23}\).
        \(9^2 = 81 \equiv 12 \pmod{23}\)
        \(9^4 \equiv 12^2 = 144 \equiv 6 \pmod{23}\)
        \(9^7 = 9^4 \cdot 9^2 \cdot 9^1 \equiv 6 \cdot 12 \cdot 9 \pmod{23}\)
        \(6 \cdot 12 = 72 \equiv 3 \pmod{23}\)
        \(3 \cdot 9 = 27 \equiv 4 \pmod{23}\). So, \(s = 4\).
    *   Calculate the multiplicative inverse of \(s=4\) modulo \(23\). We need to find \(s^{-1}\) such that \(4 \cdot s^{-1} \equiv 1 \pmod{23}\).
        By inspection or Extended Euclidean Algorithm, \(4 \cdot 6 = 24 \equiv 1 \pmod{23}\). So, \(s^{-1} = 6\).
    *   Recover the message \(M = c_2 \cdot s^{-1} \pmod{p} = 14 \cdot 6 \pmod{23}\).
        \(14 \cdot 6 = 84\).
        \(84 \div 23 = 3\) remainder \(15\). So, \(M = 15\).

The original message \(15\) has been successfully recovered.

### Practice Task

Using the same parameters as the example (\(p=23, g=5, a=7\)):

1.  Calculate the public key \(h\).
2.  Encrypt the message \(M=20\) using a randomly chosen \(k=12\). Show all steps for \(c_1\) and \(c_2\).
3.  Decrypt your resulting ciphertext \((c_1, c_2)\) using the private key \(a=7\).

### Self-Check Questions

1.  Why is it important that \(p\) is a large prime number in El Gamal?
2.  What is the role of the random number \(k\) in the encryption process?
3.  Explain why calculating the modular multiplicative inverse is crucial for decryption.

## Supports

- [[skills/programming/algorithms/asymmetric-algorithm-mechanics/microskills/el-gamal-mechanics|El Gamal Mechanics]]
