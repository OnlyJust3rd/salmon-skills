---
type: "medium"
title: "Express Application Setup"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/web-and-design/backend-api/express-js/microskills/express-application-setup|Express application setup]]"
---
# Express Application Setup

To build a RESTful JSON API with Express.js, the first crucial step is setting up your application. This involves creating an instance of your Express application, defining how it will handle incoming requests, and making sure it's ready to listen for those requests on a specific port. This micro-skill focuses on the fundamental building blocks: the application instance, routing basics, and starting the server.

## The Express App Instance

At its core, an Express application is an instance of the Express function. This function returns an object that has methods for routing HTTP requests, configuring middleware, and rendering HTML.

```javascript
const express = require('express');
const app = express();
```

Here's a breakdown:

1.  **`const express = require('express');`**: This line imports the Express.js module. You need to have Express installed in your project (using `npm install express`).
2.  **`const app = express();`**: This line creates an instance of the Express application. The `app` object will be your primary tool for defining your API.

## Defining Routes

Routes are the pathways that define how your API responds to different HTTP requests (GET, POST, PUT, DELETE, etc.) to specific URLs (endpoints). For a JSON API, these routes will typically send and receive JSON data.

### Basic Routing

Express makes defining routes straightforward. You can use methods on the `app` object that correspond to HTTP verbs.

```javascript
// Handle GET requests to the root URL '/'
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Handle GET requests to '/api/users'
app.get('/api/users', (req, res) => {
  // In a real API, you'd fetch data from a database
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ];
  res.json(users); // Send a JSON response
});

// Handle POST requests to '/api/users'
app.post('/api/users', (req, res) => {
  // In a real API, you'd parse the request body and save to a database
  const newUser = req.body; // Assumes body-parsing middleware is used
  res.status(201).json(newUser); // Send back the created user with status 201
});
```

In these examples:

*   **`req` (request)**: An object containing information about the incoming request.
*   **`res` (response)**: An object used to send a response back to the client.
*   **`res.send()`**: Sends a plain text or HTML response.
*   **`res.json()`**: Sends a JSON response. Express automatically sets the `Content-Type` header to `application/json`.
*   **`res.status(statusCode)`**: Sets the HTTP status code for the response. `201` is common for successful creation.

### Routers (for Larger Applications)

As your API grows, managing all routes directly on the `app` object can become cumbersome. Express Routers provide a way to organize your routes into modular, independent modules.

```javascript
// In a separate file, e.g., routes/users.js
const express = require('express');
const router = express.Router();

// GET all users
router.get('/', (req, res) => {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ];
  res.json(users);
});

// GET a specific user by ID (example using a route parameter)
router.get('/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`Fetching user with ID: ${userId}`);
});

// POST a new user
router.post('/', (req, res) => {
  const newUser = req.body;
  res.status(201).json(newUser);
});

module.exports = router;

// In your main app file, e.g., app.js
const express = require('express');
const app = express();
const userRoutes = require('./routes/users'); // Import the user routes

// Middleware to parse JSON request bodies
app.use(express.json());

// Mount the user routes at '/api/users'
app.use('/api/users', userRoutes);

// ... rest of your app setup
```

When using routers:

1.  **`const router = express.Router();`**: Creates a new router instance.
2.  **`router.get()`, `router.post()`, etc.**: Define routes on this router instance.
3.  **`module.exports = router;`**: Exports the router so it can be used in other files.
4.  **`app.use('/api/users', userRoutes);`**: Mounts the entire set of user routes under the `/api/users` path. Any route defined in `userRoutes` (like `/` or `/:id`) will be prefixed with `/api/users`. So, `/` inside `userRoutes` becomes `/api/users` on the main app, and `/:id` becomes `/api/users/:id`.
5.  **`app.use(express.json());`**: This is a crucial piece of middleware. It parses incoming requests with JSON payloads and makes the parsed data available on `req.body`. You need this for your POST and PUT requests to work correctly with JSON data.

## Listening for HTTP Requests

Once your application is set up and routes are defined, you need to tell your Express app to start listening for incoming HTTP requests on a specific port.

```javascript
const PORT = process.env.PORT || 3000; // Use environment variable or default to 3000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

*   **`PORT`**: It's good practice to allow the port to be configured via an environment variable (`process.env.PORT`), which is common in deployment environments. If it's not set, it defaults to `3000`.
*   **`app.listen(PORT, callback)`**: This method starts the HTTP server. The `callback` function executes once the server has successfully started. It's a common place to log a message confirming the server is running.

### Common Mistakes and Pitfalls

*   **Forgetting `express.json()` Middleware**: If you try to send JSON data in a POST request and `req.body` is `undefined`, you likely forgot to include `app.use(express.json());` before defining your routes that handle this data.
*   **Incorrect Port Configuration**: Not using `process.env.PORT` can lead to issues when deploying to cloud platforms that assign dynamic ports.
*   **Route Order Matters**: Express processes middleware and routes in the order they are defined. Middleware that modifies the request or response (like `express.json()`) should generally come before your route handlers.
*   **Not Exporting Routers**: If you're using separate router files, remember to `module.exports` them and `require()` them in your main application file.

## Supports

- [[skills/web-and-design/backend-api/express-js/microskills/express-application-setup|Express application setup]]
