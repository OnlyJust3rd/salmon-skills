---
type: "medium"
title: "Understanding the FaaS Execution Model"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/cloud-devops/platform-engineering/cloud-computing/microskills/faas-execution-model|FaaS Execution Model]]"
---
# Understanding the FaaS Execution Model

Function as a Service (FaaS) is a core component of serverless computing. In this lesson, we'll explore how FaaS functions are executed, focusing on their event-driven nature.

### What is the FaaS Execution Model?

Think of FaaS as running small, single-purpose pieces of code (functions) in response to specific events. You don't manage servers; the cloud provider handles all the underlying infrastructure. The key is that your function only runs when it's needed and you only pay for the compute time it uses.

The FaaS execution model follows a pattern:

1.  **Event Trigger:** Something happens that your function is designed to react to. This could be an HTTP request, a new file uploaded to storage, a message in a queue, a database change, or a scheduled timer.
2.  **Function Invocation:** The cloud provider detects the event and automatically invokes your function. This involves provisioning a temporary execution environment for your code.
3.  **Code Execution:** Your function code runs within this isolated environment, processing the event data.
4.  **Result/Output:** The function completes its task and may produce an output, update a database, send a notification, or return a value.
5.  **Environment Shutdown:** Once the function finishes, the execution environment is shut down. You don't need to worry about cleaning up or managing the lifecycle of servers.

This "on-demand" execution is what makes FaaS a central part of the serverless paradigm. It abstracts away server management, allowing developers to focus solely on writing and deploying code.

### Practical Example: Image Resizing on Upload

Imagine you have a web application where users upload images. You want to automatically create a thumbnail version of each uploaded image.

Here's how a FaaS execution model would handle this:

*   **Event Trigger:** A user uploads an image file (e.g., `profile_picture.jpg`) to a cloud storage service (like AWS S3, Azure Blob Storage, or Google Cloud Storage).
*   **Function Invocation:** The storage service is configured to trigger a FaaS function whenever a new object is created in a specific bucket. The cloud provider's FaaS service (e.g., AWS Lambda, Azure Functions, Google Cloud Functions) receives this trigger. It then spins up an instance of your image resizing function.
*   **Code Execution:** Your function code, written in a language like Python or Node.js, receives information about the uploaded file (its name, location, etc.). It downloads the original image, uses an image processing library to resize it to a thumbnail dimension, and then uploads the thumbnail back to a different location within the storage service.
*   **Result/Output:** The thumbnail image is now available. The function's execution is complete.
*   **Environment Shutdown:** The FaaS environment that ran your function is automatically shut down.

You don't need to have a server constantly running and monitoring the storage bucket for new files. The FaaS function scales automatically, handling many uploads concurrently if needed, and you only pay for the brief moments your function is actively running.

### Practice Task

Consider another scenario: a user submits a form on your website.

1.  What kind of event trigger would be involved in this scenario if you were using FaaS to process the form submission?
2.  What would be the likely action your FaaS function would perform after being triggered?

### Self-Check Questions

1.  What is the primary benefit of the FaaS execution model concerning infrastructure management?
2.  Name at least two types of events that could trigger a FaaS function.
3.  Why is FaaS considered a key part of the "serverless" approach?
4.  When your FaaS function has finished executing, what typically happens to the underlying compute environment?

## Supports

- [[skills/cloud-devops/platform-engineering/cloud-computing/microskills/faas-execution-model|FaaS Execution Model]]
