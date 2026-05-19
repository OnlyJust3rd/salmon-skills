---
type: "medium"
title: "Responsive Rules with Media Queries"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/web-and-design/frontend-ux/css/microskills/responsive-rules|Responsive rules]]"
---
# Responsive Rules with Media Queries

When building web pages, it's crucial that your layout adapts to different screen sizes – from large desktop monitors to small mobile phones. This is called **responsive design**. Media queries are a fundamental CSS technique that allows you to apply different styles based on device characteristics, most commonly the viewport width.

## Understanding Media Queries

Media queries act like conditional statements for your CSS. You can define specific styles that only apply when certain conditions are met. The most common condition is the screen or viewport width.

The basic syntax looks like this:

```css
@media screen and (condition) {
  /* CSS rules to apply when the condition is true */
}
```

-   `@media`: The start of a media query.
-   `screen`: Specifies that these styles apply to screen devices (as opposed to print).
-   `and (condition)`: The condition to check. For responsive design, we often use `min-width` or `max-width`.

### Common Conditions:

*   `min-width`: Applies styles when the viewport width is *at least* the specified value.
*   `max-width`: Applies styles when the viewport width is *no more than* the specified value.

### Example Scenario

Imagine you have a simple navigation bar. On larger screens, you want the links to be displayed horizontally. On smaller screens, you want them to stack vertically and perhaps change their background color for better visibility.

Let's see how we can implement this.

### Practical Example

Consider this HTML structure:

```html
<nav>
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</nav>
```

And some initial CSS:

```css
nav {
  background-color: #f0f0f0;
  padding: 10px;
}

nav a {
  text-decoration: none;
  color: #333;
  padding: 5px 10px;
  margin: 0 5px;
}
```

Now, let's add responsive rules:

```css
/* Default styles (for smaller screens or as a base) */
nav {
  background-color: #e0e0e0;
  padding: 10px;
  text-align: center; /* Center links by default */
}

nav a {
  display: block; /* Stack links vertically by default */
  margin-bottom: 5px;
}

/* Styles for screens 768px and wider */
@media screen and (min-width: 768px) {
  nav {
    background-color: #f0f0f0; /* Lighter background on larger screens */
    text-align: left; /* Align left on larger screens */
  }

  nav a {
    display: inline-block; /* Display links horizontally */
    margin: 0 5px; /* Reset margin for horizontal display */
    margin-bottom: 0; /* Remove bottom margin */
  }
}
```

In this example:
*   By default, links are `display: block`, making them stack vertically.
*   When the viewport is 768px or wider (`min-width: 768px`), the `nav a` elements change to `display: inline-block`, arranging them side-by-side. The background color also changes, and alignment shifts.

## Practice Task

1.  Create an HTML file with a `div` containing three paragraphs.
2.  Style the paragraphs with a default background color and some padding.
3.  Use a media query to change the background color of the paragraphs and add a border when the screen width is 500px or less (`max-width: 500px`).

## Self-Check Questions

1.  What is the primary purpose of media queries in CSS?
2.  What is the difference between `min-width` and `max-width` in a media query?
3.  If you wanted to apply styles only to very large screens (e.g., 1200px and up), what media query condition would you use?

## Supports

- [[skills/web-and-design/frontend-ux/css/microskills/responsive-rules|Responsive rules]]
