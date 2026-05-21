---
type: "medium"
title: "Solving Real-World Related Rates Problems"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/applied-calculus-problem-solving/microskills/real-world-related-rates-problem-solving|real-world-related-rates-problem-solving]]"
---
# Solving Real-World Related Rates Problems

Related rates problems are a common application of calculus in real-world scenarios. They involve finding the rate at which one quantity changes with respect to time, given the rate at which another related quantity changes. This skill helps us understand dynamic situations where quantities are constantly in motion or changing.

## What are Related Rates?

In many situations, different quantities are connected. For example, the volume of a balloon is related to its radius. If the radius is changing, the volume is also changing. Related rates problems ask us to find how fast one quantity is changing (its rate of change) when we know how fast another related quantity is changing.

The core idea is to:
1.  Identify the quantities involved and their relationships.
2.  Express these relationships as an equation.
3.  Differentiate both sides of the equation with respect to time (t).
4.  Substitute known values and solve for the unknown rate.

## Practical Example: Leaking Water Tank

Imagine a conical water tank that is leaking water. The radius of the water surface is decreasing at a rate of \(0.5\) cm/min. We know that the relationship between the radius \(r\) and height \(h\) of the water in the cone is \(r = \frac{1}{2}h\). We want to find how fast the volume of the water is decreasing when the radius is \(10\) cm.

### Steps to Solve:

1.  **Identify Quantities and Relationships:**
    *   Volume of water in the cone: \(V\)
    *   Radius of water surface: \(r\)
    *   Height of water: \(h\)
    *   Relationship: \(r = \frac{1}{2}h\) (which also means \(h = 2r\))
    *   Given rate: \(\frac{dr}{dt} = -0.5\) cm/min (negative because it's decreasing)
    *   We want to find: \(\frac{dV}{dt}\) when \(r = 10\) cm.

2.  **Formulate an Equation:**
    The formula for the volume of a cone is \(V = \frac{1}{3}\pi r^2 h\).
    To relate \(V\) to only \(r\), we substitute \(h = 2r\):
    \[ V = \frac{1}{3}\pi r^2 (2r) \]
    \[ V = \frac{2}{3}\pi r^3 \]

3.  **Differentiate with Respect to Time:**
    Differentiate both sides of the equation \(V = \frac{2}{3}\pi r^3\) with respect to \(t\):
    \[ \frac{dV}{dt} = \frac{d}{dt}\left(\frac{2}{3}\pi r^3\right) \]
    Using the chain rule:
    \[ \frac{dV}{dt} = \frac{2}{3}\pi \cdot 3r^2 \cdot \frac{dr}{dt} \]
    \[ \frac{dV}{dt} = 2\pi r^2 \frac{dr}{dt} \]

4.  **Substitute and Solve:**
    We are given \(r = 10\) cm and \(\frac{dr}{dt} = -0.5\) cm/min.
    \[ \frac{dV}{dt} = 2\pi (10 \text{ cm})^2 (-0.5 \text{ cm/min}) \]
    \[ \frac{dV}{dt} = 2\pi (100 \text{ cm}^2) (-0.5 \text{ cm/min}) \]
    \[ \frac{dV}{dt} = -100\pi \text{ cm}^3/\text{min} \]

**Interpretation:** The volume of water in the tank is decreasing at a rate of \(100\pi\) cubic centimeters per minute when the radius of the water surface is 10 cm.

## Practice Task

A ladder \(10\) feet long rests against a vertical wall. The bottom of the ladder is sliding away from the wall at a rate of \(0.5\) ft/sec. How fast is the top of the ladder sliding down the wall when the bottom of the ladder is \(6\) feet from the wall?

## Self-Check Questions

1.  What is the primary challenge in setting up a related rates problem?
2.  Why is it important to differentiate with respect to *time* (\(t\)) in related rates problems?
3.  In the water tank example, why was the rate of change of the radius negative?

## Supports

- [[skills/mathematics/applied-calculus-problem-solving/microskills/real-world-related-rates-problem-solving|Real-world related rates problem solving]]
