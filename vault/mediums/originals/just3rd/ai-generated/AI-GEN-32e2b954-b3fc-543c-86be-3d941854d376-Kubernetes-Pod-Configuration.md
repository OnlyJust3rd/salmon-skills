---
type: "medium"
title: "Kubernetes Pod Configuration"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/compute-runtime/kubernetes/microskills/kubernetes-pod-configuration|kubernetes-pod-configuration]]"
learning-time-in-minutes: 4
---
# Kubernetes Pod Configuration

This lesson focuses on defining and configuring Kubernetes Pods, a fundamental building block within Kubernetes. Understanding Pod configuration is crucial for successfully implementing broader Kubernetes configurations.

## What is a Pod?

A Pod is the smallest deployable unit in Kubernetes. It represents a single instance of a running process in your cluster. Crucially, a Pod can contain one or more containers that share resources such as:

*   **Network Namespace:** All containers within a Pod share the same IP address and port space. They can communicate with each other using `localhost`.
*   **Storage Volumes:** Containers within a Pod can access shared storage volumes, allowing them to share data.

While a Pod can technically have multiple containers (e.g., for sidecar patterns like log collection or service mesh proxies), it's most common to have a single application container per Pod.

## Defining a Pod: The YAML Manifest

Kubernetes resources are typically defined using YAML (YAML Ain't Markup Language) files. A Pod definition is no exception. Let's break down a basic Pod manifest.

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

### Key Fields Explained:

*   **`apiVersion`**: Specifies the Kubernetes API version you are using for this object. `v1` is standard for Pods.
*   **`kind`**: Declares the type of Kubernetes object you are creating, in this case, `Pod`.
*   **`metadata`**: Contains identifying information about the Pod.
    *   **`name`**: A unique name for your Pod within the namespace.
    *   **`labels`**: Key-value pairs that help organize and select Kubernetes objects. Here, we label the Pod with `app: nginx`.
*   **`spec`**: The core specification for your Pod.
    *   **`containers`**: A list of containers to run within the Pod.
        *   **`name`**: A unique name for the container within the Pod.
        *   **`image`**: The container image to use (e.g., `nginx:latest` from Docker Hub).
        *   **`ports`**: A list of network ports that the container exposes.
            *   **`containerPort`**: The port number the container listens on. This is informational for Kubernetes and for services that might target this Pod.

## Applying the Pod Configuration

To create this Pod in your Kubernetes cluster, you would use the `kubectl apply` command:

```bash
kubectl apply -f pod-definition.yaml
```

(Assuming you saved the YAML above as `pod-definition.yaml`).

Once applied, you can check the status of your Pod:

```bash
kubectl get pods
```

You should see `my-nginx-pod` listed, and its status should eventually transition to `Running`.

## Practical Pod Configuration Aspects

Beyond the basic definition, here are some essential configurations you'll frequently use:

### Resource Requests and Limits

This is crucial for resource management and cluster stability. You define how much CPU and memory your container needs and what its maximum usage should be.

*   **`requests`**: The minimum amount of resources your container needs to run. Kubernetes uses this for scheduling.
*   **`limits`**: The maximum amount of resources your container can consume. If a container exceeds its CPU limit, it may be throttled. If it exceeds its memory limit, it will be terminated (OOMKilled).

```yaml
# ... inside spec.containers section
resources:
  requests:
    memory: "64Mi"  # 64 Mebibytes
    cpu: "250m"     # 250 millicores (0.25 CPU core)
  limits:
    memory: "128Mi" # 128 Mebibytes
    cpu: "500m"     # 500 millicores (0.5 CPU core)
```

### Image Pull Policy

By default, Kubernetes tries to pull the image if it's not present locally. You can control this behavior:

*   `IfNotPresent`: Pulls the image only if it's not already on the node.
*   `Always`: Always attempts to pull the image, even if it's present. Useful for ensuring you always get the latest version.
*   `Never`: Never pulls the image; assumes it's already on the node.

```yaml
# ... inside spec.containers section
imagePullPolicy: Always
```

### Environment Variables

You can inject configuration data into your containers as environment variables.

```yaml
# ... inside spec.containers section
env:
  - name: MY_VARIABLE
    value: "some_value"
  - name: ANOTHER_VAR
    valueFrom:
      configMapKeyRef:
        name: my-configmap
        key: config-key
```

### Volumes

Pods can have attached volumes to persist data or share files between containers. This is a broad topic, but a simple example is an `emptyDir` volume, which exists for the lifetime of the Pod.

```yaml
# ... inside spec
volumes:
  - name: shared-data
    emptyDir: {}
containers:
  - name: container-one
    image: busybox
    command: ["sh", "-c", "echo 'hello from container one' > /data/message.txt"]
    volumeMounts:
      - name: shared-data
        mountPath: /data
  - name: container-two
    image: busybox
    command: ["sh", "-c", "cat /data/message.txt"]
    volumeMounts:
      - name: shared-data
        mountPath: /data
```

This example shows two containers sharing an `emptyDir` volume. `container-one` writes a file, and `container-two` reads it.

## Common Mistakes

*   **Forgetting `apiVersion` and `kind`**: Essential fields for Kubernetes to understand your manifest.
*   **Incorrectly formatting YAML**: Indentation is critical in YAML.
*   **Typos in image names**: Leads to `ImagePullBackOff` errors.
*   **Not specifying resource limits/requests**: Can lead to noisy neighbor problems and cluster instability.
*   **Exposing ports without `containerPort`**: While not strictly an error, it's good practice to declare `containerPort` for clarity and for services to target.

Mastering Pod configuration is your first step towards effectively managing workloads in Kubernetes. You'll build upon these concepts as you explore Deployments, StatefulSets, and other higher-level Kubernetes objects.

## Supports

- [[skills/computing/systems-infrastructure/compute-runtime/kubernetes/microskills/kubernetes-pod-configuration|Kubernetes Pod Configuration]]
