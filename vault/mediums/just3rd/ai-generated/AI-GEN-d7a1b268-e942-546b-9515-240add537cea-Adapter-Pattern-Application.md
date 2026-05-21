---
type: "medium"
title: "Applying the Adapter Pattern"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/software-engineering/design-patterns/microskills/adapter-pattern-application|adapter-pattern-application]]"
---
# Applying the Adapter Pattern

This lesson focuses on using the Adapter design pattern to integrate systems with incompatible interfaces. You'll learn to select and apply this pattern to make different software components work together seamlessly.

## What is the Adapter Pattern?

The Adapter pattern is a structural design pattern that allows objects with incompatible interfaces to collaborate. It acts as a wrapper or a bridge, transforming one interface into another that a client expects. Think of it like a universal travel adapter that lets you plug your device into any electrical outlet, regardless of its shape.

In software, you'll often encounter situations where you need to use a class or library that has a different method signature or functionality than what your existing code expects. Instead of rewriting the existing code or the incompatible class, you can use the Adapter pattern.

**Key Participants:**

*   **Target:** The interface that the client code expects.
*   **Adaptee:** The existing class with a compatible interface.
*   **Adapter:** The class that translates the Adaptee's interface into the Target's interface.

## Practical Scenario: Integrating a New Payment Gateway

Imagine you're building an e-commerce application. Your application currently uses a `PaymentProcessor` class that expects payment details via a `processPayment(amount: double, cardNumber: String)` method.

Now, you need to integrate a new payment gateway, "LegacyPaymentSystem," which has a `charge(transactionId: String, paymentDetails: PaymentInfo)` method. The `PaymentInfo` class is a complex object containing various details, and the `LegacyPaymentSystem` uses a `transactionId` instead of a simple amount.

Here's how you can use the Adapter pattern:

**1. Define the Target Interface:**

This is the interface your existing `PaymentProcessor` expects.

```java
// Target Interface
interface PaymentTarget {
    void processPayment(double amount, String cardNumber);
}
```

**2. Define the Adaptee Class:**

This is the new payment gateway you want to integrate.

```java
// Adaptee Class
class LegacyPaymentSystem {
    // This class has an incompatible interface
    public void charge(String transactionId, PaymentInfo details) {
        System.out.println("Legacy Payment System: Charging transaction " + transactionId + " with amount " + details.getAmount());
        // ... actual payment processing logic ...
    }
}

class PaymentInfo {
    private String cardNumber;
    private double amount;
    private String customerId;

    public PaymentInfo(String cardNumber, double amount, String customerId) {
        this.cardNumber = cardNumber;
        this.amount = amount;
        this.customerId = customerId;
    }

    public String getCardNumber() { return cardNumber; }
    public double getAmount() { return amount; }
    public String getCustomerId() { return customerId; }
}
```

**3. Create the Adapter:**

This adapter class will implement the `PaymentTarget` interface and will hold an instance of the `LegacyPaymentSystem`. It will translate the `processPayment` call into a `charge` call.

```java
// Adapter Class
class LegacyPaymentAdapter implements PaymentTarget {
    private LegacyPaymentSystem legacySystem;
    private int transactionCounter = 0; // Simple counter for transaction IDs

    public LegacyPaymentAdapter(LegacyPaymentSystem legacySystem) {
        this.legacySystem = legacySystem;
    }

    @Override
    public void processPayment(double amount, String cardNumber) {
        String transactionId = "TXN-" + (++transactionCounter);
        PaymentInfo details = new PaymentInfo(cardNumber, amount, "CUST123"); // Assume customer ID for simplicity
        legacySystem.charge(transactionId, details);
    }
}
```

**4. Usage:**

Now, your existing `PaymentProcessor` (or any client code expecting `PaymentTarget`) can use the adapter without modification.

```java
// Client Code
public class ECommerceApp {
    public static void main(String[] args) {
        // Original payment processor (if it directly implemented PaymentTarget)
        // PaymentTarget directProcessor = new SomeDirectProcessor();
        // directProcessor.processPayment(100.00, "1234-5678-9012-3456");

        // Using the new gateway via the adapter
        LegacyPaymentSystem newGateway = new LegacyPaymentSystem();
        PaymentTarget adapter = new LegacyPaymentAdapter(newGateway);

        adapter.processPayment(250.50, "9876-5432-1098-7654"); // This will now use LegacyPaymentSystem
    }
}
```

In this example, `LegacyPaymentAdapter` translates the `PaymentTarget` interface into the `LegacyPaymentSystem`'s interface, allowing your e-commerce application to seamlessly integrate the new payment gateway.

## When to Use the Adapter Pattern

*   When you want to use an existing class, but its interface doesn't match the one you need.
*   When you want to create a reusable class that cooperates with classes that have unrelated interfaces.
*   When you need to adapt multiple existing classes to a common interface.

## Practice Task

Create an adapter for a `CsvFileReader` class that has a `readFile(filePath: String)` method returning a `List<String[]>`. Your application expects a `DataReader` interface with a `getData(source: String)` method returning a `List<Map<String, String>>` (where each map represents a row with column headers as keys).

## Self-Check Questions

1.  What is the primary purpose of the Adapter pattern?
2.  In the payment gateway example, which class represents the `Target`, and which represents the `Adaptee`?
3.  If you needed to adapt a different legacy system with a `processTransaction(amount: int, token: String)` method, how would you modify your `LegacyPaymentAdapter` or create a new adapter?

## Supports

- [[skills/programming/software-engineering/design-patterns/microskills/adapter-pattern-application|Adapter Pattern Application]]
