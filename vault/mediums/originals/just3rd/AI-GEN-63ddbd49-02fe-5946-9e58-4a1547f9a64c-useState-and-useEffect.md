---
type: "medium"
title: "Understanding `useState` and `useEffect` in React"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/software-engineering/frontend-development/react/microskills/usestate-and-useeffect|usestate-and-useeffect]]"
related-skills:
  - "[[skills/computing/software-engineering/frontend-development/react/react|react]]"
learning-time-in-minutes: 4
---
# Understanding `useState` and `useEffect` in React

In React, components often need to manage information that changes over time. This changing information is called "state". React also allows components to perform actions that happen *after* rendering, like fetching data or setting up subscriptions. These are called "effects". The `useState` and `useEffect` hooks are fundamental tools for managing state and effects in React function components.

## `useState`: Managing Local State

Think of `useState` as a way for your function component to remember things. When a component needs to store information that can change (like the text in an input field or whether a button is active), `useState` is the hook to use.

### How `useState` Works

When you call `useState`, you're telling React, "I need a piece of state for this component." `useState` returns an array with two important things:

1.  **The current state value:** This is the actual data you want to store.
2.  **A function to update the state:** When you call this function with a new value, React will re-render your component with the updated state.

You typically use array destructuring to give these two values meaningful names.

### Example: A Simple Counter

Let's see `useState` in action with a counter that increases when a button is clicked.

```jsx
import React, { useState } from 'react';

function Counter() {
  // Declare a state variable called 'count' and initialize it to 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;
```

**Explanation:**

*   `const [count, setCount] = useState(0);`: This line does a few things:
    *   It declares a state variable named `count`.
    *   It initializes `count` with the value `0`.
    *   It gives us a function `setCount` that we can use to change the value of `count`.
*   `<p>You clicked {count} times</p>`: This displays the current value of `count`.
*   `<button onClick={() => setCount(count + 1)}>Click me</button>`: When the button is clicked, the `onClick` handler calls `setCount`. We pass `count + 1` to `setCount`, which tells React to update `count` to its current value plus one. React then re-renders the `Counter` component, and the paragraph will show the new count.

**Key Takeaway for `useState`:**

*   Use `useState` for any data that belongs *only* to a specific component and can change over time.
*   Calling the state updater function (like `setCount`) is the *only* way to change state and trigger a re-render. Never directly modify the state variable.

## `useEffect`: Handling Side Effects

Components often need to interact with the "outside world" – things that aren't directly part of the component's rendering logic. These interactions are called "side effects." Examples include:

*   Fetching data from an API.
*   Setting up subscriptions (like to a WebSocket).
*   Manually changing the DOM (though this is less common in React).
*   Timers (`setTimeout`, `setInterval`).

The `useEffect` hook is designed for these scenarios. It lets you perform side effects after React has updated the DOM.

### How `useEffect` Works

`useEffect` takes a function as its first argument. This function contains the code for your side effect. `useEffect` also takes an optional second argument: a "dependency array."

The dependency array tells React when to re-run your effect.

*   **If you don't provide a dependency array:** The effect will run after *every* render of the component.
*   **If you provide an empty array (`[]`):** The effect will run *only once* after the initial render (like `componentDidMount` in class components).
*   **If you provide an array with values (e.g., `[userId]`):** The effect will run after the initial render and then again *any time* one of the values in the array changes.

### Example: Fetching Data

Let's imagine we want to fetch user data when a component loads.

```jsx
import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This function runs after the component renders
    setLoading(true); // Start loading
    fetch(`https://api.example.com/users/${userId}`)
      .then(response => response.json())
      .then(data => {
        setUser(data);
        setLoading(false); // Loading finished
      })
      .catch(error => {
        console.error('Error fetching user:', error);
        setLoading(false);
      });

    // Optional: Return a cleanup function
    return () => {
      // This runs before the component unmounts or before the effect re-runs
      console.log('Cleaning up effect...');
      // e.g., cancel pending fetch requests or unsubscribe
    };
  }, [userId]); // Re-run the effect if userId changes

  if (loading) {
    return <p>Loading user profile...</p>;
  }

  if (!user) {
    return <p>User not found.</p>;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserProfile;
```

**Explanation:**

*   `const [user, setUser] = useState(null);` and `const [loading, setLoading] = useState(true);`: We use `useState` to manage the fetched `user` data and a `loading` indicator.
*   `useEffect(() => { ... }, [userId]);`:
    *   The function inside `useEffect` contains the `fetch` API call. This is our side effect.
    *   The dependency array `[userId]` means this effect will run when `UserProfile` first mounts and then again if the `userId` prop changes. This is crucial for updating the profile when the user ID is different.
    *   The `return () => { ... };` is a cleanup function. It's good practice to include cleanup logic here, especially for things like subscriptions or ongoing network requests, to prevent memory leaks. In this example, it logs a message, but in a real app, it might cancel a fetch request.

**Key Takeaways for `useEffect`:**

*   Use `useEffect` for actions that happen *after* rendering and involve interacting with external systems.
*   The dependency array is vital for controlling *when* your effect runs to avoid infinite loops or stale data.
*   Always consider cleanup: if your effect sets up something that needs to be stopped (like a timer or a subscription), return a cleanup function.

By mastering `useState` and `useEffect`, you gain the core abilities to make your React components dynamic and interactive. They are the building blocks for managing component logic and data flow.

## Supports

- [[skills/computing/software-engineering/frontend-development/react/microskills/usestate-and-useeffect|useState and useEffect]]
