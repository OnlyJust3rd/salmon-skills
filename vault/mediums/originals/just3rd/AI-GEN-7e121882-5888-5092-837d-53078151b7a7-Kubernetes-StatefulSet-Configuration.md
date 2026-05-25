---
type: "medium"
title: "Kubernetes StatefulSet Configuration"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/compute-runtime/kubernetes/microskills/kubernetes-statefulset-configuration|kubernetes-statefulset-configuration]]"
related-skills:
  - "[[skills/computing/systems-infrastructure/compute-runtime/kubernetes/kubernetes|kubernetes]]"
learning-time-in-minutes: 4
---
# Kubernetes StatefulSet Configuration

This lesson focuses on **applying** Kubernetes StatefulSet configurations. StatefulSets are a Kubernetes workload resource used to manage stateful applications. Unlike Deployments, which are designed for stateless applications and can be easily replaced, StatefulSets provide stable, unique network identifiers, stable persistent storage, and ordered, graceful deployment and scaling.

## When to Use a StatefulSet

You should consider using a StatefulSet when your application has one or more of the following characteristics:

*   **Stateful:** The application needs to maintain persistent data across pod restarts.
*   **Unique Network Identity:** Each instance of the application requires a stable, predictable hostname.
*   **Ordered Deployment and Scaling:** You need to deploy, scale, or update instances in a specific, predictable order.
*   **Persistent Storage:** Each instance needs its own dedicated persistent storage volume.

Examples of applications that commonly use StatefulSets include databases (e.g., MySQL, PostgreSQL, MongoDB), message queues (e.g., Kafka, RabbitMQ), and distributed key-value stores.

## Core Components of a StatefulSet Configuration

A StatefulSet definition in YAML includes several key fields:

*   `apiVersion`: Specifies the Kubernetes API version, typically `apps/v1`.
*   `kind`: Set to `StatefulSet`.
*   `metadata`: Contains the name of the StatefulSet and labels.
*   `spec`: The heart of the configuration, defining the desired state.
    *   `serviceName`: The name of the Headless Service that will be used for stable network identity. This is a mandatory field for StatefulSets.
    *   `replicas`: The desired number of Pod replicas.
    *   `selector`: Used to match Pods belonging to this StatefulSet. It must match the labels defined in the Pod template.
    *   `template`: The Pod template defining the Pods that will be created. This includes:
        *   `metadata.labels`: Labels for the Pods.
        *   `spec.containers`: Definitions for the containers within the Pods.
    *   `volumeClaimTemplates`: A list of `PersistentVolumeClaim` templates. Kubernetes will create a `PersistentVolumeClaim` for each Pod replica based on these templates. This ensures each Pod gets its own stable storage.

## Example StatefulSet Configuration

Let's create a StatefulSet for a simple Nginx web server that needs to store its configuration persistently.

```yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: web-statefulset
spec:
  serviceName: "web-headless-service" # Name of the Headless Service
  replicas: 3
  selector:
    matchLabels:
      app: nginx-stateful
  template:
    metadata:
      labels:
        app: nginx-stateful
    spec:
      containers:
      - name: nginx
        image: nginx:latest
        ports:
        - containerPort: 80
          name: web
        volumeMounts:
        - name: nginx-config-volume # Matches the volume name in volumeClaimTemplates
          mountPath: /etc/nginx/conf.d
  volumeClaimTemplates:
  - metadata:
      name: nginx-config-volume # Must match the volumeMount name
    spec:
      accessModes: [ "ReadWriteOnce" ]
      resources:
        requests:
          storage: 1Gi # Request 1Gi of storage per Pod
      storageClassName: standard # Specify your StorageClass here
```

## Explanation of the Example

1.  **`serviceName: "web-headless-service"`**: This is crucial. It links the StatefulSet to a Headless Service. A Headless Service doesn't have a cluster IP and instead returns the IP addresses of the Pods it selects. This enables stable network identities.
2.  **`replicas: 3`**: We want three instances of our Nginx web server.
3.  **`selector`**: Ensures that the StatefulSet manages Pods with the label `app: nginx-stateful`.
4.  **`template`**:
    *   **`app: nginx-stateful`**: Labels the Pods created by this StatefulSet.
    *   **`containers`**: Defines a single container running the `nginx:latest` image and exposing port 80.
    *   **`volumeMounts`**: This tells the container where to mount the persistent volume. `nginx-config-volume` refers to the volume defined in `volumeClaimTemplates`.
5.  **`volumeClaimTemplates`**:
    *   **`metadata.name: nginx-config-volume`**: This name is critical. It must match the `volumeMounts.name` in the container specification. Kubernetes will use this name to create `PersistentVolumeClaim` objects for each Pod.
    *   **`spec.accessModes: [ "ReadWriteOnce" ]`**: This means the volume can be mounted as read-write by a single node.
    *   **`spec.resources.requests.storage: 1Gi`**: Each Pod will request 1 Gigabyte of storage.
    *   **`storageClassName: standard`**: You must specify a `StorageClass` that is available in your cluster. This tells Kubernetes how to provision the actual persistent storage.

## Creating the Headless Service

Before applying the StatefulSet, you need to create the Headless Service that the `serviceName` field refers to.

```yaml
apiVersion: v1
kind: Service
metadata:
  name: web-headless-service # Must match the serviceName in StatefulSet
  labels:
    app: nginx-stateful
spec:
  ports:
  - port: 80
    targetPort: 80
    name: web
  clusterIP: None # This makes it a Headless Service
  selector:
    app: nginx-stateful # Selects the Pods managed by the StatefulSet
```

When you apply this Service, Kubernetes will not assign a Cluster IP. Instead, DNS queries for `web-headless-service.<namespace>.svc.cluster.local` will resolve to the IP addresses of the running Pods.

## Deployment and Scaling

1.  **Apply the configurations:**
    ```bash
    kubectl apply -f headless-service.yaml
    kubectl apply -f statefulset.yaml
    ```
2.  **Check the StatefulSet and Pods:**
    ```bash
    kubectl get statefulset
    kubectl get pods -l app=nginx-stateful
    ```
    You will see Pods named `web-statefulset-0`, `web-statefulset-1`, and `web-statefulset-2`. Each will have a unique `PersistentVolumeClaim` associated with it (e.g., `nginx-config-volume-web-statefulset-0`).
3.  **Scaling:**
    ```bash
    kubectl scale statefulset web-statefulset --replicas=5
    ```
    Kubernetes will gracefully add two new Pods (`web-statefulset-3`, `web-statefulset-4`) in order, each with its own storage. Scaling down also happens in reverse ordinal order.

## Key Considerations

*   **Ordinal Indexing:** Pods are named with an ordinal index (e.g., `web-statefulset-0`, `web-statefulset-1`). This index is stable and used for network identity and persistent volume naming.
*   **Graceful Operations:** StatefulSets guarantee ordered rolling updates and rollbacks. Deployments are created and terminated in order from 0 to N-1. Scaling down is done from N-1 to 0.
*   **Storage Provisioning:** Ensure you have a `StorageClass` configured in your cluster that can provision persistent volumes for your `volumeClaimTemplates`.
*   **Headless Service:** A Headless Service is mandatory for StatefulSets to provide stable network identities.

## Supports

- [[skills/computing/systems-infrastructure/compute-runtime/kubernetes/microskills/kubernetes-statefulset-configuration|Kubernetes StatefulSet Configuration]]
