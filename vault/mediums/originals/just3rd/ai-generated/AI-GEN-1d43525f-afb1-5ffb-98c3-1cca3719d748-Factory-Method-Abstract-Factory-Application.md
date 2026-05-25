---
type: "medium"
title: "Applying Factory Method and Abstract Factory"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/software-engineering/software-design/design-patterns/microskills/factory-method-abstract-factory-application|factory-method-abstract-factory-application]]"
learning-time-in-minutes: 3
---
# Applying Factory Method and Abstract Factory

When we design software, we often encounter situations where we need to create objects, but we don't want to tie our code directly to the specific concrete classes of those objects. This is where factory-style design patterns come in handy. They help us abstract the object creation process, making our code more flexible and easier to extend.

## What are Factory Patterns?

Factory patterns, like the **Factory Method** and **Abstract Factory**, are creational design patterns. Their primary goal is to decouple the client code (the code that needs an object) from the concrete implementation of how that object is created.

*   **Factory Method:** Defines an interface for creating an object, but lets subclasses decide which class to instantiate. It's a single factory method.
*   **Abstract Factory:** Provides an interface for creating families of related or dependent objects without specifying their concrete classes. It's a collection of factory methods.

## When to Use Factory Patterns?

You should consider using factory patterns when:

*   A class cannot anticipate the class of objects it must create.
*   A class wants its subclasses to specify the objects it creates.
*   You need to create families of related objects, and you want to ensure they are compatible.
*   You want to isolate the creation logic from the rest of your application.

## Practical Scenario: A Game Character Creator

Imagine you're building a role-playing game (RPG). You have different types of characters (Warrior, Mage, Rogue), and each character type has different associated equipment (Swords, Staffs, Daggers). You want to be able to create characters and their corresponding starting equipment easily.

### Using Factory Method for Character Creation

Let's start with the Factory Method to create different types of characters.

First, define a `Character` abstract class or interface:

```python
from abc import ABC, abstractmethod

class Character(ABC):
    @abstractmethod
    def attack(self):
        pass

class Warrior(Character):
    def attack(self):
        return "Swinging a mighty sword!"

class Mage(Character):
    def attack(self):
        return "Casting a powerful spell!"

class Rogue(Character):
    def attack(self):
        return "Striking with a swift dagger!"
```

Now, let's create a `CharacterFactory` with a `create_character` method (the Factory Method):

```python
class CharacterFactory(ABC):
    @abstractmethod
    def create_character(self) -> Character:
        pass

class WarriorFactory(CharacterFactory):
    def create_character(self) -> Character:
        return Warrior()

class MageFactory(CharacterFactory):
    def create_character(self) -> Character:
        return Mage()

class RogueFactory(CharacterFactory):
    def create_character(self) -> Character:
        return Rogue()
```

The client code can now use these factories to create characters without knowing the concrete `Warrior`, `Mage`, or `Rogue` classes directly.

```python
def client_code(factory: CharacterFactory):
    character = factory.create_character()
    print(f"Created character, its attack is: {character.attack()}")

print("Creating a Warrior:")
client_code(WarriorFactory())

print("\nCreating a Mage:")
client_code(MageFactory())
```

### Extending with Abstract Factory for Character and Equipment

Now, let's use Abstract Factory to create families of related objects: a character *and* its primary weapon.

First, define interfaces for weapons:

```python
class Weapon(ABC):
    @abstractmethod
    def strike(self):
        pass

class Sword(Weapon):
    def strike(self):
        return "clash of steel"

class Staff(Weapon):
    def strike(self):
        return "crackling energy"

class Dagger(Weapon):
    def strike(self):
        return "silent pierce"
```

Next, define the `Character` interface as before, and the concrete character classes:

```python
# Character classes (Warrior, Mage, Rogue) remain the same from the Factory Method example.
```

Now, we define the `HeroFactory` (Abstract Factory) with methods to create both characters and weapons:

```python
class HeroFactory(ABC):
    @abstractmethod
    def create_character(self) -> Character:
        pass

    @abstractmethod
    def create_weapon(self) -> Weapon:
        pass

class WarriorHeroFactory(HeroFactory):
    def create_character(self) -> Character:
        return Warrior()

    def create_weapon(self) -> Weapon:
        return Sword()

class MageHeroFactory(HeroFactory):
    def create_character(self) -> Character:
        return Mage()

    def create_weapon(self) -> Weapon:
        return Staff()

class RogueHeroFactory(HeroFactory):
    def create_character(self) -> Character:
        return Rogue()

    def create_weapon(self) -> Weapon:
        return Dagger()
```

The client code now uses the Abstract Factory to create a character and its weapon together:

```python
def game_creation(factory: HeroFactory):
    character = factory.create_character()
    weapon = factory.create_weapon()
    print(f"Created a {type(character).__name__} with a {type(weapon).__name__}.")
    print(f"Character's attack: {character.attack()} and Weapon's strike: {weapon.strike()}")

print("Creating a Warrior Hero:")
game_creation(WarriorHeroFactory())

print("\nCreating a Mage Hero:")
game_creation(MageHeroFactory())
```

Notice how the `WarriorHeroFactory` consistently produces `Warrior` characters and `Sword` weapons, maintaining compatibility within that family.

## Practice Task

Implement a simple e-commerce system where you need to create different types of products (e.g., Electronics, Books) and their associated shipping methods (e.g., Express, Standard).

1.  Define abstract classes for `Product` and `ShippingMethod`.
2.  Create concrete classes for `Laptop` (Electronics) and `Novel` (Book).
3.  Create concrete classes for `ExpressShipping` and `StandardShipping`.
4.  Create an Abstract Factory called `ProductShippingFactory` with methods `create_product()` and `create_shipping_method()`.
5.  Create concrete factories: `ElectronicsFactory` (for Laptops and Express Shipping) and `BookFactory` (for Novels and Standard Shipping).
6.  Write client code that uses these factories to create and describe a product and its shipping.

## Self-Check Questions

1.  What is the main benefit of using Factory Method over directly instantiating a class?
2.  When would you choose Abstract Factory over Factory Method?
3.  In the game character example, what problem does using `WarriorHeroFactory` solve compared to manually creating `Warrior()` and `Sword()` in different parts of the code?
4.  How do factory patterns help in making code more adaptable to new product types or shipping methods?

## Supports

- [[skills/computing/software-engineering/software-design/design-patterns/microskills/factory-method-abstract-factory-application|Factory Method / Abstract Factory Application]]
