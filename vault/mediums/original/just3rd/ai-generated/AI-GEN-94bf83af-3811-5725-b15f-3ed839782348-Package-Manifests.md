---
type: "medium"
title: "Package Manifests: Your Project's Identity Card"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/web-mobile/frontend-development/client-side-web-tooling/microskills/package-manifests|package-manifests]]"
learning-time-in-minutes: 3
---
# Package Manifests: Your Project's Identity Card

In modern client-side web development, managing the libraries and tools your project relies on is crucial. Package manifests are like the identity cards for your project's dependencies and scripts. They hold essential metadata, telling developers and tooling alike what's needed and how to manage it.

## What are Package Manifests?

A package manifest is a file that describes a software package. For client-side web development, this typically means a file that lists:

*   **Dependencies:** The external libraries or packages your project needs to function (e.g., a UI framework like React, a utility library like Lodash).
*   **Scripts:** Commands that can be run to perform common tasks like building, testing, or starting your development server.
*   **Project Information:** Details like the package name, version, author, and license.

These manifests are fundamental to package managers like npm and Yarn, enabling them to understand, download, install, and manage the packages your project uses.

## The `package.json` File

The most common package manifest file in the JavaScript ecosystem is `package.json`. If you've ever initialized a new Node.js project or a front-end project using a tool like Create React App, you've likely encountered this file.

Here's a simplified example of a `package.json` file:

```json
{
  "name": "my-awesome-app",
  "version": "1.0.0",
  "description": "A fantastic web application.",
  "main": "index.js",
  "scripts": {
    "start": "node server.js",
    "build": "webpack --mode production",
    "test": "jest"
  },
  "keywords": ["web", "app", "frontend"],
  "author": "Jane Doe <jane.doe@example.com>",
  "license": "MIT",
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "webpack": "^5.75.0",
    "webpack-cli": "^5.0.0",
    "jest": "^29.3.1"
  }
}
```

**Key Sections:**

*   **`name`**: The unique name of your project.
*   **`version`**: The current version of your project.
*   **`description`**: A brief explanation of what your project does.
*   **`scripts`**: This is where you define custom commands. For instance, `npm start` would execute `node server.js`. These scripts are often tied to build tools.
*   **`dependencies`**: Packages your application needs to run in production.
*   **`devDependencies`**: Packages required only during development and build processes (like testing frameworks or bundlers).

## Practical Scenario

Imagine you're starting a new React project. You initialize it with `npm init -y` (or `yarn init -y`). This creates a basic `package.json`. Then, you want to add React. You run `npm install react react-dom`. Your `package.json` file will automatically update to include `react` and `react-dom` under the `dependencies` section, along with their specific versions.

Later, you decide to use Webpack to bundle your code. You install it as a development dependency: `npm install --save-dev webpack webpack-cli`. Now, Webpack appears in the `devDependencies` section. You can then add a build script like `"build": "webpack --mode production"` to your `scripts` object, allowing you to run `npm run build` to bundle your application.

## Practice Task

1.  **Create a new project directory** on your computer.
2.  **Open your terminal or command prompt** and navigate into that directory.
3.  **Initialize a new npm project** by running `npm init -y`.
4.  **Inspect the generated `package.json` file.** What information does it contain?
5.  **Install a simple package** like `lodash` as a dependency by running `npm install lodash`.
6.  **Look at your `package.json` file again.** How has it changed? What happened to the `dependencies` section?
7.  **Install a package like `nodemon`** as a development dependency by running `npm install --save-dev nodemon`.
8.  **Examine your `package.json` file a third time.** Where did `nodemon` go?

## Self-Check Questions

1.  What is the primary purpose of a package manifest file like `package.json`?
2.  What is the difference between `dependencies` and `devDependencies` in `package.json`?
3.  Give an example of a script you might find in the `scripts` section and what running that script might achieve.

## Supports

- [[skills/computing/web-mobile/frontend-development/client-side-web-tooling/microskills/package-manifests|Package Manifests]]
