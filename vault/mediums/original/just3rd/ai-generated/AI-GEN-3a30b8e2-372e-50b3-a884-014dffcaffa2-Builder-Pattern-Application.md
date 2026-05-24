---
type: "medium"
title: "Applying the Builder Pattern"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/software-engineering/software-design/design-patterns/microskills/builder-pattern-application|builder-pattern-application]]"
learning-time-in-minutes: 3
---
# Applying the Builder Pattern

This lesson focuses on applying the Builder pattern to construct complex objects in a step-by-step manner. This is a practical application within the broader skill of applying design patterns to solve recurring design problems.

## What is the Builder Pattern?

The Builder pattern is a creational design pattern that separates the construction of a complex object from its representation. This means you can use the same construction process to create different representations of the same object. It's particularly useful when an object has many optional parameters or when the construction process is lengthy and involves multiple steps.

Instead of having a constructor with numerous arguments (which can be error-prone and hard to read), the Builder pattern uses a separate `Builder` class. This `Builder` class has methods to set individual attributes of the object being built, and a final method to create the object.

## When to Use the Builder Pattern

*   When an object has a large number of optional parameters.
*   When the construction process for an object is complex and involves multiple distinct steps.
*   When you want to create different representations of an object using the same construction process.
*   To avoid telescoping constructors (constructors that call each other with increasing numbers of parameters).

## Practical Example: Building a Computer

Imagine you're building a computer. A computer can have many different components: CPU, RAM, Storage, GPU, Power Supply, Case, Operating System, etc. Some of these are optional (e.g., a dedicated GPU might not be present in a basic workstation).

Here's how you might implement this using the Builder pattern in pseudocode:

```pseudocode
// The complex object to be built
class Computer {
    // Attributes
    CPU cpu;
    RAM ram;
    Storage storage;
    GPU gpu; // Optional
    PowerSupply powerSupply;
    String caseType;
    String os; // Optional

    // Private constructor, accessible only by the Builder
    private Computer(ComputerBuilder builder) {
        this.cpu = builder.cpu;
        this.ram = builder.ram;
        this.storage = builder.storage;
        this.gpu = builder.gpu;
        this.powerSupply = builder.powerSupply;
        this.caseType = builder.caseType;
        this.os = builder.os;
    }

    // Getters for attributes (omitted for brevity)

    // toString method for display
    toString() {
        // ... logic to display computer components
    }
}

// The Builder class
class ComputerBuilder {
    // Attributes matching the Computer class
    CPU cpu;
    RAM ram;
    Storage storage;
    GPU gpu;
    PowerSupply powerSupply;
    String caseType;
    String os;

    // Methods to set attributes
    setCPU(CPU cpu) {
        this.cpu = cpu;
        return this; // Allows for method chaining
    }

    setRAM(RAM ram) {
        this.ram = ram;
        return this;
    }

    setStorage(Storage storage) {
        this.storage = storage;
        return this;
    }

    setGPU(GPU gpu) {
        this.gpu = gpu;
        return this;
    }

    setPowerSupply(PowerSupply powerSupply) {
        this.powerSupply = powerSupply;
        return this;
    }

    setCaseType(String caseType) {
        this.caseType = caseType;
        return this;
    }

    setOS(String os) {
        this.os = os;
        return this;
    }

    // The build method that creates the Computer object
    build() {
        // Optional: Add validation here before creating the object
        // e.g., check if essential components like CPU and RAM are set
        return new Computer(this);
    }
}

// --- How to use it ---

// Build a Gaming PC
GamingPCBuilder = new ComputerBuilder()
    .setCPU(new CPU("Intel i9"))
    .setRAM(new RAM("32GB DDR4"))
    .setStorage(new Storage("1TB NVMe SSD"))
    .setGPU(new GPU("Nvidia RTX 4090"))
    .setPowerSupply(new PowerSupply("1000W Gold"))
    .setCaseType("Full Tower")
    .setOS("Windows 11")
    .build();

// Build a Basic Workstation
WorkstationBuilder = new ComputerBuilder()
    .setCPU(new CPU("AMD Ryzen 5"))
    .setRAM(new RAM("16GB DDR4"))
    .setStorage(new Storage("500GB SSD"))
    .setPowerSupply(new PowerSupply("550W Bronze"))
    .setCaseType("Mid Tower")
    .build(); // No GPU or OS set initially
```

Notice how the `ComputerBuilder` methods return `this`, allowing for a fluent, chained syntax. This makes the code very readable and easy to understand.

## Practice Task

Consider a `Pizza` object with attributes like `size` (string), `crust` (string), `sauce` (string), `cheese` (list of strings), `toppings` (list of strings), and `is_stuffed_crust` (boolean).

Implement the Builder pattern in your preferred programming language to construct `Pizza` objects. Create a builder class that allows setting each of these attributes and a `build()` method to create the `Pizza` object.

Then, write code to create two pizzas:
1.  A large Margherita pizza with thin crust, tomato sauce, mozzarella cheese, and basil topping.
2.  A medium custom pizza with deep-dish crust, alfredo sauce, cheddar and parmesan cheese, and pepperoni and mushroom toppings, with stuffed crust.

## Self-Check Questions

1.  What problem does the Builder pattern aim to solve compared to using a constructor with many parameters?
2.  In the Builder pattern, why is the constructor of the main object typically made private?
3.  How does the Builder pattern contribute to code readability and maintainability when constructing complex objects?

## Supports

- [[skills/computing/software-engineering/software-design/design-patterns/microskills/builder-pattern-application|Builder Pattern Application]]
