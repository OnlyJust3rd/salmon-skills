---
type: "medium"
title: "Stability Criteria from Pole Location"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/signals-systems/system-property-analysis/microskills/stability-criteria-from-pole-location|stability-criteria-from-pole-location]]"
learning-time-in-minutes: 5
---
# Stability Criteria from Pole Location

In our exploration of **System Property Analysis**, we're focusing on how to **Analyze Pole Location and Stability**. Understanding this relationship is crucial for designing systems that behave predictably and don't exhibit unbounded responses. This lesson dives into the specific micro-skill: **Stability Criteria from Pole Location**, which is about **analyzing how pole placements determine system stability**.

## The s-Plane: Our Stability Map

The **s-plane** is a complex plane where the horizontal axis represents the real part ($\sigma$) and the vertical axis represents the imaginary part ($\omega$). For a continuous-time system, the poles of its transfer function are points in this s-plane. The location of these poles dictates how the system's output behaves over time, particularly as time approaches infinity.

The general form of a pole in the s-plane is $s = \sigma + j\omega$. The behavior of the system is directly related to the real part of the pole, $\sigma$.

## Pole Locations and Their Impact on Stability

The key to determining system stability from pole locations lies in the sign of the real part of each pole:

*   **Left-Half Plane (LHP):** Poles located in the left-half of the s-plane (where $\sigma < 0$).
*   **Right-Half Plane (RHP):** Poles located in the right-half of the s-plane (where $\sigma > 0$).
*   **Imaginary Axis:** Poles located on the imaginary axis (where $\sigma = 0$).

### 1. Stable Systems: Poles in the Left-Half Plane (LHP)

If **all** poles of a system's transfer function lie strictly in the left-half of the s-plane (i.e., their real parts are negative: $\sigma < 0$), then the system is **stable**.

**Why?**
When a pole is at $s = \sigma + j\omega$ with $\sigma < 0$, the term corresponding to this pole in the system's response will be of the form $A e^{\sigma t} \cos(\omega t + \phi)$ or $A e^{\sigma t} \sin(\omega t + \phi)$. Since $\sigma$ is negative, $e^{\sigma t}$ will decay to zero as time ($t$) increases. This means the system's output will eventually settle to a steady state and will not grow indefinitely.

**Example:**
Consider a system with poles at $s = -2$ and $s = -1 + j3$. Both poles have negative real parts. This system is stable.

### 2. Unstable Systems: Poles in the Right-Half Plane (RHP)

If **any** pole of a system's transfer function lies in the right-half of the s-plane (i.e., its real part is positive: $\sigma > 0$), then the system is **unstable**.

**Why?**
When a pole is at $s = \sigma + j\omega$ with $\sigma > 0$, the corresponding term in the system's response will involve $e^{\sigma t}$. Since $\sigma$ is positive, $e^{\sigma t}$ will grow exponentially as time ($t$) increases. This leads to an unbounded output, which is the definition of an unstable system.

**Example:**
Consider a system with poles at $s = 2$ and $s = -1 + j3$. The pole at $s = 2$ has a positive real part. This system is unstable.

### 3. Marginally Stable Systems: Poles on the Imaginary Axis

Systems with poles on the imaginary axis (where $\sigma = 0$) require careful consideration.

*   **Simple Poles on the Imaginary Axis:** If a system has simple poles (poles with multiplicity 1) on the imaginary axis, and all other poles are in the LHP, the system is **marginally stable**. The response will oscillate indefinitely without growing or decaying.

    **Example:** A system with poles at $s = 0$ and $s = -2$. The pole at $s=0$ leads to a constant term in the response ($A e^{0t} = A$), and the pole at $s=-2$ leads to a decaying term. The system is marginally stable. Another example is poles at $s = \pm j\omega$ (where $\omega \neq 0$) and all other poles in the LHP. This leads to sustained oscillations.

*   **Multiple Poles on the Imaginary Axis:** If a system has poles with multiplicity greater than 1 on the imaginary axis, the system is **unstable**.

    **Example:** A system with poles at $s = 0, 0$ and $s = -2$. The double pole at $s=0$ will result in a response component of the form $At$, which grows with time, making the system unstable.

## Summary of Stability Criteria

| Pole Location                                             | Stability      | Response Behavior                                       |
| :-------------------------------------------------------- | :------------- | :------------------------------------------------------ |
| All poles in the Left-Half Plane (LHP, $\sigma < 0$)      | **Stable**     | Output decays to a steady state or zero.                |
| At least one pole in the Right-Half Plane (RHP, $\sigma > 0$) | **Unstable**   | Output grows unbounded.                                 |
| Simple poles on the imaginary axis ($\sigma = 0$), others in LHP | **Marginally Stable** | Output oscillates indefinitely or remains constant. |
| Multiple poles on the imaginary axis ($\sigma = 0$)       | **Unstable**   | Output grows unbounded.                                 |

## Analyzing Pole Locations

To analyze the stability of a system, you need to:

1.  **Obtain the transfer function** of the system.
2.  **Find the roots of the denominator** of the transfer function. These roots are the system's poles.
3.  **Determine the real part of each pole.**
4.  **Apply the stability criteria** outlined above to classify the system's stability.

By understanding where the poles of a system reside in the s-plane, you gain direct insight into its dynamic behavior and can make informed decisions about system design and control.

## Supports

- [[skills/mathematics/signals-systems/system-property-analysis/microskills/stability-criteria-from-pole-location|Stability Criteria from Pole Location]]
