---
type: "medium"
title: "Implementing Ordinary Least Squares (OLS) for Model Training"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/data-ai/data-science/machine-learning/microskills/ols-implementation|ols-implementation]]"
learning-time-in-minutes: 4
---
# Implementing Ordinary Least Squares (OLS) for Model Training

This lesson focuses on implementing Ordinary Least Squares (OLS) to train machine learning models. OLS is a fundamental technique for finding the best-fit line (or hyperplane) for a given set of data points.

## What is Ordinary Least Squares (OLS)?

Ordinary Least Squares is a method used to estimate the unknown parameters in a statistical model. In the context of linear regression, OLS aims to find the line that minimizes the sum of the squared differences between the observed actual outcomes and the outcomes predicted by the linear model.

Consider a simple linear regression model:
$$ y = \beta_0 + \beta_1 x + \epsilon $$

Here:
*   $y$ is the dependent variable.
*   $x$ is the independent variable.
*   $\beta_0$ is the intercept.
*   $\beta_1$ is the slope.
*   $\epsilon$ is the error term, representing the part of $y$ not explained by $x$.

OLS finds the values for $\beta_0$ and $\beta_1$ that minimize the sum of squared errors ($SSE$):
$$ SSE = \sum_{i=1}^{n} (y_i - (\beta_0 + \beta_1 x_i))^2 $$

The goal is to find $\beta_0$ and $\beta_1$ that make this sum as small as possible.

## When to Use OLS

OLS is a good choice for linear regression tasks when:
*   The relationship between the independent and dependent variables is approximately linear.
*   The errors are independent and identically distributed (i.i.d.).
*   The errors have constant variance (homoscedasticity).
*   The errors are normally distributed (though OLS is still optimal for parameter estimation even without this assumption, it's important for hypothesis testing).

## Implementing OLS in Python

We can implement OLS using libraries like `scikit-learn` or `statsmodels` in Python. `scikit-learn` is generally preferred for machine learning applications due to its integration with other ML tools.

### Using `scikit-learn`

`scikit-learn` provides the `LinearRegression` class, which implements OLS.

**Example:**

Let's train a simple linear regression model to predict house prices based on their size.

```python
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error

# Sample Data
# House sizes in square feet
X = np.array([1000, 1500, 1200, 1800, 2000, 1300, 1600, 1100, 1900, 1400]).reshape(-1, 1)
# Corresponding house prices in thousands of dollars
y = np.array([200, 300, 250, 350, 400, 260, 320, 220, 380, 280])

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize the Linear Regression model
model = LinearRegression()

# Train the model using OLS
model.fit(X_train, y_train)

# Make predictions on the test set
y_pred = model.predict(X_test)

# Get the learned coefficients
intercept = model.intercept_
slope = model.coef_[0]

print(f"Intercept (beta_0): {intercept:.2f}")
print(f"Slope (beta_1): {slope:.2f}")

# Evaluate the model
mse = mean_squared_error(y_test, y_pred)
print(f"Mean Squared Error: {mse:.2f}")

# Example prediction for a new house size
new_house_size = np.array([[1700]]) # Size in square feet
predicted_price = model.predict(new_house_size)
print(f"Predicted price for a {new_house_size[0][0]} sq ft house: ${predicted_price[0]*1000:.2f}")
```

**Explanation:**

1.  **Import Libraries:** We import `numpy` for numerical operations, `LinearRegression` from `sklearn.linear_model`, and `train_test_split` and `mean_squared_error` for data splitting and evaluation.
2.  **Sample Data:** We create sample data for house sizes (`X`) and prices (`y`). `X` is reshaped to be a 2D array, as required by `scikit-learn`.
3.  **Split Data:** We split the data into training (80%) and testing (20%) sets. This is crucial for evaluating how well our model generalizes to unseen data. `random_state` ensures reproducibility.
4.  **Initialize Model:** We create an instance of the `LinearRegression` class. By default, this class uses OLS.
5.  **Train Model (`fit`):** The `fit(X_train, y_train)` method performs the OLS calculation. It finds the optimal $\beta_0$ (intercept) and $\beta_1$ (coefficient for `X`) that minimize the sum of squared errors on the training data.
6.  **Predict (`predict`):** The `predict(X_test)` method uses the learned coefficients to estimate the target variable (`y`) for the input features (`X_test`).
7.  **Access Coefficients:** `model.intercept_` gives you $\beta_0$, and `model.coef_` gives you the coefficients for the features (in this case, just $\beta_1$).
8.  **Evaluate Model:** Mean Squared Error (MSE) is a common metric to assess the performance of regression models. Lower MSE indicates a better fit.

### Using `statsmodels`

`statsmodels` provides more detailed statistical summaries, which can be very useful for understanding the significance of your model's coefficients.

```python
import numpy as np
import statsmodels.api as sm

# Sample Data (same as above)
X = np.array([1000, 1500, 1200, 1800, 2000, 1300, 1600, 1100, 1900, 1400])
y = np.array([200, 300, 250, 350, 400, 260, 320, 220, 380, 280])

# Add a constant to the independent variable for the intercept
X = sm.add_constant(X)

# Initialize and fit the OLS model
model = sm.OLS(y, X)
results = model.fit()

# Print the summary of the regression
print(results.summary())

# Access coefficients
intercept = results.params[0]
slope = results.params[1]
print(f"\nIntercept (beta_0): {intercept:.2f}")
print(f"Slope (beta_1): {slope:.2f}")
```

**Explanation:**

1.  **Add Constant:** `statsmodels` requires you to explicitly add a constant column to your feature matrix (`X`) to account for the intercept ($\beta_0$). `sm.add_constant(X)` does this.
2.  **Initialize and Fit:** `sm.OLS(y, X)` creates an OLS model object, and `model.fit()` performs the OLS estimation.
3.  **Summary:** `results.summary()` provides a comprehensive statistical output, including coefficients, R-squared, p-values, and more. This is where `statsmodels` shines for deeper analysis.

## Key Takeaways

*   OLS is a method for finding the best-fit line by minimizing the sum of squared errors.
*   It's a core technique for linear regression.
*   Libraries like `scikit-learn` and `statsmodels` make OLS implementation straightforward in Python.
*   `scikit-learn` is excellent for ML pipelines, while `statsmodels` offers richer statistical diagnostics.

You have now successfully applied OLS for model training. This is a foundational skill for many further machine learning tasks.

## Supports

- [[skills/computing/data-ai/data-science/machine-learning/microskills/ols-implementation|OLS implementation]]
