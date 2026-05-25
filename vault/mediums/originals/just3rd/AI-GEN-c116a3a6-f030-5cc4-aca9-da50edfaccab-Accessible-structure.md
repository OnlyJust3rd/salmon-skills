---
type: "medium"
title: "Accessible Structure with HTML Landmarks and Labels"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/software-engineering/frontend-development/html/microskills/accessible-structure|accessible-structure]]"
related-skills:
  - "[[skills/computing/software-engineering/frontend-development/html/html|html]]"
learning-time-in-minutes: 5
---
# Accessible Structure with HTML Landmarks and Labels

This lesson focuses on applying accessible structural elements in HTML to assist assistive technologies. We'll explore how to use landmarks and labels to create a better understanding of your web page's layout for users who rely on screen readers or other accessibility tools.

## Why Accessible Structure Matters

When building HTML pages, it's not just about how the content looks, but also how it's understood by everyone. Assistive technologies, like screen readers, interpret the structure of a web page to navigate and present information. Without proper structural cues, these tools can struggle to convey the meaning and organization of your content, making it difficult for users with disabilities to use your website effectively.

Think of it like this: a well-organized book has chapters, sections, and an index. This structure helps readers quickly find what they need. Similarly, HTML landmarks and labels act as signposts for screen readers, guiding users through your page's content.

## HTML Landmarks

HTML5 introduced semantic elements that act as landmarks, defining distinct regions of a web page. These landmarks help assistive technologies announce the purpose of a section, allowing users to quickly jump to or understand different parts of the page.

Here are the key HTML landmark elements:

*   `<body>`: While not strictly a landmark in the same way as others, it encloses all visible content.
*   `<header>`: Typically contains introductory content or a set of navigational links. This could be the site-wide header with logos and navigation.
*   `<nav>`: Contains navigation links. A page might have multiple `<nav>` elements (e.g., for primary navigation and footer navigation).
*   `<main>`: Represents the dominant content of the `<body>` of a document. There should ideally be only one `<main>` element per page.
*   `<aside>`: Represents a section of a page that consists of content that is tangentially related to the content around the `<aside>` element, and which can be considered separate from it. Think of sidebars or pull quotes.
*   `<article>`: Represents a self-contained piece of content that can be independently distributed or reused. Examples include blog posts, news stories, or forum comments.
*   `<section>`: Represents a generic section of a document or application. It's used when no other more semantic element is appropriate.
*   `<footer>`: Typically contains authorship information, copyright data, or links to related documents. This is often the site-wide footer.

### Example of Landmark Usage

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accessible Page Example</title>
</head>
<body>

    <header>
        <h1>My Awesome Website</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <article>
            <h2>Welcome to My Blog</h2>
            <p>This is the main content of my blog post.</p>
        </article>
        <aside>
            <h3>Related Links</h3>
            <ul>
                <li><a href="#">Another Article</a></li>
                <li><a href="#">Resources</a></li>
            </ul>
        </aside>
    </main>

    <footer>
        <p>&copy; 2023 My Website</p>
    </footer>

</body>
</html>
```

In this example:
*   The `<header>` contains the site's main title and navigation.
*   The `<main>` element encloses the primary content of the page.
*   The `<article>` within `<main>` represents a distinct piece of content (the blog post).
*   The `<aside>` provides supplementary information.
*   The `<footer>` contains copyright information.

Screen readers can now announce these regions. For instance, a user might hear "navigation," "main content," or "complementary information," allowing them to navigate efficiently.

## ARIA Roles and Labels for Enhanced Accessibility

While semantic HTML elements provide a good foundation, sometimes you need to be more specific or provide additional context, especially for elements that don't have a direct semantic equivalent. This is where ARIA (Accessible Rich Internet Applications) comes in, specifically ARIA roles and labels.

### ARIA Roles

ARIA roles assign a specific purpose to an element that might not be obvious from its native HTML tag.

*   `role="banner"`: Similar to `<header>`, used for introductory content.
*   `role="navigation"`: Similar to `<nav>`, for navigation links.
*   `role="main"`: Similar to `<main>`, for the primary content.
*   `role="complementary"`: Similar to `<aside>`, for supplementary content.
*   `role="article"`: Similar to `<article>`.
*   `role="contentinfo"`: Similar to `<footer>`, for footer information like copyright.

**Important Note:** It's generally best to use native semantic HTML elements whenever possible, as they have built-in accessibility. ARIA roles should be used to enhance or provide accessibility where native elements are insufficient. For example, using `<header>` is better than using `<div role="banner">`.

### ARIA Labels and Descriptions

ARIA attributes like `aria-label` and `aria-labelledby` can provide descriptive text for elements that might not have visible, descriptive text associated with them.

*   `aria-label`: Provides a text label for an element that doesn't have visible text, or if the visible text isn't descriptive enough for assistive technologies.

    ```html
    <button aria-label="Close dialog">X</button>
    ```

    Here, "Close dialog" is announced instead of just "X" when a screen reader encounters this button.

*   `aria-labelledby`: Associates an element with another element that contains its label. This is useful when the label is visually separate but logically linked.

    ```html
    <label id="search-label">Search:</label>
    <input type="text" aria-labelledby="search-label">
    ```

    This is functionally similar to a standard `<label for="inputId">`, but `aria-labelledby` can be more flexible in complex scenarios.

### When to Use ARIA

*   When you need to convey the purpose of a non-semantic HTML element (like a `<div>` or `<span>`).
*   To provide more descriptive labels for interactive elements that lack clear text.
*   To enhance the semantics of existing HTML elements for better screen reader support in complex widgets.

### Common Pitfalls

*   **Overusing ARIA:** Don't add ARIA roles and attributes to native semantic HTML elements if they already convey the correct meaning. For example, don't use `<div role="navigation">` when `<nav>` is appropriate.
*   **Incorrect ARIA usage:** Using ARIA roles or attributes that don't match the element's actual function can confuse assistive technologies and users.
*   **Missing `lang` attribute:** Always include a `lang` attribute on your `<html>` tag (e.g., `<html lang="en">`) to help screen readers pronounce text correctly.

## Practical Application

As you build your HTML pages, consciously think about the structure. Ask yourself:

*   What is the main purpose of this section of content?
*   Is this navigation, a primary article, a sidebar, or footer information?
*   Are there any interactive elements that might not be clear to a screen reader user?

By applying these landmark elements and considering ARIA labels where necessary, you'll create HTML pages that are not only functional but also accessible, ensuring a better experience for all your users.

## Supports

- [[skills/computing/software-engineering/frontend-development/html/microskills/accessible-structure|Accessible structure]]
