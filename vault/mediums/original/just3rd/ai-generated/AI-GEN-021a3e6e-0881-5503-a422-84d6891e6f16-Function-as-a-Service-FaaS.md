---
type: "medium"
title: "Understanding Function as a Service (FaaS)"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/platform-engineering/cloud-computing/microskills/function-as-a-service-faas|function-as-a-service-faas]]"
learning-time-in-minutes: 4
---
# Understanding Function as a Service (FaaS)

Function as a Service (FaaS) is a core component of the serverless computing model. It allows developers to run code in response to events without managing the underlying infrastructure. Think of it as a way to execute small, discrete pieces of code on demand.

## What is FaaS?

In FaaS, you write a function – a piece of code that performs a specific task, like resizing an image, processing a database entry, or handling an API request. You then upload this function to a FaaS provider. The provider takes care of everything else: provisioning servers, scaling resources, and managing the operating system. You only pay for the actual execution time of your function.

Key characteristics of FaaS:

*   **Event-driven:** Functions are triggered by specific events, such as an HTTP request, a database change, a file upload, or a scheduled timer.
*   **Stateless:** Functions are typically designed to be stateless, meaning they don't retain information between invocations. Any necessary state must be managed externally (e.g., in a database).
*   **Managed Infrastructure:** The FaaS provider handles all server management, patching, scaling, and availability.
*   **Pay-per-execution:** You are billed based on the number of times your function is invoked and the duration of its execution.

## FaaS in the Serverless Context

Serverless computing is a broader concept that encompasses FaaS. While FaaS is the execution model for running your code, serverless also includes other managed services like serverless databases (e.g., DynamoDB, Cosmos DB) and serverless APIs. The goal of serverless is to abstract away infrastructure management so developers can focus purely on application logic.

FaaS is the "compute" part of serverless. When you build a serverless application, you often use FaaS for your custom business logic, combined with other managed services for data storage, authentication, and more.

## Practical Example: Image Resizing

Imagine you're building a web application where users can upload profile pictures. You want to automatically create different sizes of these images (e.g., thumbnail, medium, large) for display.

Here's how FaaS can solve this:

1.  **Event Trigger:** When a user uploads an image to a cloud storage service (like Amazon S3, Azure Blob Storage, or Google Cloud Storage), this triggers an event.
2.  **FaaS Function:** You deploy a FaaS function (e.g., AWS Lambda, Azure Functions, Google Cloud Functions) that is configured to be triggered by this storage event.
3.  **Code Execution:** When the event occurs, the FaaS provider automatically spins up an instance of your function, passes the uploaded image's location as an input, and executes your code.
4.  **Resizing Logic:** Your function's code reads the original image, uses an image processing library to create the different resized versions, and then saves these new versions back to the cloud storage.
5.  **Infrastructure Abstraction:** You didn't have to set up or manage any servers to run this resizing process. The FaaS provider handled all the compute resources.

This scenario perfectly illustrates the power of FaaS: run code efficiently, triggered by events, without infrastructure overhead.

## Practice Task

Consider a scenario where you have a web form that collects user feedback. You want to send an email notification to your team whenever new feedback is submitted.

Describe how you would use FaaS to achieve this. What would be the event trigger? What would the FaaS function do? What other serverless services might you need?

## Self-Check Questions

1.  What is the primary role of FaaS within the serverless computing model?
2.  If your FaaS function takes 5 seconds to execute and is invoked 1000 times in a month, and the cost is $0.00001667 per GB-second and $0.20 per 1 million requests, approximately what would be the compute cost for that month? (Assume the function uses 128MB of memory).
3.  Why is it important for FaaS functions to be stateless?
4.  Name one event that could trigger a FaaS function.

## Supports

- [[skills/computing/systems-infrastructure/platform-engineering/cloud-computing/microskills/function-as-a-service-faas|Function as a Service (FaaS)]]
