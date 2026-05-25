---
type: medium
title: Singular Value Decomposition (SVD) for Dimensionality Reduction
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[svd-implementation|svd-implementation]]"
learning-time-in-minutes: 4
---
# Singular Value Decomposition (SVD) for Dimensionality Reduction

This lesson focuses on applying Singular Value Decomposition (SVD) to reduce the dimensionality of your data. Dimensionality reduction is a crucial step in many machine learning workflows, helping to improve model performance, reduce computational cost, and mitigate the curse of dimensionality.

## What is SVD?

Singular Value Decomposition is a powerful matrix factorization technique. For any given matrix $A$, SVD decomposes it into three other matrices: $U$, $\Sigma$ (Sigma), and $V^T$ (V transpose).

$$
A = U \Sigma V^T
$$

*   **$U$**: An orthogonal matrix. Its columns are the left-singular vectors of $A$.
*   **$\Sigma$ (Sigma)**: A diagonal matrix. The diagonal entries are the singular values of $A$, ordered from largest to smallest. These values represent the "importance" or "energy" of the corresponding dimensions.
*   **$V^T$**: The transpose of an orthogonal matrix $V$. The columns of $V$ (rows of $V^T$) are the right-singular vectors of $A$.

The key idea for dimensionality reduction with SVD is that the largest singular values and their corresponding singular vectors capture the most significant variance in the data. By keeping only the top $k$ singular values and their associated vectors, we can reconstruct an approximation of the original matrix $A$ with fewer dimensions.

## Why Use SVD for Dimensionality Reduction?

*   **Captures Variance:** SVD naturally identifies the principal components of variation in your data.
*   **Approximation:** It allows for a controlled approximation of the original data, retaining the most important information.
*   **Noise Reduction:** By discarding components associated with smaller singular values, you can effectively filter out noise.
*   **Foundation for other methods:** SVD is the basis for techniques like Principal Component Analysis (PCA).

## Applying SVD with Scikit-learn

Scikit-learn provides a convenient implementation of SVD. We'll use the `TruncatedSVD` class, which is particularly useful for sparse matrices and for when you want to specify the number of components to keep.

**Scenario:** Imagine you have a dataset representing customer purchase history, where each row is a customer and each column is a product, with the value indicating the quantity purchased. This can result in a very wide dataset with many products (features). SVD can help us find underlying patterns in customer purchasing behavior with fewer dimensions.

### Step-by-Step Implementation

1.  **Import necessary libraries:**
    ```python
    import numpy as np
    from sklearn.decomposition import TruncatedSVD
    from sklearn.datasets import make_blobs # For generating sample data
    import matplotlib.pyplot as plt
    ```

2.  **Generate sample data:** Let's create a dataset with many features to demonstrate dimensionality reduction.
    ```python
    # Generate synthetic data: 100 samples, 100 features
    X, _ = make_blobs(n_samples=100, n_features=100, centers=3, random_state=42)
    print("Original data shape:", X.shape)
    ```

3.  **Initialize and apply TruncatedSVD:** We'll choose to reduce the dimensionality to a smaller number, say `n_components=2`.
    ```python
    # Initialize TruncatedSVD
    # n_components: the number of dimensions to reduce to
    n_components = 2
    svd = TruncatedSVD(n_components=n_components, random_state=42)

    # Fit SVD on the data and transform it
    X_reduced = svd.fit_transform(X)

    print("Reduced data shape:", X_reduced.shape)
    ```

4.  **Analyze the explained variance:** The `explained_variance_ratio_` attribute tells you the proportion of variance explained by each selected component.
    ```python
    print("Explained variance ratio by component:", svd.explained_variance_ratio_)
    print("Total explained variance:", np.sum(svd.explained_variance_ratio_))
    ```

### Understanding the Output

The `fit_transform` method performs two actions:
*   **`fit`**: It computes the SVD of the input data `X` and determines the singular values and vectors.
*   **`transform`**: It uses the learned singular vectors to project the original data `X` into the lower-dimensional space defined by `n_components`.

The `X_reduced` array now contains your data with `n_components` features. Each row still represents a sample, but the columns are the new, compressed representations.

### Visualizing the Reduced Dimensions

If you reduce your data to 2 or 3 dimensions, you can visualize it.

```python
# For visualization purposes, let's assume X_reduced has 2 components
if n_components == 2:
    plt.figure(figsize=(8, 6))
    plt.scatter(X_reduced[:, 0], X_reduced[:, 1], alpha=0.7)
    plt.title('SVD Reduced Data (2 Components)')
    plt.xlabel('Component 1')
    plt.ylabel('Component 2')
    plt.grid(True)
    plt.show()
```

## Choosing the Number of Components (`n_components`)

Selecting the right number of components is crucial.

*   **Too few components:** You might lose too much information, leading to a poor approximation and potentially hindering downstream tasks.
*   **Too many components:** You might not achieve significant dimensionality reduction, or you might retain noise.

**Strategies:**

*   **Explained Variance Threshold:** Aim for a cumulative explained variance ratio (e.g., 90% or 95%) that you deem acceptable for your problem. You can iterate through different `n_components` values and check `np.sum(svd.explained_variance_ratio_)`.
*   **Elbow Method (less common for SVD alone):** While more associated with PCA, one could plot the singular values themselves and look for an "elbow" where the values drop off significantly, although this is less clear-cut with SVD than with eigenvalues in PCA.
*   **Downstream Task Performance:** The best approach is often to experiment with different numbers of components and evaluate how they affect the performance of your final machine learning model.

## Key Considerations

*   **Centering Data:** For optimal results, it's often recommended to center your data (subtract the mean of each feature) before applying SVD. `TruncatedSVD` in scikit-learn does *not* automatically center the data, but it's a common preprocessing step. If your data is already scaled (e.g., using `StandardScaler`), centering is usually handled.
*   **Sparse Matrices:** `TruncatedSVD` is efficient for sparse data, which is common in text analysis or recommendation systems. For dense matrices, `scipy.linalg.svd` is the underlying implementation.
*   **Interpretation:** While SVD provides a mathematical decomposition, interpreting the meaning of the new, reduced dimensions can be challenging.

By applying SVD, you can effectively reduce the dimensionality of your dataset, making your machine learning models more efficient and potentially more accurate.

## Supports

- [[svd-implementation|SVD implementation]]
