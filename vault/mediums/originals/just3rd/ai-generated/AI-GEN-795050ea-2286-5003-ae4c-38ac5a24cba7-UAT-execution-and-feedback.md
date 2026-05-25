---
type: "medium"
title: "Executing User Acceptance Testing (UAT) and Gathering Feedback"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/software-engineering/testing-quality/program-testing/microskills/uat-execution-and-feedback|uat-execution-and-feedback]]"
learning-time-in-minutes: 5
---
# Executing User Acceptance Testing (UAT) and Gathering Feedback

User Acceptance Testing (UAT) is the final stage of testing before a software product is released to the market or deployed to its intended users. It's about ensuring the software works *for the users* and meets their real-world needs and expectations. This micro-skill focuses on the practical execution of UAT sessions and the crucial process of collecting and documenting user feedback.

## Understanding the Goal of UAT Execution

The primary goal when executing UAT is to **simulate real-world usage** by actual end-users. This is not about finding every single bug (that's what earlier testing phases are for). Instead, UAT aims to:

*   **Validate functionality against user requirements:** Does the software do what users expect it to do?
*   **Verify usability and user experience:** Is the software intuitive, easy to navigate, and efficient for the intended tasks?
*   **Confirm business process alignment:** Does the software fit seamlessly into the existing workflows and business processes of the users?
*   **Build user confidence and buy-in:** Users feel more comfortable adopting a system they have tested and approved.

## Structuring a UAT Execution Session

Effective UAT execution relies on structured sessions. While the exact format can vary, a common approach involves the following steps.

### 1. Preparing the UAT Environment and Scenarios

Before users even start testing, ensure they have a clear understanding of what they need to do.

*   **Environment Setup:** Make sure the testing environment is stable, representative of the production environment, and populated with realistic test data.
*   **Test Scenarios and Scripts:** Develop clear, concise test scenarios that reflect typical user tasks. These should be scenario-based rather than purely technical, focusing on "a user needs to do X to achieve Y."
    *   **Example Scenario:** "As a customer support representative, I need to log a new customer inquiry so that it can be assigned to the appropriate agent."
*   **Clear Instructions:** Provide users with guidance on how to access the testing environment and how to report issues or feedback.

### 2. Conducting the UAT Session

During the session, your role is to facilitate and observe.

*   **Onboarding and Explanation:** Begin by briefly explaining the purpose of UAT, the scope of the testing, and how users should report their findings. Reassure them that this is a collaborative process to improve the software.
*   **Observation:** Where possible, observe users as they perform their tasks. This can reveal usability issues that users might not explicitly report.
*   **Guided Assistance:** Be available to answer questions, but avoid leading the users or solving problems for them immediately. Guide them to try and figure it out themselves first, as this simulates real-world usage.
*   **Time Management:** Ensure the sessions stay on track within the allotted time.

### 3. Recording User Feedback and Results

This is a critical step. The quality of your feedback collection directly impacts the value derived from UAT.

#### Methods for Feedback Collection

| Method             | Description                                                                                                                                                                | Pros                                                                     | Cons                                                                                             |
| :----------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------- |
| **Observation**    | Directly watching users interact with the system.                                                                                                                          | Uncovers hidden usability issues, non-verbal cues.                       | Time-consuming, requires skilled observers, potential for observer bias.                         |
| **Feedback Forms** | Structured questionnaires or online forms for users to fill out after testing.                                                                                             | Standardized data, easy to analyze, can cover specific areas.            | May miss nuances, users might not recall details, can be tedious to fill out.                   |
| **Interviews**     | One-on-one discussions with users after they have completed their testing.                                                                                                 | Allows for deep dives, clarifies ambiguities, gathers rich qualitative data. | Time-intensive, relies on user articulation, potential for interviewer bias.                     |
| **Bug Tracking Tools** | Using dedicated tools (like Jira, Trello, Asana) to log defects and enhancement requests.                                                                                 | Centralized, trackable, formal process for issue resolution.             | Can be technical for non-technical users, requires setup and training.                           |
| **Session Recordings** | Screen recording software to capture user interactions. Can be combined with audio commentary.                                                                           | Provides objective evidence, useful for demonstrating issues.            | Privacy concerns, can be overwhelming to review, requires technical setup.                       |

#### Key Information to Record

When recording feedback, aim for clarity and completeness. For each piece of feedback, try to capture:

*   **User:** Who provided the feedback?
*   **Date & Time:** When was the feedback given?
*   **Test Scenario/Task:** Which specific scenario or task was being performed?
*   **Observed Behavior/Action:** What did the user do?
*   **Expected Behavior:** What did the user expect to happen?
*   **Actual Outcome:** What actually happened?
*   **Feedback Category:** Is it a defect (bug), an enhancement request, a usability issue, or general comment?
*   **Severity/Priority (User's perspective):** How critical does the user perceive this issue to be? (e.g., "Blocks my work," "Annoying but I can work around it").
*   **Screenshots/Recordings:** Attach relevant visual evidence.
*   **User Comments/Quotes:** Capture the user's exact words whenever possible.

### 4. Analyzing and Reporting UAT Feedback

Once UAT sessions are complete, the collected feedback needs to be analyzed and reported to the development team.

*   **Consolidate Feedback:** Gather all feedback from various sources into a single, organized format.
*   **Categorize and Prioritize:** Group similar feedback. Differentiate between critical defects, minor bugs, and suggestions for improvement.
*   **Validate Feedback:** Developers and testers should review the feedback to confirm the validity of reported issues.
*   **Actionable Insights:** Translate the feedback into concrete action items for the development team.

By diligently executing UAT sessions and meticulously recording user feedback, you ensure that the software truly serves its intended audience, leading to a more successful and adopted product.

## Supports

- [[skills/computing/software-engineering/testing-quality/program-testing/microskills/uat-execution-and-feedback|UAT execution and feedback]]
