---
type: "medium"
title: "Kubernetes Object Configuration with YAML"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/platform-engineering/infrastructure-as-code/microskills/kubernetes-object-configuration|kubernetes-object-configuration]]"
learning-time-in-minutes: 3
---
# Kubernetes Object Configuration with YAML

Kubernetes, a powerful container orchestration system, relies heavily on declarative configuration. This means you tell Kubernetes *what* you want your system to look like, and Kubernetes figures out *how* to achieve it. The primary language for defining these desired states is YAML (YAML Ain't Markup Language). Mastering YAML for Kubernetes objects is crucial for effectively managing your applications and infrastructure as code.

## What are Kubernetes Objects?

At its core, Kubernetes manages **objects**. These objects represent the desired state of your cluster. Think of them as blueprints for the components of your distributed system. Common examples include:

*   **Pods:** The smallest deployable units, representing one or more containers.
*   **Deployments:** Manages stateless applications, ensuring a specified number of Pod replicas are running.
*   **Services:** Define a logical set of Pods and a policy by which to access them (e.g., network access).
*   **Namespaces:** Provide a mechanism for isolating groups of resources.

Each Kubernetes object is defined by a YAML manifest.

## Structure of a Kubernetes YAML Manifest

Every Kubernetes YAML file follows a standard structure. You'll almost always find these top-level keys:

1.  **`apiVersion`**: Specifies the Kubernetes API version for the object type. This is important because APIs evolve. For example, `apps/v1` is used for Deployments in current versions.
2.  **`kind`**: Defines the type of Kubernetes object you are creating (e.g., `Pod`, `Deployment`, `Service`).
3.  **`metadata`**: Contains data that helps uniquely identify the object, such as its `name`, `namespace`, and `labels`.
    *   **`name`**: A unique name for the object within its namespace.
    *   **`labels`**: Key-value pairs that can be used to group and select objects. They are fundamental for linking Services to Pods.
4.  **`spec`**: This is the heart of the manifest, describing the desired state of the object. The content of `spec` varies greatly depending on the `kind` of object.

Let's break down an example.

### Example: Configuring a Simple Pod

This YAML defines a basic Pod named `my-nginx-pod` that runs a single container using the `nginx:latest` image.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-nginx-pod
  labels:
    app: nginx
spec:
  containers:
  - name: nginx-container
    image: nginx:latest
    ports:
    - containerPort: 80
```

**Let's dissect this:**

*   `apiVersion: v1`: We are using the core Kubernetes API for this Pod.
*   `kind: Pod`: We are defining a Pod object.
*   `metadata`:
    *   `name: my-nginx-pod`: The Pod will be named `my-nginx-pod`.
    *   `labels`:
        *   `app: nginx`: We are assigning a label `app` with the value `nginx` to this Pod. This is useful for later selection.
*   `spec`:
    *   `containers`: This is a list of containers to run within the Pod.
        *   `- name: nginx-container`: The name of our container.
        *   `image: nginx:latest`: We want to use the `nginx:latest` Docker image.
        *   `ports`:
            *   `- containerPort: 80`: We are exposing port 80 within the container.

## Applying YAML Configurations

To apply this configuration to your Kubernetes cluster, you typically use the `kubectl` command-line tool.

**Command:**

```bash
kubectl apply -f your-pod-manifest.yaml
```

Replace `your-pod-manifest.yaml` with the actual name of your YAML file.

If you save the example above into a file named `my-nginx-pod.yaml`, you would run:

```bash
kubectl apply -f my-nginx-pod.yaml
```

Kubernetes will read this file, interpret the desired state, and create the Pod.

## Common Pitfalls and Best Practices

*   **Indentation is Crucial:** YAML is sensitive to whitespace. Use consistent indentation (spaces, not tabs) to define structure. Incorrect indentation is a very common source of errors.
*   **Validating YAML:** Before applying, it's good practice to validate your YAML. Many IDEs have YAML linters, or you can use `yamllint` from the command line.
*   **Version Control:** Always store your YAML manifests in a version control system (like Git). This is a core principle of Infrastructure as Code, allowing you to track changes, revert to previous versions, and collaborate.
*   **Resource Limits and Requests:** For production workloads, always define resource `limits` and `requests` for your containers in the `spec`. This helps Kubernetes schedule Pods efficiently and prevents resource starvation.

    ```yaml
    spec:
      containers:
      - name: nginx-container
        image: nginx:latest
        ports:
        - containerPort: 80
        resources:
          requests:
            memory: "64Mi"
            cpu: "250m" # 250 millicpu (1/4 of a CPU core)
          limits:
            memory: "128Mi"
            cpu: "500m" # 500 millicpu (1/2 of a CPU core)
    ```

By understanding the fundamental structure of Kubernetes YAML manifests and practicing with common object types, you'll gain significant control over your Kubernetes deployments.

## Supports

- [[skills/computing/systems-infrastructure/platform-engineering/infrastructure-as-code/microskills/kubernetes-object-configuration|Kubernetes Object Configuration]]
