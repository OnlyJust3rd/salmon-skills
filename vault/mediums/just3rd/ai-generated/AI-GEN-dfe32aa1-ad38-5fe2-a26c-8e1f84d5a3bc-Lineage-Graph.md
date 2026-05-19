---
type: "medium"
title: "Understanding the dbt Lineage Graph"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/data/data-platforms/dbt/microskills/lineage-graph|Lineage Graph]]"
---
# Understanding the dbt Lineage Graph

In the world of data transformation with dbt, understanding how your models relate to each other is crucial for debugging, impact analysis, and overall project maintainability. The **Lineage Graph** is dbt's way of visualizing these relationships.

## What is the dbt Lineage Graph?

The dbt lineage graph is a directed acyclic graph (DAG) that represents the dependencies between your dbt resources (sources, seeds, models, tests, etc.). Each node in the graph represents a resource, and an edge (arrow) points from a dependency to the resource that depends on it.

Think of it like a family tree for your data models. You can see who your parents are (the models or sources it's built upon) and who your children are (the models that use it).

## Why is Lineage Important?

*   **Impact Analysis:** If you need to change a source table or a base model, the lineage graph clearly shows you which downstream models will be affected. This prevents unexpected breakages.
*   **Debugging:** When a model's output is incorrect, tracing back its lineage can help pinpoint the source of the error. You can systematically check each upstream dependency.
*   **Understanding Your Data Pipeline:** For new team members, or even for yourself after some time, the lineage graph provides a clear overview of the entire data transformation process.
*   **Documentation:** The lineage graph serves as living documentation for your dbt project's structure.

## Viewing the Lineage Graph

You can generate and view the dbt lineage graph in two primary ways:

### 1. Using the dbt Cloud UI

If you are using dbt Cloud, the lineage graph is automatically generated and readily available within the UI.

*   Navigate to your project in dbt Cloud.
*   In the left-hand navigation pane, you'll usually find an option for "Lineage" or "Graph." Clicking this will render the interactive graph.
*   You can often hover over nodes to see details about the model, its status, and its connections.

### 2. Using the dbt CLI

If you are using the dbt Command Line Interface (CLI), you can generate an HTML file containing the lineage graph.

**Steps:**

1.  **Run the command:** Open your terminal or command prompt, navigate to your dbt project directory, and run the following command:

    ```bash
    dbt docs generate
    ```

    This command compiles your dbt project's metadata and creates the necessary files for the documentation site, including the lineage graph.

2.  **Serve the documentation:** After `dbt docs generate` completes, serve the documentation locally:

    ```bash
    dbt docs serve
    ```

3.  **Open in browser:** dbt will provide a local URL (typically `http://127.0.0.1:8080`). Open this URL in your web browser.

    You'll see a user-friendly interface where you can explore your project, including a dedicated "Graph" tab that displays the lineage.

## Interpreting the Graph

When you look at the lineage graph, you'll see nodes representing different dbt resources:

*   **Sources:** Represent raw data ingested from your data warehouse.
*   **Models:** Your dbt SQL files that transform raw data into more structured and analysis-ready tables or views.
*   **Seeds:** CSV files that you include in your dbt project as static lookup tables.
*   **Tests:** The `dbt test` commands you've defined.

Arrows indicate dependencies: an arrow pointing from model A to model B means that model B depends on model A (i.e., model B's SQL query references model A).

**Example:**

Imagine you have:

*   A source `raw_orders`
*   A model `stg_orders` that selects from `raw_orders`
*   A model `fct_orders` that selects from `stg_orders`
*   A test for `fct_orders`

The lineage graph would visually represent this as:

`raw_orders` --> `stg_orders` --> `fct_orders` <-- `test_fct_orders_not_null`

You would see an arrow from `raw_orders` to `stg_orders`, another from `stg_orders` to `fct_orders`, and an arrow pointing *to* `fct_orders` from any tests defined for it.

## Common Pitfalls to Avoid

*   **Missing Dependencies:** Ensure all models and sources your project uses are correctly referenced in your `dbt_project.yml` file and your model SQL.
*   **Circular Dependencies:** While dbt tries to prevent this, accidentally creating a circular dependency (e.g., Model A depends on Model B, and Model B depends on Model A) will cause build failures. The lineage graph can help visualize and diagnose these.
*   **Ignoring Lineage:** Don't treat the lineage graph as just a pretty picture. Actively use it for planning changes and debugging.

By mastering the dbt lineage graph, you gain a powerful tool for understanding, maintaining, and evolving your data transformation projects.

## Supports

- [[skills/data/data-platforms/dbt/microskills/lineage-graph|Lineage Graph]]
