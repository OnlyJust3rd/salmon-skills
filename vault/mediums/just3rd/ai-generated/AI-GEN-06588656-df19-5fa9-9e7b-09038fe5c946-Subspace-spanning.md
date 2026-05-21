---
type: "medium"
title: "Ensuring Your Basis Spans the Same Subspace"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/subspaces-and-orthogonality/microskills/subspace-spanning|subspace-spanning]]"
---
# Ensuring Your Basis Spans the Same Subspace

When we construct a new basis for a subspace, it's crucial that this new basis "behaves" the same way as the original set of vectors. This means it should be able to generate *exactly* the same set of all possible linear combinations. In the context of the Gram-Schmidt process, this is referred to as ensuring the generated basis *spans* the same subspace.

## What Does "Spanning the Same Subspace" Mean?

Imagine a subspace as a geometric object, like a plane or a line in 3D space. A set of vectors that *spans* this subspace are like the "building blocks" that can create any point within that object. If you have a different set of building blocks, but they can still create *every single point* that the original set could, then both sets span the same subspace.

When you use the Gram-Schmidt process on a set of linearly independent vectors $\{v_1, v_2, \dots, v_k\}$, you are aiming to produce a new set of orthogonal (or orthonormal) vectors $\{u_1, u_2, \dots, u_k\}$. The key is that the subspace spanned by $\{v_1, v_2, \dots, v_k\}$ must be identical to the subspace spanned by $\{u_1, u_2, \dots, u_k\}$.

## Why is Spanning Important in Gram-Schmidt?

The Gram-Schmidt process is designed to transform a set of linearly independent vectors into an orthogonal or orthonormal set *while preserving the subspace they span*. If the process were to change the subspace, the resulting orthogonal basis would no longer be a valid representation of the original vector space.

**Think of it this way:** If you start with three vectors that define a plane, you want your new orthogonal vectors to also define the *exact same plane*. If the new vectors defined a different plane, or just a line within that plane, you'd lose information and the transformation wouldn't be useful for many applications like projection or solving linear systems.

## How Does Gram-Schmidt Guarantee Spanning?

The Gram-Schmidt process works by taking each original vector $v_i$ and "projecting out" the components that lie in the direction of the previously constructed orthogonal vectors. The formula for the $k$-th orthogonal vector $u_k$ is:

$$
u_k = v_k - \text{proj}_{u_1}v_k - \text{proj}_{u_2}v_k - \dots - \text{proj}_{u_{k-1}}v_k
$$

where $\text{proj}_{u_j}v_k = \frac{\langle v_k, u_j \rangle}{\langle u_j, u_j \rangle} u_j$.

Let $V_k = \text{span}\{v_1, \dots, v_k\}$ and $U_k = \text{span}\{u_1, \dots, u_k\}$. The process guarantees that $V_k = U_k$ at each step.

1.  **Basis Construction:** Each $u_i$ is constructed as a linear combination of $v_i$ and previous $u_j$'s ($j < i$).
    $$
    u_i = v_i - \sum_{j=1}^{i-1} \frac{\langle v_i, u_j \rangle}{\langle u_j, u_j \rangle} u_j
    $$
    Since $u_j$ are themselves linear combinations of $v_1, \dots, v_j$, it follows that each $u_i$ is a linear combination of $v_1, \dots, v_i$. This means $\text{span}\{u_1, \dots, u_k\} \subseteq \text{span}\{v_1, \dots, v_k\}$.

2.  **Reversibility:** We can also express each $v_i$ as a linear combination of $u_1, \dots, u_i$. Rearranging the formula for $u_i$:
    $$
    v_i = u_i + \sum_{j=1}^{i-1} \frac{\langle v_i, u_j \rangle}{\langle u_j, u_j \rangle} u_j
    $$
    This shows that $v_i$ is a linear combination of $u_1, \dots, u_i$. Therefore, $\text{span}\{v_1, \dots, v_k\} \subseteq \text{span}\{u_1, \dots, u_k\}$.

Combining both inclusions, we get $\text{span}\{v_1, \dots, v_k\} = \text{span}\{u_1, \dots, u_k\}$.

## Practical Considerations: What Can Go Wrong?

The Gram-Schmidt process inherently preserves the span, provided you start with a linearly independent set of vectors. The primary way you might *inadvertently* affect the span is if the initial set of vectors is *not* linearly independent.

*   **Linearly Dependent Input:** If your initial vectors $\{v_1, v_2, \dots, v_k\}$ are linearly dependent, one of the vectors can be expressed as a linear combination of the others. For instance, if $v_2 = c_1 v_1 + c_3 v_3$. When you apply Gram-Schmidt, you might end up with a zero vector at some step, or a vector that doesn't add any new dimension to the subspace. The resulting set will span a subspace that is *smaller* than what the original set *could* have spanned if they were independent. The process will still produce an orthogonal set, but it will be a basis for a *lower-dimensional* subspace.

*   **Numerical Precision:** In real-world computations with floating-point numbers, vectors that are theoretically linearly independent might appear very close to being dependent. This can lead to numerical instability where the calculated orthogonal vectors might not perfectly represent the original span due to rounding errors.

## Example: Verifying the Span

Let's say we have two linearly independent vectors in $\mathbb{R}^2$:
$v_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$ and $v_2 = \begin{pmatrix} 2 \\ 0 \end{pmatrix}$.
The subspace spanned by $\{v_1, v_2\}$ is all of $\mathbb{R}^2$ because they are linearly independent in $\mathbb{R}^2$.

Applying Gram-Schmidt:
$u_1 = v_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$

$u_2 = v_2 - \text{proj}_{u_1}v_2$
$\text{proj}_{u_1}v_2 = \frac{\langle v_2, u_1 \rangle}{\langle u_1, u_1 \rangle} u_1 = \frac{\langle \begin{pmatrix} 2 \\ 0 \end{pmatrix}, \begin{pmatrix} 1 \\ 1 \end{pmatrix} \rangle}{\langle \begin{pmatrix} 1 \\ 1 \end{pmatrix}, \begin{pmatrix} 1 \\ 1 \end{pmatrix} \rangle} \begin{pmatrix} 1 \\ 1 \end{pmatrix} = \frac{2 \cdot 1 + 0 \cdot 1}{1 \cdot 1 + 1 \cdot 1} \begin{pmatrix} 1 \\ 1 \end{pmatrix} = \frac{2}{2} \begin{pmatrix} 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$

$u_2 = \begin{pmatrix} 2 \\ 0 \end{pmatrix} - \begin{pmatrix} 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$

Our new orthogonal basis is $\{u_1, u_2\} = \left\{ \begin{pmatrix} 1 \\ 1 \end{pmatrix}, \begin{pmatrix} 1 \\ -1 \end{pmatrix} \right\}$.

**Does $u_1$ and $u_2$ span the same subspace as $v_1$ and $v_2$?**
Yes. Since $v_1$ and $v_2$ are linearly independent in $\mathbb{R}^2$, they span $\mathbb{R}^2$.
Our new vectors $u_1$ and $u_2$ are also linearly independent in $\mathbb{R}^2$:
If $a u_1 + b u_2 = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$, then
$a \begin{pmatrix} 1 \\ 1 \end{pmatrix} + b \begin{pmatrix} 1 \\ -1 \end{pmatrix} = \begin{pmatrix} a+b \\ a-b \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$.
This implies $a+b=0$ and $a-b=0$, which means $a=0$ and $b=0$.
Since $u_1$ and $u_2$ are two linearly independent vectors in $\mathbb{R}^2$, they also span $\mathbb{R}^2$.

We can also explicitly show that $v_1$ and $v_2$ are linear combinations of $u_1$ and $u_2$:
$v_1 = u_1 = 1 \cdot u_1 + 0 \cdot u_2$
$v_2 = u_1 + u_2 = 1 \cdot u_1 + 1 \cdot u_2$ (This comes from our projection calculation: $v_2 = u_2 + \text{proj}_{u_1}v_2 = u_2 + u_1$).

This confirms that the subspace spanned by $\{v_1, v_2\}$ is the same as the subspace spanned by $\{u_1, u_2\}$.

## Supports

- [[skills/mathematics/subspaces-and-orthogonality/microskills/subspace-spanning|Subspace spanning]]
