---
type: "medium"
title: "Implementing Recurring Design Problem Solutions"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/software-engineering/design-patterns/microskills/recurring-design-problem-solutions|Recurring Design Problem Solutions]]"
---
# Implementing Recurring Design Problem Solutions

When building software, you'll encounter similar design challenges repeatedly. Instead of reinventing the wheel each time, design patterns offer pre-defined, well-tested solutions. This lesson focuses on *applying* these solutions to common design problems.

## The Problem: Managing Object Creation

Imagine you have a system where you need to create complex objects. Sometimes, you want to control precisely how these objects are built, step by step. You might also want different variations of the same object to be created using the same construction process.

Consider a scenario where you're building a game. You need to create different types of characters, each with unique attributes like weapons, armor, and special abilities. The process of equipping a warrior might be different from equipping a mage, but the core idea of "equipping" remains.

## The Solution: The Builder Pattern

The **Builder Pattern** is a creational design pattern that separates the construction of a complex object from its representation. This allows the same construction process to create different representations.

**How it works:**

1.  **Builder Interface/Abstract Class:** Defines an abstract method for creating parts of a product object.
2.  **Concrete Builders:** Implement the Builder interface to produce and assemble parts of the product. Each concrete builder constructs and assembles parts for a specific type of product.
3.  **Product:** The complex object that is being constructed.
4.  **Director (Optional):** A class that uses a Builder interface to construct a product. It orchestrates the building process.

## Practical Example: Character Creation in a Game

Let's say we want to build different character types (Warrior, Mage, Archer) with specific equipment.

**Product:** `Character`

```java
class Character {
    String weapon;
    String armor;
    String spell;

    public void setWeapon(String weapon) { this.weapon = weapon; }
    public void setArmor(String armor) { this.armor = armor; }
    public void setSpell(String spell) { this.spell = spell; }

    @Override
    public String toString() {
        return "Character [weapon=" + weapon + ", armor=" + armor + ", spell=" + spell + "]";
    }
}
```

**Builder Interface:** `CharacterBuilder`

```java
abstract class CharacterBuilder {
    protected Character character = new Character();

    public abstract void buildWeapon();
    public abstract void buildArmor();
    public abstract void buildSpell();

    public Character getCharacter() {
        return character;
    }
}
```

**Concrete Builders:** `WarriorBuilder` and `MageBuilder`

```java
class WarriorBuilder extends CharacterBuilder {
    @Override
    public void buildWeapon() {
        character.setWeapon("Sword");
    }

    @Override
    public void buildArmor() {
        character.setArmor("Plate Mail");
    }

    @Override
    public void buildSpell() {
        character.setSpell("None"); // Warriors don't use spells
    }
}

class MageBuilder extends CharacterBuilder {
    @Override
    public void buildWeapon() {
        character.setWeapon("Staff");
    }

    @Override
    public void buildArmor() {
        character.setArmor("Robe");
    }

    @Override
    public void buildSpell() {
        character.setSpell("Fireball");
    }
}
```

**Director (to orchestrate):** `CharacterDirector`

```java
class CharacterDirector {
    private CharacterBuilder builder;

    public CharacterDirector(CharacterBuilder builder) {
        this.builder = builder;
    }

    public Character constructCharacter() {
        builder.buildWeapon();
        builder.buildArmor();
        builder.buildSpell();
        return builder.getCharacter();
    }
}
```

**Usage:**

```java
// Build a Warrior
CharacterBuilder warriorBuilder = new WarriorBuilder();
CharacterDirector director = new CharacterDirector(warriorBuilder);
Character warrior = director.constructCharacter();
System.out.println(warrior); // Output: Character [weapon=Sword, armor=Plate Mail, spell=None]

// Build a Mage
CharacterBuilder mageBuilder = new MageBuilder();
director = new CharacterDirector(mageBuilder); // Reuse director with new builder
Character mage = director.constructCharacter();
System.out.println(mage); // Output: Character [weapon=Staff, armor=Robe, spell=Fireball]
```

Notice how the `constructCharacter` method in the `Director` remains the same, but by switching the `CharacterBuilder`, we get different `Character` representations.

## When to Use the Builder Pattern:

*   When the construction of an object is complex and involves many steps.
*   When you want to create different representations of an object using the same construction process.
*   When you want to isolate the construction logic from the object's business logic.

## Practice Task

Imagine you're building a pizza ordering system. You need to create different types of pizzas (Margherita, Pepperoni, Veggie) with various toppings, crusts, and sauces.

Implement the Builder pattern to construct these pizzas.

1.  Define a `Pizza` class.
2.  Create a `PizzaBuilder` abstract class.
3.  Create concrete builders for `MargheritaPizzaBuilder`, `PepperoniPizzaBuilder`, and `VeggiePizzaBuilder`.
4.  (Optional) Create a `PizzaDirector` to manage the building process.

## Self-Check Questions

1.  What is the primary benefit of using the Builder pattern when creating complex objects?
2.  In the pizza example, what would be the `Product`, `Builder`, and `Concrete Builders`?
3.  When might you *not* need the `Director` class in the Builder pattern?

## Supports

- [[skills/programming/software-engineering/design-patterns/microskills/recurring-design-problem-solutions|Recurring Design Problem Solutions]]
