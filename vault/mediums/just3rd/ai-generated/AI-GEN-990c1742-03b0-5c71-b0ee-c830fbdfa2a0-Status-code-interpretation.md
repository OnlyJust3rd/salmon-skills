---
type: "medium"
title: "Understanding API Status Codes: A Quick Guide"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/web-and-design/backend-api/restful-api/microskills/status-code-interpretation|Status code interpretation]]"
---
# Understanding API Status Codes: A Quick Guide

When you interact with a RESTful API, the API sends back a response. This response tells you if your request was successful, if there was an error, or if something unexpected happened. A crucial part of this response is the HTTP status code. Think of it as a shorthand message from the API about the outcome of your request.

For this micro-skill, we'll focus on understanding the most common status code families: **2xx**, **4xx**, and **5xx**. These families give you a clear indication of whether the API did what you asked it to, if you made a mistake, or if the API itself has a problem.

## The "It Worked!" Codes: 2xx Success

The **2xx** status codes are the ones you want to see! They indicate that your request was successfully received, understood, and accepted by the API.

*   **200 OK**: This is the most common success code. It means your request was processed successfully, and the API is sending you the data you asked for.
    *   **Example**: You request details about a specific user (`GET /users/123`). A `200 OK` response means the API found user 123 and is returning their information.

*   **201 Created**: This code is used when you've successfully created a new resource on the server.
    *   **Example**: You `POST` data to create a new product (`POST /products`). A `201 Created` response means the product was successfully added to the database, and the response might even include the URL for the newly created product.

*   **204 No Content**: This means your request was successful, but there's no additional information to send back in the response body.
    *   **Example**: You send a `DELETE` request to remove a resource (`DELETE /items/456`). A `204 No Content` response signifies that the item was successfully deleted, but there's no data to return about it.

**Key Takeaway for 2xx:** Your request was a success! The API understood and acted upon it as expected.

## The "Your Fault" Codes: 4xx Client Errors

The **4xx** status codes signal that there was a problem with your request itself. The API received it, but it couldn't process it due to an error on your end.

*   **400 Bad Request**: This is a general client-side error. It means the API couldn't understand your request due to malformed syntax, invalid request message framing, or deceptive request routing.
    *   **Example**: You send a `POST` request to create a user, but you forget to include a required field like `email` in your JSON payload. A `400 Bad Request` tells you something is wrong with the data you sent.

*   **401 Unauthorized**: This code means your request requires authentication, but you haven't provided any or your credentials are invalid. You need to log in or provide valid API keys.
    *   **Example**: You try to access a private user profile without being logged in. The API might respond with `401 Unauthorized`.

*   **403 Forbidden**: This code is similar to 401, but it means you are authenticated, yet you don't have the necessary permissions to perform the requested action.
    *   **Example**: You are logged in as a regular user, but you try to access an administrative endpoint to delete another user. The API might return `403 Forbidden`.

*   **404 Not Found**: This is one of the most common client errors. It means the API couldn't find the resource you requested. The URL might be incorrect, or the resource simply doesn't exist.
    *   **Example**: You try to fetch details for a user with an ID that doesn't exist (`GET /users/9999`). The API will likely respond with `404 Not Found`.

*   **405 Method Not Allowed**: This indicates that the HTTP method you used (e.g., `GET`, `POST`, `PUT`, `DELETE`) is not supported for the requested resource.
    *   **Example**: You try to send a `DELETE` request to a resource that only supports `GET` and `POST`. The API would return `405 Method Not Allowed`.

**Key Takeaway for 4xx:** The API understood your request but found an issue with *how* you asked for it or *what* you asked for. You need to correct your request.

## The "API's Problem" Codes: 5xx Server Errors

The **5xx** status codes indicate that the API encountered an error on its side while trying to fulfill your request. This is not your fault; something is wrong with the server.

*   **500 Internal Server Error**: This is a generic error message that means something went wrong on the server, and the server couldn't be more specific about the problem.
    *   **Example**: A bug in the API's code causes an unexpected exception when processing your request.

*   **503 Service Unavailable**: This code means the server is currently unable to handle the request. This could be due to overloading or scheduled maintenance.
    *   **Example**: The API server is experiencing extremely high traffic, and it temporarily shuts down to prevent crashing.

**Key Takeaway for 5xx:** The problem is with the API server itself. You can't fix this directly. You should typically retry the request later or contact the API provider.

By understanding these status code families, you can quickly diagnose issues with your API interactions and build more robust applications.

## Supports

- [[skills/web-and-design/backend-api/restful-api/microskills/status-code-interpretation|Status code interpretation]]
