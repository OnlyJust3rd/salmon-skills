---
type: "medium"
title: "Defining and Using Prioritization Criteria"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/business-it/business-product/product-strategy/microskills/prioritization-criteria|prioritization-criteria]]"
---
# Defining and Using Prioritization Criteria

When you're working on a product, you'll have a long list of potential features, bug fixes, and improvements. Not everything can be done at once. To make smart decisions about what to build next, you need a structured way to compare these options. This is where **prioritization criteria** come in. They are the explicit factors you use to evaluate and rank your product work.

This lesson focuses on understanding and applying these criteria to effectively guide your product strategy.

## Why Use Explicit Criteria?

Without clear criteria, prioritization can become subjective, leading to:

*   **Team disagreements:** Different people will have different opinions on what's most important.
*   **Feature creep:** Popular or loudest voices might get their way, not what's best for the product.
*   **Wasted effort:** Building things that don't deliver significant value.
*   **Missed opportunities:** Important, but less vocal, items get overlooked.

Explicit criteria bring objectivity and alignment, ensuring your team focuses on work that delivers the most impact.

## Common Prioritization Criteria

There are many ways to define criteria, and the best ones for you will depend on your product, goals, and stage of development. Here are some common and effective criteria:

### 1. Value / Impact

This criterion measures the benefit the work will bring. It can be further broken down:

*   **Customer Value:** How much will this improve the user experience? Will it solve a critical pain point or open up new possibilities for users?
*   **Business Value:** How will this contribute to business goals? Examples include:
    *   Increased Revenue
    *   Reduced Costs
    *   Improved Conversion Rates
    *   Customer Acquisition
    *   Customer Retention
    *   Market Share Growth
    *   Brand Reputation

### 2. Effort / Cost

This measures the resources required to complete the work.

*   **Development Effort:** How much engineering time is needed? This is often estimated in hours, days, or story points.
*   **Design Effort:** How much time will designers need?
*   **Testing Effort:** How much QA is involved?
*   **Operational Cost:** Are there ongoing costs associated with this feature (e.g., increased server load, third-party service fees)?

### 3. Strategic Alignment

How well does this work fit with the overall product vision and company strategy?

*   **Company Goals:** Does it directly contribute to OKRs or KPIs?
*   **Product Vision:** Does it move us closer to our long-term product goals?
*   **Market Opportunity:** Does it address a gap in the market or capitalize on a trend?

### 4. Risk

What are the potential downsides or uncertainties?

*   **Technical Risk:** Is there uncertainty about the technology required? Will it be hard to implement?
*   **Market Risk:** Is there a chance the market won't adopt it?
*   **Implementation Risk:** Are there dependencies or complexities that could derail the project?

### 5. Urgency / Time Sensitivity

Is there a deadline or a short window of opportunity?

*   **External Deadlines:** Regulatory compliance, partner commitments.
*   **Market Window:** Launching a feature before a competitor.
*   **Critical Bug Fixes:** Issues severely impacting user experience or business operations.

## Applying Prioritization Criteria: A Practical Approach

To apply these criteria effectively, you need a consistent process.

### Step 1: Identify and Define Your Criteria

*   **Brainstorm:** Gather your team and discuss what factors are most important for your product's success.
*   **Select:** Choose a manageable set of criteria (3-5 is often a good starting point).
*   **Define Clearly:** Ensure everyone understands what each criterion means. For example, instead of just "Value," specify "Estimated Revenue Increase" or "Reduction in Customer Support Tickets."

### Step 2: Score Your Product Work Items

For each potential item (feature, bug fix, etc.) on your backlog, score it against each of your chosen criteria.

*   **Quantify When Possible:** Use numbers or scales. For example, a scale of 1-5 for customer value, or estimated development hours for effort.
*   **Be Consistent:** Apply the same scoring method to all items.

### Step 3: Aggregate and Rank

Combine the scores to arrive at an overall priority. There are several methods:

#### **A. Weighted Scoring Model**

Assign a weight to each criterion based on its importance.

**Formula:**
$$ \text{Total Score} = \sum (\text{Criterion Score} \times \text{Criterion Weight}) $$

**Example:**

Let's say you have three criteria: Customer Value (CV), Business Value (BV), and Effort (E).

*   You decide Customer Value is most important (Weight = 0.5), Business Value is next (Weight = 0.3), and Effort is least important for scoring impact (Weight = 0.2).
*   You've scored a feature: CV = 4, BV = 3, E = 2 (lower effort is better, so you might invert this score or use it as a divisor later).

For simplicity, let's assume lower effort is a higher score for this example. If effort is estimated in hours, you might score it inversely to effort. Let's use a 1-5 scale where 5 is high effort.

*   **Feature A:**
    *   CV: 4 (Weight 0.5)
    *   BV: 3 (Weight 0.3)
    *   E: 2 (Weight 0.2) - *Let's assume a scale where 5 is high effort, and we want to reduce the score for high effort.*
*   **Feature B:**
    *   CV: 3 (Weight 0.5)
    *   BV: 4 (Weight 0.3)
    *   E: 4 (Weight 0.2)

**Calculation for Feature A:**
$$ \text{Score}_A = (4 \times 0.5) + (3 \times 0.3) + (2 \times 0.2) = 2.0 + 0.9 + 0.4 = 3.3 $$

**Calculation for Feature B:**
$$ \text{Score}_B = (3 \times 0.5) + (4 \times 0.3) + (4 \times 0.2) = 1.5 + 1.2 + 0.8 = 3.5 $$

In this simplified example, Feature B might be prioritized higher if using this exact calculation.

**Table: Weighted Scoring Example**

| Feature   | Customer Value (Score) | Business Value (Score) | Effort (Score) | Weight CV (0.5) | Weight BV (0.3) | Weight E (0.2) | Total Score |
| :-------- | :--------------------- | :--------------------- | :------------- | :-------------- | :-------------- | :------------- | :---------- |
| Feature A | 4                      | 3                      | 2              | 2.0             | 0.9             | 0.4            | **3.3**     |
| Feature B | 3                      | 4                      | 4              | 1.5             | 1.2             | 0.8            | **3.5**     |

*Note: Handling effort requires careful consideration. Sometimes it's better to use it as a divisor, or to prioritize high value items with low effort first.*

#### **B. Value vs. Effort Matrix (e.g., RICE or ICE)**

Simpler models can also be effective.

*   **ICE Score:**
    *   **I**mpact: How significant is the impact? (Score 1-5)
    *   **C**onfidence: How confident are you in your estimates? (Score 1-5)
    *   **E**ase: How easy is it to implement? (Score 1-5, higher = easier)
    *   **ICE Score = Impact × Confidence × Ease**

*   **RICE Score:**
    *   **R**each: How many people will this impact in a given period? (e.g., users per month)
    *   **I**mpact: How much will this impact each person? (Scale 0.25 to 3: tiny, low, medium, high, massive)
    *   **C**onfidence: How confident are you in your estimates? (Percentage: 50%, 80%, 100%)
    *   **E**ffort: How much time will this take? (e.g., person-months)
    *   **RICE Score = (Reach × Impact × Confidence) / Effort**

### Step 4: Review and Iterate

Prioritization is not a one-time event. Regularly review your backlog, re-score items as new information becomes available, and adjust your criteria as your product and goals evolve.

## Key Takeaways

*   **Clarity is King:** Explicitly define what each criterion means to your team.
*   **Consistency Matters:** Apply your criteria uniformly across all backlog items.
*   **Balance is Crucial:** Consider both the upside (value) and the downside (effort, risk).
*   **Adaptability is Key:** Your criteria should evolve with your product and business.

By using well-defined prioritization criteria, you can make more informed, strategic decisions about where to invest your product development resources, ensuring you're always working on what matters most.

## Supports

- [[skills/business-it/business-product/product-strategy/microskills/prioritization-criteria|Prioritization Criteria]]
