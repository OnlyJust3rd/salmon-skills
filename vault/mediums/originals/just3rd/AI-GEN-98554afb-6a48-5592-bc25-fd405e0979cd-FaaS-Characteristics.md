---
type: "medium"
title: "Function as a Service (FaaS) Characteristics"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/cloud-platforms/cloud-computing/microskills/faas-characteristics|faas-characteristics]]"
related-skills:
  - "[[skills/computing/systems-infrastructure/cloud-platforms/cloud-computing/cloud-computing|cloud-computing]]"
learning-time-in-minutes: 3
---
# Function as a Service (FaaS) Characteristics

Function as a Service (FaaS) is a cloud computing execution model that allows you to run application code without provisioning or managing infrastructure. You write code in small, discrete functions, and the cloud provider handles all the underlying infrastructure, scaling, and availability. FaaS is a key component of serverless computing.

### Understanding FaaS

At its core, FaaS abstracts away servers entirely. You are responsible for your code, and the cloud provider is responsible for everything else needed to execute that code in response to events. This event-driven nature is a defining characteristic of FaaS.

**Key Characteristics:**

*   **Event-Driven:** Functions are triggered by specific events. These events can be HTTP requests, database changes, file uploads, scheduled timers, or messages from other services.
*   **Stateless:** Each function execution is independent. Functions do not retain memory or context from previous invocations. If you need to maintain state, you must use external services like databases or caches.
*   **Ephemeral:** Function instances are short-lived. They are created when an event occurs, execute the code, and then are terminated. This means you cannot rely on a function instance persisting between calls.
*   **Automatic Scaling:** The cloud provider automatically scales the number of function instances up or down based on the incoming event load. You don't need to configure auto-scaling groups or monitor server capacity.
*   **Pay-per-Execution:** You are typically billed based on the number of times your functions are executed and the duration of their execution, not for idle server time. This can lead to significant cost savings for applications with variable or infrequent traffic.
*   **Vendor-Specific:** FaaS implementations are often tied to a specific cloud provider's ecosystem (e.g., AWS Lambda, Azure Functions, Google Cloud Functions).

### Practical Scenario: Image Resizing

Imagine you have a web application where users can upload images. You want to automatically create smaller thumbnail versions of these images whenever a new one is uploaded.

**How FaaS applies:**

1.  **Event Trigger:** A new image is uploaded to a cloud storage service (like Amazon S3 or Azure Blob Storage). This upload event triggers a FaaS function.
2.  **Function Execution:** The FaaS function (e.g., an AWS Lambda function) is invoked. It receives information about the newly uploaded image.
3.  **Code Logic:** The function's code executes. It downloads the original image, uses an image processing library to resize it into a thumbnail, and then uploads the thumbnail back to cloud storage in a different location or with a different name.
4.  **No Server Management:** You didn't need to set up or manage any servers to handle this image processing. The FaaS platform automatically ran your code in response to the event.
5.  **Scalability:** If 100 users upload images simultaneously, the FaaS platform will spin up 100 instances of your function (or as many as needed) to process them concurrently.
6.  **Cost Efficiency:** You only pay for the compute time used to resize the images, not for a server sitting idle waiting for uploads.

### Practice Task

Consider a scenario where you need to send a welcome email to new users who sign up for your service.

**Task:** Describe how you would implement this using FaaS. Identify:
1.  The event that would trigger the FaaS function.
2.  What the FaaS function would need to do (its logic).
3.  Why FaaS is a suitable model for this task.

### Self-Check Questions

1.  What is the primary advantage of FaaS regarding infrastructure management?
2.  If a FaaS function needs to remember data between invocations, what must it utilize?
3.  Describe a situation where FaaS might *not* be the best choice and why.

## Supports

- [[skills/computing/systems-infrastructure/cloud-platforms/cloud-computing/microskills/faas-characteristics|FaaS Characteristics]]
