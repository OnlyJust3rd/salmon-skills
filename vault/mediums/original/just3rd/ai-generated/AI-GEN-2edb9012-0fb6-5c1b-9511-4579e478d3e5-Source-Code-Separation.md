---
type: "medium"
title: "Keeping Secrets Out of Source Code"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/delivery-platforms/secrets-management/microskills/source-code-separation|source-code-separation]]"
learning-time-in-minutes: 4
---
# Keeping Secrets Out of Source Code

When we talk about secrets management, we're referring to how we handle sensitive pieces of information like passwords, API keys, encryption keys, and certificates. These aren't things we want just anyone to have access to. A critical part of keeping these secrets safe involves understanding *where* they should and shouldn't go.

## The Problem with Committing Secrets

Imagine you're building a web application. This application needs to connect to a database. To do this, it needs a username and password. You might think, "Okay, I'll just put the database password directly into the configuration file, and then I'll commit that file to our project's source code repository."

This is a very common mistake, and it's a big security risk. Here's why:

*   **Source code repositories are shared:** Whether it's GitHub, GitLab, Bitbucket, or an internal server, your source code repository is often accessed by multiple developers. If a password or API key is in the code, everyone with access to the repository can see it.
*   **History is permanent:** Even if you realize your mistake later and delete the secret from the current version of your code, the secret will likely still exist in previous commits. Anyone who can access the repository's history can find it.
*   **Accidental exposure:** Repositories can be made public by accident. If your code contains hardcoded secrets, they become publicly accessible to anyone who stumbles upon your repository.
*   **Third-party access:** Sometimes, you grant access to your repository to external contractors or partners. If secrets are embedded in the code, you're giving them access to those sensitive credentials.

### What are "Secrets"?

For the purpose of this lesson, when we discuss "secrets" that should *not* be committed to source code, we typically mean:

*   **Passwords:** Database passwords, user account passwords, service account passwords.
*   **API Keys:** Keys that grant access to external services like cloud providers, payment gateways, or social media platforms.
*   **Tokens:** Authentication tokens, refresh tokens, JWTs.
*   **Private Keys:** SSH keys, TLS/SSL private keys, encryption keys.
*   **Connection Strings:** Database connection strings that often contain credentials.
*   **Sensitive Runtime Configuration:** Any configuration that directly exposes sensitive information needed for your application to run.

## The Principle of Separation

The core idea behind keeping secrets out of source control is **separation of concerns**. Your source code defines *how* your application works, but it shouldn't contain *the specific credentials* needed to access external resources or services.

Think of it like this: Your house blueprint (source code) shows where the doors and windows are. But you don't write your house key's design into the blueprint. You keep the actual key separate and secure.

### How to Avoid This Mistake

Instead of embedding secrets directly into your code or configuration files that are then committed, you should manage them separately. Common approaches include:

*   **Environment Variables:** This is a widely used method. Secrets are set as environment variables on the server or machine where your application runs. Your application then reads these variables at runtime.
*   **Secrets Management Tools:** Dedicated tools like HashiCorp Vault, AWS Secrets Manager, Azure Key Vault, or Google Secret Manager are designed specifically to store, manage, and retrieve secrets securely.
*   **Configuration Files (Managed Separately):** You might have a configuration file that your application reads, but this file itself is *not* committed to source control. Instead, it's deployed alongside your application or its contents are populated from a secure source at deployment time.
*   **Encrypted Configuration Files:** Some systems allow you to encrypt configuration files that contain secrets. The encryption key itself would then need to be managed securely, often through one of the methods above.

## When Secrets End Up in Source Code (And What to Do)

If you discover that sensitive secrets have been committed to your repository, it's crucial to act quickly:

1.  **Remove the Secret:** Edit the file(s) in your repository to remove the leaked secret.
2.  **Rotate the Secret:** **Immediately revoke and generate a new** password, API key, or token. Treat the old one as compromised.
3.  **Update Applications:** Update all applications and services that used the old secret with the new one.
4.  **Clean the Repository History (Advanced):** For critical leaks, you may need to rewrite your repository's history to permanently remove the secret from all past commits. This is a more advanced operation and should be done with caution, as it can impact collaborators. Tools like `git filter-repo` or BFG Repo-Cleaner can help with this.
5.  **Audit Access:** Review who had access to the repository at the time the secret was exposed and consider if any access needs to be revoked.

By understanding the risks of committing secrets and adopting secure practices, you build a stronger defense against potential security breaches. Always treat your application's credentials as if they were your own house keys – keep them secure and out of plain sight.

## Supports

- [[skills/computing/systems-infrastructure/delivery-platforms/secrets-management/microskills/source-code-separation|Source Code Separation]]
