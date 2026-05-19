---
type: "medium"
title: "Consistency with HTTP Semantics"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/web-and-design/backend-api/restful-api/microskills/consistency-with-http-semantics|Consistency with HTTP semantics]]"
---
# Consistency with HTTP Semantics

When modeling RESTful APIs, using HTTP semantics correctly is crucial for building predictable and understandable systems. This means aligning your API's operations with the appropriate HTTP methods and status codes. This lesson focuses on how to apply these semantics to your problem domain.

## The Importance of HTTP Semantics

HTTP (Hypertext Transfer Protocol) is the foundation of the web. RESTful APIs leverage its existing structure and conventions to provide a standardized way of interacting with resources. By adhering to these conventions:

*   **Predictability:** Developers consuming your API can anticipate how different actions will behave.
*   **Interoperability:** Your API becomes easier to integrate with other systems and tools that understand HTTP.
*   **Maintainability:** Consistent use of semantics makes your API easier to understand and maintain over time.

## HTTP Methods: The Verbs of Your API

HTTP methods (often called verbs) define the action to be performed on a resource. The most common ones for RESTful APIs are:

*   **GET:** Retrieves a representation of a resource. It should be idempotent (multiple identical requests have the same effect as a single request) and safe (doesn't change the server's state).
    *   *Example:* Fetching details of a specific user.
*   **POST:** Submits data to be processed to a specified resource, often resulting in a change in state or side effects. It's not necessarily idempotent.
    *   *Example:* Creating a new user account.
*   **PUT:** Replaces all current representations of the target resource with the request payload. It's idempotent.
    *   *Example:* Updating all details of a specific user.
*   **PATCH:** Applies partial modifications to a resource. It's not necessarily idempotent.
    *   *Example:* Updating only a user's email address.
*   **DELETE:** Deletes a specified resource. It's idempotent.
    *   *Example:* Removing a user account.

### Applying Methods to Your Problem Domain

Consider a simple "Product Catalog" problem domain.

*   **Resources:** `products`, `categories`

Let's map operations to methods:

*   **Get all products:** `GET /products`
*   **Get a specific product (e.g., product with ID 123):** `GET /products/123`
*   **Create a new product:** `POST /products`
*   **Update an entire product (e.g., product with ID 123):** `PUT /products/123`
*   **Partially update a product (e.g., change price of product with ID 123):** `PATCH /products/123`
*   **Delete a product (e.g., product with ID 123):** `DELETE /products/123`

## HTTP Status Codes: The Responses from Your API

HTTP status codes provide information about the outcome of a request. They are grouped into five classes:

| Class | Range | Description                                     |
| :---- | :---- | :---------------------------------------------- |
| 1xx   | 100-199 | Informational                                   |
| 2xx   | 200-299 | Success                                         |
| 3xx   | 300-399 | Redirection                                     |
| 4xx   | 400-499 | Client Error                                    |
| 5xx   | 500-599 | Server Error                                    |

For RESTful APIs, the most commonly used are in the 2xx, 3xx, 4xx, and 5xx ranges.

### Key Status Codes for Success (2xx)

*   **200 OK:** The request has succeeded. This is the standard response for most successful `GET`, `PUT`, and `PATCH` requests.
*   **201 Created:** The request has been fulfilled and resulted in a new resource being created. This is typically used for successful `POST` requests. The response headers should include a `Location` header pointing to the new resource.
*   **204 No Content:** The server has successfully fulfilled the request and there is no new content to send back. This is often used for successful `DELETE` requests or `PUT`/`PATCH` requests where the client doesn't need to see the updated resource representation.

### Key Status Codes for Client Errors (4xx)

*   **400 Bad Request:** The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).
*   **401 Unauthorized:** The client must authenticate itself to get the requested response.
*   **403 Forbidden:** The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401, the client's identity *is* known to the server.
*   **404 Not Found:** The server can't find the requested resource.
*   **405 Method Not Allowed:** The request method is known by the server but is not supported by the target resource. The response MUST include an `Allow` header field containing a list of the target resource's currently supported methods.
*   **409 Conflict:** Indicates a request conflict with the current state of the target resource.

### Key Status Codes for Server Errors (5xx)

*   **500 Internal Server Error:** The server encountered an unexpected condition that prevented it from fulfilling the request.
*   **503 Service Unavailable:** The server is currently unable to handle the request due to a temporary overloading or maintenance of the server.

### Applying Status Codes to Your Problem Domain (Product Catalog)

Let's revisit the Product Catalog and add status codes:

*   **GET /products/123**
    *   Success: `200 OK` with product details.
    *   Not Found: `404 Not Found` if product ID 123 doesn't exist.
*   **POST /products**
    *   Success: `201 Created` with the new product details and a `Location` header like `/products/456`.
    *   Bad Request: `400 Bad Request` if the request body is missing required fields or malformed.
*   **PUT /products/123**
    *   Success: `200 OK` or `204 No Content` if the update is successful.
    *   Not Found: `404 Not Found` if product ID 123 doesn't exist.
    *   Bad Request: `400 Bad Request` if the request body is invalid.
*   **DELETE /products/123**
    *   Success: `204 No Content`.
    *   Not Found: `404 Not Found` if product ID 123 doesn't exist.

## Common Pitfalls to Avoid

*   **Using GET for actions that modify state:** This violates the "safe" nature of GET and can lead to unexpected side effects.
*   **Overusing POST for everything:** While flexible, it obscures the intent of operations that could be clearly mapped to `PUT`, `PATCH`, or `DELETE`.
*   **Returning 200 OK for errors:** Always use appropriate 4xx or 5xx status codes to indicate failure.
*   **Not providing informative error bodies for 4xx/5xx responses:** While not strictly required by HTTP, it's good practice to include a JSON body with details about the error.
*   **Ignoring the `Location` header for `201 Created`:** Clients expect this header to know where to find the newly created resource.

By consistently applying HTTP methods and status codes, you build more robust, predictable, and developer-friendly RESTful APIs.

## Supports

- [[skills/web-and-design/backend-api/restful-api/microskills/consistency-with-http-semantics|Consistency with HTTP semantics]]
