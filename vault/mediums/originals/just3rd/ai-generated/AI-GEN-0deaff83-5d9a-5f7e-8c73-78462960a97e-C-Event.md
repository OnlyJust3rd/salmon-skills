---
type: medium
title: "C# Events: Understanding Event-Driven Code Flow"
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[c-sharp-event|c-sharp-event]]"
learning-time-in-minutes: 2
---
# C# Events: Understanding Event-Driven Code Flow

In C# programming, understanding how code responds to specific occurrences is crucial. This lesson focuses on **C# Events**, which are a fundamental mechanism for building event-driven applications. Events allow objects to notify other objects when something significant happens.

### What are C# Events?

Think of events like a notification system. When an object (the publisher) performs an action that might be interesting to other objects (the subscribers), it can "raise" an event. Subscribers can then choose to "listen" for these events and react accordingly. This decouples the publisher from the subscribers, meaning the publisher doesn't need to know who is listening or how they will respond.

The core components of a C# event are:

1.  **Delegate:** A type that represents a reference to a method with a specific signature. Events use delegates to define what methods can subscribe to them. The standard delegate for events is `EventHandler<T>` or `EventHandler` (for events with no custom data).
2.  **Event Declaration:** Declares the event itself, specifying the delegate type.
3.  **Event Publisher:** The object that raises the event. It has a method (often called `OnEventName`) that invokes the event.
4.  **Event Subscriber:** The object that listens for and responds to the event. It has a method that matches the delegate's signature and subscribes to the event.

### Practical Example: A Simple Button Click

Imagine you have a simple application with a button. When the button is clicked, you want to display a message.

```csharp
using System;

// 1. The Publisher class (e.g., a custom button)
public class MyButton
{
    // Delegate for the Click event
    public delegate void ClickEventHandler(object sender, EventArgs e);

    // Declare the event
    public event ClickEventHandler Click;

    // Method to simulate a click
    public void SimulateClick()
    {
        Console.WriteLine("Button clicked!");
        // Raise the event if there are any subscribers
        OnClick(EventArgs.Empty);
    }

    // Method to invoke the event
    protected virtual void OnClick(EventArgs e)
    {
        // Check if the Click event has any subscribers before invoking
        ClickEventHandler handler = Click;
        if (handler != null)
        {
            handler(this, e); // 'this' refers to the MyButton object
        }
    }
}

// 2. The Subscriber class (e.g., the main application form)
public class ApplicationForm
{
    public void SubscribeToButton(MyButton button)
    {
        // Subscribe to the button's Click event
        button.Click += Button_ClickHandler;
    }

    // The method that will be called when the event is raised
    private void Button_ClickHandler(object sender, EventArgs e)
    {
        Console.WriteLine("ApplicationForm received the click event and is reacting!");
    }
}

// Main execution point
public class Program
{
    public static void Main(string[] args)
    {
        MyButton myButton = new MyButton();
        ApplicationForm appForm = new ApplicationForm();

        appForm.SubscribeToButton(myButton); // Connect the form to the button's event

        myButton.SimulateClick(); // Simulate a click action

        Console.ReadKey(); // Keep console open
    }
}
```

In this example:
*   `MyButton` is the **publisher**. It declares a `Click` event.
*   `ApplicationForm` is the **subscriber**. It has a `Button_ClickHandler` method that will execute when the `Click` event is raised.
*   The `+=` operator is used to **subscribe** `Button_ClickHandler` to the `Click` event.
*   When `myButton.SimulateClick()` is called, it triggers `OnClick`, which in turn invokes the subscribed `Button_ClickHandler`.

### Practice Task

Create a simple `Counter` class. This class should have a method `Increment()`. When `Increment()` is called, the `Counter` should raise an event named `ValueChanged`. Create another class, `Display`, that subscribes to the `ValueChanged` event of the `Counter` and prints the current count to the console whenever the event is raised.

### Self-Check Questions

1.  What is the primary purpose of using events in C#?
2.  What are the two main components involved in defining and using a C# event?
3.  How do you subscribe a method to an event in C#?
4.  What is the role of the `sender` parameter in an event handler?

## Supports

- [[c-sharp-event|C# Event]]
