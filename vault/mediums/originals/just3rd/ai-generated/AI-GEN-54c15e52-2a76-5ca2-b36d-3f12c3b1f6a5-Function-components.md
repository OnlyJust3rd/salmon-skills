---
type: "medium"
title: "Function Components in React"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/software-engineering/frontend-development/react/microskills/function-components|function-components]]"
related-skills:
  - "[[skills/computing/software-engineering/frontend-development/react/react|react]]"
learning-time-in-minutes: 3
---
# Function Components in React

In React, a component is a reusable piece of UI. Function components are a fundamental way to build these reusable UI pieces. They are essentially JavaScript functions that accept `props` and return React elements.

## What are Function Components?

At their core, function components are just JavaScript functions. They take an object called `props` as their single argument and return JSX (JavaScript XML), which describes what should be rendered on the screen.

Think of them like pure functions: given the same `props`, they will always return the same JSX. This predictability makes them easy to understand and reason about.

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// How you would use it:
// <Welcome name="Alice" />
```

In this example:
*   `Welcome` is a function component.
*   It accepts `props` as an argument.
*   `props.name` accesses the `name` property passed to the component.
*   It returns a `<h1>` element that displays a greeting.

## Props: The Input to Your Components

`props` (short for properties) are how you pass data from a parent component to a child component. They are read-only within the component that receives them.

Consider our `Welcome` component again. When we use it like `<Welcome name="Alice" />`, the `name="Alice"` part is a prop. The `Welcome` component receives an object `{ name: "Alice" }` as its `props`.

### Destructuring Props

To make your code cleaner, you can destructure `props` directly in the function signature:

```jsx
function Greeting({ userName, message }) {
  return (
    <div>
      <p>{message}, {userName}!</p>
    </div>
  );
}

// Usage:
// <Greeting userName="Bob" message="Good morning" />
```

Here, `{ userName, message }` directly extracts `userName` and `message` from the `props` object. This is a common and recommended practice.

## Key Characteristics of Function Components

*   **Pure Render Functions:** As mentioned, function components should ideally behave like pure functions. This means:
    *   They always produce the same output for the same input (`props`).
    *   They do not cause any observable side effects (like modifying external variables, making network requests, or changing the DOM directly).
*   **Read-Only Props:** A component must never change its own `props`. If you need to change data, you'll typically do so with state (which we'll cover later in the context of Hooks).
*   **Simple and Readable:** Their straightforward nature makes them easy to read, write, and test.

## When to Use Function Components?

Function components are the modern and preferred way to write components in React, especially with the introduction of Hooks. They are suitable for:

*   Displaying UI based on `props`.
*   Creating presentational components that focus solely on how things look.
*   Any component that doesn't require complex internal state management (though Hooks allow us to add state and other features to function components).

## Common Mistakes to Avoid

*   **Mutating Props:** Never try to change `props` directly within a function component. This violates the unidirectional data flow principle and can lead to unpredictable behavior. If you need to update data, you'll use state mechanisms provided by Hooks.
*   **Assuming Props Exist:** While not strictly a mistake of function components themselves, always consider what happens if a prop is not provided. You might want to provide default values or handle missing props gracefully.

```jsx
function UserProfile({ avatarUrl, userName = "Guest" }) {
  return (
    <div>
      <img src={avatarUrl || '/default-avatar.png'} alt={`${userName}'s avatar`} />
      <p>{userName}</p>
    </div>
  );
}

// Usage:
// <UserProfile userName="Alice" avatarUrl="url/to/alice.jpg" />
// <UserProfile userName="Bob" /> // userName defaults to "Guest"
// <UserProfile /> // userName defaults to "Guest", avatarUrl will use default-avatar.png
```

In this example, `userName = "Guest"` sets a default value for `userName`, and `avatarUrl || '/default-avatar.png'` provides a fallback image if `avatarUrl` is not supplied or is falsy.

By understanding function components and how they use `props`, you've taken a crucial step in mastering React's building blocks. They are the foundation upon which you'll build more complex UIs.

## Supports

- [[skills/computing/software-engineering/frontend-development/react/microskills/function-components|Function components]]
