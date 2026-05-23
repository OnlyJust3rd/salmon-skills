---
type: "medium"
title: "Basis Definition"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/mathematics/linear-algebra/vector-space/microskills/basis-definition|basis-definition]]"
learning-time-in-minutes: 4
---
# Basis Definition

In the realm of vector spaces, a **basis** is a fundamental concept that helps us understand the structure and size of these spaces. Think of it as a special set of "building blocks" that can be used to construct any vector within the space, and in a unique way.

## What is a Basis?

A basis for a vector space is a set of vectors that satisfies two crucial properties:

1.  **Linear Independence:** The vectors in the set are linearly independent. This means that no vector in the set can be written as a linear combination of the other vectors in the set. In simpler terms, each vector in the set brings something new to the table; none of them are redundant.

2.  **Spanning Set:** The set of vectors spans the entire vector space. This means that any vector in the vector space can be expressed as a linear combination of the vectors in the basis set. You can reach any point in the vector space using only these "building blocks."

Let's formalize this.

> **Definition of a Basis:**
> A set of vectors $B = \{v_1, v_2, \ldots, v_n\}$ is a basis for a vector space $V$ if:
> 1. $B$ is linearly independent.
> 2. $B$ spans $V$ (i.e., $span(B) = V$).

## Why are Bases Important?

Bases are essential because they provide a way to represent vectors in a unique and efficient manner.

*   **Uniqueness:** If you have a basis, every vector in the space can be written as a linear combination of the basis vectors in *exactly one way*. This uniqueness is key to defining coordinate systems.
*   **Efficiency:** A basis often consists of the minimum number of vectors required to span the entire space. This minimal set gives us a concise way to describe the space.

## Example to Understand

Let's consider the familiar 2-dimensional Euclidean space, denoted as $\mathbb{R}^2$. This is the plane where we typically plot points using (x, y) coordinates.

Consider the set of vectors $B = \{\begin{pmatrix} 1 \\ 0 \end{pmatrix}, \begin{pmatrix} 0 \\ 1 \end{pmatrix}\}$.

Let's check if this set is a basis for $\mathbb{R}^2$:

1.  **Linear Independence:**
    We need to see if there are scalars $c_1$ and $c_2$ such that $c_1 \begin{pmatrix} 1 \\ 0 \end{pmatrix} + c_2 \begin{pmatrix} 0 \\ 1 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$.
    This equation simplifies to $\begin{pmatrix} c_1 \\ c_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$, which implies $c_1 = 0$ and $c_2 = 0$.
    Since the only solution is the trivial solution (all scalars are zero), the vectors are linearly independent.

2.  **Spanning Set:**
    Can any vector $\begin{pmatrix} a \\ b \end{pmatrix}$ in $\mathbb{R}^2$ be written as a linear combination of $\begin{pmatrix} 1 \\ 0 \end{pmatrix}$ and $\begin{pmatrix} 0 \\ 1 \end{pmatrix}$?
    Yes, we can write $\begin{pmatrix} a \\ b \end{pmatrix} = a \begin{pmatrix} 1 \\ 0 \end{pmatrix} + b \begin{pmatrix} 0 \\ 1 \end{pmatrix}$.
    Here, $a$ and $b$ are the scalars. Thus, the set $B$ spans $\mathbb{R}^2$.

Since $B$ is linearly independent and spans $\mathbb{R}^2$, it is a basis for $\mathbb{R}^2$. This particular basis, $B = \{\begin{pmatrix} 1 \\ 0 \end{pmatrix}, \begin{pmatrix} 0 \\ 1 \end{pmatrix}\}$, is called the **standard basis** for $\mathbb{R}^2$.

## Common Pitfalls

*   **Confusing Spanning with Basis:** A set of vectors might span a space but not be linearly independent. For example, in $\mathbb{R}^2$, the set $\{\begin{pmatrix} 1 \\ 0 \end{pmatrix}, \begin{pmatrix} 0 \\ 1 \end{pmatrix}, \begin{pmatrix} 1 \\ 1 \end{pmatrix}\}$ spans $\mathbb{R}^2$, but it's not a basis because the vectors are linearly dependent (since $\begin{pmatrix} 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 1 \\ 0 \end{pmatrix} + \begin{pmatrix} 0 \\ 1 \end{pmatrix}$).
*   **Confusing Linearly Independent with Basis:** A linearly independent set might not span the entire space. For example, in $\mathbb{R}^2$, the set $\{\begin{pmatrix} 1 \\ 0 \end{pmatrix}\}$ is linearly independent but does not span $\mathbb{R}^2$. It only spans the x-axis.

Understanding the definition of a basis is the first step towards grasping how vector spaces are structured and how we can work with them effectively.

## Supports

- [[skills/mathematics/linear-algebra/vector-space/microskills/basis-definition|Basis definition]]
