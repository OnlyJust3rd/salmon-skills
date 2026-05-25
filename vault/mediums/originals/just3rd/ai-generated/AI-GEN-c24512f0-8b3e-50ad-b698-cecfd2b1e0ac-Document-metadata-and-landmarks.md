---
type: "medium"
title: "Understanding Document Metadata and Landmarks in HTML"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/software-engineering/frontend-development/html/microskills/document-metadata-and-landmarks|document-metadata-and-landmarks]]"
learning-time-in-minutes: 3
---
# Understanding Document Metadata and Landmarks in HTML

When you build a web page, you're essentially creating a document. To make this document understandable to both browsers and assistive technologies like screen readers, we use specific HTML elements to define its structure and important sections. This lesson focuses on the fundamental building blocks of an HTML document: the overall container, its metadata, its main content, and key landmark regions.

## The Root Element: `<html>`

Every HTML document begins and ends with the `<html>` tag. Think of it as the outermost container for everything else on your web page. It signals to the browser, "This is an HTML document."

```html
<!DOCTYPE html>
<html>
  <!-- Content goes here -->
</html>
```

The `<!DOCTYPE html>` declaration at the very beginning is also crucial. It tells the browser which version of HTML you're using (in this case, HTML5).

## Document Metadata: The `<head>` Section

Inside the `<html>` tags, you'll find two main sections: `<head>` and `<body>`. The `<head>` section contains metadata about the HTML document. This is information that describes the document itself, but it's not directly displayed on the web page.

Here are some common elements you'll find within the `<head>`:

*   **`<title>`**: This is the most important element in the `<head>`. It defines the title of your web page, which appears in the browser tab or window title bar. Search engines also use this title for search results.

    ```html
    <title>My Awesome Web Page</title>
    ```
*   **`<meta>`**: These tags provide additional information about the HTML document, often for search engines or browsers. Common uses include specifying the character set and making the page responsive.

    ```html
    <meta charset="UTF-8"> <!-- Specifies the character encoding -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- For responsive design -->
    ```
*   **`<link>`**: Used to link external resources, most commonly CSS stylesheets.

    ```html
    <link rel="stylesheet" href="styles.css">
    ```
*   **`<script>`**: Used to link or embed JavaScript files.

    ```html
    <script src="script.js"></script>
    ```

## The Visible Content: The `<body>` Section

The `<body>` section contains all the visible content of your HTML document – the text, images, links, videos, and everything the user sees and interacts with.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Awesome Web Page</title>
    <meta charset="UTF-8">
  </head>
  <body>
    <h1>Welcome to my page!</h1>
    <p>This is where the main content goes.</p>
  </body>
</html>
```

## Understanding Landmark Regions

Just as a book has chapters and sections, a web page can be divided into logical landmark regions. These landmarks help users, especially those using screen readers, quickly navigate and understand the different parts of your page.

HTML5 introduced several elements that act as semantic landmarks. By using these, you're not just structuring your content; you're making it more accessible.

### Key Landmark Elements:

*   **`<header>`**: Typically represents introductory content or a navigational aid for a section or the entire page. This often includes a site logo, navigation menu, or a heading.

    ```html
    <header>
      <h1>My Website</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </nav>
    </header>
    ```
*   **`<nav>`**: Contains navigation links. This is a very common landmark, usually found within the `<header>` or as a standalone section.

    ```html
    <nav>
      <ul>
        <li><a href="#section1">Section 1</a></li>
        <li><a href="#section2">Section 2</a></li>
      </ul>
    </nav>
    ```
*   **`<main>`**: This element uniquely identifies the main content of the document. There should only be one `<main>` element per page. It clearly separates the primary content from headers, footers, and sidebars.

    ```html
    <main>
      <h2>About Us</h2>
      <p>We are a team dedicated to...</p>
    </main>
    ```
*   **`<article>`**: Represents a self-contained piece of content that could be independently distributed or reused. Examples include a blog post, a news story, or a forum comment.

    ```html
    <article>
      <h3>My Latest Blog Post</h3>
      <p>This is the content of my blog post...</p>
    </article>
    ```
*   **`<aside>`**: Represents content that is tangentially related to the content around it, often presented as a sidebar or pull quote.

    ```html
    <aside>
      <h3>Related Links</h3>
      <ul>
        <li><a href="#">Link A</a></li>
        <li><a href="#">Link B</a></li>
      </ul>
    </aside>
    ```
*   **`<footer>`**: Represents the footer for its nearest sectioning content or the root element (`<html>`). This typically contains copyright information, author details, or links to related documents.

    ```html
    <footer>
      <p>&copy; 2023 My Website. All rights reserved.</p>
    </footer>
    ```

### Why Use Landmarks?

*   **Accessibility**: Screen readers can list and jump to these landmark regions, allowing users to quickly navigate to the content they're interested in.
*   **SEO**: Search engines can better understand the structure and important sections of your page.
*   **Maintainability**: Clear landmark usage makes your code more organized and easier for other developers (or your future self) to understand.

By correctly using `<html>`, `<head>`, `<body>`, and the various landmark elements like `<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, and `<footer>`, you create a well-structured and accessible HTML document. This forms the foundation for building robust and user-friendly web pages.

## Supports

- [[skills/computing/software-engineering/frontend-development/html/microskills/document-metadata-and-landmarks|Document metadata and landmarks]]
