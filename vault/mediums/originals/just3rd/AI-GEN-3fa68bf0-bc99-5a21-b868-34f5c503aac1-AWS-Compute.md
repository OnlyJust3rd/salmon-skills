---
type: "medium"
title: "AWS Compute: The Brains of Your Cloud Operations"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/cloud-platforms/cloud-providers/amazon-web-services/microskills/aws-compute|aws-compute]]"
related-skills:
  - "[[skills/computing/systems-infrastructure/cloud-platforms/cloud-providers/amazon-web-services/amazon-web-services|amazon-web-services]]"
learning-time-in-minutes: 3
---
# AWS Compute: The Brains of Your Cloud Operations

AWS offers a variety of services that provide computing power for your applications. Think of these as the "brains" that run your code and process your data in the cloud. Understanding these core compute services is fundamental to building and running applications on AWS.

## What are AWS Compute Services?

AWS Compute services are the building blocks that allow you to run code and applications without managing the underlying physical hardware. They abstract away the complexities of server maintenance, patching, and scaling, letting you focus on your actual workload. The three primary categories of compute services are:

*   **Virtual Machines (VMs):** These are like having your own server in the cloud. You have full control over the operating system, software, and configurations.
*   **Containers:** These package your application and its dependencies together, ensuring it runs consistently across different environments. They are more lightweight than VMs.
*   **Serverless Functions:** These allow you to run code in response to events without provisioning or managing any servers at all. You only pay for the compute time you consume.

## Practical Example: Hosting a Website

Imagine you want to host a dynamic website that interacts with a database. Here's how different AWS compute services could be used:

*   **Virtual Machines (Amazon EC2):** You could launch an EC2 instance (a virtual server) and install your web server software (like Apache or Nginx), your application code (e.g., a Python Flask app), and connect it to a database. You have complete control over the environment.
*   **Containers (Amazon ECS/EKS):** You could package your website's code and dependencies into a container image. Then, you would use a container orchestration service like Amazon Elastic Container Service (ECS) or Elastic Kubernetes Service (EKS) to deploy and manage these containers. This makes scaling and updating your application easier and more consistent.
*   **Serverless Functions (AWS Lambda):** For a simpler website or specific backend tasks, you could use Lambda functions. For example, a Lambda function could handle user sign-ups, process image uploads, or serve dynamic content by retrieving data from a database and returning it to the frontend. You wouldn't manage any servers; AWS handles the execution of your code.

## Practice Task

1.  **Identify:** Think about a simple web application you use (e.g., a blog, a forum, or an online store).
2.  **Map:** Consider which of the three compute service types (VMs, Containers, Serverless) might be the *most* suitable for running the backend logic of that application, and briefly explain why.

## Self-Check Questions

1.  What is the primary benefit of using AWS compute services over managing physical servers?
2.  When might you choose a Virtual Machine (like EC2) over a Serverless Function (like Lambda)?
3.  What problem do containers help solve in application deployment?

## Supports

- [[skills/computing/systems-infrastructure/cloud-platforms/cloud-providers/amazon-web-services/microskills/aws-compute|AWS Compute]]
