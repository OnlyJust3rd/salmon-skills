---
type: "medium"
title: "Understanding Operational Burden in Cloud Services"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/cloud-platforms/cloud-infrastructure/cloud-native-application-architecture/microskills/operational-burden|operational-burden]]"
related-skills:
  - "[[skills/computing/systems-infrastructure/cloud-platforms/cloud-infrastructure/cloud-native-application-architecture/cloud-native-application-architecture|cloud-native-application-architecture]]"
learning-time-in-minutes: 4
---
# Understanding Operational Burden in Cloud Services

When building cloud-native applications, a key decision is how much of the operational overhead you want to manage yourself versus what you delegate to the cloud provider. This lesson focuses on understanding the concept of "operational burden" and how it influences your managed service selection.

## What is Operational Burden?

Operational burden refers to the tasks and responsibilities associated with running and maintaining a service or infrastructure. This includes things like:

*   **Provisioning:** Setting up servers, databases, and networks.
*   **Configuration:** Installing and configuring software.
*   **Patching and Updates:** Applying security patches and software updates.
*   **Monitoring:** Tracking performance, availability, and potential issues.
*   **Backups and Disaster Recovery:** Ensuring data is backed up and systems can be restored.
*   **Scaling:** Adjusting resources to meet demand.
*   **Security Management:** Implementing and managing security measures.

In a cloud environment, you have the choice between **self-managed** services (where you handle most of these tasks) and **provider-managed** services (where the cloud provider takes on a significant portion of the operational burden).

## Self-Managed vs. Provider-Managed Responsibilities

The core of understanding operational burden lies in comparing what you are responsible for versus what the cloud provider handles.

| Responsibility              | Self-Managed                                                              | Provider-Managed                                                                     |
| :-------------------------- | :------------------------------------------------------------------------ | :----------------------------------------------------------------------------------- |
| **Infrastructure**          | You manage virtual machines, storage, and networking configuration.       | The provider manages the underlying physical infrastructure and abstracts it.        |
| **Operating System**        | You install, patch, and maintain the OS on your servers.                  | The provider manages the OS for managed services (e.g., managed databases).        |
| **Software Installation**   | You install and configure application software (e.g., web servers, DBs).  | The provider pre-installs and configures the software for managed services.          |
| **Patching & Updates**      | You are responsible for applying all security patches and software updates. | The provider handles patching and updating the managed service software.             |
| **Monitoring & Alerting**   | You set up and manage monitoring tools and alerting systems.              | The provider offers built-in monitoring, and often integrates with their alerting tools. |
| **Backup & Restore**        | You design, implement, and test your backup and restore procedures.       | The provider typically handles automated backups and provides restore capabilities.   |
| **High Availability**       | You configure load balancers, failover mechanisms, and replication.       | The provider offers highly available managed services with built-in redundancy.      |
| **Scaling**                 | You manually scale resources or build custom auto-scaling solutions.      | The provider offers auto-scaling features for many managed services.                 |
| **Security Configuration**  | You configure firewalls, access controls, and encryption at the OS/app level. | The provider secures the service at the infrastructure and platform level.           |

## Practical Scenario

Imagine you need a database for your new web application.

**Option 1: Self-Managed Database (e.g., EC2 instance with PostgreSQL)**

*   You provision an EC2 instance.
*   You install and configure PostgreSQL.
*   You set up users, permissions, and tune performance.
*   You are responsible for applying PostgreSQL patches and OS updates.
*   You need to configure backups and a disaster recovery plan.
*   You must monitor CPU, memory, disk I/O, and PostgreSQL-specific metrics.
*   Scaling requires migrating to a larger instance or setting up replication manually.

**Option 2: Provider-Managed Database (e.g., AWS RDS for PostgreSQL)**

*   You choose the instance size, storage, and engine version.
*   The cloud provider provisions the database instance and handles OS management.
*   PostgreSQL is pre-installed and configured.
*   The provider automatically applies patches and updates during maintenance windows.
*   Automated backups are enabled by default, with easy restore options.
*   Basic performance metrics are available through the provider's console.
*   Scaling can be done with a few clicks or API calls.

In this scenario, choosing AWS RDS significantly reduces your operational burden for managing the database.

## Practice Task

For a hypothetical new microservice that requires persistent storage:

1.  Identify at least three specific operational tasks you would need to perform if you were to self-manage a traditional relational database on a virtual machine.
2.  For each of those tasks, describe how a provider-managed relational database service (like Azure SQL Database or Google Cloud SQL) would reduce or eliminate your responsibility.

## Self-Check Questions

1.  What is the primary benefit of choosing a provider-managed service in terms of operational burden?
2.  When might you consider a self-managed approach despite the increased operational burden?
3.  List two examples of operational tasks that are typically handled by cloud providers for their managed services.

## Supports

- [[skills/computing/systems-infrastructure/cloud-platforms/cloud-infrastructure/cloud-native-application-architecture/microskills/operational-burden|Operational Burden]]
