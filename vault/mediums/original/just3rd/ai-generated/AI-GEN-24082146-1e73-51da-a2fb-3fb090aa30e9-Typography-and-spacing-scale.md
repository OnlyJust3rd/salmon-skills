---
type: "medium"
title: "Typography and Spacing Scale for Styled Layouts"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/web-mobile/frontend-development/css/microskills/typography-and-spacing-scale|typography-and-spacing-scale]]"
learning-time-in-minutes: 2
---
# Typography and Spacing Scale for Styled Layouts

When implementing styled layouts with CSS, maintaining consistency in typography and spacing is crucial for readability and a professional look. This involves establishing a "scale" for font sizes and spacing values. Instead of using arbitrary pixel or em values for every element, a scale provides a set of predefined, harmonious values that work well together.

### Why Use a Scale?

*   **Consistency:** Ensures all elements on your page have a predictable and pleasing relationship in terms of size and spacing.
*   **Readability:** Well-defined typography and spacing directly impact how easily users can consume content.
*   **Efficiency:** Makes development faster as you're choosing from a limited, well-tested set of values.
*   **Maintainability:** Easier to update or adjust the overall look by modifying the scale itself.

### Applying a Typography Scale

A typography scale typically defines a set of font sizes. These can be mapped to semantic HTML elements or specific UI components.

#### Practical Example: Simple Typography Scale

Let's define a simple scale for font sizes using relative units like `rem` which are based on the root font size of the document.

```css
/* Define your font size tokens */
:root {
  --font-size-sm: 0.875rem; /* ~14px */
  --font-size-base: 1rem;   /* ~16px */
  --font-size-md: 1.25rem;  /* ~20px */
  --font-size-lg: 1.5rem;   /* ~24px */
  --font-size-xl: 2rem;     /* ~32px */
}

/* Apply the scale */
body {
  font-size: var(--font-size-base); /* Base font size for the entire document */
}

h1 {
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-md); /* Example of using a spacing scale */
}

h2 {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-sm);
}

p {
  font-size: var(--font-size-base);
  margin-bottom: var(--spacing-base);
}

small {
  font-size: var(--font-size-sm);
}
```

### Applying a Spacing Scale

Similarly, a spacing scale defines a set of values for margins, padding, and gaps. This ensures that the whitespace on your page is as intentional as the content.

#### Practical Example: Simple Spacing Scale

```css
/* Define your spacing tokens (often related to font-size-base) */
:root {
  --spacing-xs: 0.25rem; /* ~4px */
  --spacing-sm: 0.5rem;  /* ~8px */
  --spacing-base: 1rem;  /* ~16px */
  --spacing-md: 1.5rem;  /* ~24px */
  --spacing-lg: 2rem;    /* ~32px */
}

/* Usage is shown in the typography example above */
```

### Practice Task

1.  Create a new HTML file with a few headings (`h1`, `h2`, `h3`) and paragraphs.
2.  In a separate CSS file, define a set of `--font-size-*` and `--spacing-*` CSS custom properties (variables) in the `:root` selector. Aim for at least 4-5 values in each scale.
3.  Apply these variables to your HTML elements. For example, make `h1` use your largest font size and `p` use your base font size. Use spacing variables for margins between elements.
4.  Experiment by changing values in your CSS variables and observe how the layout updates.

### Self-Check Questions

*   What are two benefits of using a typography and spacing scale?
*   How does using `rem` units for your scale values improve accessibility and scalability compared to fixed `px` values?
*   If you wanted to make all the spacing on your page slightly larger, what part of your CSS would you modify?

## Supports

- [[skills/computing/web-mobile/frontend-development/css/microskills/typography-and-spacing-scale|Typography and spacing scale]]
