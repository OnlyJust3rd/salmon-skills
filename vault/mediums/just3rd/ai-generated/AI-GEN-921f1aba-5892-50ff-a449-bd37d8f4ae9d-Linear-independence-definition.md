---
type: "medium"
title: "Linear Independence of Vectors"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/vector-space/microskills/linear-independence-definition|linear-independence-definition]]"
---
# Linear Independence of Vectors

In the study of vector spaces, understanding how vectors relate to each other is crucial. One of the fundamental concepts is **linear independence**. This idea helps us determine if a set of vectors is "essential" or if some vectors can be expressed as combinations of others.

## What is Linear Independence?

A set of vectors is considered **linearly independent** if none of the vectors in the set can be written as a linear combination of the *other* vectors in the set.

Let's break this down.

### Linear Combination

First, recall what a linear combination of vectors means. If you have vectors $$ \mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_k $$ and scalars (numbers) $$ c_1, c_2, \dots, c_k $$, then a linear combination of these vectors is an expression like:

$$ c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \dots + c_k\mathbf{v}_k $$

This operation essentially scales each vector by a scalar and then adds the results together.

### The Core Idea of Linear Independence

Now, let's apply this to linear independence. A set of vectors $$ \{\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_k\} $$ is linearly independent if the *only* way to get the zero vector ($$\mathbf{0}$$) as a linear combination of these vectors is by setting all the scalars to zero.

In other words, if we have the equation:

$$ c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \dots + c_k\mathbf{v}_k = \mathbf{0} $$

Then, for the set to be linearly independent, the *only* solution must be $$ c_1 = 0, c_2 = 0, \dots, c_k = 0 $$.

If there's *any other* combination of scalars (where at least one scalar is not zero) that results in the zero vector, then the set of vectors is **linearly dependent**. This means at least one vector can be expressed in terms of the others.

## Checking for Linear Independence

How do we practically check if a set of vectors is linearly independent? We set up the equation for the zero vector and see what solutions we get for the scalar coefficients.

Consider a set of vectors $$ \{\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_k\} $$ in a vector space. To determine linear independence, we solve the vector equation:

$$ c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \dots + c_k\mathbf{v}_k = \mathbf{0} $$

This vector equation can be translated into a system of linear equations. If the *only* solution to this system is $$ c_1 = c_2 = \dots = c_k = 0 $$, then the vectors are linearly independent. If there are non-trivial solutions (where at least one $$ c_i \neq 0 $$), the vectors are linearly dependent.

### Example 1: Linearly Independent Vectors in $$ \mathbb{R}^2 $$

Let's check if the vectors $$ \mathbf{v}_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix} $$ and $$ \mathbf{v}_2 = \begin{pmatrix} 0 \\ 1 \end{pmatrix} $$ are linearly independent.

We set up the equation:
$$ c_1 \begin{pmatrix} 1 \\ 0 \end{pmatrix} + c_2 \begin{pmatrix} 0 \\ 1 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} $$

This gives us the system of equations:
1.  $$ c_1(1) + c_2(0) = 0 \quad \implies \quad c_1 = 0 $$
2.  $$ c_1(0) + c_2(1) = 0 \quad \implies \quad c_2 = 0 $$

The only solution is $$ c_1 = 0 $$ and $$ c_2 = 0 $$. Therefore, the vectors $$ \mathbf{v}_1 $$ and $$ \mathbf{v}_2 $$ are **linearly independent**. These are the standard basis vectors for $$ \mathbb{R}^2 $$, and they are indeed independent.

### Example 2: Linearly Dependent Vectors in $$ \mathbb{R}^2 $$

Now, let's check the vectors $$ \mathbf{u}_1 = \begin{pmatrix} 1 \\ 2 \end{pmatrix} $$ and $$ \mathbf{u}_2 = \begin{pmatrix} 2 \\ 4 \end{pmatrix} $$.

We set up the equation:
$$ c_1 \begin{pmatrix} 1 \\ 2 \end{pmatrix} + c_2 \begin{pmatrix} 2 \\ 4 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} $$

This gives us the system of equations:
1.  $$ c_1(1) + c_2(2) = 0 \quad \implies \quad c_1 + 2c_2 = 0 $$
2.  $$ c_1(2) + c_2(4) = 0 \quad \implies \quad 2c_1 + 4c_2 = 0 $$

Notice that the second equation is just twice the first equation. This means we have a dependent system. From the first equation, we can express $$ c_1 $$ in terms of $$ c_2 $$, or vice versa. For example, let $$ c_2 = 1 $$. Then $$ c_1 + 2(1) = 0 $$, which means $$ c_1 = -2 $$.

So, we found a solution where not all coefficients are zero: $$ c_1 = -2 $$ and $$ c_2 = 1 $$.
Let's verify:
$$ -2 \begin{pmatrix} 1 \\ 2 \end{pmatrix} + 1 \begin{pmatrix} 2 \\ 4 \end{pmatrix} = \begin{pmatrix} -2 \\ -4 \end{pmatrix} + \begin{pmatrix} 2 \\ 4 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} $$

Since we found a non-trivial solution, the vectors $$ \mathbf{u}_1 $$ and $$ \mathbf{u}_2 $$ are **linearly dependent**. Indeed, $$ \mathbf{u}_2 = 2\mathbf{u}_1 $$, meaning $$ \mathbf{u}_2 $$ can be written as a linear combination (in this case, a scalar multiple) of $$ \mathbf{u}_1 $$.

## Key Takeaways

*   A set of vectors is **linearly independent** if the only way to form the zero vector by combining them with scalar multipliers is if all those multipliers are zero.
*   If you can find at least one non-zero scalar multiplier that results in the zero vector, the set is **linearly dependent**.
*   Linear independence tells us that each vector in the set contributes something unique and cannot be expressed using the others. This concept is fundamental for understanding bases and dimensions in vector spaces.

## Supports

- [[skills/mathematics/vector-space/microskills/linear-independence-definition|Linear independence definition]]
