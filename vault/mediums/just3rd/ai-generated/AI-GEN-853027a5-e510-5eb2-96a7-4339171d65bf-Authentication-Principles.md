---
type: "medium"
title: "Authentication: Proving You Are Who You Say You Are"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/security/cybersecurity/access-control/microskills/authentication-principles|authentication-principles]]"
---
# Authentication: Proving You Are Who You Say You Are

In the world of access control, the very first step is to make sure that the person or system trying to get in is actually who they claim to be. This is where **authentication** comes in. Think of it like showing your ID at a building's entrance. The security guard checks your ID to verify your identity before letting you pass.

Authentication is the process of verifying the identity of a user, process, or device. It's about establishing trust by confirming that the entity attempting to access a system or resource is indeed the entity it purports to be.

## How Authentication Works: The Core Idea

At its heart, authentication relies on one or more of the following types of evidence:

*   **Something you know:** This is typically a password or a PIN. You have to remember it.
*   **Something you have:** This could be a physical token, a smart card, or a mobile device receiving a one-time code. You possess it.
*   **Something you are:** This refers to biometric data, such as fingerprints, facial features, or iris patterns. These are unique biological characteristics.

Most modern authentication systems use a combination of these factors, known as **multi-factor authentication (MFA)**, to increase security.

### Examples of Authentication in Action

Let's look at some everyday scenarios where you encounter authentication:

1.  **Logging into your email:**
    *   **Factor:** Something you know (password).
    *   **Process:** You enter your username and password. The system checks if the entered password matches the one stored (usually in a secure, hashed format) for your username.

2.  **Using an ATM:**
    *   **Factors:** Something you know (PIN) and something you have (your bank card).
    *   **Process:** You insert your card (something you have). The ATM reads information from the card and prompts you for your PIN (something you know). If both match, your identity is verified.

3.  **Unlocking your smartphone with Face ID:**
    *   **Factor:** Something you are (your unique facial features).
    *   **Process:** Your phone scans your face and compares it to the stored facial data. If there's a match, your phone is unlocked.

4.  **Receiving a one-time code to log into a banking app:**
    *   **Factors:** Something you know (your password) and something you have (your phone).
    *   **Process:** You log in with your password, and then your bank sends a temporary code to your registered mobile number or authenticator app. You enter this code to complete the login, proving you have access to your phone.

### The Importance of Strong Authentication

Weak authentication is a major security vulnerability. If an attacker can guess or steal your credentials, they can gain unauthorized access to sensitive information or systems. This is why choosing strong, unique passwords and enabling multi-factor authentication whenever possible is crucial.

## Authentication vs. Authorization

It's important not to confuse authentication with **authorization**.

*   **Authentication** is about **verifying who you are**.
*   **Authorization** is about **what you are allowed to do** once your identity has been verified.

Think of the building example again: The security guard **authenticates** you by checking your ID. Once you're inside, there might be different floors or rooms you have permission to enter. Your **authorization** determines which areas you can access.

## Practice Task

Imagine you are designing a new online service for managing personal health records. Security is paramount.

1.  **Identify the type of authentication evidence** that would be most suitable for a user to log into their health record. Consider a combination of factors.
2.  **Describe the flow of authentication** for a user accessing their health record for the first time after initial registration.
3.  **Explain why using only a password might be insufficient** for this type of sensitive data.

## Self-Check Questions

1.  What is the primary goal of authentication?
2.  Name the three main categories of authentication evidence and provide an example for each.
3.  What is multi-factor authentication (MFA), and why is it generally more secure than single-factor authentication?
4.  What is the difference between authentication and authorization?
5.  In the context of online banking, what are common examples of something you know, something you have, and something you are?

## Supports

- [[skills/security/cybersecurity/access-control/microskills/authentication-principles|Authentication Principles]]
