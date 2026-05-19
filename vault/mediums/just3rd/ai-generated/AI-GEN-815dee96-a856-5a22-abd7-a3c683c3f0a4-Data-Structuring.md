---
type: "medium"
title: "Structuring Data: The Foundation of Models"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/data/data-platforms/data-modeling/microskills/data-structuring|Data Structuring]]"
---
# Structuring Data: The Foundation of Models

This lesson focuses on **Data Structuring**, a key part of applying data models. We'll learn how to organize raw data into a format that makes sense for analysis and decision-making, building upon the broader goal of applying data models to real-world datasets.

## What is Data Structuring?

Data structuring is the process of organizing raw, unstructured, or semi-structured data into a defined format. This format can be a table, a graph, a hierarchical structure, or another logical arrangement. The goal is to make the data understandable, accessible, and ready for analysis or integration into a data model. Think of it as tidying up a messy room before you can find anything or decide where to place new furniture.

Good data structuring makes it easier to:
*   Identify relationships between data points.
*   Query and retrieve specific information efficiently.
*   Build accurate and meaningful data models.
*   Ensure data quality and consistency.

## Practical Scenario: Organizing Customer Feedback

Imagine you work for an online retail company. You've collected customer feedback through various channels: website forms, email surveys, and social media comments. This raw feedback is a jumble of text, ratings, and sometimes structured information like order numbers.

**Raw Feedback Examples:**

*   "The delivery was very fast! 5 stars. Order #12345."
*   "I love the product, but the packaging was damaged."
*   "Customer service was unhelpful when I asked about a refund. (Rating: 2/5)"
*   "Great experience overall. Will buy again!"

To understand customer sentiment and identify areas for improvement, we need to structure this feedback.

### Structuring Steps:

1.  **Identify Key Entities:** What are the main things we're collecting information about?
    *   Customer
    *   Product
    *   Order
    *   Feedback Item

2.  **Define Attributes for Each Entity:** What specific pieces of information do we need for each entity?
    *   **Feedback Item:**
        *   `feedback_id` (unique identifier)
        *   `feedback_text` (the actual comment)
        *   `rating` (numerical score, if available)
        *   `source` (e.g., "website form", "email", "social media")
        *   `timestamp`
    *   **Order:**
        *   `order_id` (unique identifier)
        *   `customer_id` (link to customer)
        *   `order_date`
    *   **Customer:**
        *   `customer_id` (unique identifier)
        *   `name`
        *   `email`
    *   **Product:**
        *   `product_id` (unique identifier)
        *   `product_name`

3.  **Establish Relationships:** How do these entities connect?
    *   A `Feedback Item` can be associated with a specific `Order` (if the feedback is about a particular purchase).
    *   An `Order` is placed by a `Customer`.
    *   A `Feedback Item` might relate to a specific `Product` within an order.

4.  **Choose a Structure:** For this scenario, a relational table structure is suitable. We can create tables for each entity and link them using keys.

**Structured Data Example (Conceptual Tables):**

**`Customers` Table:**
| customer_id | name   | email             |
| :---------- | :----- | :---------------- |
| C101        | Alice  | alice@example.com |
| C102        | Bob    | bob@example.com   |

**`Orders` Table:**
| order_id | customer_id | order_date |
| :------- | :---------- | :--------- |
| 12345    | C101        | 2023-10-26 |
| 12346    | C102        | 2023-10-27 |

**`Feedback` Table:**
| feedback_id | order_id | feedback_text                                         | rating | source      | timestamp           |
| :---------- | :------- | :---------------------------------------------------- | :----- | :---------- | :------------------ |
| F001        | 12345    | The delivery was very fast!                           | 5      | website form| 2023-10-27 10:00:00 |
| F002        | 12345    | I love the product, but the packaging was damaged.    | NULL   | email       | 2023-10-27 11:30:00 |
| F003        | NULL     | Customer service was unhelpful when I asked for a refund. | 2      | social media| 2023-10-27 14:00:00 |
| F004        | 12346    | Great experience overall. Will buy again!             | NULL   | website form| 2023-10-28 09:15:00 |

Notice how we handle missing information (like rating for F002 and F004) by using `NULL`. We also identify feedback that isn't directly tied to an order yet (F003).

## Practice Task

Consider a dataset containing information about movie reviews. The raw data includes movie titles, user ratings, review text, and the release year of the movie.

Your task is to:
1.  Identify the main entities involved in this dataset.
2.  Define potential attributes for each entity.
3.  Describe how you would structure this data, explaining your choice of structure (e.g., relational tables, graph).

## Self-Check Questions

1.  Why is it important to structure data before creating a data model?
2.  What are the primary steps involved in organizing raw data?
3.  In the customer feedback example, what would be the primary key for the `Feedback` table?
4.  When might a graph database structure be more suitable for data than relational tables?

## Supports

- [[skills/data/data-platforms/data-modeling/microskills/data-structuring|Data Structuring]]
