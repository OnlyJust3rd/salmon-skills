---
type: "medium"
title: "Kubernetes Secrets Management"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/compute-runtime/kubernetes/microskills/kubernetes-secrets-management|kubernetes-secrets-management]]"
related-skills:
  - "[[skills/computing/systems-infrastructure/compute-runtime/kubernetes/kubernetes|kubernetes]]"
learning-time-in-minutes: 5
---
# Kubernetes Secrets Management

In Kubernetes, you often need to store sensitive information like passwords, API keys, or TLS certificates. Hardcoding these directly into your application configurations or container images is a major security risk. Kubernetes provides **Secrets** as a native object to manage this sensitive data securely.

This lesson focuses on how to implement and manage Kubernetes Secrets to protect your sensitive information.

## What are Kubernetes Secrets?

Kubernetes Secrets are API objects used to store and manage sensitive information. They are designed to decouple sensitive data from your application code and configuration files. Secrets can be used to provide sensitive data to Pods in a secure way.

*   **Base64 Encoding:** By default, data stored in Secrets is Base64 encoded. This is **not encryption**. It's a simple encoding scheme to ensure the data can be transmitted and stored in JSON/YAML formats without issues. Anyone with access to the Secret object in Kubernetes can easily decode this data.
*   **Security Context:** True security for Secrets relies on Kubernetes's built-in security mechanisms, such as Role-Based Access Control (RBAC) and potentially encryption at rest for etcd, the Kubernetes data store.

## When to Use Kubernetes Secrets

You should use Kubernetes Secrets whenever you need to provide your applications with:

*   Database credentials (usernames, passwords)
*   API keys for external services
*   TLS certificates and private keys for secure communication
*   SSH private keys
*   Any other form of sensitive, confidential data.

## Types of Secrets

Kubernetes supports several built-in Secret types, although you can create custom ones. The most common ones are:

*   `Opaque`: This is the default and most common type. It's a generic secret that can hold any arbitrary key-value pairs.
*   `kubernetes.io/service-account-token`: Used for Service Accounts.
*   `kubernetes.io/dockercfg`: For storing Docker registry credentials.
*   `kubernetes.io/tls`: For storing TLS certificates and keys.

## Creating and Managing Secrets

You can create Secrets in a few ways:

1.  **Imperative commands (kubectl create secret):** Quick for simple secrets.
2.  **Declarative configuration (YAML files):** Recommended for version control and reproducible deployments.

### 1. Creating Secrets using `kubectl`

#### A. From literal values:

This is useful for quickly creating a secret with a single piece of data.

```bash
kubectl create secret generic my-db-credentials \
  --from-literal=username='admin' \
  --from-literal=password='supersecretpassword123'
```

This command creates an `Opaque` secret named `my-db-credentials` with two key-value pairs.

#### B. From files:

If your sensitive data is already in files (e.g., a `api-key.txt` or `tls.crt`), you can create a secret from them.

```bash
# Assume you have two files: api-key.txt and config.json
echo "your-api-key-here" > api-key.txt
echo '{"service": "production"}' > config.json

kubectl create secret generic my-app-secrets \
  --from-file=api-key.txt \
  --from-file=app-config=config.json # Renaming key in secret
```

In this example:
*   `api-key.txt` will be stored under the key `api-key.txt` in the Secret.
*   `config.json` will be stored under the key `app-config` in the Secret.

#### C. From environment variables:

You can also create a Secret directly from environment variables on your local machine.

```bash
export DB_USER=myuser
export DB_PASS=mypassword

kubectl create secret generic db-env-vars \
  --from-env-file <(printenv DB_USER DB_PASS)
```

This command will create a secret with keys `DB_USER` and `DB_PASS`.

### 2. Declarative Secret Creation (YAML)

This is the preferred method for production environments as it allows you to manage your secrets alongside your other Kubernetes resources in version control.

**Example: `tls-secret.yaml` for TLS certificates**

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: my-tls-secret
  namespace: default
type: kubernetes.io/tls
data:
  tls.crt: |
    -----BEGIN CERTIFICATE-----
    MIIDrzCCApegAwIBAgIQJ/b3p09l4Vb8893jO0000zANBgkqhkiG9w0BAQsFADBN
    ... (your certificate content here) ...
    -----END CERTIFICATE-----
  tls.key: |
    -----BEGIN PRIVATE KEY-----
    MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC...
    ... (your private key content here) ...
    -----END PRIVATE KEY-----
```

**Explanation:**

*   `type: kubernetes.io/tls`: Specifies this is a TLS secret.
*   `data`: Contains the actual sensitive data.
*   `tls.crt` and `tls.key`: These are specific keys expected for the `kubernetes.io/tls` type. The values must be Base64 encoded.

**How to create the YAML with Base64 encoded data:**

You can generate the Base64 encoded content and embed it into your YAML.

```bash
# For TLS secret
kubectl create secret tls my-tls-secret \
  --cert=path/to/your/tls.crt \
  --key=path/to/your/tls.key \
  --dry-run=client -o yaml > tls-secret.yaml

# For Opaque secret from files
kubectl create secret generic my-app-secrets \
  --from-file=api-key.txt \
  --from-file=app-config=config.json \
  --dry-run=client -o yaml > app-secrets.yaml
```

The `--dry-run=client -o yaml` command generates the YAML manifest without actually creating the resource, and you can then edit and apply it.

## Using Secrets in Pods

Once a Secret is created, you can reference it in your Pod definitions to provide sensitive data to your containers.

There are two primary ways to use Secrets in Pods:

1.  **As environment variables:** Inject secret values directly into container environment variables.
2.  **As mounted volumes:** Mount secrets as files within the container's filesystem.

### 1. As Environment Variables

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-app-pod
spec:
  containers:
  - name: app-container
    image: nginx:latest
    env:
    - name: DB_USERNAME # Environment variable name in the container
      valueFrom:
        secretKeyRef:
          name: my-db-credentials # Name of the Secret
          key: username # Key within the Secret
    - name: DB_PASSWORD
      valueFrom:
        secretKeyRef:
          name: my-db-credentials
          key: password
```

**How it works:** Kubernetes watches for Pods that reference Secrets. When the Pod is scheduled, the Kubelet injects the specified secret key-value pairs as environment variables into the container.

### 2. As Mounted Volumes

This is often preferred for larger amounts of data or when you don't want to expose sensitive information directly as environment variables.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-app-pod-volume
spec:
  containers:
  - name: app-container
    image: nginx:latest
    volumeMounts:
    - name: secret-volume
      mountPath: "/etc/secrets" # Directory where secrets will be mounted
      readOnly: true
  volumes:
  - name: secret-volume
    secret:
      secretName: my-app-secrets # Name of the Secret
```

**How it works:** Kubernetes creates a temporary volume for the Secret. The data from the Secret is written into files within this volume, where the filename corresponds to the key in the Secret. For example, if `my-app-secrets` contains keys `api-key.txt` and `app-config`, these will appear as files at `/etc/secrets/api-key.txt` and `/etc/secrets/app-config` inside the container.

## Best Practices for Secrets Management

*   **Use RBAC:** Restrict access to Secrets. Only the Service Accounts or users that need access should have `get` and `list` permissions on Secrets.
*   **Avoid `Opaque` for sensitive types:** Use `kubernetes.io/tls` for TLS credentials.
*   **Version Control Secrets:** Store your declarative YAML files in a Git repository. For truly sensitive production secrets, consider using external secret management tools integrated with Kubernetes (like HashiCorp Vault, AWS Secrets Manager, Azure Key Vault) that can inject secrets into Pods.
*   **Rotate Secrets:** Regularly update your passwords, API keys, and certificates.
*   **Consider Encryption at Rest:** Ensure your Kubernetes cluster's etcd is configured for encryption at rest for an extra layer of security.
*   **Namespace Scoping:** Secrets are namespaced. This helps isolate sensitive data to specific environments or applications.

By mastering Kubernetes Secrets, you significantly enhance the security posture of your containerized applications.

## Supports

- [[skills/computing/systems-infrastructure/compute-runtime/kubernetes/microskills/kubernetes-secrets-management|Kubernetes Secrets Management]]
