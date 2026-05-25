---
type: "medium"
title: "BML for Feature Prioritization"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/business/entrepreneurship/lean-startup/microskills/bml-for-feature-prioritization|bml-for-feature-prioritization]]"
learning-time-in-minutes: 5
---
# BML for Feature Prioritization

This lesson focuses on using the Build-Measure-Learn (BML) cycle specifically for prioritizing features when developing a Proof of Concept (PoC) or Minimum Viable Product (MVP). The goal is to efficiently select and build the *right* features that will give you the most valuable learning.

## Why Prioritize Features with BML?

When building a PoC or MVP, your resources (time, money, development effort) are limited. You can't build everything. The BML cycle provides a framework to:

*   **Focus on learning:** Identify the riskiest assumptions about your product and prioritize features that help you test them.
*   **Avoid wasted effort:** Build only what's necessary to gather feedback, rather than building a fully-featured product that might be based on incorrect assumptions.
*   **Iterate effectively:** Use feedback to inform the next set of features to build, ensuring continuous improvement.

## The Core Idea: Hypothesis-Driven Prioritization

Instead of guessing what features users want, use BML to test hypotheses. A hypothesis is a testable statement about your product and its users. For example:

*   "Users will be willing to pay $5/month for feature X."
*   "Users will find feature Y easy to use for task Z."
*   "Our core value proposition can be delivered through feature A."

When prioritizing features, ask: **"Which feature will allow us to learn the most about our riskiest hypothesis?"**

## Applying BML to Feature Selection

Let's break down how to apply BML to decide *which* features make it into your PoC/MVP.

### 1. Identify Your Riskiest Assumptions (The "Learn" Phase)

Before you even think about building, deeply understand what you *don't* know. These are your riskiest assumptions.

*   **Market Viability:** Is there a real need for your solution? Will people pay for it?
*   **Customer Acceptance:** Will your target users actually use your product? Is it easy enough for them?
*   **Technical Feasibility:** Can you actually build this product at scale?
*   **Business Model:** Can you make money from this product?

**Example:** If you're building a task management app for remote teams, a risky assumption might be: "Remote teams struggle with coordinating daily stand-ups, and our app can solve this by automatically facilitating them."

### 2. Define Learning Goals and Metrics (The "Measure" Preparation)

For each risky assumption, define what you need to learn and how you will measure it.

*   **What specific information do you need?** (e.g., user satisfaction, adoption rate, conversion rate, completion time).
*   **How will you collect this information?** (e.g., user interviews, analytics tracking, surveys, A/B testing).

**Example (cont.):**
*   **Learning Goal:** Understand if the automated stand-up feature saves teams time and if they find it less disruptive.
*   **Metrics:**
    *   Average time saved per team member per stand-up.
    *   User rating of the stand-up feature (e.g., 1-5 scale).
    *   Adoption rate of the stand-up feature within the first week.

### 3. Select Features to Test Hypotheses (The "Build" Focus)

Now, connect your assumptions and learning goals to specific features. **Prioritize features that directly help you test your riskiest assumptions and gather the most crucial data.**

Think of it as building the smallest possible experiment to get the biggest learning.

**Feature Prioritization Framework:**

| Feature Idea | Riskiest Assumption Tested | Learning Goal | Primary Metric | Priority (High/Med/Low) | Notes |
| :----------- | :-------------------------- | :------------ | :------------- | :---------------------- | :---- |
| **Automated Stand-up Scheduling** | Teams struggle with coordinating stand-ups. | Learn if automated scheduling saves time. | Time saved per user. | **High** | Directly tests core problem. |
| Basic Task Creation | Users need to manage tasks. | Learn if users can create tasks easily. | Task creation success rate. | Medium | Fundamental, but less risky. |
| Team Chat Integration | Teams need to communicate. | Learn if users prefer in-app chat. | Chat message volume. | Low | Secondary to core stand-up problem. |
| Advanced Reporting | Users want to track progress. | N/A (too early) | N/A | Too early | Defer to later iterations. |

**Decision:** Based on the table, "Automated Stand-up Scheduling" is the highest priority because it directly tests your riskiest assumption about coordinating stand-ups. You'll build *just enough* of this feature to validate or invalidate your hypothesis.

### 4. Build the Essential Features (The "Build" Action)

Focus on building the minimum functionality for the highest-priority features. Don't add bells and whistles. The goal is to get something into users' hands quickly.

*   For the "Automated Stand-up Scheduling," this might mean building the ability to set a time, add team members, and trigger a notification for a stand-up.
*   You might include basic task creation as well, as it's a foundational element, but keep it simple.

### 5. Measure and Analyze Results (The "Measure" Action)

Deploy your PoC/MVP and actively collect data using the metrics you defined.

*   Track analytics for feature usage and task completion.
*   Conduct user interviews and solicit feedback.
*   Look for patterns and insights.

### 6. Learn and Iterate (The "Learn" Action)

Analyze the data and feedback to answer your original questions.

*   **Did the automated stand-up feature save time?**
*   **What did users say about the experience?**
*   **Was your assumption about coordination problems validated?**

Based on these learnings, you then go back to step 1: **identify your *new* riskiest assumptions or refine your existing ones.** This informs the next round of feature prioritization.

*   If automated stand-ups worked well, your next assumption might be about how to *improve* them, or move to another core problem.
*   If they didn't work, why not? Was it the coordination problem, or the solution itself? This leads to new hypotheses.

## Common Pitfalls

*   **Building too much:** Adding features that don't directly test a risky assumption.
*   **Not defining clear metrics:** You can't measure learning if you don't know what to measure.
*   **Ignoring feedback:** Building based on assumptions rather than actual user input and data.
*   **Focusing on "nice-to-haves" over "need-to-knows":** Prioritizing features that are easy or fun to build, instead of those that provide critical learning.

By consistently applying the BML cycle to feature prioritization, you ensure that every feature you build serves a purpose: to learn and de-risk your product vision.

## Supports

- [[skills/business/entrepreneurship/lean-startup/microskills/bml-for-feature-prioritization|BML for Feature Prioritization]]
