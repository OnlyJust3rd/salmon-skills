---
type: "medium"
title: "Linearity System Verification"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/system-property-analysis/microskills/linearity-system-verification|Linearity System Verification]]"
---
# Linearity System Verification

To understand if a system is linear, we need to check if it satisfies two fundamental properties: additivity and homogeneity (also known as superposition). If a system meets both of these conditions, it is considered linear.

## The Two Properties of Linearity

Let's consider a system, denoted by $T(\cdot)$, that takes an input signal $x(t)$ and produces an output signal $y(t)$. So, $y(t) = T(x(t))$.

### 1. Additivity (or Superposition - Additive Part)

Additivity states that if you apply the sum of two inputs to a system, the output will be the sum of the individual outputs that would have resulted from each input applied separately.

Mathematically, if we have two inputs $x_1(t)$ and $x_2(t)$, and their corresponding outputs are $y_1(t) = T(x_1(t))$ and $y_2(t) = T(x_2(t))$, then for additivity to hold:

$$ T(x_1(t) + x_2(t)) = T(x_1(t)) + T(x_2(t)) $$
$$ T(x_1(t) + x_2(t)) = y_1(t) + y_2(t) $$

### 2. Homogeneity (or Scaling / Superposition - Homogeneous Part)

Homogeneity states that if you scale an input signal by a constant factor, the output signal will also be scaled by the same factor.

Mathematically, if we have an input $x(t)$ with output $y(t) = T(x(t))$, and we scale the input by a constant $a$, then for homogeneity to hold:

$$ T(a \cdot x(t)) = a \cdot T(x(t)) $$
$$ T(a \cdot x(t)) = a \cdot y(t) $$

### Combined Property: Superposition

Often, these two properties are combined into a single test called the **superposition principle**. A system is linear if and only if it satisfies both additivity and homogeneity. This means for any two inputs $x_1(t)$ and $x_2(t)$, and any constants $a$ and $b$:

$$ T(a \cdot x_1(t) + b \cdot x_2(t)) = a \cdot T(x_1(t)) + b \cdot T(x_2(t)) $$
$$ T(a \cdot x_1(t) + b \cdot x_2(t)) = a \cdot y_1(t) + b \cdot y_2(t) $$

If a system passes this combined test, it is linear. If it fails either the additivity or homogeneity test, it is non-linear.

## Applying the Linearity Tests: A Worked Example

Let's test the following system to see if it's linear. The system is defined by the input-output relationship: $y(t) = T(x(t)) = 5x(t) + 2$.

We will apply the combined superposition test.

**Step 1: Define the inputs and constants.**
Let $x_1(t)$ and $x_2(t)$ be two arbitrary input signals.
Let $a$ and $b$ be arbitrary constants.
The corresponding outputs are $y_1(t) = T(x_1(t)) = 5x_1(t) + 2$ and $y_2(t) = T(x_2(t)) = 5x_2(t) + 2$.

**Step 2: Evaluate the left-hand side (LHS) of the superposition equation.**
The LHS is $T(a \cdot x_1(t) + b \cdot x_2(t))$.
Substitute $(a \cdot x_1(t) + b \cdot x_2(t))$ into the system's definition:
$$ T(a \cdot x_1(t) + b \cdot x_2(t)) = 5(a \cdot x_1(t) + b \cdot x_2(t)) + 2 $$
$$ LHS = 5a \cdot x_1(t) + 5b \cdot x_2(t) + 2 $$

**Step 3: Evaluate the right-hand side (RHS) of the superposition equation.**
The RHS is $a \cdot T(x_1(t)) + b \cdot T(x_2(t))$.
Substitute the definitions of $T(x_1(t))$ and $T(x_2(t))$:
$$ RHS = a \cdot (5x_1(t) + 2) + b \cdot (5x_2(t) + 2) $$
$$ RHS = 5a \cdot x_1(t) + 2a + 5b \cdot x_2(t) + 2b $$
$$ RHS = 5a \cdot x_1(t) + 5b \cdot x_2(t) + 2a + 2b $$

**Step 4: Compare the LHS and RHS.**
We compare the results from Step 2 and Step 3:
$$ LHS = 5a \cdot x_1(t) + 5b \cdot x_2(t) + 2 $$
$$ RHS = 5a \cdot x_1(t) + 5b \cdot x_2(t) + 2a + 2b $$

For the system to be linear, $LHS$ must equal $RHS$ for all arbitrary inputs $x_1(t), x_2(t)$ and all arbitrary constants $a, b$.

Notice that $LHS \neq RHS$ because of the constant terms '+ 2' in the LHS and '+ 2a + 2b' in the RHS. These terms are only equal if $2 = 2a + 2b$, which is not true for all values of $a$ and $b$.

**Conclusion:** Since the system $y(t) = 5x(t) + 2$ does not satisfy the superposition principle, it is a **non-linear** system. The presence of the additive constant '2' is what makes it non-linear.

### Common Pitfalls

*   **Forgetting the Additive Part:** If a system has a constant term added to it (like the '+ 2' in our example), it is almost always non-linear.
*   **Misapplying Properties:** Ensure you correctly substitute the inputs and constants into the system's equation for both the LHS and RHS of the superposition test.
*   **Assuming Linearity:** Do not assume a system is linear just because it involves multiplication or addition. Always perform the mathematical verification.

By systematically applying these tests, you can confidently determine the linearity of any given system.

## Supports

- [[skills/mathematics/system-property-analysis/microskills/linearity-system-verification|Linearity System Verification]]
