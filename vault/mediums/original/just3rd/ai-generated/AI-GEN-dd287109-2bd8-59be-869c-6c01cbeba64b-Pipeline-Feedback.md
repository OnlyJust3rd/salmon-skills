---
type: "medium"
title: "Pipeline Feedback: Knowing if Your Code Works, Fast!"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/platform-engineering/continuous-integration/microskills/pipeline-feedback|pipeline-feedback]]"
learning-time-in-minutes: 4
---
# Pipeline Feedback: Knowing if Your Code Works, Fast!

In Continuous Integration (CI), a pipeline automates the process of building and testing your code. A crucial part of this pipeline is **feedback**. Pipeline feedback is all about how quickly and clearly you find out if your recent code changes have broken anything. Think of it as the pipeline's way of saying "thumbs up" or "thumbs down" on your work.

## Why Fast Feedback Matters

Imagine you've made a small change to your code. Without good feedback, you might not know if that change caused a problem for hours, or even days! During that time, others could be building on your "broken" code, making it much harder to fix later.

Fast feedback means you get that "thumbs down" *immediately*. You know exactly which change caused the problem and you can fix it while it's fresh in your mind. This leads to:

*   **Quicker Bug Fixes:** You can correct errors as soon as they appear.
*   **Reduced Integration Issues:** Fewer conflicts when merging code from different developers.
*   **Higher Code Quality:** Encourages developers to keep their code working and tested.
*   **Increased Confidence:** Developers feel more secure pushing their changes.

## How Feedback Works in a CI Pipeline

CI pipelines are typically triggered by changes pushed to a code repository (like Git). Once triggered, the pipeline goes through several stages:

1.  **Source Trigger:** You push your code.
2.  **Build:** The code is compiled or packaged.
3.  **Test:** Automated tests (unit tests, integration tests, etc.) are run.

The **feedback loop** comes into play after the build and test stages.

*   **Success:** If the build succeeds and all tests pass, the pipeline reports a success. This is the "thumbs up." You'll typically see a green checkmark or a similar indicator.
*   **Failure:** If the build fails or any test fails, the pipeline reports a failure. This is the "thumbs down." You'll see a red "X" or similar indicator. The pipeline usually provides details about *which* test failed or *why* the build failed, often pointing to specific error messages.

This instant notification is the core of fast feedback. Many CI tools will also notify the team (via email, Slack, or other channels) about failures.

## Practical Scenario: The Flaky Test

Let's say you're working on a web application. You push a small change to fix a typo in a user profile display.

Your CI pipeline kicks off:

1.  **Trigger:** You push your code.
2.  **Build:** The application builds successfully.
3.  **Tests:**
    *   **Unit Tests:** All pass.
    *   **Integration Tests:** One test, `test_user_profile_loading`, fails.

**The Feedback:** Your CI dashboard immediately shows a red failure. Clicking on the failed test reveals an error message: `AssertionError: Expected user to be loaded, but received None.`

This tells you that your seemingly small typo fix might have inadvertently affected how user data is loaded. Because the feedback was fast, you can:

*   Stop other developers from merging their code into the main branch if it depends on your broken change.
*   Investigate the `test_user_profile_loading` failure immediately.
*   Fix the issue while you still remember the exact code you changed.

If you had waited a day for feedback, you might have forgotten the details of your change, and multiple other developers might have already integrated their work, making the problem much harder to resolve.

## Practice Task

Imagine you've just pushed a code change. Your CI pipeline runs and reports a failure.

1.  **What is the *first* thing you should do?**
2.  **Where would you look to understand *why* the pipeline failed?**
3.  **Why is it important to address this failure *quickly*?**

## Self-Check Questions

1.  What does "pipeline feedback" refer to in the context of CI?
2.  Name two benefits of receiving fast feedback from a CI pipeline.
3.  Describe what happens when a CI pipeline reports a "success" and what happens when it reports a "failure."

## Supports

- [[skills/computing/systems-infrastructure/platform-engineering/continuous-integration/microskills/pipeline-feedback|Pipeline Feedback]]
