---
type: medium
title: Understanding Cross-Origin Resource Sharing (CORS)
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[basic-cross-origin-awareness|basic-cross-origin-awareness]]"
learning-time-in-minutes: 4
---
# Understanding Cross-Origin Resource Sharing (CORS)

When your JavaScript code runs in a web browser, it operates within a security sandbox. This sandbox is designed to protect users by preventing malicious scripts on one website from accessing or interfering with data from another website. A key aspect of this security model is the **Same-Origin Policy (SOP)**.

## The Same-Origin Policy (SOP)

The SOP dictates that a script loaded from one origin can only access resources from that *same* origin. An origin is defined by the combination of:

*   **Protocol:** `http` or `https`
*   **Domain:** `www.example.com`
*   **Port:** `80` (default for http), `443` (default for https), or a specific port like `3000` or `8080`

If a script tries to fetch data (like JSON) from a server with a different origin, the browser will, by default, block that request. This is a security measure.

## When CORS Becomes Relevant

You'll most frequently encounter CORS issues when your client-side JavaScript, running on `https://your-website.com`, attempts to make a `fetch` request to a backend API located at `https://api.another-service.com`. Even if the API is designed to serve JSON, the browser will block this request because the origins don't match.

Similarly, if your frontend is running on `http://localhost:3000` and your API is on `http://localhost:8080`, the browser will also block this. The differing port numbers constitute different origins.

## Recognizing CORS Blocks

When a CORS request is blocked by the browser, you won't typically get a clear JavaScript error message in your console that says "CORS error." Instead, you'll see a more generic network error, often with messages like:

*   `Failed to fetch`
*   `Access to fetch at 'https://api.another-service.com/data' from origin 'https://your-website.com' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.`

These console messages are your primary clue. The phrase "blocked by CORS policy" is the giveaway.

## Typical Mitigations for CORS Issues

The solution to CORS problems lies not in your client-side JavaScript code, but on the **server-side** (the API you're trying to fetch data from). The server needs to explicitly tell the browser that it's okay for your specific origin (or any origin) to access its resources. This is done using HTTP headers.

The most common header is:

`Access-Control-Allow-Origin`

### How it Works

1.  **Browser Makes a Request:** Your JavaScript `fetch` call initiates a request to a different origin.
2.  **Server Responds:** The server at the target API receives the request.
3.  **Server Includes CORS Header:** If the server is configured to allow requests from your origin, it adds an `Access-Control-Allow-Origin` header to its response.
    *   To allow requests from a specific origin (e.g., `https://your-website.com`):
        `Access-Control-Allow-Origin: https://your-website.com`
    *   To allow requests from *any* origin (less secure, use with caution):
        `Access-Control-Allow-Origin: *`
4.  **Browser Checks Header:** The browser receives the response, inspects the `Access-Control-Allow-Origin` header, and checks if it matches the origin of the script making the request.
5.  **Access Granted or Denied:**
    *   If the header matches (or is `*`), the browser allows your JavaScript code to access the response data.
    *   If the header does not match or is missing, the browser blocks the request and shows the CORS error in the console.

### Other Relevant CORS Headers

While `Access-Control-Allow-Origin` is the most fundamental, servers might also use other headers to control CORS:

*   `Access-Control-Allow-Methods`: Specifies which HTTP methods (GET, POST, PUT, DELETE, etc.) are allowed.
*   `Access-Control-Allow-Headers`: Indicates which custom headers the client can send in the request.

### What You Can (and Cannot) Do in Client-Side JavaScript

*   **Cannot:** You **cannot** directly bypass or override CORS restrictions from your client-side JavaScript. The browser's security model prevents this. You can't just add a header in your `fetch` call like `headers: { 'Access-Control-Allow-Origin': '*' }` and expect it to work, because the *server* needs to send that header in its response.
*   **Can:** You can **configure your development environment** to temporarily relax CORS restrictions. For example, many backend frameworks (like Express.js with the `cors` middleware) have easy ways to enable CORS for development. Tools like `ngrok` can also sometimes help by creating a public URL that proxies to your local development server, and you can configure CORS on the `ngrok` side.
*   **Can:** **Inspect the network tab** in your browser's developer tools. This is crucial for seeing the full request and response headers, including any CORS-related headers that were sent.

## Example Scenario

**Problem:** Your JavaScript code on `http://localhost:3000` uses `fetch` to get data from `http://localhost:5000/api/users`. The browser blocks the request with a CORS error.

**Solution:** You need to configure the server running on `http://localhost:5000` to send the `Access-Control-Allow-Origin: http://localhost:3000` header (or `*` for development) in its responses.

**In summary, understanding CORS is about recognizing that browser security policies often prevent direct `fetch` requests between different origins. The solution involves server-side configuration to grant explicit permission, rather than client-side JavaScript tricks.**

## Supports

- [[basic-cross-origin-awareness|Basic cross-origin awareness]]
