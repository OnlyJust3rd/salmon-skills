---
type: "medium"
title: "Parametric Line Equations in 3D"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/geometric-formulation/microskills/parametric-line-equations-in-3d|Parametric line equations in 3D]]"
---
# Parametric Line Equations in 3D

To describe a line in three-dimensional space, we can use parametric equations. This method allows us to define any point on the line based on a single parameter, often denoted by '$t$'.

### Why Parametric Equations?

In 3D, a single equation like '$y = mx + c$' (which describes a line in 2D) isn't enough. A single linear equation in 3D usually defines a plane. To pin down a line, we need more information. Parametric equations provide a flexible way to do this by specifying a starting point and a direction.

### Key Components

To define a line parametrically, you need two things:

1.  **A Point on the Line**: Let's call this point $P_0$ with coordinates $(x_0, y_0, z_0)$.
2.  **A Direction Vector**: This vector, denoted by $\mathbf{v} = \langle a, b, c \rangle$, tells us the direction in which the line extends.

### The Parametric Equations

Any point $P(x, y, z)$ on the line can be reached by starting at $P_0$ and moving a certain distance along the direction of $\mathbf{v}$. This distance is controlled by the parameter '$t$'.

The parametric equations are:

$$
\begin{aligned}
x &= x_0 + at \\
y &= y_0 + bt \\
z &= z_0 + ct
\end{aligned}
$$

Here, '$t$' is a real number. As '$t$' varies, the point $(x, y, z)$ traces out the entire line.

*   When $t=0$, the point is $(x_0, y_0, z_0)$, our starting point $P_0$.
*   As $t$ increases, we move along the line in the direction of $\mathbf{v}$.
*   As $t$ decreases (becomes negative), we move along the line in the opposite direction of $\mathbf{v}$.

### Vector Form (Optional but helpful)

We can also express this using vector notation. Let $\mathbf{r}_0 = \langle x_0, y_0, z_0 \rangle$ be the position vector of $P_0$, and $\mathbf{r} = \langle x, y, z \rangle$ be the position vector of any point $P$ on the line. Then the equation of the line is:

$$ \mathbf{r} = \mathbf{r}_0 + t\mathbf{v} $$

This vector equation directly corresponds to the parametric equations.

### Worked Example

**Problem:** Find the parametric equations of the line that passes through the point $A(1, -2, 3)$ and is parallel to the vector $\mathbf{d} = \langle 4, 0, -1 \rangle$.

**Solution:**

1.  **Identify the point ($P_0$):** The given point is $(1, -2, 3)$. So, $x_0 = 1$, $y_0 = -2$, and $z_0 = 3$.

2.  **Identify the direction vector ($\mathbf{v}$):** The line is parallel to $\langle 4, 0, -1 \rangle$. So, $a = 4$, $b = 0$, and $c = -1$.

3.  **Substitute into the parametric equations:**

    $$
    \begin{aligned}
    x &= x_0 + at \implies x = 1 + 4t \\
    y &= y_0 + bt \implies y = -2 + 0t \implies y = -2 \\
    z &= z_0 + ct \implies z = 3 + (-1)t \implies z = 3 - t
    \end{aligned}
    $$

Therefore, the parametric equations for the line are:
$$
\begin{aligned}
x &= 1 + 4t \\
y &= -2 \\
z &= 3 - t
\end{aligned}
$$

**Interpretation:**
*   The line starts at $(1, -2, 3)$ when $t=0$.
*   The y-coordinate is always $-2$, meaning the line lies in the plane $y=-2$.
*   For every unit increase in '$t$', the x-coordinate increases by 4, and the z-coordinate decreases by 1.

### Example 2: Line through Two Points

**Problem:** Find the parametric equations of the line passing through points $P(2, 1, 0)$ and $Q(4, 3, 2)$.

**Solution:**

1.  **Choose a starting point:** Let's pick $P(2, 1, 0)$ as our $P_0$. So, $x_0 = 2$, $y_0 = 1$, $z_0 = 0$.

2.  **Find the direction vector:** The direction vector can be found by subtracting the coordinates of one point from the other. Let's find the vector from $P$ to $Q$:
    $\mathbf{v} = \vec{PQ} = Q - P = \langle 4-2, 3-1, 2-0 \rangle = \langle 2, 2, 2 \rangle$.
    So, $a = 2$, $b = 2$, $c = 2$.

    *Note: You could have also used the vector $\vec{QP} = P - Q = \langle 2-4, 1-3, 0-2 \rangle = \langle -2, -2, -2 \rangle$. This would result in different parametric equations but represent the same line.*

3.  **Substitute into the parametric equations:**

    $$
    \begin{aligned}
    x &= 2 + 2t \\
    y &= 1 + 2t \\
    z &= 0 + 2t \implies z = 2t
    \end{aligned}
    $$

The parametric equations are:
$$
\begin{aligned}
x &= 2 + 2t \\
y &= 1 + 2t \\
z &= 2t
\end{aligned}
$$

You can verify that both $P$ (when $t=0$) and $Q$ (when $t=1$) lie on this line.

### Common Mistakes

*   **Confusing the direction vector with a point:** Ensure you're using the correct components for $(x_0, y_0, z_0)$ and $\langle a, b, c \rangle$.
*   **Incorrectly calculating the direction vector between two points:** Double-check your subtraction: $(x_2-x_1, y_2-y_1, z_2-z_1)$.
*   **Forgetting the parameter '$t$':** The '$t$' is crucial for defining the line's extent.

By understanding how to use a point and a direction vector, you can confidently formulate parametric equations for any line in 3D space.

## Supports

- [[skills/mathematics/geometric-formulation/microskills/parametric-line-equations-in-3d|Parametric line equations in 3D]]
