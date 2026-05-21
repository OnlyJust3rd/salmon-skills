---
type: "medium"
title: "Displaying Fetch States: Loading, Success, and Error"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/javascript/microskills/dom-feedback-loops|dom-feedback-loops]]"
---
# Displaying Fetch States: Loading, Success, and Error

When your JavaScript application fetches data from an API, the user experience depends heavily on how you communicate the status of that operation. This micro-skill focuses on implementing "DOM feedback loops" – specifically, rendering distinct user interface states to inform the user about whether the data is loading, has arrived successfully, or if an error occurred. This directly supports implementing client-side scripts that fetch JSON and update the DOM.

## Why Feedback Loops Matter

Users expect immediate responses from web applications. When an API request takes time, a blank screen or an unresponsive interface can be frustrating. By providing clear visual cues, you manage user expectations and make your application feel more robust and user-friendly.

Consider the three primary states you'll need to communicate:

1.  **Loading:** The request has been sent, and the application is waiting for a response.
2.  **Success:** The data has been successfully retrieved and processed.
3.  **Error:** The request failed for some reason (e.g., network issue, server error, invalid request).

## Implementing Feedback Loops

Let's break down how to implement these states using JavaScript and the Fetch API. We'll assume you have a basic HTML structure in place to display your data and some elements to control the feedback.

### 1. Loading State

When a fetch request begins, you should visually indicate that something is happening.

**HTML Structure Example:**

```html
<div id="data-container">
  <!-- Data will be loaded here -->
</div>
<div id="loading-indicator" style="display: none;">Loading data...</div>
<div id="error-message" style="display: none; color: red;"></div>
```

**JavaScript Implementation:**

```javascript
const dataContainer = document.getElementById('data-container');
const loadingIndicator = document.getElementById('loading-indicator');
const errorMessage = document.getElementById('error-message');

async function fetchDataAndRender() {
  loadingIndicator.style.display = 'block'; // Show loading indicator
  errorMessage.style.display = 'none';     // Hide any previous errors
  dataContainer.innerHTML = '';            // Clear previous data

  try {
    const response = await fetch('https://api.example.com/data'); // Replace with your API endpoint

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // --- Success State Logic Here ---
    renderData(data); // Function to render data

  } catch (error) {
    // --- Error State Logic Here ---
    displayError(error);
  } finally {
    loadingIndicator.style.display = 'none'; // Always hide loading indicator when done
  }
}

function renderData(data) {
  // Logic to populate dataContainer with fetched JSON data
  dataContainer.innerHTML = `<h2>Data Loaded Successfully!</h2><pre>${JSON.stringify(data, null, 2)}</pre>`;
}

function displayError(error) {
  errorMessage.textContent = `Failed to load data: ${error.message}`;
  errorMessage.style.display = 'block';
}

// Call the function to initiate the fetch
fetchDataAndRender();
```

**Explanation:**

*   Before the `fetch` call, we set the `loadingIndicator`'s `display` style to `'block'` to make it visible.
*   We also hide any previous error messages and clear any existing content in `dataContainer`.
*   The `finally` block is crucial: it *always* executes, whether the `try` block succeeded or an error occurred. This ensures the loading indicator is hidden regardless of the outcome.

### 2. Success State

Once data is successfully fetched and parsed, you'll want to display it and remove any loading indicators or error messages.

**JavaScript Implementation (integrated into `fetchDataAndRender`):**

```javascript
// ... (inside the try block after response.json()) ...

    const data = await response.json();

    // Success State Logic:
    dataContainer.innerHTML = `<h2>Your Data:</h2>`; // Clear loading message, add a title
    // Loop through your data and append it to dataContainer
    data.forEach(item => {
      const itemElement = document.createElement('p');
      itemElement.textContent = `Name: ${item.name}, Value: ${item.value}`; // Example properties
      dataContainer.appendChild(itemElement);
    });

// ... (rest of the function, including finally block) ...
```

**Explanation:**

*   After successfully obtaining `data`, we update `dataContainer.innerHTML` to display the fetched information.
*   You'll replace the example `item.name` and `item.value` with the actual properties of the JSON objects you're receiving.
*   The loading indicator is handled by the `finally` block.

### 3. Error State

If the `fetch` request fails or the server returns an error status, you need to inform the user.

**JavaScript Implementation (integrated into `fetchDataAndRender`):**

```javascript
// ... (inside the catch block) ...

  } catch (error) {
    // Error State Logic:
    errorMessage.textContent = `An error occurred: ${error.message}`;
    errorMessage.style.display = 'block';
    dataContainer.innerHTML = ''; // Clear any potentially partial data
    loadingIndicator.style.display = 'none'; // Ensure loading is hidden if error occurs before finally
  }

// ... (rest of the function, including finally block) ...
```

**Explanation:**

*   In the `catch` block, we set the `textContent` of the `errorMessage` element to provide a user-friendly description of the error.
*   We make the `errorMessage` visible.
*   Crucially, we also clear `dataContainer` to prevent displaying stale or incomplete data.
*   We also explicitly hide the `loadingIndicator` here, as the `finally` block might not have run yet if the error happened early.

## Best Practices

*   **Clear Messaging:** Use simple, unambiguous language for your loading, success, and error messages.
*   **Visual Distinction:** Use different styling (e.g., color, icons) for error messages compared to loading indicators.
*   **Idempotency:** Ensure that refreshing the data or re-attempting the fetch doesn't result in duplicate content or unexpected UI states.
*   **User Control:** For longer operations, consider offering a "cancel" button.
*   **Accessibility:** Ensure your feedback mechanisms are accessible to users with disabilities. For example, use ARIA attributes if necessary.

By thoughtfully implementing these feedback loops, you create a more transparent and pleasant experience for your users when interacting with data fetched from APIs.

## Supports

- [[skills/programming/programming-languages/javascript/microskills/dom-feedback-loops|DOM feedback loops]]
