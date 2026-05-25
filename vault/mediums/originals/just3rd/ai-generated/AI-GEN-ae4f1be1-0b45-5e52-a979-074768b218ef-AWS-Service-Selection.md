---
type: "medium"
title: "AWS Service Selection: Matching Needs to Solutions"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/cloud-platforms/cloud-providers/amazon-web-services/microskills/aws-service-selection|aws-service-selection]]"
learning-time-in-minutes: 3
---
# AWS Service Selection: Matching Needs to Solutions

When building applications on Amazon Web Services (AWS), a crucial first step is selecting the right service categories. This isn't about picking specific product names yet, but rather understanding the fundamental type of service that best fits your application's requirements. Think of it like choosing between a hammer, a screwdriver, or a wrench before you even pick up the tool itself.

## Understanding Service Categories

AWS offers a vast array of services. For our purposes, we can broadly categorize them based on their primary function:

*   **Compute:** Services that run your code and applications. This includes virtual servers, container orchestration, and serverless functions.
*   **Storage:** Services that store your data. Options range from object storage to block storage and file systems.
*   **Database:** Services for managing structured or unstructured data, optimized for different access patterns.
*   **Networking:** Services that connect your resources and manage traffic flow.
*   **Security, Identity, & Compliance:** Services that manage access, authentication, and regulatory adherence. This is where Identity and Access Management (IAM) fits in.

## Practical Scenario: Building a Simple Web Application

Imagine you need to build a simple web application that serves static content (like HTML, CSS, and JavaScript files) and also processes user uploads.

**Application Needs:**

1.  **Serving static website files:** This requires a cost-effective way to store and deliver these files directly to users' browsers.
2.  **Storing user uploaded images:** These images need to be accessible by your application logic and potentially presented later.
3.  **Running the web application logic:** You need a place for your backend code to run, process requests, and interact with storage.
4.  **Controlling who can access what:** You need to define permissions for users and services to ensure security.

**Service Category Selection:**

*   **For static website files:** A service designed for storing and serving large amounts of unstructured data is ideal. This points towards **Object Storage**.
*   **For storing user uploaded images:** Similar to static files, these are unstructured data items. Again, **Object Storage** is a strong contender.
*   **For running the web application logic:** You need a platform to execute your code. Depending on complexity and scaling needs, this could be **Virtual Servers**, **Container Orchestration**, or **Serverless Compute**. For a simple start, **Virtual Servers** are a common choice.
*   **For controlling access:** This directly falls under the **Security, Identity, & Compliance** category, specifically **Identity and Access Management (IAM)**.

## Practice Task

Consider a scenario where you are building a data processing pipeline.

**Application Needs:**

1.  A place to store large log files that are generated daily.
2.  A way to run scripts that analyze these log files.
3.  A managed service to store the processed results, which will be queried frequently by other applications.

Based on the service categories discussed, which categories would you choose for each of these needs? Briefly explain your reasoning for each choice.

## Self-Check Questions

1.  If your application primarily needs to store and retrieve large, unstructured files like videos or backups, which service category is usually the most suitable?
2.  When you need to run custom code that executes in response to events or HTTP requests without managing servers, which compute service category is generally preferred?
3.  What is the primary purpose of services within the "Security, Identity, & Compliance" category in the context of AWS?

## Supports

- [[skills/computing/systems-infrastructure/cloud-platforms/cloud-providers/amazon-web-services/microskills/aws-service-selection|AWS Service Selection]]
