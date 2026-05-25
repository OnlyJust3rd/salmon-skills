---
type: "medium"
title: "Understanding CSS Cascade and Inheritance"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/software-engineering/frontend-development/css/microskills/cascade-and-inheritance|cascade-and-inheritance]]"
learning-time-in-minutes: 3
---
# Understanding CSS Cascade and Inheritance

In CSS, styles don't just apply to individual elements in isolation. They often come from multiple sources and can be influenced by how elements are nested within each other. This is where the concepts of the **cascade** and **inheritance** become crucial for understanding how your styles are applied and how they can be overridden.

## What are Cascade and Inheritance?

*   **Inheritance**: Some CSS properties, like `color` or `font-family`, are inherited by child elements from their parent elements. This means if you set a `color` on a `div`, all the text inside that `div` will also be that `color` by default, unless it's specifically overridden.
*   **Cascade**: The cascade is the algorithm that determines which CSS rules are applied when there are conflicting styles for the same element. It considers several factors to decide which style "wins."

### How the Cascade Works (Simplified)

The cascade prioritizes styles based on these rules, from highest to lowest precedence:

1.  **Origin and Importance**: Styles defined with `!important` are given high priority. Browser default styles have the lowest.
2.  **Specificity**: More specific selectors override less specific ones. For example, an ID selector (`#my-id`) is more specific than a class selector (`.my-class`), which is more specific than an element selector (`p`).
3.  **Source Order**: If two rules have the same origin, importance, and specificity, the rule that appears later in the CSS source code will win.

## Practical Example: Styling Headings

Let's say we have the following HTML:

```html
<div class="content">
  <h1>This is a Main Title</h1>
  <p>This is a paragraph.</p>
  <div class="sidebar">
    <h2>A Sidebar Heading</h2>
    <p>This is a sidebar paragraph.</p>
  </div>
</div>
```

And these CSS rules:

```css
/* Rule 1: General text color */
body {
  color: #333;
}

/* Rule 2: Specific color for headings */
h1, h2 {
  color: blue;
}

/* Rule 3: Style for elements within the content div */
.content p {
  color: green;
}

/* Rule 4: Even more specific style for sidebar paragraphs */
.sidebar p {
  color: purple;
}
```

Now let's break down what color each element will be:

*   **`body`**: Inherits no specific color, so it takes the `body`'s default or no color (if not explicitly set).
*   **`h1`**:
    *   It's an `h1` element, so Rule 2 applies (`color: blue`).
    *   It's inside `.content`, but `h1` is more specific than `.content p`.
    *   **Result**: The `h1` will be **blue**.
*   **First `p` (inside `.content`)**:
    *   It's a `p` element. Rule 1 (`color: #333`) applies via inheritance from `body`.
    *   Rule 3 (`.content p`) applies (`color: green`). `.content p` is more specific than the inherited `body` color.
    *   **Result**: The first `p` will be **green**.
*   **`h2` (inside `.sidebar`)**:
    *   It's an `h2` element, so Rule 2 applies (`color: blue`).
    *   It's inside `.content` and `.sidebar`, but `h2` is more specific.
    *   **Result**: The `h2` will be **blue**.
*   **Second `p` (inside `.sidebar`)**:
    *   It's a `p` element. Rule 1 (`color: #333`) applies via inheritance from `body`.
    *   Rule 3 (`.content p`) applies (`color: green`).
    *   Rule 4 (`.sidebar p`) applies (`color: purple`). `.sidebar p` is more specific than `.content p` and the inherited `body` color.
    *   **Result**: The second `p` will be **purple**.

Notice how the `color` property for paragraphs changes based on their location and the specificity of the selectors.

## Practice Task

Examine the following HTML and CSS. Predict the color of each `span` element.

**HTML:**

```html
<div class="wrapper">
  <p>This text has a <span class="highlight">highlighted</span> word.</p>
  <div class="footer">
    <p>Another sentence with a <span class="special">special</span> word.</p>
  </div>
</div>
```

**CSS:**

```css
body {
  color: black;
}

.highlight {
  color: orange;
}

.wrapper p {
  color: gray;
}

.footer .special {
  color: red;
}
```

## Self-Check Questions

1.  Which CSS property is a good example of a property that is typically inherited by child elements?
2.  If you have a style set on an `id` and a style set on a `class` targeting the same element, which one usually wins?
3.  What happens if two CSS rules have the exact same specificity and origin, and target the same element?

## Supports

- [[skills/computing/software-engineering/frontend-development/css/microskills/cascade-and-inheritance|Cascade and inheritance]]
