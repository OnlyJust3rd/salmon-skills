---
type: "medium"
title: "Automated Promotion in Continuous Delivery"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/platform-engineering/continuous-delivery/microskills/automated-promotion|automated-promotion]]"
learning-time-in-minutes: 3
---
# Automated Promotion in Continuous Delivery

## What is Automated Promotion?

Automated promotion is a core concept in Continuous Delivery (CD) that ensures software artifacts move through different stages of your deployment pipeline in a controlled and predictable manner. Instead of manually approving and deploying each new version, automation handles the transition once predefined criteria are met. This means your code, once tested and validated in one environment, is automatically "promoted" to the next.

Think of it like an assembly line for your software. Each stage (e.g., Development, Testing, Staging, Production) is a workstation. Automated promotion acts as the conveyor belt, moving the product (your software build) from one workstation to the next only when it's ready and passes all quality checks.

## Why is it Important?

*   **Speed and Efficiency:** Reduces manual handoffs, accelerating the release cycle.
*   **Consistency:** Eliminates human error in deployment decisions.
*   **Reliability:** Ensures artifacts are thoroughly tested before reaching production.
*   **Traceability:** Creates a clear audit trail of artifact movement through the pipeline.

## Practical Scenario: Promoting a Web Application

Let's imagine a web application development team using a CD pipeline.

1.  **Development Environment:** Developers push code changes. An automated build process creates a deployable artifact (e.g., a Docker image).
2.  **Automated Testing Stage:** The artifact is automatically deployed to a testing environment. A suite of automated tests (unit, integration, end-to-end) runs.
3.  **Automated Promotion to Staging:**
    *   **Condition:** If *all* automated tests pass successfully.
    *   **Action:** The *same* artifact is automatically deployed to a staging environment. This environment closely mirrors production.
    *   **Purpose:** To allow for final manual or automated checks (e.g., user acceptance testing, performance tests) in a production-like setting *without* impacting live users.
4.  **Automated Promotion to Production:**
    *   **Condition:** After successful completion of tests in staging, and potentially a manual "go" decision from a QA lead or product manager (though ideally, this would also be automated for true CD).
    *   **Action:** The *exact same* artifact that passed staging is deployed to the production environment.

If at any stage an automated test fails, the promotion to the next stage is blocked, and an alert is sent to the development team. This prevents faulty code from ever reaching production.

## Key Components of Automated Promotion

*   **Pipeline Orchestration Tool:** Tools like Jenkins, GitLab CI/CD, CircleCI, or Azure DevOps manage the pipeline and trigger promotions based on rules.
*   **Artifact Repository:** A central place (e.g., Nexus, Artifactory) where deployable artifacts are stored and versioned. Promotions involve referencing these stored artifacts.
*   **Environment Management:** Systems that provision and configure environments for deployment.
*   **Testing Frameworks:** Tools that execute automated tests.

## Practice Task

Imagine you are setting up a CD pipeline for a simple mobile app.

1.  **Define Stages:** List at least three distinct stages for your app's deployment (e.g., Development, QA, App Store Beta).
2.  **Define Promotion Criteria:** For each transition between stages, what would be a reasonable automated criterion?
    *   Dev -> QA:
    *   QA -> App Store Beta:
3.  **Consider a Failure:** What happens if the automated tests in the QA stage fail? How would automated promotion handle this?

## Self-Check Questions

1.  What is the primary benefit of automating the movement of artifacts between pipeline stages?
2.  Describe a scenario where manual promotion might still be necessary, even in a CD system.
3.  If an artifact fails tests in the "Staging" environment, what is the expected outcome for promotion to "Production"?
4.  Why is it crucial to promote the *exact same* artifact that was tested and validated in earlier stages to production?

## Supports

- [[skills/computing/systems-infrastructure/platform-engineering/continuous-delivery/microskills/automated-promotion|Automated Promotion]]
