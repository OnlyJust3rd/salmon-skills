---
type: "medium"
title: "Keyboard Accessibility: Navigating the Web Without a Mouse"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/web-and-design/frontend-ux/web-accessibility/microskills/keyboard-accessibility|keyboard-accessibility]]"
---
# Keyboard Accessibility: Navigating the Web Without a Mouse

To build accessible websites, we need to ensure everyone can interact with them, regardless of their abilities. This lesson focuses on a crucial aspect of web accessibility: **keyboard accessibility**.

## Understanding Keyboard Accessibility

Keyboard accessibility means that all interactive elements on a webpage can be accessed and operated using only a keyboard. This is vital for users who cannot use a mouse due to physical disabilities, temporary injuries, or even those who simply prefer keyboard navigation for efficiency.

There are two main components to keyboard accessibility:

1.  **Focus Order:** How users navigate through interactive elements on a page.
2.  **Keyboard-Operable Controls:** Ensuring that all controls can be activated and manipulated using keyboard commands.

## 1. Focus Order: The Tab Trail

When you press the `Tab` key on your keyboard, you move through the interactive elements on a webpage. This is called the "focus order." A logical and predictable focus order is essential for keyboard users to understand where they are on the page and how to move around.

### What is Focus?

Focus refers to the currently selected element on the page. Visually, it's usually indicated by an outline or border around the element.

### Designing a Logical Focus Order

The natural reading order of content is usually the best guide for focus order. This means that the `Tab` key should cycle through elements in the same sequence as a user would encounter them when reading from left to right, top to bottom.

Consider a typical form:

1.  Labels
2.  Input fields
3.  Buttons (like "Submit" or "Cancel")

The focus should proceed from the first label to its corresponding input field, then to the next label and its input, and finally to the action buttons.

#### Common Pitfalls in Focus Order:

*   **Skipping Elements:** Interactive elements that are not reachable via the `Tab` key are inaccessible.
*   **Illogical Order:** When the `Tab` key jumps around the page in a confusing sequence, it disorients users. This can happen when the visual order of elements doesn't match their order in the HTML code.
*   **Hidden Elements:** Interactive elements that are hidden and then made visible should gain focus appropriately.

#### How to Ensure Good Focus Order:

*   **HTML Structure:** The default focus order is based on the order of elements in the HTML. Ensure your HTML is structured logically.
*   **`tabindex` Attribute:** You can use the `tabindex` attribute to control focus.
    *   `tabindex="0"`: Adds an element to the natural tab order.
    *   `tabindex="-1"`: Removes an element from the natural tab order but allows it to be focused programmatically (e.g., using JavaScript).
    *   `tabindex="1"` or higher: Creates a custom tab order, which should be used with extreme caution as it can easily break accessibility.

#### Example:

```html
<form>
  <div>
    <label for="name">Name:</label>
    <input type="text" id="name">
  </div>
  <div>
    <label for="email">Email:</label>
    <input type="email" id="email">
  </div>
  <button type="submit">Submit</button>
</form>
```

In this example, the `Tab` key will naturally move focus from "Name:" label, to the name input, then to the "Email:" label, to the email input, and finally to the "Submit" button. This is good focus order.

## 2. Keyboard-Operable Controls: Making Actions Possible

Beyond just navigating *to* an element, keyboard users must be able to *operate* it. This means:

*   **Buttons:** Should be activated by pressing `Enter` or `Spacebar`.
*   **Links:** Should be activated by pressing `Enter`.
*   **Form Inputs:** Should be able to receive input.
*   **Custom Controls:** (like sliders, accordions, modals) must have clear keyboard interaction patterns.

### Standard HTML Controls

Most standard HTML elements like `<button>`, `<a>`, `<input>`, `<select>`, and `<textarea>` are inherently keyboard-operable. When they receive focus, users can interact with them using standard keyboard commands.

### Custom Controls and JavaScript

When you build custom interactive elements using JavaScript or complex HTML structures, you need to ensure they are also keyboard-operable. This often involves:

*   **Event Listeners:** Attaching keyboard event listeners (like `keydown` or `keyup`) to your custom elements.
*   **Mapping Keys:** Mapping specific keyboard keys to actions (e.g., `Enter` to trigger a button click, `Escape` to close a modal).
*   **Accessibility APIs:** For more complex widgets, using ARIA (Accessible Rich Internet Applications) attributes is crucial to communicate their role, state, and properties to assistive technologies and to define their expected keyboard interactions.

#### Example: A Custom Toggle Button

Let's say you create a custom "like" button using a `<div>`. You'd need to make it keyboard-operable.

```html
<div id="like-button" role="button" tabindex="0">
  👍 Like
</div>
```

And the JavaScript to make it work:

```javascript
const likeButton = document.getElementById('like-button');

likeButton.addEventListener('click', () => {
  toggleLike();
});

likeButton.addEventListener('keydown', (event) => {
  // Check if the pressed key is Enter or Spacebar
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault(); // Prevent default behavior (like scrolling for spacebar)
    toggleLike();
  }
});

function toggleLike() {
  // Logic to toggle the 'liked' state and update the UI
  console.log('Like button toggled!');
}
```

In this example:

*   `role="button"`: Identifies this `div` as a button.
*   `tabindex="0"`: Makes it focusable via the keyboard.
*   The `keydown` event listener checks for `Enter` or `Spacebar` and triggers the `toggleLike` function, preventing default browser actions where necessary.

### Keyboard Focus Indicator

It's critical that the focus indicator is always visible. This means the outline that appears around a focused element should not be removed or made invisible. Browsers provide default focus indicators, but designers sometimes override them. If you do, ensure you provide a clear, visible alternative.

### In Summary

Keyboard accessibility ensures that users who rely on keyboards can navigate and interact with your website effectively. This involves:

*   **Logical Focus Order:** Elements receive focus in a predictable sequence.
*   **Keyboard-Operable Controls:** All interactive elements can be activated and used with keyboard commands.

By paying attention to these principles, you make your websites usable for a much wider audience.

## Supports

- [[skills/web-and-design/frontend-ux/web-accessibility/microskills/keyboard-accessibility|Keyboard Accessibility]]
