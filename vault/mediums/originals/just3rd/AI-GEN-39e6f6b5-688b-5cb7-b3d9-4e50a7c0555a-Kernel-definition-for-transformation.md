---
type: "medium"
title: "Understanding the Kernel of a Linear Transformation"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/linear-algebra/linear-transformations/microskills/kernel-definition-for-transformation|kernel-definition-for-transformation]]"
related-skills:
  - "[[skills/mathematics/linear-algebra/linear-transformations/linear-transformations|linear-transformations]]"
learning-time-in-minutes: 4
---
# Understanding the Kernel of a Linear Transformation

In our journey through linear algebra, understanding the behavior of linear transformations is crucial. One fundamental concept that helps us dissect this behavior is the **kernel**.

## What is the Kernel?

Think of a linear transformation, let's call it $T$, as a function that takes vectors from one vector space and maps them to another. The kernel of $T$, often denoted as $\text{ker}(T)$ or $N(T)$, is a special set of vectors.

> **Definition:** The kernel of a linear transformation $T: V \to W$ is the set of all vectors $\mathbf{v}$ in the domain vector space $V$ that are mapped to the zero vector in the codomain vector space $W$.

Mathematically, we can express this as:
$$
\text{ker}(T) = \{ \mathbf{v} \in V \mid T(\mathbf{v}) = \mathbf{0}_W \}
$$
where $\mathbf{0}_W$ is the zero vector in the codomain $W$.

### Key Properties of the Kernel

*   **It's a Subspace:** The kernel is not just any set; it's a subspace of the domain vector space $V$. This means it's closed under vector addition and scalar multiplication.
*   **Contains the Zero Vector:** By definition, the zero vector of the domain $V$ is always mapped to the zero vector of the codomain $W$. Therefore, the zero vector is always in the kernel: $\mathbf{0}_V \in \text{ker}(T)$.

## Why is the Kernel Important?

The kernel tells us something fundamental about the transformation's ability to "collapse" or "squash" vectors. If the kernel contains only the zero vector, it means the transformation is "one-to-one" or "injective" – distinct non-zero vectors are mapped to distinct non-zero vectors. If the kernel contains more than just the zero vector, it means that multiple distinct input vectors are being mapped to the same output vector (the zero vector, in this case).

## Finding the Kernel

To find the kernel of a linear transformation, we use its definition. We set the transformation applied to a general vector equal to the zero vector and solve for the components of that vector.

Let's consider a linear transformation $T: \mathbb{R}^2 \to \mathbb{R}^3$ defined by:
$$
T(x, y) = (x + y, x - y, 2x)
$$

We want to find $\text{ker}(T)$. According to the definition, we need to find all $(x, y) \in \mathbb{R}^2$ such that $T(x, y) = (0, 0, 0)$ in $\mathbb{R}^3$.

So, we set up the system of equations:
$$
\begin{cases}
x + y = 0 \\
x - y = 0 \\
2x = 0
\end{cases}
$$

Let's solve this system:

1.  From the third equation, $2x = 0$, we immediately get $x = 0$.
2.  Substitute $x = 0$ into the first equation: $0 + y = 0$, which gives $y = 0$.
3.  Let's check with the second equation: $0 - 0 = 0$. This is consistent.

The only solution to this system is $x = 0$ and $y = 0$. This means the only vector in $\mathbb{R}^2$ that maps to the zero vector in $\mathbb{R}^3$ is the zero vector itself, $(0, 0)$.

Therefore, the kernel of $T$ is:
$$
\text{ker}(T) = \{ (0, 0) \}
$$
In this case, the kernel is simply the set containing the zero vector of $\mathbb{R}^2$.

### Using Matrix Representation

Often, linear transformations are represented by matrices. If a linear transformation $T: \mathbb{R}^n \to \mathbb{R}^m$ is represented by an $m \times n$ matrix $A$, then $T(\mathbf{x}) = A\mathbf{x}$. To find the kernel, we solve the homogeneous system of linear equations $A\mathbf{x} = \mathbf{0}$.

Let's use the previous example. The matrix representation for $T(x, y) = (x + y, x - y, 2x)$ would be:
$$
A = \begin{pmatrix}
1 & 1 \\
1 & -1 \\
2 & 0
\end{pmatrix}
$$
We want to solve $A\mathbf{x} = \mathbf{0}$:
$$
\begin{pmatrix}
1 & 1 \\
1 & -1 \\
2 & 0
\end{pmatrix}
\begin{pmatrix}
x \\
y
\end{pmatrix}
=
\begin{pmatrix}
0 \\
0 \\
0
\end{pmatrix}
$$
This leads to the same system of equations we solved before:
$$
\begin{cases}
x + y = 0 \\
x - y = 0 \\
2x = 0
\end{cases}
$$
The solution is $x=0, y=0$, so the kernel is $\{ (0, 0) \}$.

## Common Mistakes

*   **Forgetting to check if the result is a subspace:** While you often find the kernel by solving $T(\mathbf{v}) = \mathbf{0}$, remember that the kernel itself *is* a subspace. When you find the set of vectors, ensure it satisfies the subspace criteria (contains zero, closed under addition and scalar multiplication).
*   **Confusing domain and codomain:** The kernel is a subset of the *domain* vector space $V$.

Understanding the kernel is a stepping stone to comprehending other important concepts like the range, nullity, and rank, and how they are interconnected through the Rank-Nullity Theorem.

## Supports

- [[skills/mathematics/linear-algebra/linear-transformations/microskills/kernel-definition-for-transformation|Kernel definition for transformation]]
