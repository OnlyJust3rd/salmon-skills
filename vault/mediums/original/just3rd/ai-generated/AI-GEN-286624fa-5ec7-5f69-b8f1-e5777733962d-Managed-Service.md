---
type: "medium"
title: "Understanding Managed Services in Cloud-Native Architectures"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/cloud-platforms/cloud-infrastructure/cloud-native-application-architecture/microskills/managed-service|managed-service]]"
learning-time-in-minutes: 3
---
# Understanding Managed Services in Cloud-Native Architectures

Managed services are a cornerstone of cloud-native application architecture. They represent services that are operated, maintained, and scaled by your cloud provider (like Amazon Web Services, Microsoft Azure, or Google Cloud Platform), allowing you to focus on building and deploying your applications rather than managing the underlying infrastructure.

## What are Managed Services?

Instead of setting up and managing your own databases, message queues, or container orchestration platforms, you can leverage managed services. The cloud provider handles:

*   **Infrastructure Provisioning:** Setting up the servers, storage, and networking.
*   **Maintenance & Patching:** Applying security updates and bug fixes.
*   **Scaling:** Automatically adjusting resources based on demand.
*   **High Availability & Durability:** Ensuring your service remains accessible and data is protected.
*   **Backups & Disaster Recovery:** Implementing strategies to protect your data.

This offloads a significant operational burden, enabling teams to move faster and concentrate on delivering business value.

## Practical Example: A Web Application's Database

Imagine you're building a new web application. It needs a database to store user information, product catalogs, and order details.

**Option 1: Self-Managed Database**
You could rent virtual machines, install a database like PostgreSQL, configure it for high availability, set up backups, monitor performance, and patch it regularly. This is a lot of work and requires specialized expertise.

**Option 2: Managed Database Service (e.g., Amazon RDS, Azure SQL Database, Google Cloud SQL)**
With a managed database service, you simply select the database engine (e.g., PostgreSQL), the size of the instance you need, and the cloud provider handles all the complexities mentioned above. You get a highly available, scalable, and backed-up database endpoint that your application can connect to. You pay for the resources you consume, but the operational overhead is drastically reduced.

This principle applies to many other components of a cloud-native application:

*   **Message Queues:** Managed services like Amazon SQS, Azure Service Bus, or Google Cloud Pub/Sub handle message delivery and scaling.
*   **Container Orchestration:** Services like Amazon EKS, Azure AKS, or Google Kubernetes Engine manage the complex orchestration of containerized applications.
*   **Serverless Functions:** Services like AWS Lambda, Azure Functions, or Google Cloud Functions allow you to run code without provisioning or managing servers.

## Practice Task

Consider a microservice that needs to process uploaded images. It requires object storage for the images and a queue to trigger the processing logic.

1.  Identify a suitable managed service for object storage on your preferred cloud platform.
2.  Identify a suitable managed service for a message queue on your preferred cloud platform.
3.  Describe how using these managed services would simplify the development and operation of this microservice compared to managing your own storage and queue infrastructure.

## Self-Check Questions

1.  What is the primary benefit of using managed services in cloud-native application architecture?
2.  Name three types of infrastructure components for which cloud providers commonly offer managed services.
3.  If you're using a managed database service, what responsibilities are typically handled by the cloud provider?
4.  What trade-off might you consider when opting for a managed service versus a self-managed solution?

## Supports

- [[skills/computing/systems-infrastructure/cloud-platforms/cloud-infrastructure/cloud-native-application-architecture/microskills/managed-service|Managed Service]]
