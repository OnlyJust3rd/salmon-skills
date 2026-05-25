---
type: "medium"
title: "Mapping Domain Entities to Resource Identifiers"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/software-engineering/backend-development/restful-api/microskills/resource-identifiers|resource-identifiers]]"
related-skills:
  - "[[skills/computing/software-engineering/backend-development/restful-api/restful-api|restful-api]]"
learning-time-in-minutes: 3
---
# Mapping Domain Entities to Resource Identifiers

In the world of RESTful APIs, everything revolves around **resources**. Think of a resource as any piece of information or service that your API can provide access to. This could be a user, a product, an order, a document, or even a collection of these items.

To interact with these resources, we need a way to uniquely identify them. This is where **resource identifiers**, also known as **URLs (Uniform Resource Locators)** or **URIs (Uniform Resource Identifiers)**, come into play. They act like addresses for our resources on the web.

## The Concept: Domain Entities as Resources

Before we dive into how to create these identifiers, it's crucial to understand the connection between our real-world or application's concepts (domain entities) and how they are represented as resources in an API.

*   **Domain Entity:** This is a noun that represents something important in your application's logic. Examples include `Customer`, `Product`, `Order`, `Article`, `Comment`.
*   **Resource:** In a REST API, each domain entity is typically represented as a resource.
*   **Resource Identifier (URL Path):** This is the specific path within the API that points to a particular instance or collection of a resource.

The core principle is to map these domain entities to logical and predictable URL paths.

## Principles for Naming Resources

When designing your API, the naming of your resources is a critical step. Good naming makes your API intuitive and easy to use.

1.  **Use Nouns, Not Verbs:** Resource identifiers should represent the *thing* itself, not an action performed on it.
    *   **Good:** `/users`, `/products`, `/orders`
    *   **Bad:** `/getUsers`, `/createProduct`, `/deleteOrder`

2.  **Pluralize Collections:** When referring to a collection of resources, use the plural form of the noun.
    *   `/users` represents a collection of all users.
    *   `/products` represents a collection of all products.

3.  **Use Singular for Specific Instances:** To identify a single, specific resource within a collection, append a unique identifier (like an ID) to the collection path.
    *   `/users/123` represents a specific user with the ID `123`.
    *   `/products/abc-def` represents a specific product with a unique identifier `abc-def`.

4.  **Hierarchical Relationships:** If resources have a natural hierarchy, reflect that in the URL. For example, if comments belong to articles, you might structure it like this:
    *   `/articles/456/comments` represents all comments for the article with ID `456`.
    *   `/articles/456/comments/789` represents a specific comment (ID `789`) on article `456`.

5.  **Keep it Simple and Consistent:** Avoid overly complex paths. Stick to a consistent naming convention across your entire API. Lowercase letters are generally preferred.

## Mapping Example

Let's consider a simple e-commerce application.

| Domain Entity | Resource Representation | Example Resource Identifier (Collection) | Example Resource Identifier (Specific Instance) |
| :------------ | :---------------------- | :--------------------------------------- | :---------------------------------------------- |
| Customer      | `Customer` Resource     | `/customers`                             | `/customers/501`                                |
| Product       | `Product` Resource      | `/products`                              | `/products/SKU9876`                             |
| Order         | `Order` Resource        | `/orders`                                | `/orders/ORD112233`                             |
| Cart          | `Cart` Resource         | `/carts`                                 | `/carts/user_abc`                               |

Notice how the resource identifiers are nouns, plural for collections, and include unique identifiers for specific items.

## Common Mistakes to Avoid

*   **Using verbs:** As mentioned, `POST /createNewUser` is less RESTful than `POST /users`.
*   **Inconsistent naming:** Mixing singular and plural for collections, or using different casing conventions, makes the API harder to understand.
*   **Overly deep nesting:** While hierarchy is good, excessively deep paths can become unmanageable. Consider if a resource truly belongs *under* another in terms of direct identification. For instance, `/users/123/orders/456/items/789` might be too granular. A better approach for items *within* an order might be `/orders/456/items`.
*   **Including file extensions:** URLs like `/users/123.json` are generally discouraged in modern REST APIs. The API should indicate the response format (e.g., via `Content-Type` headers), not rely on the URL.

By understanding how to map your domain entities to clear, consistent, and logical resource identifiers, you lay the foundation for a well-structured and easily navigable RESTful API. This is the first step in making your API understandable and usable for developers.

## Supports

- [[skills/computing/software-engineering/backend-development/restful-api/microskills/resource-identifiers|Resource identifiers]]
