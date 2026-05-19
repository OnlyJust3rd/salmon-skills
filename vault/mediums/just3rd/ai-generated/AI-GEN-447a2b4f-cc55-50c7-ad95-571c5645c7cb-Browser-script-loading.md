---
type: "medium"
title: "How JavaScript Scripts Load in Your Browser"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/javascript/microskills/browser-script-loading|Browser script loading]]"
---
# How JavaScript Scripts Load in Your Browser

When you visit a webpage, your browser needs to understand how to display it and make it interactive. For interactive elements, the browser relies on JavaScript. But how does the browser know *where* to find and *when* to run your JavaScript code? This lesson explains how JavaScript scripts get attached to your web documents and the order in which they execute.

## The `<script>` Tag: Your Gateway to JavaScript

The primary way to include JavaScript in an HTML document is by using the `<script>` tag. There are two main ways to use this tag:

1.  **Inline Scripts:** Writing JavaScript code directly within the HTML file.
2.  **External Scripts:** Linking to a separate `.js` file.

### 1. Inline Scripts

You can embed JavaScript code directly inside the `<script>` tags within your HTML.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Inline Script Example</title>
</head>
<body>
    <h1>Hello, Inline JavaScript!</h1>

    <script>
        // This is an inline JavaScript script
        console.log("This message appears from an inline script.");
        alert("Welcome!"); // This will pop up a message box
    </script>

    <p>Content after the script.</p>
</body>
</html>
```

**How it works:** When the browser encounters the `<script>` tags, it pauses HTML parsing and executes the JavaScript code found within. Once the script finishes, it resumes parsing the HTML.

### 2. External Scripts

For larger or reusable JavaScript code, it's best practice to keep it in separate files. You link to these files using the `src` attribute of the `<script>` tag.

**`script.js` (separate file):**

```javascript
// This is an external JavaScript file
console.log("This message comes from an external script file.");
document.body.style.backgroundColor = "lightblue"; // Changes the background color
```

**`index.html` (linking to the external script):**

```html
<!DOCTYPE html>
<html>
<head>
    <title>External Script Example</title>
</head>
<body>
    <h1>Hello, External JavaScript!</h1>

    <!-- Link to the external JavaScript file -->
    <script src="script.js"></script>

    <p>Content after the external script link.</p>
</body>
</html>
```

**How it works:** When the browser encounters a `<script src="path/to/your/script.js"></script>` tag, it:
*   Pauses parsing the HTML.
*   Requests and downloads the `script.js` file.
*   Executes the JavaScript code in `script.js`.
*   Resumes parsing the HTML.

## Execution Order: The Browser's Dilemma

The order in which scripts are loaded and executed is crucial. The default behavior can sometimes lead to issues if your JavaScript tries to interact with HTML elements that haven't been parsed yet.

### Default Behavior

By default, when the browser encounters a `<script>` tag, it stops parsing the HTML, fetches the script (if it's external), and executes it. It then continues parsing the HTML.

Consider this:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Execution Order</title>
    <script>
        console.log("Script in head executes first.");
        // This might try to access an element that doesn't exist yet!
        // document.getElementById("myElement").innerText = "Changed by script in head";
    </script>
</head>
<body>
    <h1 id="myElement">Original Heading</h1>
    <script>
        console.log("Script in body executes after the heading.");
        document.getElementById("myElement").innerText = "Changed by script in body.";
    </script>
</body>
</html>
```

In the example above, the script in the `<head>` would likely cause an error because the `<h1>` element with `id="myElement"` hasn't been created yet when the script runs. The script in the `<body>` *after* the `<h1>` tag would work fine.

### Controlling Execution Order: `defer` and `async`

To address these execution order issues, HTML5 introduced two important attributes for the `<script>` tag: `defer` and `async`. These attributes are used with external scripts.

#### 1. `defer` Attribute

When you add `defer` to a `<script>` tag, the browser will:
*   Download the script file in parallel with parsing the HTML.
*   **Execute the script only after the HTML document has been fully parsed**, but before the `DOMContentLoaded` event fires.
*   Scripts with `defer` are guaranteed to execute in the order they appear in the HTML document.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Defer Example</title>
    <!-- Script downloads in parallel, executes after HTML parsing -->
    <script src="script1.js" defer></script>
    <script src="script2.js" defer></script>
</head>
<body>
    <h1>Content</h1>
    <script>
        console.log("Inline script in body.");
    </script>
</body>
</html>
```

**Use `defer` when:**
*   Your scripts depend on the DOM being fully loaded.
*   The order of script execution matters.
*   You want to avoid blocking HTML parsing for script downloads.

#### 2. `async` Attribute

When you add `async` to a `<script>` tag, the browser will:
*   Download the script file in parallel with parsing the HTML.
*   **Execute the script as soon as it's downloaded**, without waiting for the HTML to be fully parsed or for other scripts.
*   Scripts with `async` do **not** guarantee execution order. They run whenever they finish downloading.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Async Example</title>
    <!-- Script downloads in parallel, executes as soon as it's ready -->
    <script src="scriptA.js" async></script>
    <script src="scriptB.js" async></script>
</head>
<body>
    <h1>Content</h1>
</body>
</html>
```

**Use `async` when:**
*   Your scripts are independent of the DOM and other scripts.
*   You want the fastest possible script execution and don't care about the order.
*   Examples: analytics scripts, ads.

### Where to Place Scripts

Given the default behavior and the options `defer` and `async`, here are common placement strategies:

*   **Place `<script>` tags with `defer` or `async` in the `<head>`:** This is a common and recommended practice. It ensures scripts don't block initial rendering and are handled efficiently.
*   **Place scripts just before the closing `</body>` tag (without `defer` or `async`):** This was a more common practice before `defer` and `async` became widely supported. It ensures the DOM is parsed before the script runs, but it can delay the rendering of the page if the script takes a long time to download and execute.

Understanding how scripts attach to your documents and their execution order is fundamental to building responsive and error-free web applications. By using `defer` and `async` appropriately, you can significantly improve your webpage's performance and user experience.

## Supports

- [[skills/programming/programming-languages/javascript/microskills/browser-script-loading|Browser script loading]]
