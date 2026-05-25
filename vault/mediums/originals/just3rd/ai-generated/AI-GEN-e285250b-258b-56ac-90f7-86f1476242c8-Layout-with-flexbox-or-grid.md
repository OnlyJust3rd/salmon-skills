---
type: "medium"
title: "Layout with Flexbox or Grid"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/software-engineering/frontend-development/css/microskills/layout-with-flexbox-or-grid|layout-with-flexbox-or-grid]]"
learning-time-in-minutes: 2
---
# Layout with Flexbox or Grid

CSS layout modules like Flexbox and Grid are powerful tools to arrange elements on your webpage. They offer more control and flexibility than older methods, making it easier to create responsive and well-structured designs. This lesson focuses on using these modern tools for component alignment.

## Why Use Flexbox or Grid?

*   **Flexbox** is ideal for one-dimensional layouts (either a row or a column). It excels at distributing space among items in an interface and is great for aligning items within a container.
*   **Grid** is designed for two-dimensional layouts (rows and columns simultaneously). It provides a more robust system for complex page structures and precise alignment.

You'll often use them to position navigation bars, card layouts, form elements, and more, ensuring they look good on any screen size.

## Practical Example: Aligning Items in a Card

Let's say you have a simple card with an image, a title, and some text. You want the image to be on the left and the title/text to be on the right, aligned nicely. Flexbox is perfect for this.

### HTML Structure

```html
<div class="card">
  <img src="placeholder.jpg" alt="Card image" class="card-image">
  <div class="card-content">
    <h2>Card Title</h2>
    <p>This is some descriptive text for the card.</p>
  </div>
</div>
```

### CSS using Flexbox

```css
.card {
  display: flex; /* Enables flexbox for the card container */
  align-items: center; /* Vertically aligns items in the center */
  border: 1px solid #ccc;
  padding: 15px;
  width: 400px; /* Example width */
}

.card-image {
  width: 100px; /* Set a specific width for the image */
  height: 100px;
  margin-right: 15px; /* Add some space between image and content */
  object-fit: cover; /* Ensure image covers the area without distortion */
}

.card-content {
  flex-grow: 1; /* Allows the content div to take up remaining space */
}

.card-content h2 {
  margin-top: 0; /* Remove default top margin for the heading */
}
```

**How it works:**

*   `display: flex;` on `.card` turns it into a flex container. Its direct children (`.card-image` and `.card-content`) become flex items.
*   `align-items: center;` ensures that the image and the content block are vertically centered relative to each other.
*   `margin-right: 15px;` on `.card-image` adds spacing.
*   `flex-grow: 1;` on `.card-content` tells it to expand and fill any available space in the flex container, pushing the image to the left.

### Practice Task

Create a simple navigation bar with three links. Use Flexbox to:

1.  Arrange the links horizontally.
2.  Space them out evenly across the navigation bar.
3.  Vertically center the links within the nav bar's height.

**HTML:**

```html
<nav class="navbar">
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</nav>
```

**CSS:** Write your CSS for `.navbar` and its `a` tags to achieve the described layout.

## Self-Check Questions

1.  When would you primarily choose Flexbox over CSS Grid for layout?
2.  What does `align-items: center;` do to flex items within a container?
3.  If you want an element within a flex container to take up all the remaining available space, which `flex` property would you use, and with what value?

## Supports

- [[skills/computing/software-engineering/frontend-development/css/microskills/layout-with-flexbox-or-grid|Layout with flexbox or grid]]
