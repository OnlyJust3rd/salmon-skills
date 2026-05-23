---
type: medium
title: Understanding Structural Typing in TypeScript
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[structural-typing|structural-typing]]"
learning-time-in-minutes: 3
---
# Understanding Structural Typing in TypeScript

In TypeScript, understanding how types are checked is fundamental. One of the most distinctive features is **structural typing**. This lesson will explore what structural typing means and how TypeScript uses it to compare objects.

## What is Structural Typing?

Unlike languages that use nominal typing (where types are compared based on their names), TypeScript uses **structural typing**. In a structural typing system, two types are considered compatible if they have the same *structure*, regardless of their declared names.

Think of it like this: If you're looking for a tool, and you need something that can hammer nails, you don't strictly care if it's called a "Hammer" or a "Nail Driver." If it has a head and a handle and can effectively drive nails, it fulfills your structural need. TypeScript applies a similar logic to its types.

## How TypeScript Compares Shapes

TypeScript checks if an object *has* the properties and methods that another type *expects*. If an object contains all the required members, even if it has extra members, it's considered compatible.

Let's illustrate with an example.

### Example 1: Basic Compatibility

Imagine we have an interface defining a shape with a `name` and `age`.

```typescript
interface Person {
  name: string;
  age: number;
}

function greet(person: Person) {
  console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
}
```

Now, let's create an object and see if it can be passed to the `greet` function.

```typescript
const student = {
  name: "Alice",
  age: 20,
  grade: "A" // This object has an extra property
};

greet(student); // This works perfectly!
```

**Why does this work?**

The `student` object has both a `name` (which is a string) and an `age` (which is a number). These are the exact members that the `Person` interface requires. The fact that `student` also has a `grade` property is irrelevant for the `greet` function, as it doesn't need that information. TypeScript structurally matches the `student` object to the `Person` interface.

### Example 2: Missing Properties

What happens if an object is missing a required property?

```typescript
const anonymousPerson = {
  age: 30
};

// greet(anonymousPerson); // This will cause a TypeScript error
```

**Error Message (Conceptual):**

```
Argument of type '{ age: number; }' is not assignable to parameter of type 'Person'.
  Property 'name' is missing in type '{ age: number; }' but required in type 'Person'.
```

**Explanation:**

The `anonymousPerson` object is missing the `name` property, which is **required** by the `Person` interface. Even though it has the `age` property, the structural mismatch prevents it from being used where a `Person` is expected.

### Example 3: Methods and Functions

Structural typing isn't just for properties; it applies to methods as well.

```typescript
interface CanSpeak {
  speak(message: string): void;
}

function makeSomeoneSpeak(speaker: CanSpeak) {
  speaker.speak("TypeScript is cool!");
}

const robot = {
  name: "Bot-1",
  speak: (text: string) => {
    console.log(`[Robot]: ${text}`);
  }
};

makeSomeoneSpeak(robot); // Works!
```

**Explanation:**

The `robot` object has a `speak` method that matches the signature required by `CanSpeak`. The `robot` also has a `name` property, but since `CanSpeak` doesn't require a `name`, it's ignored for the purpose of type checking within `makeSomeoneSpeak`.

### Example 4: Interfaces with More Members

What if the object *implementing* the interface has *more* methods or properties than the interface itself?

```typescript
interface Greeter {
  greet(): string;
}

class FormalGreeter {
  greet() {
    return "Greetings!";
  }

  farewell() {
    return "Farewell!";
  }
}

const formalGreeterInstance = new FormalGreeter();

function callGreeter(greeter: Greeter) {
  console.log(greeter.greet());
}

callGreeter(formalGreeterInstance); // Works!
```

**Explanation:**

The `FormalGreeter` class has both a `greet` method (matching the `Greeter` interface) and a `farewell` method. When `formalGreeterInstance` is passed to `callGreeter`, TypeScript only checks if the `greeter` parameter *has* a `greet()` method. The `farewell()` method is extra but doesn't prevent the structural match.

## Key Takeaways

*   **Shape Matters:** TypeScript compares types based on their *structure* (the properties and methods they contain), not their names.
*   **"Duck Typing":** Often referred to as "duck typing" – "If it walks like a duck and it quacks like a duck, then it must be a duck." If an object has the necessary members, it can be treated as that type.
*   **Extra Members are Okay:** An object can have more properties or methods than an interface requires and still be compatible.
*   **Missing Members are Not:** An object *must* have all the properties and methods defined by an interface to be compatible.

Understanding structural typing is crucial for writing flexible and maintainable TypeScript code. It allows for easier integration of different code modules and libraries, as well as more natural object composition.

## Supports

- [[structural-typing|Structural typing]]
