---
type: "medium"
title: "Insufficient Conditions for Diagonalization"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/mathematics/linear-algebra/spectral-analysis-and-matrix-decomposition/microskills/insufficient-conditions-for-diagonalization|insufficient-conditions-for-diagonalization]]"
learning-time-in-minutes: 7
---
# Insufficient Conditions for Diagonalization

In our journey through spectral analysis and matrix decomposition, understanding when a matrix can be transformed into a diagonal form is crucial. This process, known as diagonalization, simplifies many matrix operations. We've discussed the conditions that *guarantee* a matrix is diagonalizable. Now, let's focus on recognizing conditions that *do not* guarantee diagonalizability. This means a matrix might meet a certain criterion, but that criterion alone isn't enough to say it's definitely diagonalizable.

### Why Distinguish Insufficient Conditions?

It's important to identify conditions that *don't* guarantee diagonalizability to avoid making incorrect assumptions. If you rely on a condition that is necessary but not sufficient, you might incorrectly conclude that a matrix *is* diagonalizable when it actually isn't. This can lead to errors in spectral analysis and subsequent calculations.

### Key Concepts to Remember

Before diving into insufficient conditions, let's quickly recall the core ideas relevant to diagonalization:

*   **Eigenvalues ($\lambda$):** Scalars for which a non-trivial solution exists for $Av = \lambda v$.
*   **Eigenvectors ($v$):** Non-zero vectors satisfying $Av = \lambda v$.
*   **Algebraic Multiplicity ($AM$):** The multiplicity of an eigenvalue as a root of the characteristic polynomial.
*   **Geometric Multiplicity ($GM$):** The dimension of the eigenspace corresponding to an eigenvalue (i.e., the number of linearly independent eigenvectors for that eigenvalue).

A fundamental theorem states: A matrix $A$ of size $n \times n$ is diagonalizable *if and only if* the sum of the geometric multiplicities of all its distinct eigenvalues equals $n$, and for each eigenvalue, its algebraic multiplicity equals its geometric multiplicity ($AM(\lambda) = GM(\lambda)$ for all $\lambda$).

### Insufficient Conditions: What Looks Like Diagonalizability, But Isn't Always

Here are common conditions that *do not* by themselves guarantee that a matrix is diagonalizable:

1.  **Having $n$ Distinct Eigenvalues:**
    *   **The Idea:** If an $n \times n$ matrix has $n$ distinct eigenvalues, it *is* diagonalizable. This is a *sufficient* condition.
    *   **The Trap:** The reverse is not true. A matrix can have fewer than $n$ distinct eigenvalues and *still* be diagonalizable. For example, the identity matrix $I_n$ has only one distinct eigenvalue ($\lambda=1$), but it is diagonal (and thus diagonalizable).
    *   **Why it's Insufficient:** If a matrix has fewer than $n$ distinct eigenvalues, this condition is not met, but the matrix *could still be* diagonalizable if $AM(\lambda) = GM(\lambda)$ for all eigenvalues.

2.  **Being a Symmetric Matrix (for Real Matrices):**
    *   **The Idea:** Real symmetric matrices ($A^T = A$) are *always* diagonalizable (and can even be diagonalized by an orthogonal matrix). This is a powerful *sufficient* condition for real matrices.
    *   **The Trap:** If we are considering complex matrices, a complex symmetric matrix (where $A^T = A$ but entries can be complex) is *not necessarily* diagonalizable.
    *   **Why it's Insufficient:** If you are working with complex matrices, simply knowing $A^T = A$ is not enough to conclude diagonalizability. You would need to check the eigenvalue multiplicities.

3.  **Having $n$ Linearly Independent Eigenvectors:**
    *   **The Idea:** If you can *find* $n$ linearly independent eigenvectors for an $n \times n$ matrix, then it *is* diagonalizable. This is also a *sufficient* condition.
    *   **The Trap:** The trap here is subtle. The condition "having $n$ linearly independent eigenvectors" is equivalent to the matrix being diagonalizable. So, this isn't truly an "insufficient" condition in the sense of misleading you into thinking a non-diagonalizable matrix *is* diagonalizable. Instead, it highlights that the *absence* of this property is what prevents diagonalizability.
    *   **Why it's Insufficient (rephrased for clarity):** While having $n$ linearly independent eigenvectors *guarantees* diagonalizability, the condition "has eigenvectors" (without specifying $n$ linearly independent ones) is not enough. For instance, a $2 \times 2$ matrix might have one eigenvector associated with a repeated eigenvalue, but if the geometric multiplicity is less than the algebraic multiplicity, it won't be diagonalizable.

### Examples of Matrices Meeting Insufficient Conditions

Let's look at some examples to illustrate these points.

**Example 1: Matrix with Repeated Eigenvalues that IS Diagonalizable**

Consider the matrix:
$$
A = \begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix}
$$
*   The characteristic polynomial is $(2-\lambda)^2 = 0$, so $\lambda=2$ is an eigenvalue with algebraic multiplicity $AM(2) = 2$.
*   To find eigenvectors, we solve $(A - 2I)v = 0$:
    $$
    \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}
    $$
    This equation is true for any $v_1, v_2$. Thus, any vector in $\mathbb{R}^2$ is an eigenvector (or a linear combination of eigenvectors). We can choose two linearly independent eigenvectors, for example, $v_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$ and $v_2 = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$.
*   The geometric multiplicity is $GM(2) = 2$.
*   Since $AM(2) = GM(2) = 2$ (and $2$ is the size of the matrix), matrix $A$ is diagonalizable.
*   **Insight:** This matrix has only one *distinct* eigenvalue ($\lambda=2$), which is less than $n=2$. However, because $AM=GM$, it is diagonalizable. This shows that having fewer than $n$ distinct eigenvalues is an insufficient condition to conclude *non*-diagonalizability.

**Example 2: Matrix with Repeated Eigenvalues that IS NOT Diagonalizable**

Consider the matrix:
$$
B = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}
$$
*   The characteristic polynomial is $(1-\lambda)^2 = 0$, so $\lambda=1$ is an eigenvalue with algebraic multiplicity $AM(1) = 2$.
*   To find eigenvectors, we solve $(B - 1I)v = 0$:
    $$
    \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}
    $$
    This implies $v_2 = 0$, while $v_1$ can be any non-zero value. We can only find one linearly independent eigenvector, for example, $v = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$.
*   The geometric multiplicity is $GM(1) = 1$.
*   Since $AM(1) = 2$ and $GM(1) = 1$, we have $AM \neq GM$. Therefore, matrix $B$ is *not* diagonalizable.
*   **Insight:** This matrix has a repeated eigenvalue, and the geometric multiplicity is less than the algebraic multiplicity. This highlights why simply having repeated eigenvalues does not guarantee diagonalizability; you must check the geometric multiplicity.

**Example 3: Complex Symmetric Matrix (Not Diagonalizable)**

Consider the complex matrix:
$$
C = \begin{pmatrix} 0 & i \\ i & 0 \end{pmatrix}
$$
*   $C^T = \begin{pmatrix} 0 & i \\ i & 0 \end{pmatrix} = C$, so it's a complex symmetric matrix.
*   Characteristic polynomial: $\det(C - \lambda I) = \det \begin{pmatrix} -\lambda & i \\ i & -\lambda \end{pmatrix} = (-\lambda)(-\lambda) - (i)(i) = \lambda^2 - i^2 = \lambda^2 - (-1) = \lambda^2 + 1$.
*   Eigenvalues: $\lambda^2 + 1 = 0 \implies \lambda = i, -i$. These are distinct eigenvalues.
*   Since the matrix has $n=2$ distinct eigenvalues, it *is* diagonalizable.

Let's modify $C$ slightly to demonstrate an insufficient condition for a complex symmetric matrix. Consider:
$$
D = \begin{pmatrix} 1 & i \\ i & 1 \end{pmatrix}
$$
*   $D^T = D$, so it's complex symmetric.
*   Characteristic polynomial: $\det(D - \lambda I) = \det \begin{pmatrix} 1-\lambda & i \\ i & 1-\lambda \end{pmatrix} = (1-\lambda)^2 - i^2 = (1-\lambda)^2 - (-1) = (1-\lambda)^2 + 1$.
*   Eigenvalues: $(1-\lambda)^2 = -1 \implies 1-\lambda = \pm i \implies \lambda = 1 \mp i$. The eigenvalues are $\lambda_1 = 1-i$ and $\lambda_2 = 1+i$. These are distinct.
*   Since $D$ has $n=2$ distinct eigenvalues, it *is* diagonalizable.

It's actually harder to construct a simple complex symmetric matrix that is *not* diagonalizable because having distinct eigenvalues is a strong condition. The point is that if we had a complex symmetric matrix with *repeated* eigenvalues, we would then need to verify $AM=GM$.

### Summary Table: Insufficient Conditions

| Condition                                  | Is it Sufficient for Diagonalizability? | Why it Might Be Misleading                                                                                                                               |
| :----------------------------------------- | :------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Matrix has $n$ distinct eigenvalues        | Yes                                   | -                                                                                                                                                        |
| Matrix has *fewer than* $n$ distinct eigenvalues | No                                    | A matrix with repeated eigenvalues *can* still be diagonalizable if $AM=GM$ for all eigenvalues.                                                         |
| Real matrix is symmetric ($A^T=A$)         | Yes                                   | -                                                                                                                                                        |
| Complex matrix is symmetric ($A^T=A$)      | No                                    | Complex symmetric matrices with repeated eigenvalues might not be diagonalizable if $AM \neq GM$.                                                      |
| Matrix has $n$ linearly independent eigenvectors | Yes                                   | -                                                                                                                                                        |
| Matrix has *some* eigenvectors             | No                                    | The number of linearly independent eigenvectors must match the dimension of the matrix ($n$), and for each eigenvalue, $AM$ must equal $GM$. |

**Key Takeaway:** Always remember that the definitive condition for diagonalizability is that for every eigenvalue, its algebraic multiplicity must equal its geometric multiplicity, and the sum of these geometric multiplicities must equal $n$. Other conditions are helpful indicators but not foolproof guarantees on their own.

## Supports

- [[skills/mathematics/linear-algebra/spectral-analysis-and-matrix-decomposition/microskills/insufficient-conditions-for-diagonalization|Insufficient conditions for diagonalization]]
