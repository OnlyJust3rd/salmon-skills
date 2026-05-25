---
type: "medium"
title: "Agile, Scrum, and Kanban: Methodologies for Platform Engineering Projects"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/microskills/project-management-methodologies|project-management-methodologies]]"
related-skills:
  - "[[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/platform-engineering|platform-engineering]]"
learning-time-in-minutes: 5
---
# Agile, Scrum, and Kanban: Methodologies for Platform Engineering Projects

As a platform engineer, you'll be involved in various initiatives, from building new infrastructure to improving existing services. Effectively managing these projects is crucial for delivering value predictably and efficiently. This lesson introduces you to three popular project management methodologies: Agile, Scrum, and Kanban. Understanding these frameworks will help you *apply* them to plan, track, and manage your platform engineering work.

## Why Methodologies Matter in Platform Engineering

Platform engineering projects often involve complex, interconnected systems and evolving requirements. Without a structured approach, they can become chaotic. Methodologies provide a roadmap, helping teams:

*   **Break down complex work:** Large initiatives are divided into smaller, manageable pieces.
*   **Prioritize effectively:** Focus on what delivers the most value first.
*   **Adapt to change:** Respond to new information or shifting priorities without derailing the project.
*   **Improve collaboration:** Foster clear communication and shared understanding within the team.
*   **Deliver value incrementally:** Release functional pieces of the platform regularly.

## Agile: The Guiding Philosophy

Agile isn't a single methodology but rather a set of values and principles for software development (and by extension, platform engineering). It emphasizes flexibility, collaboration, customer feedback, and rapid iteration.

**Core Agile Values:**

*   **Individuals and interactions** over processes and tools.
*   **Working solutions** over comprehensive documentation.
*   **Customer collaboration** over contract negotiation.
*   **Responding to change** over following a plan.

In platform engineering, this translates to building and iterating on infrastructure and tools based on feedback from development teams who will use the platform, rather than adhering rigidly to an initial, potentially outdated, blueprint.

## Scrum: An Agile Framework for Complex Projects

Scrum is a popular framework built upon Agile principles, designed for managing complex product development and other knowledge work. It uses iterative and incremental approaches to optimize predictability and control risk.

**Key Scrum Concepts:**

*   **Sprints:** Short, time-boxed periods (typically 1-4 weeks) during which a specific set of work is completed and made ready for review.
*   **Product Backlog:** A prioritized list of all the features, enhancements, and bug fixes needed for the platform.
*   **Sprint Backlog:** A subset of the Product Backlog selected for a specific Sprint, along with the plan to deliver them.
*   **Daily Stand-up:** A short, daily meeting where the team discusses progress, plans for the day, and any impediments.
*   **Sprint Review:** A meeting at the end of a Sprint to inspect the increment and adapt the Product Backlog if needed.
*   **Sprint Retrospective:** A meeting at the end of a Sprint to inspect how the Sprint went with regards to individuals, interactions, processes, tools, and their Definition of Done.

**How to Apply Scrum in Platform Engineering:**

Imagine you're tasked with building a new CI/CD pipeline.

1.  **Create a Product Backlog:** List all desired features: automated builds, unit test integration, deployment to staging, deployment to production, rollback capabilities, security scanning, etc. Prioritize them.
2.  **Plan a Sprint:** Select the highest-priority items for the next Sprint (e.g., automated builds and unit test integration).
3.  **Execute the Sprint:** The team works on these items. Daily stand-ups ensure everyone is aligned and roadblocks are addressed.
4.  **Review and Adapt:** At the end of the Sprint, demonstrate the working build and test integration. Gather feedback from stakeholders (e.g., development leads). Based on this, refine the Product Backlog for the next Sprint.

## Kanban: A Visual System for Workflow Management

Kanban, originating from manufacturing, is another Agile approach that focuses on visualizing workflow, limiting work in progress (WIP), and improving flow. It's ideal for continuous delivery and managing ongoing operational tasks.

**Key Kanban Concepts:**

*   **Kanban Board:** A visual representation of the workflow, typically with columns representing stages (e.g., To Do, In Progress, Testing, Done).
*   **Work in Progress (WIP) Limits:** Explicit limits on how many items can be in a particular stage at any given time. This prevents bottlenecks and encourages focus.
*   **Continuous Flow:** Items move through the board smoothly as capacity allows.
*   **Measure and Improve:** Track metrics like lead time (time from request to delivery) and cycle time (time from starting work to completion) to identify areas for improvement.

**How to Apply Kanban in Platform Engineering:**

Consider managing requests for new infrastructure resources or troubleshooting production issues.

1.  **Set up a Kanban Board:**
    *   Columns: `Request Received`, `Analysis`, `Provisioning`, `Testing`, `Deployed`, `Closed`.
    *   WIP Limits: Set limits for `Analysis` (e.g., 3 requests) and `Provisioning` (e.g., 2 requests) to ensure efficient progress.
2.  **Populate the Board:** When a new request comes in, add it as a card to `Request Received`.
3.  **Move Cards:** Team members pull cards from left to right as they have capacity and have completed the previous stage.
4.  **Monitor Flow:** If `Analysis` is consistently full, it indicates a potential bottleneck there. If `Provisioning` is empty, it might mean there are blockers preventing items from moving there, or the team needs to focus on finishing tasks in prior stages.
5.  **Continuous Improvement:** Regularly review metrics. If lead time for new infrastructure is too long, investigate why. Is it the approval process? Is the provisioning script inefficient?

## Choosing the Right Methodology

*   **Scrum** is excellent for projects with defined goals and a need for structured iterations, like building a new platform service or implementing a significant upgrade.
*   **Kanban** is more suited for continuous work, managing a steady stream of requests, or handling ongoing operational support and maintenance where work arrives unpredictably.
*   **Agile** is the overarching philosophy. You can be "Agile" while using Scrum, Kanban, or a hybrid approach.

By understanding and applying these methodologies, you can bring structure, predictability, and efficiency to your platform engineering projects, contributing to successful outcomes.

## Supports

- [[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/microskills/project-management-methodologies|Project Management Methodologies]]
