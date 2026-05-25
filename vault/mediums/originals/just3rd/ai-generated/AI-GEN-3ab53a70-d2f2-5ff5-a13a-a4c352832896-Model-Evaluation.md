---
type: medium
title: "Model Evaluation: Assessing Performance"
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[model-evaluation|model-evaluation]]"
learning-time-in-minutes: 5
---
# Model Evaluation: Assessing Performance

As we train machine learning models, understanding how well they perform is crucial. This micro-skill focuses on **assessing model performance using appropriate metrics**. This allows us to compare different models, tune hyperparameters, and ultimately select the best model for our task.

## Why Evaluate Models?

Imagine you've built several models to predict house prices. Without evaluation, you wouldn't know which model is the most accurate. Evaluation helps us:

*   **Quantify model accuracy:** How close are our predictions to the actual values?
*   **Identify model weaknesses:** Where does the model struggle?
*   **Compare different models:** Which model is the best fit for the problem?
*   **Prevent overfitting:** Is the model performing well on new data, or just the data it was trained on?

## Key Evaluation Metrics

The choice of evaluation metric depends heavily on the type of machine learning problem you're solving (e.g., regression or classification).

### For Regression Problems (Predicting Continuous Values)

When predicting a continuous value, like house price or temperature, we often use metrics that measure the difference between predicted and actual values.

#### Mean Squared Error (MSE)

MSE calculates the average of the squared differences between predicted and actual values. Squaring the errors gives more weight to larger errors.

$$
\text{MSE} = \frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2
$$

Where:
*   $n$ is the number of data points.
*   $y_i$ is the actual value for the $i$-th data point.
*   $\hat{y}_i$ is the predicted value for the $i$-th data point.

**Interpretation:** Lower MSE indicates a better fit.

#### Root Mean Squared Error (RMSE)

RMSE is the square root of MSE. It's often preferred because it's in the same units as the target variable, making it easier to interpret.

$$
\text{RMSE} = \sqrt{\text{MSE}} = \sqrt{\frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2}
$$

**Interpretation:** Lower RMSE indicates a better fit.

#### Mean Absolute Error (MAE)

MAE calculates the average of the absolute differences between predicted and actual values. It's less sensitive to outliers than MSE.

$$
\text{MAE} = \frac{1}{n} \sum_{i=1}^{n} |y_i - \hat{y}_i|
$$

**Interpretation:** Lower MAE indicates a better fit.

#### R-squared ($R^2$)

$R^2$ represents the proportion of the variance in the dependent variable that is predictable from the independent variable(s). It ranges from 0 to 1.

$$
R^2 = 1 - \frac{\text{Sum of Squares of Residuals}}{\text{Total Sum of Squares}} = 1 - \frac{\sum_{i=1}^{n} (y_i - \hat{y}_i)^2}{\sum_{i=1}^{n} (y_i - \bar{y})^2}
$$

Where:
*   $\bar{y}$ is the mean of the actual values.

**Interpretation:** Higher $R^2$ indicates a better fit. An $R^2$ of 1 means the model explains all the variability of the response data around its mean.

### For Classification Problems (Predicting Categories)

When predicting categories, like "spam" or "not spam," or "cat" or "dog," we often use metrics based on a confusion matrix.

#### Confusion Matrix

A confusion matrix summarizes the performance of a classification model. For a binary classification problem (two classes), it looks like this:

|                | **Predicted Positive** | **Predicted Negative** |
| :------------- | :--------------------- | :--------------------- |
| **Actual Positive** | True Positive (TP)     | False Negative (FN)    |
| **Actual Negative** | False Positive (FP)    | True Negative (TN)     |

*   **True Positive (TP):** The model correctly predicted the positive class.
*   **False Negative (FN):** The model predicted the negative class, but it was actually positive (Type II error).
*   **False Positive (FP):** The model predicted the positive class, but it was actually negative (Type I error).
*   **True Negative (TN):** The model correctly predicted the negative class.

#### Accuracy

Accuracy is the proportion of correct predictions out of the total number of predictions.

$$
\text{Accuracy} = \frac{\text{TP} + \text{TN}}{\text{TP} + \text{TN} + \text{FP} + \text{FN}}
$$

**Interpretation:** Higher accuracy indicates a better fit. However, accuracy can be misleading with imbalanced datasets.

#### Precision

Precision measures the proportion of correctly predicted positive instances out of all instances predicted as positive. It answers: "Of all the instances the model predicted as positive, how many were actually positive?"

$$
\text{Precision} = \frac{\text{TP}}{\text{TP} + \text{FP}}
$$

**Interpretation:** Higher precision is important when the cost of a False Positive is high.

#### Recall (Sensitivity)

Recall measures the proportion of correctly predicted positive instances out of all actual positive instances. It answers: "Of all the actual positive instances, how many did the model correctly identify?"

$$
\text{Recall} = \frac{\text{TP}}{\text{TP} + \text{FN}}
$$

**Interpretation:** Higher recall is important when the cost of a False Negative is high.

#### F1-Score

The F1-Score is the harmonic mean of Precision and Recall. It provides a single metric that balances both.

$$
\text{F1-Score} = 2 \times \frac{\text{Precision} \times \text{Recall}}{\text{Precision} + \text{Recall}}
$$

**Interpretation:** Higher F1-Score indicates a better balance between Precision and Recall. This is particularly useful for imbalanced datasets.

#### AUC-ROC Curve

The Area Under the Receiver Operating Characteristic (ROC) curve. The ROC curve plots the True Positive Rate (Recall) against the False Positive Rate (FPR = FP / (FP + TN)) at various threshold settings.

**Interpretation:** AUC-ROC values range from 0 to 1. An AUC of 1 represents a perfect model, while an AUC of 0.5 represents a model no better than random guessing. Higher AUC indicates better discriminative ability of the model.

## Choosing the Right Metric

The "best" metric is context-dependent.

*   **Balanced datasets:** Accuracy is often a good starting point.
*   **Imbalanced datasets:** Precision, Recall, F1-Score, and AUC-ROC are more informative.
*   **Cost of False Negatives is high (e.g., medical diagnosis):** Prioritize Recall.
*   **Cost of False Positives is high (e.g., spam detection):** Prioritize Precision.
*   **Regression:** MSE, RMSE, MAE, and $R^2$ are commonly used. RMSE is often preferred for its interpretability.

## Practical Application

When you train and evaluate your models (Linear Regression, Logistic Regression, Decision Tree, Random Forest, SVM, MLP), you will use these metrics. For instance, after training a Logistic Regression model on a classification task, you'll calculate its Accuracy, Precision, Recall, and F1-Score to understand how well it's performing and to compare it with other models you might train.

## Supports

- [[model-evaluation|Model Evaluation]]
