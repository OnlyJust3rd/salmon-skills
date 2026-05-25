---
type: medium
title: Implementing PCA for Dimensionality Reduction
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[pca-implementation|pca-implementation]]"
learning-time-in-minutes: 3
---
# Implementing PCA for Dimensionality Reduction

This lesson focuses on applying Principal Component Analysis (PCA) to reduce the dimensionality of a dataset, a key step in feature engineering for machine learning.

### What is PCA?

PCA is a statistical technique used to transform a dataset with many variables into a smaller set of variables called principal components. These principal components capture most of the variance in the original data. In essence, PCA helps us find the most important "directions" in our data.

Imagine you have data with many features (columns). Some of these features might be highly correlated, meaning they provide similar information. PCA identifies these underlying patterns and combines the correlated features into new, uncorrelated features (principal components). This reduces the number of features while retaining as much of the original data's information (variance) as possible.

### Why Apply PCA?

*   **Reduces Computational Cost:** Fewer features mean faster model training and prediction.
*   **Combats Overfitting:** By reducing noise and redundancy, PCA can help models generalize better to unseen data.
*   **Improves Model Performance:** For some algorithms, reducing dimensionality can lead to better accuracy.
*   **Data Visualization:** Reducing data to 2 or 3 principal components allows for easier visualization of complex datasets.

### Applying PCA with Scikit-learn

We will use the `PCA` class from Scikit-learn's `decomposition` module.

**1. Importing Libraries and Loading Data**

First, let's import the necessary libraries and create a sample dataset.

```python
import pandas as pd
from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler
import numpy as np

# Create a sample dataset with some correlated features
data = {
    'feature1': np.random.rand(100) * 10,
    'feature2': np.random.rand(100) * 10,
    'feature3': np.random.rand(100) * 5,
    'feature4': np.random.rand(100) * 15,
    'feature5': np.random.rand(100) * 8
}
df = pd.DataFrame(data)

# Let's add some correlation to demonstrate PCA's effect
df['feature2'] = df['feature1'] * 0.8 + np.random.randn(100) * 2
df['feature4'] = df['feature3'] * 1.5 + np.random.randn(100) * 3
```

**2. Scaling the Data**

PCA is sensitive to the scale of the features. Features with larger values can dominate the principal components. Therefore, it's crucial to scale your data before applying PCA. `StandardScaler` is commonly used for this purpose.

```python
scaler = StandardScaler()
scaled_data = scaler.fit_transform(df)
```

**3. Applying PCA**

We instantiate the `PCA` object. A key parameter is `n_components`, which specifies the number of principal components we want to keep. We can either specify an integer (e.g., `n_components=2`) or a float between 0 and 1 to indicate the proportion of variance to retain (e.g., `n_components=0.95` to keep components explaining 95% of the variance).

```python
# Let's reduce to 2 principal components for demonstration
pca = PCA(n_components=2)
principal_components = pca.fit_transform(scaled_data)

# Create a DataFrame for the principal components
pca_df = pd.DataFrame(data = principal_components, columns = ['principal_component_1', 'principal_component_2'])

print("Original number of features:", df.shape[1])
print("Number of principal components:", pca_df.shape[1])
print("\nFirst 5 rows of principal components:")
print(pca_df.head())
```

**4. Understanding the Explained Variance**

The `explained_variance_ratio_` attribute of the PCA object tells us the proportion of variance explained by each principal component. This is very useful for deciding how many components to keep.

```python
print("\nExplained variance by each component:", pca.explained_variance_ratio_)
print("Total explained variance:", np.sum(pca.explained_variance_ratio_))
```

If you had chosen `n_components=0.95`, the `PCA` object would have automatically selected the number of components needed to explain at least 95% of the variance.

### When to Choose the Number of Components

*   **For Visualization:** Choose 2 or 3 components.
*   **To Retain a Specific Amount of Variance:** Set `n_components` to a float like `0.95` or `0.99`.
*   **To Reduce Dimensionality by a Fixed Amount:** Set `n_components` to an integer like `2` or `3`.
*   **Scree Plot (less common with `n_components` as float):** You can plot the cumulative explained variance against the number of components. The "elbow" point where the explained variance starts to level off can suggest an optimal number of components.

### Key Takeaways

*   PCA transforms features into principal components, capturing most of the data's variance.
*   Always scale your data before applying PCA.
*   `n_components` is crucial for controlling the dimensionality reduction.
*   `explained_variance_ratio_` helps you understand how much information each component retains.

By applying PCA, you can create a more efficient and potentially more robust feature set for your machine learning models.

## Supports

- [[pca-implementation|PCA implementation]]
