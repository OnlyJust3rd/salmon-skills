---
type: "medium"
title: "Understanding BPMN Events"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/software-engineering/software-practices/business-process-modeling/microskills/bpmn-event|bpmn-event]]"
learning-time-in-minutes: 3
---
# Understanding BPMN Events

In Business Process Model and Notation (BPMN), **Events** are fundamental. They represent something that *happens* during the course of a business process. Think of them as the triggers, the milestones, or the conclusions. Understanding how to use events correctly is key to accurately modeling your workflows.

## What are BPMN Events?

Events are depicted as circles in BPMN diagrams. They mark the point in time at which something occurs. This "something" can initiate a process, interrupt it, or signify its completion. There are three main types of events:

*   **Start Events:** These indicate where a process begins. A process cannot start without a Start Event.
*   **Intermediate Events:** These occur during the execution of a process. They can be used to show delays, message exchanges, or other occurrences that affect the flow.
*   **End Events:** These signify the conclusion of a process path. A process can have multiple End Events, representing different outcomes.

## Practical Example: Order Fulfillment Process

Let's consider a simple order fulfillment process for an online store.

Imagine this workflow:

1.  **Start Event:** A customer places an order.
2.  **Activity:** Process the payment.
3.  **Intermediate Event:** Wait for inventory confirmation. (This might involve a delay or a message from another system).
4.  **Activity:** Ship the order.
5.  **End Event:** Order delivered.

In BPMN, this would look like:

*   A thin-lined circle labeled "Order Placed" (Start Event).
*   A sequence flow arrow connecting it to a rectangle labeled "Process Payment."
*   A sequence flow arrow connecting "Process Payment" to a thin-lined circle with a dashed border labeled "Inventory Confirmed" (Intermediate Event).
*   A sequence flow arrow connecting "Inventory Confirmed" to a rectangle labeled "Ship Order."
*   A sequence flow arrow connecting "Ship Order" to a thick-lined circle labeled "Order Delivered" (End Event).

The "Inventory Confirmed" event shows that even after payment, the process pauses or waits for confirmation from another part of the business before proceeding to shipping.

## Practice Task

Open your preferred BPMN modeling tool (e.g., Cawemo, Bizagi Modeler, Camunda Modeler).

Model a simple "Customer Complaint Handling" process. Ensure you include:

1.  A **Start Event** to signify when a complaint is received.
2.  At least one **Intermediate Event** to represent a delay or a waiting period (e.g., waiting for customer response).
3.  An **End Event** to show when the complaint is resolved.

## Self-Check Questions

1.  What is the primary purpose of an Event in BPMN?
2.  What are the three main categories of BPMN Events, and what does each signify?
3.  Can a process have more than one End Event? Why or why not?
4.  In the order fulfillment example, why might an Intermediate Event be placed between processing payment and shipping?

## Supports

- [[skills/computing/software-engineering/software-practices/business-process-modeling/microskills/bpmn-event|BPMN Event]]
