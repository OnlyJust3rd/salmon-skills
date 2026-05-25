---
type: "medium"
title: "Understanding Request and Response Objects in Express.js"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/software-engineering/backend-development/express-js/microskills/request-and-response-objects|request-and-response-objects]]"
learning-time-in-minutes: 3
---
# Understanding Request and Response Objects in Express.js

When building web applications with Express.js, understanding how requests and responses are handled is fundamental. Express.js provides convenient objects that allow your server to interact with clients and send back information. These are the `request` (often abbreviated as `req`) and `response` (often abbreviated as `res`) objects.

## The Request Object (`req`)

The `request` object represents the incoming client request. It's packed with information about who is asking for what, and how they're asking for it.

### Key Properties of the Request Object

*   **Headers**: These are metadata about the request. They tell your server about the client's browser, the type of content they expect, and more.
    *   `req.headers`: This is an object containing all the headers sent by the client.
        ```javascript
        app.get('/headers', (req, res) => {
          console.log(req.headers);
          res.send('Check your console for request headers!');
        });
        ```
        If a client sends a request with a `User-Agent` header like `Mozilla/5.0...`, `req.headers['user-agent']` will contain that string.
    *   Common headers you might access include `Content-Type`, `Authorization`, and `Accept`.

*   **Body**: This is the data sent by the client in the request's payload. This is most common for `POST`, `PUT`, and `PATCH` requests, often containing form data or JSON.
    *   To access the request body, you typically need middleware like `express.json()` or `express.urlencoded()`.
        ```javascript
        const express = require('express');
        const app = express();

        // Middleware to parse JSON request bodies
        app.use(express.json());
        // Middleware to parse URL-encoded request bodies
        app.use(express.urlencoded({ extended: true }));

        app.post('/data', (req, res) => {
          console.log(req.body); // The parsed request body
          res.send('Data received!');
        });
        ```
        If a client sends a JSON payload like `{"name": "Alice", "age": 30}`, `req.body` will be `{ name: 'Alice', age: 30 }`.

*   **Parameters**: These are values extracted from the URL path.
    *   `req.params`: This object contains route parameters defined in your routes.
        ```javascript
        app.get('/users/:userId', (req, res) => {
          const userId = req.params.userId;
          res.send(`Fetching user with ID: ${userId}`);
        });
        ```
        If a client requests `/users/123`, `req.params.userId` will be `'123'`.

*   **Query String**: These are parameters appended to the URL after a `?`.
    *   `req.query`: This object contains query string parameters.
        ```javascript
        app.get('/search', (req, res) => {
          const searchTerm = req.query.q;
          res.send(`Searching for: ${searchTerm}`);
        });
        ```
        If a client requests `/search?q=express+js`, `req.query.q` will be `'express js'`.

## The Response Object (`res`)

The `response` object is what your server uses to send data back to the client. It's your toolkit for constructing the HTTP response.

### Key Properties and Methods of the Response Object

*   **Status**: This indicates the success or failure of the request.
    *   `res.statusCode`: You can get the current status code.
    *   `res.status(statusCode)`: This method allows you to set the HTTP status code. It's chainable with other response methods.
        ```javascript
        app.get('/protected', (req, res) => {
          const isAuthenticated = false; // Assume user is not authenticated

          if (!isAuthenticated) {
            return res.status(401).send('Unauthorized'); // Set status to 401 and send message
          }
          res.send('Welcome!');
        });
        ```
        Common status codes include `200` (OK), `201` (Created), `400` (Bad Request), `404` (Not Found), and `500` (Internal Server Error).

*   **Sending Data**: Express provides several methods to send data back to the client.
    *   `res.send(body)`: Sends the HTTP response. The `Content-Type` header is set automatically based on the `body` type. It can send strings, objects, or Buffers.
        ```javascript
        app.get('/message', (req, res) => {
          res.send('Hello from the server!');
        });
        ```
    *   `res.json(body)`: Sends a JSON response. This method automatically sets the `Content-Type` header to `application/json`. It's specifically designed for sending JavaScript objects.
        ```javascript
        app.get('/user', (req, res) => {
          const userData = {
            id: 1,
            name: 'Bob',
            email: 'bob@example.com'
          };
          res.json(userData); // Sends JSON: {"id":1,"name":"Bob","email":"bob@example.com"}
        });
        ```
    *   `res.sendFile(path, [options], [callback])`: Sends a file.
        ```javascript
        app.get('/index.html', (req, res) => {
          res.sendFile(__dirname + '/index.html');
        });
        ```

*   **Headers**: You can set custom response headers.
    *   `res.set(field, [value])` or `res.setHeader(field, [value])`: Sets a response header.
    *   `res.get(field)`: Gets a response header.
        ```javascript
        app.get('/custom-header', (req, res) => {
          res.set('X-Custom-Info', 'This is my custom header');
          res.send('Response with a custom header!');
        });
        ```

### The HTTP Pipeline and Request/Response Objects

In Express.js, requests travel through a series of **middleware** functions before reaching the final route handler. This sequence is often referred to as the **HTTP pipeline** or **middleware stack**.

Each middleware function has access to the `req` and `res` objects. They can:
1.  Execute any code.
2.  Make changes to the `req` and `res` objects.
3.  End the request-response cycle (by sending a response).
4.  Call the next middleware function in the stack using `next()`.

The `req` object is populated as the request moves down the pipeline. The `res` object is used to build the response that travels back up the pipeline. Middleware functions that parse the body, authenticate users, or log requests all interact with these objects.

Understanding how `req` and `res` are populated and modified throughout this pipeline is key to building robust and functional Express.js applications.

## Supports

- [[skills/computing/software-engineering/backend-development/express-js/microskills/request-and-response-objects|Request and response objects]]
