---
type: "medium"
title: "Kubernetes Resource Requests and Limits"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/cloud-devops/platform-engineering/kubernetes/microskills/resource-requests-and-limits|Resource Requests and Limits]]"
---
# Kubernetes Resource Requests and Limits

In Kubernetes, applications running inside Pods require computing resources like CPU and memory. Without proper management, one Pod could consume excessive resources, impacting other Pods on the same node and potentially causing node instability. This is where **resource requests and limits** come into play, allowing you to define the minimum and maximum resources a container can use.

## Understanding Resource Requests and Limits

When you define resource requests and limits for a container in a Pod specification, you are providing instructions to Kubernetes on how to manage its resource allocation.

*   **Requests**: This is the *minimum* amount of CPU or memory a container is guaranteed to have. Kubernetes uses requests to schedule Pods. A Pod will only be scheduled onto a node if that node has enough allocatable resources to satisfy the Pod's requests.
*   **Limits**: This is the *maximum* amount of CPU or memory a container is allowed to consume.

    *   **CPU Limits**: If a container exceeds its CPU limit, it will be throttled (its CPU usage will be slowed down). It will not be terminated.
    *   **Memory Limits**: If a container exceeds its memory limit, it is subject to termination. This is known as **OOMKilled** (Out Of Memory killed).

## Why Use Resource Requests and Limits?

*   **Guaranteed Resources**: Ensure critical applications have the resources they need to run reliably.
*   **Node Stability**: Prevent runaway Pods from consuming all resources on a node, leading to instability for other workloads.
*   **Efficient Scheduling**: Kubernetes can make smarter decisions about where to place Pods based on their resource needs.
*   **Cost Management**: Better resource allocation can lead to more efficient use of cluster resources.

## Defining Resource Requests and Limits

Resource requests and limits are defined within the `resources` section of a container's specification in a Pod manifest.

The units for CPU are typically expressed in "cores" (e.g., `1`, `500m` which is 0.5 cores). For memory, units are bytes, kibibytes (Ki), mebibytes (Mi), gibibytes (Gi), etc.

Here's an example of a Pod manifest with resource requests and limits:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: resource-demo-pod
spec:
  containers:
  - name: nginx-container
    image: nginx:latest
    resources:
      requests:
        memory: "64Mi"  # Request 64 Mebibytes of memory
        cpu: "250m"     # Request 0.25 CPU cores (250 millicores)
      limits:
        memory: "128Mi" # Limit to 128 Mebibytes of memory
        cpu: "500m"     # Limit to 0.5 CPU cores (500 millicores)
```

**Explanation of the example:**

*   The `nginx-container` is requesting `64Mi` of memory and `250m` of CPU. This means Kubernetes will ensure this container *always* has at least this much available to it when scheduling.
*   The container is limited to `128Mi` of memory and `500m` of CPU. If it tries to use more than `128Mi` of memory, it might be OOMKilled. If it tries to use more than `500m` of CPU, its execution will be throttled.

## Best Practices and Considerations

*   **Start with Reasonable Defaults**: Begin with conservative requests and limits. Monitor your application's performance and adjust as needed.
*   **Understand Your Application's Needs**: Profile your application to determine its typical and peak resource usage.
*   **Set Requests Equal to Limits (for Guaranteed Performance)**: For critical applications where you want to ensure performance and avoid throttling or termination, setting `requests` and `limits` to the same value can be beneficial. However, this means the Pod will be scheduled only if the node can guarantee that amount of resources *always*.
*   **Use a Quality of Service (QoS) Class**: Kubernetes assigns a QoS class to Pods based on their resource settings:
    *   **Guaranteed**: `requests` and `limits` are equal for all resources. These Pods are the last to be killed when a node runs out of resources.
    *   **Burstable**: `requests` are set, but `limits` are different, or only one is set. These Pods can use more resources than requested, but are more likely to be killed than Guaranteed Pods if resources are scarce.
    *   **BestEffort**: No `requests` or `limits` are set. These Pods are the first to be killed.
*   **Monitor Resource Usage**: Regularly monitor the actual resource consumption of your Pods using tools like `kubectl top` or Kubernetes monitoring solutions. This data is crucial for tuning your requests and limits.
*   **Consider Container vs. Pod Limits**: You can define requests and limits at the container level (as shown above) or at the Pod level. Container-level settings are more granular and generally preferred.

## Common Mistakes

*   **Not Setting Limits**: This can lead to unpredictable resource consumption and potential node instability.
*   **Setting Limits Too Low**: This can cause applications to be throttled or terminated unnecessarily, leading to performance issues or service outages.
*   **Setting Requests Too High**: This can lead to Pods not being scheduled because Kubernetes cannot find nodes with sufficient available resources, even if the Pod might not actually need that much resource constantly.

By thoughtfully implementing resource requests and limits, you gain significant control over your Kubernetes environment, leading to more stable, predictable, and efficient application deployments.

## Supports

- [[skills/cloud-devops/platform-engineering/kubernetes/microskills/resource-requests-and-limits|Resource Requests and Limits]]
