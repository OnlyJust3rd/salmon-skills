---
type: "medium"
title: "DOM Queries and Updates in JavaScript"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/javascript/microskills/dom-queries-and-updates|dom-queries-and-updates]]"
---
# DOM Queries and Updates in JavaScript

To make web pages interactive, we need to be able to find specific parts of the page and change them using JavaScript. This is where the Document Object Model (DOM) comes in. Think of the DOM as a tree-like structure representing your HTML document, and JavaScript gives us tools to navigate and modify this tree.

## What is the DOM?

When a web browser loads an HTML page, it creates a DOM representation of that page. Each HTML element (like `<p>`, `<div>`, `<h1>`, `<img>`) becomes a "node" in this tree. JavaScript can then access and manipulate these nodes.

## Selecting Elements (DOM Queries)

The first step to updating anything is to select the specific element you want to work with. JavaScript provides several methods for this:

### 1. `getElementById()`

This is the most straightforward way to select an element if it has a unique `id` attribute.

**Example:**

Consider this HTML:
```html
<h1 id="main-title">Welcome!</h1>
```

You can select it in JavaScript like this:
```javascript
const pageTitle = document.getElementById('main-title');
console.log(pageTitle); // This will output the <h1> element
```

### 2. `getElementsByClassName()`

This method selects all elements that have a specific class name. It returns an `HTMLCollection`, which is like an array of elements.

**Example:**

HTML:
```html
<p class="highlight">This is important.</p>
<p>This is not.</p>
<p class="highlight">Another important point.</p>
```

JavaScript:
```javascript
const highlightedParagraphs = document.getElementsByClassName('highlight');
console.log(highlightedParagraphs); // This will output a collection of the two <p> elements with class "highlight"

// To access individual elements, you use array-like indexing:
console.log(highlightedParagraphs[0]); // The first highlighted paragraph
```

### 3. `getElementsByTagName()`

This method selects all elements with a specific HTML tag name (like `p`, `div`, `li`). It also returns an `HTMLCollection`.

**Example:**

HTML:
```html
<p>First paragraph.</p>
<div>Some content.</div>
<p>Second paragraph.</p>
```

JavaScript:
```javascript
const allParagraphs = document.getElementsByTagName('p');
console.log(allParagraphs); // This will output a collection of all <p> elements
```

### 4. `querySelector()`

This is a more powerful and flexible method. It allows you to use CSS selectors to find the *first* element that matches the selector.

**Example:**

HTML:
```html
<div class="content">
  <p id="intro">Introduction text.</p>
</div>
```

JavaScript:
```javascript
const introElement = document.querySelector('#intro'); // Select by ID
console.log(introElement);

const firstContentParagraph = document.querySelector('.content p'); // Select the first <p> inside an element with class "content"
console.log(firstContentParagraph);
```

### 5. `querySelectorAll()`

Similar to `querySelector()`, but it returns a `NodeList` of *all* elements that match the specified CSS selector.

**Example:**

HTML:
```html
<ul>
  <li class="list-item">Apple</li>
  <li>Banana</li>
  <li class="list-item">Cherry</li>
</ul>
```

JavaScript:
```javascript
const listItems = document.querySelectorAll('.list-item');
console.log(listItems); // This will output a NodeList of the two <li> elements with class "list-item"

// You can iterate over a NodeList using forEach:
listItems.forEach(item => {
  console.log(item.textContent);
});
```

## Updating Elements (DOM Manipulation)

Once you've selected an element, you can change its content, attributes, or style.

### 1. Changing Text Content

*   `textContent`: Gets or sets the *text content* of an element and its descendants. It treats all HTML tags as plain text.
*   `innerHTML`: Gets or sets the *HTML content* of an element. This means you can insert new HTML tags.

**Example:**

HTML:
```html
<p id="greeting">Hello there!</p>
```

JavaScript:
```javascript
const greetingElement = document.getElementById('greeting');

// Using textContent
greetingElement.textContent = 'Welcome back!';
console.log(greetingElement.textContent); // Output: Welcome back!

// Using innerHTML (be careful with user-provided content to avoid security issues)
greetingElement.innerHTML = '<strong>Welcome!</strong> You have new messages.';
console.log(greetingElement.innerHTML); // Output: <strong>Welcome!</strong> You have new messages.
```

**Caution:** Using `innerHTML` with untrusted content can lead to Cross-Site Scripting (XSS) vulnerabilities. `textContent` is safer for just displaying text.

### 2. Changing Attributes

You can change existing attributes or add new ones.

*   `setAttribute(name, value)`: Sets an attribute.
*   `getAttribute(name)`: Gets the value of an attribute.
*   `removeAttribute(name)`: Removes an attribute.

**Example:**

HTML:
```html
<img id="my-image" src="old-image.jpg" alt="An old image">
```

JavaScript:
```javascript
const imageElement = document.getElementById('my-image');

// Change the src attribute
imageElement.setAttribute('src', 'new-image.jpg');

// Change the alt attribute
imageElement.alt = 'A new description for the image'; // Direct property access is often simpler for common attributes

// Add a new attribute
imageElement.setAttribute('data-custom', 'some-value');

// Get an attribute
console.log(imageElement.getAttribute('src')); // Output: new-image.jpg

// Remove an attribute
imageElement.removeAttribute('alt');
```

### 3. Changing Styles

You can modify an element's CSS styles directly using the `style` property. This is good for simple, dynamic style changes.

**Example:**

HTML:
```html
<div id="box">A colored box.</div>
```

JavaScript:
```javascript
const boxElement = document.getElementById('box');

// Change background color
boxElement.style.backgroundColor = 'lightblue';

// Change font size
boxElement.style.fontSize = '20px';

// Change display property
boxElement.style.display = 'inline-block';

// Styles with hyphens in CSS (like font-size) are camelCased in JavaScript (fontSize)
```

For more complex styling, it's generally better to add or remove CSS classes defined in your stylesheet.

## Safe Practices

*   **Always select elements before trying to update them.** If your selector doesn't find anything, you'll get `null`, and trying to access properties like `textContent` on `null` will cause an error.
*   **Use `textContent` for plain text.** This prevents potential security issues.
*   **Use `innerHTML` carefully.** Only use it when you absolutely need to insert HTML and you trust the source of that HTML.
*   **For complex styling changes, manipulate CSS classes.** This keeps your JavaScript cleaner and your styles organized in your CSS files.

By mastering DOM queries and updates, you gain the power to make your web pages dynamic and responsive to user interactions, laying the groundwork for more advanced JavaScript concepts.

## Supports

- [[skills/programming/programming-languages/javascript/microskills/dom-queries-and-updates|DOM queries and updates]]
