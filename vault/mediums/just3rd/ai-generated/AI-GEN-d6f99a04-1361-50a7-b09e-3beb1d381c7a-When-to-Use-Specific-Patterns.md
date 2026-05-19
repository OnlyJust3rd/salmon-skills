---
type: "medium"
title: "When to Use Specific Design Patterns"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/software-engineering/design-patterns/microskills/when-to-use-specific-patterns|When to Use Specific Patterns]]"
---
# When to Use Specific Design Patterns

Understanding design patterns is one thing; knowing *when* to apply them is crucial for effective software design. This lesson focuses on recognizing the specific recurring problems that individual design patterns are designed to solve.

## The Importance of Context

Design patterns are not one-size-fits-all solutions. Each pattern addresses a particular set of challenges in object-oriented design. Applying the wrong pattern can lead to unnecessary complexity, reduced flexibility, or even incorrect behavior. The key is to identify the problem first, then select the pattern that best fits.

Let's explore a few common scenarios and the patterns that often apply.

## Scenario 1: Creating Objects Without Knowing Their Concrete Classes

Imagine you're building a system that needs to create different types of graphical user interface (GUI) elements (like buttons, checkboxes, or windows). The exact type of element to create often depends on the operating system or look-and-feel theme being used. You don't want your core application logic to be tightly coupled to specific GUI implementations.

**Problem:** How to create families of related or dependent objects without specifying their concrete classes?

**Pattern:** **Abstract Factory**

The Abstract Factory pattern provides an interface for creating families of related or dependent objects without specifying their concrete classes. It defines an interface for creating an abstract product, and concrete factories implement this interface to create concrete products.

**When to Use Abstract Factory:**

*   When a system should be independent of how its products are created, composed, and represented.
*   When a system should be configured with one of many families of products.
*   When a family of related product objects is designed to work together, and you need to enforce this constraint.
*   When you want to provide a library of components without exposing their implementation details.

## Scenario 2: Delegating Responsibility for Object Creation

Consider a scenario where a class needs to create instances of another class, but it's more flexible if the subclass decides which specific class to instantiate. For example, a `Document` class might need to create `Page` objects, but different types of `Document` (like `ReportDocument` or `LetterDocument`) might create different kinds of `Page` (`ReportPage`, `LetterPage`).

**Problem:** How to define an interface for creating an object, but let subclasses decide which class to instantiate?

**Pattern:** **Factory Method**

The Factory Method pattern defines an interface for creating an object, but allows subclasses to decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.

**When to Use Factory Method:**

*   When a class can't anticipate the class of objects it must create.
*   When a class wants its subclasses to specify the objects it creates.
*   When you want to decouple the client code from the concrete implementation classes it uses.

## Practice Task

Imagine you are designing a system for an online store that sells different types of products: `PhysicalProduct` and `DigitalProduct`. Each product type has different shipping requirements.

1.  **Physical Product:** Needs to calculate shipping costs based on weight and destination.
2.  **Digital Product:** Does not have shipping costs; delivery is instant.

Which design pattern would be most suitable for creating these different product types and their associated behaviors, particularly if you anticipate adding more product types (e.g., `ServiceProduct`) in the future? Explain your reasoning, focusing on the recurring design problem you are solving.

## Self-Check Questions

1.  If you need to create a whole *family* of related objects (like buttons, scrollbars, and windows for a specific operating system's look-and-feel), which pattern are you likely looking for?
2.  You have a base class `ReportGenerator` that needs to produce reports, but subclasses like `PdfReportGenerator` and `HtmlReportGenerator` should be responsible for creating the actual report output streams. Which pattern fits this scenario?
3.  What is the primary difference in the "creation delegation" aspect between the Factory Method and Abstract Factory patterns?

## Supports

- [[skills/programming/software-engineering/design-patterns/microskills/when-to-use-specific-patterns|When to Use Specific Patterns]]
