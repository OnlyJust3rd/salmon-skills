---
type: "medium"
title: "Common Static Analysis Tools"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/software-engineering/testing-quality/quality-assurance/microskills/common-static-analysis-tools|common-static-analysis-tools]]"
learning-time-in-minutes: 4
---
# Common Static Analysis Tools

Static analysis is a powerful technique for improving software quality by examining code without executing it. This lesson focuses on understanding some of the commonly used tools that perform this analysis, helping you identify potential issues early in the development lifecycle.

## Why Know About These Tools?

As you work towards the outcome of describing the benefits of static analysis, recognizing specific tools provides concrete examples and a deeper understanding of how these benefits are realized. Knowing these tools empowers you to:

*   **Identify and understand existing tools:** If you're joining a team, you'll recognize the tools they use.
*   **Choose appropriate tools:** For new projects, you'll have a starting point for selection.
*   **Appreciate the scope of static analysis:** Seeing the variety of tools highlights the many aspects of code quality that can be checked.

## Categories of Static Analysis Tools

Static analysis tools can be broadly categorized based on the primary aspect of code quality they focus on. While some tools overlap, this categorization helps in understanding their core purpose.

### 1. Linters

Linters are designed to identify stylistic errors, potential bugs, and suspicious constructs in code. They enforce coding standards and conventions, promoting consistency and readability.

*   **What they check:**
    *   Syntax errors that might slip past compilers.
    *   Unused variables or imports.
    *   Code formatting issues (indentation, spacing, line length).
    *   Potential logical errors like using an uninitialized variable.
    *   Adherence to style guides (e.g., PEP 8 for Python, Google Java Style Guide).

*   **Examples:**
    *   **ESLint:** For JavaScript and TypeScript. Highly configurable and supports a wide range of plugins.
    *   **Pylint:** For Python. Comprehensive analysis of code quality, including style, error detection, and refactoring suggestions.
    *   **Checkstyle:** For Java. Focuses on coding standards and style.
    *   **RuboCop:** For Ruby. Enforces a community-driven Ruby style guide.

### 2. Static Code Analyzers (Security-Focused)

These tools specifically look for security vulnerabilities in the codebase. They can detect common security flaws that might be exploited by attackers.

*   **What they check:**
    *   SQL injection vulnerabilities.
    *   Cross-site scripting (XSS) flaws.
    *   Insecure direct object references.
    *   Hardcoded secrets (API keys, passwords).
    *   Use of deprecated or insecure functions.

*   **Examples:**
    *   **SonarQube:** A multi-language platform that checks for bugs, vulnerabilities, and code smells. It provides a dashboard for visualizing code quality metrics.
    *   **Fortify Static Code Analyzer (SCA):** A commercial tool that scans for a wide range of security vulnerabilities across many programming languages.
    *   **Bandit:** A security linter for Python.
    *   **SAST tools integrated into platforms like GitHub (e.g., CodeQL) or GitLab.**

### 3. Complexity and Maintainability Tools

These tools analyze code to measure its complexity and assess how easy it will be to understand, modify, and maintain.

*   **What they check:**
    *   **Cyclomatic Complexity:** Measures the number of linearly independent paths through a program's source code. High complexity can indicate difficult-to-test and understand code.
    *   **Code Duplication:** Identifies identical or very similar code blocks that could be refactored into reusable functions or classes.
    *   **Deeply Nested Structures:** Flags code with excessive levels of indentation, making it hard to follow.

*   **Examples:**
    *   **Understand:** A commercial code comprehension tool that supports many languages and provides detailed metrics and visualizations.
    *   **PMD:** A Java source code analyzer that finds common programming errors, unused code, and complexity issues. It also has support for other languages like JavaScript and Apex.
    *   **Metrics libraries often integrated into build systems.**

### 4. Type Checkers

Primarily for dynamically typed languages, type checkers analyze code to find type errors before runtime. This significantly reduces a class of bugs that would otherwise only surface when the code is executed.

*   **What they check:**
    *   Mismatched types in function calls.
    *   Incorrect assignment of values to variables.
    *   Usage of properties or methods that don't exist on an object.

*   **Examples:**
    *   **TypeScript Compiler (tsc):** For JavaScript projects, providing static typing capabilities.
    *   **MyPy:** A static type checker for Python that supports type hints.
    *   **Flow:** A static type checker for JavaScript developed by Facebook.

## How to Think About These Tools

When you encounter these tools, consider them as automated reviewers of your code. They catch common mistakes and enforce good practices consistently, something a human reviewer might miss or not apply uniformly across a large project.

*   **Integration:** Many of these tools can be integrated into your Integrated Development Environment (IDE) for real-time feedback or into your Continuous Integration/Continuous Deployment (CI/CD) pipeline to automatically check code before deployment.
*   **Configuration:** Most tools are highly configurable. You can enable or disable specific rules, adjust severity levels, and tailor them to your project's needs and coding standards.

By familiarizing yourself with these common static analysis tools, you gain a practical understanding of how various aspects of software quality are systematically checked and improved.

## Supports

- [[skills/computing/software-engineering/testing-quality/quality-assurance/microskills/common-static-analysis-tools|Common Static Analysis Tools]]
