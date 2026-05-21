---
type: "medium"
title: "Components and Connectors: The Building Blocks of Software Architecture"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/hardware-embedded/electronics-embedded/software-architecture/microskills/components-and-connectors-vocabulary|components-and-connectors-vocabulary]]"
---
# Components and Connectors: The Building Blocks of Software Architecture

In software architecture, we often talk about how a system is put together. Just like a building needs bricks, beams, and wires, software systems are made of different parts that work together. Understanding the basic terms for these parts is the first step in defining and discussing software architecture. This lesson will introduce you to the fundamental vocabulary of **components** and **connectors**.

## What are Components?

Think of a component as an independent, interchangeable part of your software system. It's a self-contained unit that performs a specific function or set of functions. Components are the "things" that do the work in your software.

*   **Key Characteristics:**
    *   **Encapsulation:** Components hide their internal details. Other parts of the system interact with them through a defined interface, without needing to know *how* they work internally.
    *   **Reusability:** Well-designed components can be used in different parts of the same system or even in entirely different systems.
    *   **Replaceability:** You should be able to swap out one component for another (as long as they have the same interface) without breaking the rest of the system.

### Examples of Components

Let's look at some common examples:

*   **A User Interface (UI) Module:** This component handles everything related to what the user sees and interacts with. It might have buttons, forms, and display areas.
*   **A Database Access Layer:** This component is responsible for all communication with the database. It handles queries, data retrieval, and data storage.
*   **An Authentication Service:** This component manages user logins, passwords, and permissions.
*   **A Payment Processing Module:** This component handles transactions, credit card processing, and security for payments.

## What are Connectors?

Components don't exist in isolation. They need ways to communicate with each other, to send data back and forth, and to signal events. These communication pathways and mechanisms are called **connectors**. Connectors define how components interact.

*   **Key Characteristics:**
    *   **Enable Interaction:** They are the glue that holds the components together.
    *   **Define Protocols:** They often dictate the rules or protocols for communication.
    *   **Facilitate Data Flow:** They move data between components.

### Examples of Connectors

Here are some common types of connectors:

*   **Function/Method Calls:** This is a very common connector in many programming languages. When one component calls a function or method in another component, that's a connector.
*   **Message Queues:** Components can send messages to a queue, and other components can pick them up from the queue. This is a good way for components to communicate asynchronously (without waiting for an immediate response).
*   **Remote Procedure Calls (RPC):** This allows a component to execute a procedure in a different address space (often on a different machine) as if it were local.
*   **HTTP/REST APIs:** When components communicate over a network using web protocols, like making requests to a RESTful API, that's a connector.
*   **Event Buses:** Components can publish events to an event bus, and other components can subscribe to specific events.

## Interfaces: The Gateway to Components

How do components know *how* to connect to each other? They use **interfaces**. An interface is like a contract that defines the services a component offers and the operations that can be performed on it. It specifies what functions or methods are available, what parameters they take, and what they return, without revealing the internal implementation.

Think of an electrical outlet. The outlet is the interface. You know you can plug in a device, and it will receive power. You don't need to know about the wiring inside the wall, just how to use the outlet.

*   **Components** are the functional units.
*   **Connectors** are the communication pathways.
*   **Interfaces** are the defined points of interaction between components, accessed via connectors.

## Putting It Together: A Simple Scenario

Imagine a basic online store.

*   **Component 1: `ProductCatalog`**
    *   **Responsibility:** Stores and provides information about products.
    *   **Interface:** Might have methods like `getProduct(productId)` and `searchProducts(query)`.

*   **Component 2: `OrderService`**
    *   **Responsibility:** Handles creating and managing customer orders.
    *   **Interface:** Might have methods like `createOrder(cartItems)` and `getOrderStatus(orderId)`.

*   **Connector: Function Call**
    *   When a user adds an item to their cart, the `CartComponent` (another component) might need to get product details from `ProductCatalog`. It would use a function call (a connector) to `getProduct(productId)` on the `ProductCatalog`'s interface.

*   **Connector: HTTP/REST API**
    *   If the `OrderService` needs to process a payment, it might communicate with a separate `PaymentGateway` component (or an external service) using a REST API over HTTP. This API is the connector.

## Why is this Vocabulary Important?

Understanding these basic terms—components, connectors, and interfaces—is crucial for:

*   **Describing** how a software system is organized.
*   **Communicating** architectural decisions with other developers.
*   **Designing** flexible and maintainable systems.
*   **Identifying** potential bottlenecks or areas for improvement.

As you delve deeper into software architecture, you'll encounter more specialized terms, but these fundamental concepts of components and connectors will remain your bedrock.

## Supports

- [[skills/hardware-embedded/electronics-embedded/software-architecture/microskills/components-and-connectors-vocabulary|Components and Connectors Vocabulary]]
