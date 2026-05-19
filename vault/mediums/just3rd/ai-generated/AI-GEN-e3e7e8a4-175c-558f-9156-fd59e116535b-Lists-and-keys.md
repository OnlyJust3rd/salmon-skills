---
type: "medium"
title: "Lists and Keys in React: Understanding Dynamic Collections"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/web-and-design/frontend-ux/react/microskills/lists-and-keys|Lists and keys]]"
---
# Lists and Keys in React: Understanding Dynamic Collections

When building React applications, you'll often need to display dynamic collections of data, like a list of users, products, or to-do items. React handles these lists efficiently, but it requires a specific mechanism to keep track of each item: **keys**.

This lesson will explain why keys are essential for rendering lists in React and how they contribute to efficient updates through a process called "keyed reconciliation."

## Why Keys?

Imagine you have a list of items, and you want to render them in React. A common approach is to use the `map()` array method to transform each item into a React element.

```javascript
function ItemList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
}
```

This code works, but it has a hidden inefficiency. When the list changes (items are added, removed, or reordered), React needs to figure out which items have changed, been added, or been deleted. Without keys, React can only rely on the order of the elements. This can lead to:

*   **Performance issues:** React might do more work than necessary by re-rendering entire subtrees even if only a small part changed.
*   **State bugs:** If an item in the list has its own internal state (like a checked checkbox or input field value), that state might get associated with the wrong item when the list is reordered.

**Keys provide a stable identity for each element in a list.** They help React understand which items are the same across different renders, even if their position in the list changes.

## What Makes a Good Key?

A key should be:

*   **Unique among its siblings:** Each key within a list must be distinct.
*   **Stable:** The key for an item should not change between renders.

### Best Practices for Keys

1.  **Use unique IDs from your data:** If your data has a unique identifier (like `item.id`), this is the most recommended approach.

    ```javascript
    function ItemList({ items }) {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name}
            </li>
          ))}
        </ul>
      );
    }
    ```

2.  **Avoid using array indices as keys:** While tempting, using the array index as a key is generally a bad idea, especially if the list can be reordered, filtered, or added to in the middle.

    *   **Why it's bad:** If you have a list `['apple', 'banana', 'cherry']` and render it with indices as keys, React associates key `0` with 'apple', `1` with 'banana', and `2` with 'cherry'. If you insert a new item at the beginning, like `['grape', 'apple', 'banana', 'cherry']`, React now sees key `0` associated with 'grape', and it might incorrectly assume that 'apple' (which is now at index `1`) is a new item rather than the original 'apple' that simply shifted. This can lead to state loss and performance problems.

    ```javascript
    // Avoid this!
    function ItemList({ items }) {
      return (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name}
            </li>
          ))}
        </ul>
      );
    }
    ```

    **When are indices acceptable?** Only if the list is static (never reordered, filtered, or added to in the middle) and the items have no unique IDs. Even then, it's usually better to find a stable ID.

## Keyed Reconciliation: How React Uses Keys

The process React uses to efficiently update lists is called **keyed reconciliation**. When React encounters a list of elements with keys, it compares the new list with the previous one.

Here's a simplified view of how it works:

1.  **Identify by Key:** React looks at the keys of the elements in the new list and the old list.
2.  **Matching Keys:** If an element with the same key exists in both lists, React assumes it's the same element and updates it if necessary. It preserves its state.
3.  **New Elements:** If a key is present in the new list but not the old, it's a new element that needs to be inserted.
4.  **Removed Elements:** If a key is present in the old list but not the new, it's an element that needs to be removed.
5.  **Reordering:** If elements with the same keys are in different positions, React understands they have just been moved and efficiently repositions them without unnecessary re-renders.

This targeted updating, based on stable identities (keys), is much more efficient than re-rendering the entire list every time.

## Example Scenario

Let's say you have a simple to-do list.

**Initial List:**

```
[
  { id: 1, text: "Learn React" },
  { id: 2, text: "Build a project" }
]
```

Rendered with keys:

```javascript
function ToDoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
        </li>
      ))}
    </ul>
  );
}
```

React renders two `<li>` elements, associating `key="1"` with "Learn React" and `key="2"` with "Build a project".

**Scenario: Reordering**

Now, the list is reordered:

```
[
  { id: 2, text: "Build a project" },
  { id: 1, text: "Learn React" }
]
```

When React compares this new list to the old one:

*   It finds `key="2"` in the new list. It looks for `key="2"` in the old list and finds it. It recognizes that "Build a project" is the same item and only needs to be moved.
*   It finds `key="1"` in the new list. It looks for `key="1"` in the old list and finds it. It recognizes that "Learn React" is the same item and only needs to be moved.

React efficiently rearranges the DOM elements. It doesn't re-create the `<li>` elements or lose any potential state associated with them.

**Scenario: Adding an Item**

If you add a new item:

```
[
  { id: 2, text: "Build a project" },
  { id: 1, text: "Learn React" },
  { id: 3, text: "Deploy to production" }
]
```

React will see `key="3"` in the new list but not the old. It will then insert a new `<li>` element for "Deploy to production" at the appropriate position. The existing items with `key="1"` and `key="2"` remain untouched.

## Conclusion

Keys are a fundamental concept for rendering dynamic lists in React. They provide stable identities for elements, enabling React's efficient reconciliation process. Always strive to use unique, stable identifiers from your data as keys. Avoid using array indices unless your list is static and has no inherent unique identifiers. By correctly implementing keys, you ensure your React applications are performant and free from subtle state-related bugs when dealing with collections.

## Supports

- [[skills/web-and-design/frontend-ux/react/microskills/lists-and-keys|Lists and keys]]
