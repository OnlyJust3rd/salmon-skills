---
type: "medium"
title: "Understanding HTTP Message Structure"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/systems/networking/application-layer/microskills/http-message-structure|http-message-structure]]"
---
# Understanding HTTP Message Structure

HTTP (Hypertext Transfer Protocol) is the foundation of data communication on the World Wide Web. When your browser requests a webpage or sends data, it's using HTTP messages. Understanding their structure is key to understanding how the web works.

## What is an HTTP Message?

An HTTP message is a piece of data sent between a client (like your web browser) and a server. There are two main types:

1.  **Request Messages**: Sent by the client to the server, asking for something (e.g., a webpage, an image).
2.  **Response Messages**: Sent by the server back to the client, providing the requested information or an error.

Both request and response messages share a similar structure, consisting of three parts:

*   **Start Line**: This is the first line and tells the server what the client wants (for requests) or the status of the request (for responses).
*   **Headers**: These are key-value pairs that provide additional information about the message, the client, or the server.
*   **Body**: This contains the actual data being sent (e.g., the content of a webpage, or data submitted in a form). The body is optional for some message types.

## Structure Breakdown

Let's look at the components in more detail:

### 1. Start Line

*   **Request Start Line**:
    ```
    METHOD /path HTTP/version
    ```
    *   `METHOD`: The action the client wants to perform (e.g., `GET`, `POST`, `PUT`, `DELETE`).
    *   `/path`: The specific resource being requested on the server (e.g., `/index.html`, `/images/logo.png`).
    *   `HTTP/version`: The version of HTTP being used (e.g., `HTTP/1.1`, `HTTP/2`).

*   **Response Start Line**:
    ```
    HTTP/version STATUS_CODE DESCRIPTION
    ```
    *   `HTTP/version`: The version of HTTP used.
    *   `STATUS_CODE`: A three-digit number indicating the outcome of the request (e.g., `200` for OK, `404` for Not Found, `500` for Internal Server Error).
    *   `DESCRIPTION`: A short text explanation of the status code (e.g., `OK`, `Not Found`).

### 2. Headers

Headers provide metadata. They are crucial for the communication to function correctly. Some common headers include:

*   `Host`: The domain name of the server.
*   `User-Agent`: Information about the client (browser, OS).
*   `Accept`: What content types the client can understand.
*   `Content-Type`: The media type of the message body.
*   `Content-Length`: The size of the message body in bytes.

### 3. Body

The body carries the actual data. For a `GET` request, there's typically no body. For `POST` requests, the body contains the data being submitted (like form data). For response messages, the body contains the requested resource (HTML, JSON, image data, etc.).

## Practical Example: Fetching a Webpage

Imagine you type `https://www.example.com` into your browser. Here's a simplified view of the HTTP request and response:

**Client Request:**

```
GET / HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8
```

**Server Response:**

```
HTTP/1.1 200 OK
Content-Type: text/html; charset=UTF-8
Content-Length: 1256
Date: Tue, 20 Jul 2024 10:00:00 GMT

<!DOCTYPE html>
<html>
<head>
    <title>Example Domain</title>
</head>
<body>
    <h1>Example Domain</h1>
    <p>This is a sample page.</p>
</body>
</html>
```

Notice how the start line indicates the action (`GET`) and the resource (`/`), and the response indicates success (`200 OK`) along with the content type.

## Practice Task

Examine the network traffic in your web browser's developer tools (usually by pressing F12). Navigate to a website and look at the "Network" tab. Select one of the requests (e.g., the main HTML document) and identify its request method, path, and headers. Then, examine the response and identify its status code and Content-Type header.

## Self-Check Questions

1.  What are the three main parts of an HTTP message?
2.  What is the purpose of the `METHOD` in an HTTP request start line?
3.  What does a `200 OK` status code in an HTTP response indicate?
4.  Give an example of a header that provides metadata about the client.

## Supports

- [[skills/systems/networking/application-layer/microskills/http-message-structure|HTTP Message Structure]]
