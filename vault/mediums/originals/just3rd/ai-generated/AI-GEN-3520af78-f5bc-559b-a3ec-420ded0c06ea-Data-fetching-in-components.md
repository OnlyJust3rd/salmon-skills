---
type: "medium"
title: "Data Fetching in React Components"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/software-engineering/frontend-development/react/microskills/data-fetching-in-components|data-fetching-in-components]]"
learning-time-in-minutes: 4
---
# Data Fetching in React Components

Fetching data is a fundamental part of building interactive web applications. In React, we often need to load external data (like JSON from an API) to display it to the user or use it within our components. This lesson focuses on how to effectively load JSON data within your React components, ensuring a good user experience by handling loading states.

## The Challenge of Asynchronous Data

When your component needs data from an external source, this request happens *asynchronously*. This means the component doesn't wait for the data to arrive before rendering. If you try to use the data immediately, it might not be there yet, leading to errors or unexpected behavior. We need a way to:

1.  Initiate the data fetch.
2.  Indicate to the user that data is being loaded.
3.  Update the component once the data is available.
4.  Handle potential errors during the fetch.

## Leveraging React Hooks for Data Fetching

React's built-in `useEffect` hook is the primary tool for handling side effects, including data fetching, in functional components. For more complex or reusable data fetching logic, custom hooks are an excellent pattern.

### Using `useEffect` for Basic Data Fetching

The `useEffect` hook allows you to perform actions after the component has rendered. We can combine it with the browser's `fetch` API to retrieve JSON data.

**Key Concepts:**

*   **`useEffect`:** Runs side effects in function components.
*   **`useState`:** Manages state within a component (e.g., for data, loading status, errors).
*   **`fetch` API:** A modern, promise-based API for making network requests.
*   **JSON.parse():** Converts a JSON string into a JavaScript object.

Let's illustrate with an example:

Imagine we have an API endpoint `https://api.example.com/items` that returns a list of items in JSON format.

```typescript
import React, { useState, useEffect } from 'react';

interface Item {
  id: number;
  name: string;
}

function ItemList() {
  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('https://api.example.com/items');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Item[] = await response.json();
        setItems(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred.');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchItems();
  }, []); // The empty dependency array ensures this effect runs only once after the initial render.

  if (isLoading) {
    return <div>Loading items...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Items</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
```

**How it works:**

1.  **State Initialization:** We use `useState` to create three pieces of state:
    *   `items`: An array to hold the fetched data (initially empty).
    *   `isLoading`: A boolean flag to track if data is currently being fetched (initially `true`).
    *   `error`: A string to store any error messages (initially `null`).
2.  **`useEffect` Hook:**
    *   The `useEffect` hook takes a function as its first argument, which contains the side effect logic.
    *   Inside the effect, we define an `async` function `fetchItems` to handle the asynchronous `fetch` call.
    *   **`fetch` call:** We use `await fetch()` to make the request.
    *   **Error Handling:** We check `response.ok` to ensure the request was successful. If not, we throw an error. We also use a `try...catch` block to handle network errors or errors during JSON parsing.
    *   **Setting State:**
        *   If successful, `setItems(data)` updates the `items` state.
        *   In the `catch` block, `setError(err.message)` updates the `error` state.
        *   The `finally` block, which always executes, sets `setIsLoading(false)` to hide the loading indicator.
    *   **Dependency Array (`[]`):** The empty dependency array `[]` tells React to run this effect *only once* after the initial render. This is crucial for data fetching to prevent infinite loops.
3.  **Conditional Rendering:**
    *   Before rendering the actual list, we check `isLoading`. If `true`, we display a "Loading..." message.
    *   If `isLoading` is `false` and `error` has a value, we display the error message.
    *   Only when `isLoading` is `false` and there's no `error` do we render the list of items.

### Custom Hooks for Reusability

As your application grows, you might find yourself repeating this data fetching pattern across multiple components. Custom hooks are perfect for encapsulating this logic.

```typescript
import { useState, useEffect } from 'react';

interface UseFetchResult<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}

function useFetch<T>(url: string): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Reset loading state if URL changes
      setError(null); // Clear previous errors
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result: T = await response.json();
        setData(result);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred.');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]); // Re-run the effect if the URL changes

  return { data, isLoading, error };
}

export default useFetch;
```

Now, you can use this `useFetch` hook in any component:

```typescript
import React from 'react';
import useFetch from './useFetch'; // Assuming useFetch is in './useFetch.ts'

interface Product {
  id: number;
  name: string;
  price: number;
}

function ProductDisplay() {
  const { data: products, isLoading, error } = useFetch<Product[]>('https://api.example.com/products');

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error loading products: {error}</div>;
  }

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products?.map(product => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductDisplay;
```

**Benefits of Custom Hooks:**

*   **Reusability:** DRY (Don't Repeat Yourself) principle.
*   **Readability:** Components become cleaner by abstracting away fetching logic.
*   **Maintainability:** Changes to fetching logic only need to be made in one place.

## Handling Loading States

Always providing feedback to the user while data is being fetched is crucial for a good user experience.

*   **Display a Spinner or Skeleton:** A visual indicator that something is happening.
*   **Disable Interactions:** Prevent users from interacting with elements that depend on the fetched data until it's ready.
*   **Show an Empty State:** If there's no data and no error, you might want to show a message like "No items found."

By implementing loading and error states, you make your React features robust and user-friendly.

## Supports

- [[skills/computing/software-engineering/frontend-development/react/microskills/data-fetching-in-components|Data fetching in components]]
