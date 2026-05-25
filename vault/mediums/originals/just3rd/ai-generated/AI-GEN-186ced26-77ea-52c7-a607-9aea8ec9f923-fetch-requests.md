---
type: medium
title: "Fetch Requests: Getting Data with JavaScript"
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[fetch-requests|fetch-requests]]"
learning-time-in-minutes: 3
---
# Fetch Requests: Getting Data with JavaScript

This lesson focuses on using JavaScript's `fetch` API to make HTTP requests and handle JSON responses, a core part of dynamically updating web pages with data from servers.

## What is `fetch`?

The `fetch()` method in JavaScript provides an interface for fetching resources (like data from an API). It's a modern, promise-based alternative to older methods like `XMLHttpRequest`. `fetch` makes it easier to handle asynchronous network operations.

## Making a Basic `GET` Request

The simplest use of `fetch` is to make a `GET` request to a specific URL. When you call `fetch()`, it returns a Promise. This Promise resolves to a `Response` object.

```javascript
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    // The 'response' object contains information about the request
    // We need to extract the JSON data from it
    return response.json();
  })
  .then(data => {
    // 'data' now holds the parsed JSON from the response
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('Error:', error);
  });
```

### How it Works

1.  **`fetch(url)`**: Initiates the request to the specified URL.
2.  **`.then(response => ...)`**: This is the first callback for the Promise. It receives the `Response` object.
    *   The `Response` object has many useful properties, like `status` (e.g., 200 for success, 404 for not found) and `ok` (a boolean indicating if the status code was in the 200-299 range).
    *   Crucially, `response.json()` is a method that also returns a Promise. It reads the `Response` stream to completion and attempts to parse the body text as JSON.
3.  **`.then(data => ...)`**: This second callback receives the actual parsed JSON data (usually as a JavaScript object or array). You can then use this `data` to update your web page.
4.  **`.catch(error => ...)`**: This handles any errors that occur during the entire process, such as network issues or invalid JSON.

## Handling JSON Responses

APIs commonly return data in JSON (JavaScript Object Notation) format. The `response.json()` method is specifically designed to parse this JSON into a usable JavaScript object.

Consider an API endpoint that returns a list of users:

`https://jsonplaceholder.typicode.com/users`

This might return something like:

```json
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz"
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv"
  }
]
```

When `response.json()` is called on the response from this URL, the `data` in the subsequent `.then()` block will be a JavaScript array of objects, each representing a user.

## Common Pitfalls

*   **Forgetting `.json()`**: If you only use the first `.then()` and try to access `response.data` (which doesn't exist) or `response` directly, you won't get your parsed JSON. Remember to chain `.then(response => response.json())`.
*   **Error Handling**: Always include a `.catch()` block. Network errors or server errors (like a 500 Internal Server Error) won't automatically throw exceptions that stop execution without a `.catch()`.
*   **Asynchronous Nature**: `fetch` is asynchronous. The code that comes *after* your `fetch` call will execute *before* the `fetch` request completes. This is why Promises and `.then()` are essential.

## Next Steps

Once you have successfully fetched and parsed JSON data, you can use this data to:

*   Update HTML elements on your page.
*   Populate tables or lists.
*   Display dynamic content based on user actions.
*   Send data to a server using `fetch` with other HTTP methods like `POST`.

## Supports

- [[fetch-requests|fetch requests]]
