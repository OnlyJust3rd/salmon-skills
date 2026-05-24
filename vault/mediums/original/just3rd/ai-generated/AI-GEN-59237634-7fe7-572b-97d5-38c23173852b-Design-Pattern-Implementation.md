---
type: "medium"
title: "Implementing the Strategy Pattern"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/software-engineering/software-design/design-patterns/microskills/design-pattern-implementation|design-pattern-implementation]]"
learning-time-in-minutes: 3
---
# Implementing the Strategy Pattern

This lesson focuses on the practical application of a specific design pattern: the Strategy Pattern. We'll explore how to implement it to solve problems where you have a family of algorithms, encapsulate each one, and make them interchangeable.

## What is the Strategy Pattern?

The Strategy Pattern is a behavioral design pattern that allows you to define a family of algorithms, encapsulate each one into a separate class, and make their objects interchangeable. This means you can switch between different algorithms at runtime without changing the client code that uses them.

Think of it like choosing different modes of transportation. You might have a "Drive" strategy, a "Cycle" strategy, or a "PublicTransport" strategy. The core task is "travel," but the way you achieve it changes based on the strategy you choose.

## When to Use the Strategy Pattern

*   When you have multiple related algorithms or behaviors that can be easily interchanged.
*   When you want to avoid complex conditional statements (like long `if-else` or `switch` blocks) that select different behaviors.
*   When you want to hide the implementation details of different algorithms from the client.

## Practical Example: Payment Processing

Imagine an e-commerce application that needs to handle payments. Different payment methods (Credit Card, PayPal, Bank Transfer) require distinct processing logic.

**Scenario:** A user clicks "Pay Now". The application needs to invoke the correct payment processing logic based on the user's selected payment method.

Here's how you might implement this using the Strategy Pattern in pseudocode:

```
// The Strategy Interface
interface PaymentStrategy {
  void pay(int amount);
}

// Concrete Strategies
class CreditCardPayment implements PaymentStrategy {
  private String cardNumber;
  private String expiryDate;
  private String cvv;

  // Constructor to initialize card details

  @Override
  public void pay(int amount) {
    // Logic to process credit card payment
    System.out.println("Paid " + amount + " using Credit Card.");
    // ... actual credit card processing API calls ...
  }
}

class PayPalPayment implements PaymentStrategy {
  private String emailId;
  private String password;

  // Constructor to initialize PayPal details

  @Override
  public void pay(int amount) {
    // Logic to process PayPal payment
    System.out.println("Paid " + amount + " using PayPal.");
    // ... actual PayPal API calls ...
  }
}

// The Context
class ShoppingCart {
  private PaymentStrategy paymentStrategy;

  public void setPaymentStrategy(PaymentStrategy paymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }

  public void checkout(int amount) {
    if (paymentStrategy == null) {
      System.out.println("Please select a payment method.");
      return;
    }
    paymentStrategy.pay(amount);
  }
}

// Client Code
public class ECommerceApp {
  public static void main(String[] args) {
    ShoppingCart cart = new ShoppingCart();
    int orderAmount = 100;

    // User selects Credit Card
    PaymentStrategy creditCard = new CreditCardPayment("1234-5678-9012-3456", "12/25", "123");
    cart.setPaymentStrategy(creditCard);
    cart.checkout(orderAmount); // Output: Paid 100 using Credit Card.

    // User switches to PayPal
    PaymentStrategy payPal = new PayPalPayment("user@example.com", "password123");
    cart.setPaymentStrategy(payPal);
    cart.checkout(orderAmount); // Output: Paid 100 using PayPal.
  }
}
```

In this example:
*   `PaymentStrategy` is the interface defining the `pay` method.
*   `CreditCardPayment` and `PayPalPayment` are concrete implementations of the strategy.
*   `ShoppingCart` is the context that holds a reference to a `PaymentStrategy` and delegates the payment operation to it. The client code can easily swap `creditCard` for `payPal` without modifying the `ShoppingCart` class.

## Practice Task

Imagine you are building a simple text editor that supports different text formatting styles (e.g., Bold, Italic, Underline).

1.  Create an interface named `TextFormatter` with a method `format(String text)`.
2.  Create three concrete classes implementing `TextFormatter`:
    *   `BoldFormatter`: Appends `<b>` and `</b>` around the text.
    *   `ItalicFormatter`: Appends `<i>` and `</i>` around the text.
    *   `UnderlineFormatter`: Appends `<u>` and `</u>` around the text.
3.  Create a `TextEditor` class that has a `TextFormatter` field. It should have a method `applyFormatting(String text)` that calls the `format` method of its current `TextFormatter`.
4.  In a `main` method, create a `TextEditor` instance.
5.  Apply both bold and italic formatting to a sample text, demonstrating how you can switch the formatter.

## Self-Check Questions

1.  What is the primary benefit of using the Strategy Pattern when dealing with multiple similar algorithms?
2.  In the `PaymentProcessing` example, which class represents the "context"?
3.  If you needed to add a new payment method, like "Bitcoin," how would the Strategy Pattern help you do that without significant changes to existing code?
4.  When might the Strategy Pattern be overkill for a problem?

## Supports

- [[skills/computing/software-engineering/software-design/design-patterns/microskills/design-pattern-implementation|Design Pattern Implementation]]
