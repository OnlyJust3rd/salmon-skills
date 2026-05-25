---
type: "medium"
title: "CRISP-DM Phase Interconnections"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/data-ai/data-engineering-platforms/data-mining/microskills/phase-interconnections|phase-interconnections]]"
related-skills:
  - "[[skills/computing/data-ai/data-engineering-platforms/data-mining/data-mining|data-mining]]"
learning-time-in-minutes: 4
---
# CRISP-DM Phase Interconnections

Understanding how the different phases of the CRISP-DM methodology connect is crucial for successful data mining projects. CRISP-DM (Cross-Industry Standard Process for Data Mining) is an iterative process, meaning you often revisit earlier phases as you learn more. This interconnectedness ensures that your project stays aligned with business objectives and that you can adapt to new insights.

### The Flow of Information Between Phases

Think of CRISP-DM not as a rigid, linear path, but as a cycle where progress in one phase informs and refines previous and subsequent phases.

*   **Business Understanding** sets the foundation. It defines the goals and requirements from a business perspective.
*   **Data Understanding** begins with collecting the initial data and then exploring it to gain familiarity, identify data quality issues, and discover initial insights.
*   **Data Preparation** builds upon Data Understanding. It's where you clean, transform, and select the data needed for modeling.
*   **Modeling** uses the prepared data to build predictive or descriptive models.
*   **Evaluation** assesses the model's performance against the business objectives defined in the first phase.
*   **Deployment** puts the validated model into use.

The key is that these phases don't happen in isolation. For example:

*   During **Data Understanding**, you might uncover data quality issues that require you to go back to **Business Understanding** to clarify what constitutes "good enough" data for the business goal.
*   When you encounter problems during **Modeling**, you might realize you need more data, better features (leading back to **Data Preparation**), or a clearer understanding of what you're trying to predict (back to **Business Understanding**).
*   After **Evaluation**, you might find that the model doesn't meet the business requirements. This means you might need to refine your data preparation, try different modeling techniques, or even revisit the initial business objectives.

### Practical Scenario: Customer Churn Prediction

Imagine a telecommunications company aiming to reduce customer churn.

1.  **Business Understanding:** The business goal is to identify customers likely to churn in the next month so that targeted retention offers can be made. Key metrics include the percentage of churners identified and the cost-effectiveness of retention offers.

2.  **Data Understanding:** The team starts by exploring customer data (demographics, service usage, billing history, past interactions). They discover that the "contract type" variable is missing for a significant portion of newer customers. They also find that "customer service call duration" data is inconsistent.

3.  **Data Preparation:**
    *   Because of the missing "contract type," the team revisits **Business Understanding** to confirm if this data is essential or if an imputation strategy is acceptable. They decide to impute it.
    *   Due to inconsistent "customer service call duration," they decide to create a new feature like "average call duration per month" and exclude raw, inconsistent data from this specific field.
    *   They also identify that customers with longer tenure tend to churn less, so they create a "customer tenure" feature.

4.  **Modeling:** They train a classification model (e.g., Logistic Regression or Random Forest) using the prepared data to predict the probability of churn.

5.  **Evaluation:** The model identifies 70% of actual churners, which is better than the initial baseline but doesn't quite meet the business target of 80%. The cost of retention offers versus potential revenue saved needs further analysis.

6.  **Deployment:** The model is initially deployed to a pilot group.

*   **Back to Modeling/Data Preparation:** The evaluation reveals that the model could be improved. The team decides to try more advanced feature engineering, perhaps looking at patterns in recent service outages for a customer (going back to Data Understanding and Preparation) or experimenting with ensemble methods in Modeling.
*   **Back to Business Understanding:** If the model consistently fails to meet the target, or if the cost-benefit analysis of retention offers looks unfavorable, the team might need to question the initial business goal or explore alternative strategies with stakeholders. For instance, is identifying *all* potential churners the real goal, or is it identifying the *most profitable* customers at risk?

This iterative flow, where learning in one phase triggers adjustments in others, is the strength of CRISP-DM.

### Practice Task

Consider a retail company wanting to predict which customers are most likely to purchase a new product line.

1.  **Identify one potential issue** that might arise during the **Data Understanding** phase that would necessitate revisiting the **Business Understanding** phase.
2.  **Describe how a finding in the Modeling phase** could lead to changes in the **Data Preparation** phase.
3.  **Explain a scenario where the Evaluation phase** might lead back to both **Modeling** and **Business Understanding**.

### Self-Check Questions

1.  Why is it important for the **Evaluation** phase to consider the objectives set in the **Business Understanding** phase?
2.  If you discover a significant data quality issue late in the **Data Preparation** phase, which other CRISP-DM phase(s) should you immediately consider revisiting, and why?
3.  Can the **Deployment** phase directly influence the **Data Understanding** phase? If so, how?

## Supports

- [[skills/computing/data-ai/data-engineering-platforms/data-mining/microskills/phase-interconnections|Phase Interconnections]]
