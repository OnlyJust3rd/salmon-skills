---
type: "medium"
title: "Understanding Gateways in BPMN"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/software-engineering/business-process-modeling/microskills/gateway|gateway]]"
---
# Understanding Gateways in BPMN

When modeling business processes, situations often arise where a single task can lead to multiple paths, or where multiple paths need to converge into a single flow. This is where **Gateways** in Business Process Model and Notation (BPMN) become essential. Gateways control the divergence and convergence of sequence flows within your process model, allowing you to represent complex decision points and parallel activities.

## What are Gateways?

Gateways are special symbols used in BPMN to indicate where the flow of a process might split or merge. They manage the multiplicity of sequence flows. Think of them as junctions or decision points in your workflow.

There are several types of gateways, but the most common ones you'll use for applying BPMN modeling are:

*   **Exclusive Gateway (XOR):** Represents a point where the process flow can take *only one* path out of several possibilities. This is used for decisions where only one condition can be true at a time.
*   **Parallel Gateway (AND):** Represents a point where the process flow splits into *multiple parallel paths* that execute concurrently, or where multiple parallel paths *converge* back into a single flow. All incoming paths must complete before the process continues after a merge.
*   **Inclusive Gateway (OR):** Represents a point where the process flow can take *one or more* paths out of several possibilities. This is used for decisions where multiple conditions can be true simultaneously, and the flow can proceed down all valid paths.

## Practical Example: Order Fulfillment Process

Let's consider a simplified order fulfillment process for an online store.

**Scenario:** When a new online order is received, the system needs to check if the items are in stock. If they are, the order can be packed. If not, a backorder notification needs to be sent. After packing, if the order is for a local customer, it can be shipped directly. If it's for an international customer, it needs custom documentation first.

Here's how we can model this using Gateways:

1.  **Start Event:** "New Order Received"
2.  **Exclusive Gateway (Check Stock):** From "New Order Received," a sequence flow leads to an Exclusive Gateway labeled "Items in Stock?".
    *   One outgoing sequence flow goes to "Pack Order" (if the condition "Items in Stock" is true).
    *   Another outgoing sequence flow goes to "Send Backorder Notification" (if the condition "Items in Stock" is false).
3.  **Inclusive Gateway (Shipping Destination):** After "Pack Order," a sequence flow leads to an Inclusive Gateway labeled "Shipping Destination?".
    *   One outgoing sequence flow goes to "Create Custom Documentation" (if the condition "International Shipping" is true).
    *   Another outgoing sequence flow goes to "Ship Order Directly" (if the condition "Local Shipping" is true).
    *   *Note:* In an Inclusive Gateway, both conditions can be true, meaning an order could require custom documentation *and* be shipped directly (though unlikely in this specific scenario, it illustrates the OR logic).
4.  **Parallel Gateway (Merge for Shipping):** To ensure both custom documentation (if applicable) and the packing process are complete before shipping, we can use a Parallel Gateway for merging. Let's refine the example slightly:

    *   After "Pack Order," we have an **Inclusive Gateway** "Shipping Destination?".
        *   Path 1: "International Shipping" -> "Create Custom Documentation"
        *   Path 2: "Local Shipping" -> "Ship Order Directly"
    *   If "International Shipping" is selected, the flow goes to "Create Custom Documentation". After this task, it needs to merge back before the final shipping step.
    *   If "Local Shipping" is selected, the flow goes to "Ship Order Directly".
    *   To handle the convergence of parallel paths (even if only one path is taken in a specific instance, the gateway allows for flexibility), we can use a **Parallel Gateway** labeled "Ready to Ship".
        *   An incoming flow from "Create Custom Documentation" (if taken).
        *   An incoming flow from "Ship Order Directly" (if taken).
        *   *Correction for clarity:* A simpler approach might be:
            *   Exclusive Gateway "Items in Stock?".
            *   If True -> "Pack Order".
            *   If False -> "Send Backorder Notification".
            *   After "Pack Order," an **Inclusive Gateway** "Shipping Destination?".
                *   If "International": "Create Custom Documentation".
                *   If "Local": "Ship Order Directly".
            *   A **Parallel Gateway** after the "Create Custom Documentation" and "Ship Order Directly" tasks to converge them before an "End Event: Order Shipped". This ensures that if both documentation and direct shipping paths were *potentially* active (though in this example they are mutually exclusive if interpreted strictly as "local" vs "international"), they both must complete before the end.

## Practice Task

Model a simple expense approval process.

1.  An employee submits an expense report.
2.  The system checks if the expense amount is over $500.
    *   If it is, the report goes to a manager for approval.
    *   If it is not, the report is automatically approved.
3.  After manager approval (if required), the report is sent to accounting for processing.

Identify and label the types of Gateways you would use for this process. Draw a simple BPMN diagram (you can sketch it on paper or use a drawing tool) showing the flow.

## Self-Check Questions

1.  When would you use an Exclusive Gateway versus an Inclusive Gateway?
2.  What is the primary difference between a Parallel Gateway used for divergence and one used for convergence?
3.  In our order fulfillment example, why might we use an Inclusive Gateway for "Shipping Destination?" rather than an Exclusive Gateway?

## Supports

- [[skills/programming/software-engineering/business-process-modeling/microskills/gateway|Gateway]]
