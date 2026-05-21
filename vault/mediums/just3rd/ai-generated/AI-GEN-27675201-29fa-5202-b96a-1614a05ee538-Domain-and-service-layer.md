---
type: "medium"
title: "The Domain and Service Layers: Where Business Logic Lives"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/web-and-design/backend-api/backend-web-api-concept/microskills/domain-and-service-layer|domain-and-service-layer]]"
---
# The Domain and Service Layers: Where Business Logic Lives

In backend web APIs, organizing code is crucial for maintainability and scalability. We've discussed how HTTP adapters handle incoming requests and outgoing responses. Now, let's dive into the layers responsible for processing that information: the Domain Layer and the Service Layer. Understanding where your business rules reside is key to designing robust APIs.

## What are the Domain and Service Layers?

*   **Domain Layer:** This is the heart of your application's business logic. It contains the core entities, their relationships, and the rules that govern how they behave. Think of it as the "what" and "how" of your business. It should be independent of any specific technology or framework.
*   **Service Layer:** This layer acts as an orchestrator. It uses the Domain Layer to fulfill requests. When an HTTP adapter receives a request, it typically calls a method in the Service Layer. The Service Layer then interacts with the Domain Layer (and potentially the data access layer) to perform the requested operation. It’s the "command center" that translates API requests into domain actions.

## The Relationship to HTTP Adapters

Imagine you're building an e-commerce API.

*   **HTTP Adapter (e.g., a controller):** Receives a `POST /orders` request with order details in the JSON body.
*   **Service Layer (e.g., `OrderService`):** Receives the request data from the adapter. It might then call methods like `createOrder(customerDetails, items)` on an `Order` domain object. The service layer handles validation, potentially orchestrating multiple domain object interactions.
*   **Domain Layer (e.g., `Order` entity, `Product` entity, `InventoryManager`):** Contains the logic for calculating prices, checking inventory availability, applying discounts, and ensuring the order adheres to business rules. For instance, the `Order` domain object might have a method `applyDiscount(discountCode)` that enforces rules about which discounts are valid for specific products or customers. The `InventoryManager` domain object would handle logic for decrementing stock.

The key is that the business rules (e.g., "a customer can only order a maximum of 5 items per transaction" or "discount codes expire after 30 days") live within the Domain Layer. The Service Layer coordinates these domain operations based on incoming API requests. The HTTP adapter is only concerned with translating the web request/response format; it doesn't contain the core business logic.

## Practical Scenario

Let's say you have an API endpoint to update a user's profile.

*   **HTTP Adapter:** Receives a `PUT /users/{id}` request with updated profile data.
*   **Service Layer (`UserService`):** Receives the `id` and the updated data. It might call `userService.updateUserProfile(userId, profileData)`. This service method would then:
    1.  Fetch the existing user from the data access layer.
    2.  Call a method on the `User` domain object (e.g., `user.updateProfile(profileData)`).
    3.  The `User` domain object's `updateProfile` method might contain validation rules, such as ensuring an email address format is valid or that a username is unique.
    4.  If validation passes, the service layer would save the updated user back to the data access layer.

The business rule about email format validation lives within the `User` domain object itself, not in the HTTP controller or the `UserService` directly.

## Practice Task

Consider a simple task management API. You have an endpoint to mark a task as "completed".

Describe the responsibilities of the HTTP adapter, the Service Layer, and the Domain Layer in processing this request. What specific business rules might reside in the Domain Layer?

## Self-Check Questions

1.  Where do the core business rules of your application typically reside?
2.  What is the primary role of the Service Layer in relation to the Domain Layer and HTTP adapters?
3.  If you needed to add a new validation rule for user email addresses, in which layer would you most likely implement it?

## Supports

- [[skills/web-and-design/backend-api/backend-web-api-concept/microskills/domain-and-service-layer|Domain and service layer]]
