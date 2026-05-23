---
type: "medium"
title: "Error Handling Middleware in Express.js"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/web-mobile/backend-api/express-js/microskills/error-handling-middleware|error-handling-middleware]]"
learning-time-in-minutes: 4
---
# Error Handling Middleware in Express.js

When building APIs with Express.js, errors are inevitable. These can range from client-side issues (like invalid input) to server-side problems (like database connection failures). Without a proper error handling strategy, your API can crash, return cryptic messages, or expose sensitive information. This lesson focuses on a fundamental approach: **applying basic centralized error responses using middleware**.

## Why Centralized Error Handling?

Imagine handling errors individually in every single route handler. It's repetitive and prone to inconsistencies. Centralized error handling allows you to:

*   **Maintain Consistency:** All errors are handled and formatted uniformly, providing a predictable experience for API consumers.
*   **Reduce Code Duplication:** You write error handling logic once and reuse it across your application.
*   **Improve Readability:** Your route handlers can focus on their core logic, knowing that errors will be managed elsewhere.
*   **Prevent Crashes:** Properly caught errors prevent your Node.js process from exiting.

## The Express Error Handling Middleware Signature

In Express, error handling middleware is defined like regular middleware, but it accepts an additional argument: `err`. This `err` object contains information about the error that occurred. The signature looks like this:

```javascript
app.use((err, req, res, next) => {
  // Error handling logic here
});
```

*   `err`: The error object passed from a previous middleware or route handler.
*   `req`: The request object.
*   `res`: The response object.
*   `next`: The next middleware function in the stack.

**Crucially, Express identifies this as an error handling middleware because it has four arguments (`err, req, res, next`) instead of the usual three.**

## How to Implement

You'll typically place your error handling middleware **after** all your other routes and middleware definitions. This ensures that it catches errors that occur anywhere in your application's request pipeline.

### Step 1: Triggering an Error

In your route handlers, when an error condition arises, you should either:

1.  **Throw an error:** This will cause the request to jump to the next error handling middleware.
2.  **Call `next(err)`:** This explicitly passes the error object to the error handling middleware.

**Example of triggering an error:**

```javascript
app.get('/users/:id', (req, res, next) => {
  const userId = parseInt(req.params.id, 10);

  if (isNaN(userId)) {
    // Client-side error: invalid input
    const error = new Error('Invalid user ID format.');
    error.status = 400; // Assign a status code
    return next(error); // Pass the error to the next middleware
  }

  // Logic to fetch user by ID...
  // If user not found:
  // const error = new Error(`User with ID ${userId} not found.`);
  // error.status = 404;
  // return next(error);

  res.json({ id: userId, name: 'Example User' });
});
```

### Step 2: Defining the Centralized Error Handler

Now, let's define the middleware that will catch these errors and send a standardized JSON response.

```javascript
// After all your routes and other middleware...

app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack for debugging

  // Determine the status code. Use the one provided by the error,
  // or default to 500 Internal Server Error.
  const statusCode = err.status || 500;

  res.status(statusCode).json({
    message: err.message || 'An unexpected error occurred.',
    // Optionally, include stack trace in development environments
    // stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  });
});
```

**Explanation:**

*   `console.error(err.stack)`: This is crucial for debugging. It logs the detailed error information (including the call stack) to your server's console.
*   `err.status || 500`: We check if the error object has a `status` property (which we set in our route handler for client errors) and use that. If not, it defaults to `500` (Internal Server Error), which is appropriate for unexpected server-side issues.
*   `res.status(statusCode).json(...)`: This sends the HTTP status code and a JSON payload.
*   `err.message || 'An unexpected error occurred.'`: The error message from the thrown or passed error object is used, or a generic message if no message is available.
*   Conditional `stack` property: It's good practice to only include the error stack trace in development environments to avoid exposing internal details in production.

## Example Scenario

Let's put it all together in a simplified Express app:

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // To parse JSON request bodies

// --- Route Definition ---
app.get('/items/:id', (req, res, next) => {
  const itemId = parseInt(req.params.id, 10);

  if (isNaN(itemId)) {
    const error = new Error('Invalid item ID format. Please provide a number.');
    error.status = 400; // Bad Request
    return next(error);
  }

  // Simulate finding an item
  if (itemId !== 123) {
    const error = new Error(`Item with ID ${itemId} not found.`);
    error.status = 404; // Not Found
    return next(error);
  }

  res.json({ id: itemId, name: 'Example Item' });
});

// --- Centralized Error Handling Middleware ---
// This MUST be defined AFTER all your routes
app.use((err, req, res, next) => {
  console.error(`Error: ${err.message}`);
  // Log the full stack trace for debugging purposes
  if (err.stack) {
    console.error(err.stack);
  }

  const statusCode = err.status || 500; // Default to 500 if no status is set

  res.status(statusCode).json({
    error: {
      message: err.message || 'Internal Server Error',
      // In a real application, you might only send stack in dev mode
      // stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    },
  });
});

// --- Start Server ---
app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
```

### How to Test This Example:

1.  **Valid Request:**
    `GET http://localhost:3000/items/123`
    Expected Output:
    ```json
    {
      "id": 123,
      "name": "Example Item"
    }
    ```

2.  **Invalid ID Format (Client Error):**
    `GET http://localhost:3000/items/abc`
    Expected Output:
    ```json
    {
      "error": {
        "message": "Invalid item ID format. Please provide a number."
      }
    }
    ```
    (With HTTP status code 400)

3.  **Item Not Found (Client Error):**
    `GET http://localhost:3000/items/999`
    Expected Output:
    ```json
    {
      "error": {
        "message": "Item with ID 999 not found."
      }
    }
    ```
    (With HTTP status code 404)

## Common Mistakes to Avoid

*   **Placing error middleware too early:** If your error handler is before your routes, it will never catch errors thrown by your routes.
*   **Not calling `next(err)` or throwing errors:** If an error condition occurs but isn't passed to `next` or thrown, the error handling middleware won't be invoked.
*   **Exposing too much detail in production:** Be careful not to send sensitive stack traces or internal error details to clients in a production environment.
*   **Not logging errors:** Even if you send a generic message to the client, always log the full error details on the server for debugging.

By implementing this basic centralized error handling middleware, you take a significant step towards building robust and maintainable RESTful JSON APIs with Express.js.

## Supports

- [[skills/computing/web-mobile/backend-api/express-js/microskills/error-handling-middleware|Error handling middleware]]
