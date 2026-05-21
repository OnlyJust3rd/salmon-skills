---
type: "medium"
title: "Express.js Router Configuration: Paths and HTTP Verbs"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/web-and-design/backend-api/express-js/microskills/router-configuration|router-configuration]]"
---
# Express.js Router Configuration: Paths and HTTP Verbs

When building web applications with Express.js, you need a way to direct incoming requests to the correct piece of code that handles them. This is where **router configuration** comes into play. It involves defining **route paths** and associating them with specific **HTTP verbs**.

## Understanding Route Paths

A route path is essentially a URL pattern that Express.js matches against the incoming request's URL. Think of it as an address for your server's resources.

### Simple Paths

The most basic route path is a string representing a specific URL.

**Example:**

```javascript
app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

app.get('/about', (req, res) => {
  res.send('Learn more about us.');
});
```

In this example:
*   `/` matches the root of your application.
*   `/about` matches requests to the `/about` URL.

### Path Parameters

Often, you'll need to capture parts of the URL to use as data. This is where path parameters shine. You define a parameter by placing a colon (`:`) before its name in the route path.

**Example:**

```javascript
app.get('/users/:userId', (req, res) => {
  const userId = req.params.userId;
  res.send(`Fetching information for user ID: ${userId}`);
});
```

Here, `:userId` is a path parameter. If a request comes in for `/users/123`, `req.params.userId` will be `'123'`. This is incredibly useful for fetching specific records from a database.

### Regular Expressions in Paths

For more complex matching, Express.js allows you to use regular expressions in route paths.

**Example:**

```javascript
app.get(/^\/users\/(\d+)$/, (req, res) => {
  const userId = req.params[0]; // Capture group from regex
  res.send(`Fetching information for user ID: ${userId} (regex match)`);
});
```

This example uses a regular expression to match URLs that start with `/users/` followed by one or more digits (`\d+`). The parentheses `()` create a capturing group, and the captured value can be accessed via `req.params[0]`. While powerful, simple path parameters are generally preferred for readability when possible.

## Binding to HTTP Verbs (Methods)

HTTP verbs, also known as methods, define the action that a client wants to perform on a resource. Express.js provides methods on the `app` object (or router instances) that correspond to common HTTP verbs.

Here are the most frequently used ones:

*   **`GET`**: Requests data from a specified resource. Used for retrieving information.
*   **`POST`**: Submits data to be processed to a specified resource. Often used to create new resources or submit form data.
*   **`PUT`**: Updates a specified resource with request payload. Replaces the entire resource.
*   **`PATCH`**: Updates a specified resource using a partial update. Modifies only specific fields.
*   **`DELETE`**: Deletes the specified resource.

### How Verbs Work with Paths

You combine the HTTP verb method with the route path to define a specific route handler.

**Example:**

```javascript
// Handling a GET request to list all items
app.get('/items', (req, res) => {
  res.send('List of all items');
});

// Handling a POST request to create a new item
app.post('/items', (req, res) => {
  // Logic to create a new item based on req.body
  res.status(201).send('Item created successfully!');
});

// Handling a GET request to retrieve a specific item
app.get('/items/:itemId', (req, res) => {
  const itemId = req.params.itemId;
  res.send(`Details for item ID: ${itemId}`);
});

// Handling a PUT request to update an item
app.put('/items/:itemId', (req, res) => {
  const itemId = req.params.itemId;
  // Logic to update item with ID itemId using req.body
  res.send(`Item ${itemId} updated.`);
});

// Handling a DELETE request to remove an item
app.delete('/items/:itemId', (req, res) => {
  const itemId = req.params.itemId;
  res.send(`Item ${itemId} deleted.`);
});
```

In this comprehensive example, we see how different HTTP verbs are used with the `/items` path and a parameterized path to perform distinct operations.

## Key Takeaways

*   **Route Paths** define the "address" for your requests.
*   Use simple strings for exact matches, path parameters (`:paramName`) to capture dynamic values, and regular expressions for advanced pattern matching.
*   **HTTP Verbs** specify the action (GET, POST, PUT, DELETE, etc.).
*   Combining a verb method with a path creates a specific **route handler**.
*   This mechanism is fundamental to how Express.js routes incoming HTTP requests to the appropriate server-side logic.

## Supports

- [[skills/web-and-design/backend-api/express-js/microskills/router-configuration|Router configuration]]
