---
type: "medium"
title: "Selecting Sensible Resources for Your API"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/software-engineering/backend-development/restful-api/microskills/resource-boundary-selection|resource-boundary-selection]]"
related-skills:
  - "[[skills/computing/software-engineering/backend-development/restful-api/restful-api|restful-api]]"
learning-time-in-minutes: 4
---
# Selecting Sensible Resources for Your API

When designing a RESTful API, the first crucial step is to identify and define your **resources**. Resources are the fundamental building blocks of your API. They represent the core "things" or concepts in your problem domain that your API will manage. Choosing good resource boundaries is key to creating an API that is understandable, maintainable, and easy for clients to use.

## What are Resources?

Think of resources as nouns. If you were to describe your application's data and functionality, what are the key entities you'd talk about?

*   **Examples of potential resources:**
    *   A `User` in a social media app
    *   A `Product` in an e-commerce system
    *   An `Order` in a retail application
    *   A `Document` in a file storage service
    *   A `Booking` in a travel platform

## The Importance of Resource Boundaries

The way you define your resources directly impacts how you'll structure your API's URLs (routes) and how clients will interact with your data. Poorly defined resources can lead to:

*   **Complex URLs:** Making it hard to understand what data is being accessed.
*   **Over-fetching or under-fetching data:** Clients having to make multiple requests to get the information they need, or receiving more data than they require.
*   **Difficult to extend:** Making it challenging to add new features or related data later on.

## Identifying Resources

To choose sensible resources, start by thinking about the core entities and their relationships within your problem domain.

### Step 1: Brainstorm Core Entities

List out all the key nouns that represent data or concepts in your domain. Don't worry about relationships yet, just get them down.

**Example Domain: A simple online bookstore**

*   Books
*   Authors
*   Publishers
*   Customers
*   Orders
*   Reviews

### Step 2: Refine and Group Entities

Look at your brainstormed list. Can some entities be grouped? Are some entities better represented as attributes of another resource?

*   **`Books`**: This seems like a strong primary resource.
*   **`Authors`**: Authors are distinct but have a relationship with books. We might want to treat `Authors` as a separate resource.
*   **`Publishers`**: Similar to authors, publishers are separate entities related to books. They can be a resource.
*   **`Customers`**: This is a clear resource for user management.
*   **`Orders`**: This is a distinct transactional resource.
*   **`Reviews`**: Reviews are closely tied to `Books` and potentially `Customers`. This is a good candidate for a **sub-resource** or a **nested resource**.

### Step 3: Consider Relationships and Cardinality

How do these entities relate to each other?

*   A `Book` can have one or many `Authors`.
*   A `Book` is published by one `Publisher`.
*   A `Customer` can place many `Orders`.
*   An `Order` can contain many `Books`.
*   A `Book` can have many `Reviews`.
*   A `Customer` can write many `Reviews`.

### Step 4: Define Resource Boundaries (The "Resourceful" Approach)

The goal is to find boundaries that make sense and are easy to manage.

#### Independent Resources

These are top-level resources that can exist on their own or have significant independent functionality.

*   `Book`
*   `Author`
*   `Publisher`
*   `Customer`
*   `Order`

#### Sub-Resources (or Nested Resources)

These are resources that are logically contained within another resource. They often represent a collection of items related to the parent resource, or a specific aspect of the parent.

*   **`Reviews` for a `Book`**: It makes sense to access reviews *of* a specific book. We can represent this as a sub-resource of `Book`.
*   **`Orders` for a `Customer`**: A customer's orders are a collection of items belonging to that customer.

### Step 5: Decide on Naming Conventions

Use plural nouns for resource collections and singular nouns for individual resource instances.

*   Collection of Books: `/books`
*   A specific Book: `/books/{bookId}`
*   Collection of Authors: `/authors`
*   A specific Author: `/authors/{authorId}`
*   Reviews for a specific book: `/books/{bookId}/reviews`
*   Orders for a specific customer: `/customers/{customerId}/orders`

### Common Pitfalls and How to Avoid Them

*   **Overly granular resources:** Breaking down concepts too much. For example, having a separate `BookTitle` resource from a `BookAuthorMapping` resource might be overly complicated. Stick to natural groupings.
*   **Treating actions as resources:** Resources should represent *things*, not *actions*. `GET /books/{bookId}/publish` is not a good resource definition. Instead, you might have a `POST` request to a command-like endpoint or a state change on the `Book` resource itself.
*   **Including too much in one resource:** If a resource becomes too large and complex, it might be a sign that it should be broken down. For example, if `User` resource includes detailed `OrderHistory`, `PaymentMethods`, and `ShippingAddresses`, you might consider `Orders`, `PaymentMethods`, and `Addresses` as separate, potentially nested, resources.
*   **Confusing attributes with resources:** An author's name is an *attribute* of a book, not a separate resource.

By carefully considering your domain and applying these principles, you can define resource boundaries that lead to a well-structured and effective RESTful API.

## Supports

- [[skills/computing/software-engineering/backend-development/restful-api/microskills/resource-boundary-selection|Resource boundary selection]]
