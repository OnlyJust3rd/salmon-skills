---
type: "medium"
title: "AWS Storage Fundamentals"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/cloud-devops/platform-engineering/amazon-web-services/microskills/aws-storage|AWS Storage]]"
---
# AWS Storage Fundamentals

Understanding how AWS handles data storage is crucial for building any application on the cloud. AWS offers a variety of storage services, but they generally fall into three main categories: object storage, block storage, and managed storage. Each has its own strengths and is suited for different use cases.

## Object Storage: AWS S3

Think of object storage as a vast digital warehouse. You store data as "objects," where each object includes the data itself, some metadata (like creation date or content type), and a unique identifier. The most prominent AWS service here is **Amazon Simple Storage Service (S3)**.

**When to use S3:**
*   Storing large amounts of unstructured data like images, videos, documents, backups, and logs.
*   Hosting static website content.
*   Data lakes for analytics.

**Key Characteristics:**
*   Highly scalable and durable.
*   Accessed via HTTP/S APIs.
*   Cost-effective for large volumes of data.
*   You don't manage underlying disks.

## Block Storage: AWS EBS

Block storage is like having a hard drive attached to a server. It stores data in fixed-size chunks called "blocks." Each block has an address, allowing for quick read and write operations. The primary AWS service for this is **Amazon Elastic Block Store (EBS)**.

**When to use EBS:**
*   Storing data for Amazon EC2 instances (virtual servers).
*   Databases that require low latency access.
*   Operating system boot volumes.

**Key Characteristics:**
*   Provides persistent storage for EC2 instances.
*   Performance can be provisioned (e.g., SSD vs. HDD).
*   Can be detached from one EC2 instance and attached to another.

## Managed Storage Services

These services abstract away the underlying infrastructure, providing higher-level data management capabilities. They often combine storage with compute or database features. Examples include **Amazon RDS** (for relational databases) and **Amazon DynamoDB** (for NoSQL databases).

**When to use Managed Services:**
*   When you need a fully managed database without worrying about server maintenance, patching, or scaling storage.
*   For specific application needs like relational data or key-value stores.

**Key Characteristics:**
*   Handles tasks like backups, patching, and replication automatically.
*   Often integrated with other AWS services for easier development.

---

### Practical Scenario

Imagine you are building a photo-sharing website.

*   You would use **Amazon S3** to store all the uploaded user photos. S3 is perfect for this because photos are unstructured data, and S3 can handle a massive, scalable number of files cost-effectively.
*   If your website runs on an EC2 instance, that instance would likely boot from an **EBS** volume, which acts as its virtual hard drive.
*   If you need to store user profile information in a structured database, you might use **Amazon RDS** for a relational database or **Amazon DynamoDB** for a NoSQL approach, leveraging these managed services to handle the database complexities.

---

### Practice Task

Consider the following data types. For each, identify which AWS storage category (Object, Block, or Managed) would be most appropriate and name a specific AWS service within that category.

1.  A company's entire archive of financial reports (PDFs, spreadsheets) dating back 10 years.
2.  The operating system and application files for a web server running on an EC2 instance.
3.  A rapidly growing list of user sessions for a real-time analytics dashboard.

---

### Self-Check Questions

1.  What is the main difference in how data is accessed between object storage and block storage?
2.  When would you choose S3 over EBS?
3.  What is an advantage of using a managed storage service like RDS or DynamoDB compared to managing your own database on an EC2 instance with EBS?

## Supports

- [[skills/cloud-devops/platform-engineering/amazon-web-services/microskills/aws-storage|AWS Storage]]
