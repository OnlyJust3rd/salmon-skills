---
type: "medium"
title: "Eigenvectors: The Secret to Changing Your Perspective (Basis)"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/spectral-analysis-and-matrix-decomposition/microskills/eigenvectors-in-change-of-basis-matrix-p|Eigenvectors in change-of-basis matrix P]]"
---
# Eigenvectors: The Secret to Changing Your Perspective (Basis)

In the world of spectral analysis, we often encounter matrices. Sometimes, these matrices can seem a bit abstract. However, when we connect them to their eigenvalues and eigenvectors, they reveal a powerful underlying structure. One of the most exciting applications of this connection is how eigenvectors allow us to change our "perspective" or "basis" for understanding a linear transformation.

## The Big Picture: Diagonalization and Basis Change

Recall that diagonalization is about finding a simpler way to represent a matrix. This simpler form is achieved by finding a new basis where the linear transformation represented by the matrix behaves like simple scaling. This new basis is directly constructed from the eigenvectors of the original matrix. The matrix whose columns are these eigenvectors acts as a "change-of-basis" matrix.

## What is a Change-of-Basis Matrix?

Imagine you're describing the location of a point in a room. You could use the corner of the room as your origin and the two walls meeting at that corner as your axes (a standard basis). Or, you could decide to use a different origin and two different directions as your axes.

In linear algebra, a "basis" is a set of vectors that can be used to represent any other vector in a space. A "change-of-basis matrix" is a tool that allows us to translate coordinates from one basis to another.

## Eigenvectors as the Foundation for a New Basis

The key insight is that the eigenvectors of a matrix $A$ form a special set of vectors. When a linear transformation represented by $A$ acts on an eigenvector, the result is simply a scaled version of that same eigenvector. This scaling factor is the corresponding eigenvalue.

$$ Av = \lambda v $$

Where:
*   $A$ is the matrix.
*   $v$ is an eigenvector of $A$.
*   $\lambda$ is the corresponding eigenvalue.

This property is crucial. It means that eigenvectors point in directions that are not changed by the transformation $A$, only stretched or shrunk. These "invariant directions" are precisely what we need to form a new, simpler basis.

## Constructing the Change-of-Basis Matrix $P$

Let's say you have a matrix $A$ and you've found its distinct eigenvectors $v_1, v_2, \dots, v_n$ with corresponding eigenvalues $\lambda_1, \lambda_2, \dots, \lambda_n$.

To form the change-of-basis matrix $P$, you simply arrange these eigenvectors as columns:

$$ P = [v_1 \quad v_2 \quad \dots \quad v_n] $$

Each column of $P$ is an eigenvector of $A$.

### Why does this work?

When you multiply a vector $x$ by $P$, you are expressing $x$ in the basis formed by the eigenvectors of $A$. That is, $Px$ represents the coordinates of $x$ in the eigenvector basis.

Let's consider what happens when you apply the original transformation $A$ to a vector $x$, and then express the result in the eigenvector basis.

First, let's express $x$ in the eigenvector basis. If $P$ is our matrix of eigenvectors, then $P^{-1}x$ would give us the coordinate representation of $x$ in the basis formed by the columns of $P$. Let $y = P^{-1}x$. This means $x = Py$.

Now, let's apply the original transformation $A$ to $x$:

$$ Ax = A(Py) $$

The magic happens when we realize that applying $A$ to $Py$ is equivalent to scaling each eigenvector component of $y$ by its corresponding eigenvalue. If $y = \begin{bmatrix} y_1 \\ y_2 \\ \vdots \\ y_n \end{bmatrix}$, then:

$$ A(Py) = P \begin{bmatrix} \lambda_1 y_1 \\ \lambda_2 y_2 \\ \vdots \\ \lambda_n y_n \end{bmatrix} $$

This can be rewritten as:

$$ P \begin{bmatrix} \lambda_1 & 0 & \dots & 0 \\ 0 & \lambda_2 & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & \lambda_n \end{bmatrix} \begin{bmatrix} y_1 \\ y_2 \\ \vdots \\ y_n \end{bmatrix} $$

Let $D$ be the diagonal matrix containing the eigenvalues:

$$ D = \begin{bmatrix} \lambda_1 & 0 & \dots & 0 \\ 0 & \lambda_2 & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & \lambda_n \end{bmatrix} $$

So, we have:

$$ Ax = P D y $$

Now, substitute back $y = P^{-1}x$:

$$ Ax = P D P^{-1} x $$

This means that the original matrix $A$ is similar to the diagonal matrix $D$. The matrix $P$ is our change-of-basis matrix, where its columns are the eigenvectors of $A$. It transforms vectors from the standard basis to the eigenvector basis, and its inverse $P^{-1}$ transforms vectors back from the eigenvector basis to the standard basis.

## In Simple Terms:

The eigenvectors of a matrix $A$ are special because they define directions that are only scaled by $A$. By collecting these eigenvectors as columns into a matrix $P$, we create a tool. This tool, $P$, allows us to:

1.  **View a vector in the "eigenvector coordinate system."**
2.  **See that in this eigenvector system, the transformation $A$ simply scales each component by the corresponding eigenvalue.**

This makes understanding the action of $A$ much simpler because we've found a basis where the transformation is diagonal (just scaling). The matrix $P$, built from eigenvectors, is the bridge that lets us move between our standard way of describing vectors and this simpler, eigenvector-aligned perspective.

## Supports

- [[skills/mathematics/spectral-analysis-and-matrix-decomposition/microskills/eigenvectors-in-change-of-basis-matrix-p|Eigenvectors in change-of-basis matrix P]]
