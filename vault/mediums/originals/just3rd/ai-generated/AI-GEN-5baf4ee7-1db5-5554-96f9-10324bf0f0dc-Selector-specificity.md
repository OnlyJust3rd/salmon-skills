---
type: "medium"
title: "Understanding Selector Specificity"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/software-engineering/frontend-development/css/microskills/selector-specificity|selector-specificity]]"
related-skills:
  - "[[skills/computing/software-engineering/frontend-development/css/css|css]]"
learning-time-in-minutes: 2
---
# Understanding Selector Specificity

When you write CSS, you often have multiple rules that could apply to the same HTML element. But an element can only have one style for a given property (like `color` or `margin`). So, how does the browser decide which rule "wins"? This is where **selector specificity** comes in. It's a scoring system that determines the importance of CSS rules.

Think of it like a competition. The more "points" a selector has, the more specific it is, and the higher its chance of winning and styling an element.

## How Specificity is Calculated

Specificity is calculated based on the types of selectors used in a CSS rule. Here's a general hierarchy, from least to most specific:

1.  **Element/Type Selectors:** `p`, `h1`, `div` (1 point)
2.  **Class Selectors:** `.my-class`, `[type="text"]` (10 points)
3.  **ID Selectors:** `#my-id` (100 points)
4.  **Inline Styles:** `style="color: blue;"` (1000 points)

**Important Rules:**

*   Universal selector (`*`) and combinators (`+`, `>`, `~`, ` `) have zero specificity.
*   `!important` declarations override all other declarations, regardless of specificity. Use this sparingly!

When comparing two selectors that apply to the same element, the one with the higher specificity score wins. If scores are tied, the selector that appears later in the CSS source order wins.

## Practical Example

Let's say you have this HTML:

```html
<div id="main-content" class="article">
  <p>This is a paragraph.</p>
</div>
```

And these CSS rules:

```css
/* Rule 1 */
p {
  color: black; /* Specificity: 1 (element selector) */
}

/* Rule 2 */
.article p {
  color: gray; /* Specificity: 10 (class) + 1 (element) = 11 */
}

/* Rule 3 */
#main-content p {
  color: blue; /* Specificity: 100 (ID) + 1 (element) = 101 */
}

/* Rule 4 - Inline Style */
/* <p style="color: red;">This is a paragraph.</p> */
```

For the `<p>` element inside `#main-content.article`:

*   Rule 1 (`p`) has a score of 1.
*   Rule 2 (`.article p`) has a score of 11.
*   Rule 3 (`#main-content p`) has a score of 101.
*   An inline style on the `p` would have a score of 1000.

In this case, Rule 3 (`#main-content p`) has the highest specificity (101) and will determine the `color` of the paragraph, making it **blue**. If you added an inline style `style="color: red;"` to the `p` tag, that would win with 1000 points.

## Practice Task

Consider the following HTML and CSS. Predict the final `background-color` for the `<h2>` element.

**HTML:**

```html
<div class="container">
  <h2 id="section-title">My Awesome Section</h2>
</div>
```

**CSS:**

```css
h2 {
  background-color: yellow; /* Selector specificity: 1 */
}

.container h2 {
  background-color: green; /* Selector specificity: 10 (class) + 1 (element) = 11 */
}

#section-title {
  background-color: orange; /* Selector specificity: 100 (ID) */
}
```

## Self-Check Questions

1.  What type of selector has the lowest specificity score among element, class, and ID selectors?
2.  If two CSS rules have the exact same specificity score and apply to the same element, which rule wins?
3.  Why is it generally discouraged to rely heavily on `!important`?

## Supports

- [[skills/computing/software-engineering/frontend-development/css/microskills/selector-specificity|Selector specificity]]
