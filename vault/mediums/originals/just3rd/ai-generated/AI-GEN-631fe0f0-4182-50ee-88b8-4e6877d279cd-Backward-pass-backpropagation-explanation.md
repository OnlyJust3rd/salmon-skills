---
type: medium
title: Understanding the Backward Pass (Backpropagation)
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[backward-pass-backpropagation-explanation|backward-pass-backpropagation-explanation]]"
learning-time-in-minutes: 4
---
# Understanding the Backward Pass (Backpropagation)

In the context of deep learning, particularly with Convolutional Neural Networks (CNNs), the backward pass, or backpropagation, is a crucial algorithm. It's how our neural network learns from its mistakes. After the network makes a prediction (forward pass) and we compare it to the actual correct answer, backpropagation tells us how much each part of the network contributed to that error and how to adjust them to do better next time.

## What is the Backward Pass?

The backward pass is essentially an application of the chain rule from calculus. It works by calculating the gradient of the loss function with respect to each weight and bias in the network.

*   **Loss Function:** This measures how "wrong" the network's prediction was. A higher loss means a bigger error.
*   **Gradient:** This tells us the direction and magnitude of the steepest increase in the loss function. In simpler terms, it indicates how changing a particular weight or bias would affect the total error.
*   **Weight/Bias Update:** By knowing the gradient, we can adjust the weights and biases in the opposite direction of the gradient (to *decrease* the loss). This adjustment is typically done using an optimization algorithm like Gradient Descent. The step size of this adjustment is controlled by the "learning rate."

### The Core Idea: Blame Assignment

Imagine a team working on a project. If the project fails, you need to figure out who made which mistake and how to fix it. Backpropagation does this for the neural network. It starts from the output layer (where the error is calculated) and works backward through the network, layer by layer, determining the "blame" (gradient) for each parameter.

## Practical Scenario: Image Classification

Let's say we have a CNN trying to classify an image of a cat.

1.  **Forward Pass:** The image goes through convolutional layers, pooling layers, and fully connected layers, eventually outputting probabilities for different classes (e.g., 80% cat, 15% dog, 5% bird).
2.  **Loss Calculation:** We compare this output to the actual label ("cat"). If the network predicted "dog" with high confidence, the loss will be high.
3.  **Backward Pass (Backpropagation):**
    *   The loss is computed at the output layer.
    *   The gradient of this loss with respect to the output layer's weights is calculated.
    *   This gradient is then propagated backward to the previous layer. The gradients for that layer's weights and biases are computed, taking into account how their outputs influenced the next layer's error.
    *   This process continues all the way back to the initial convolutional layers.
4.  **Weight Update:** Based on these computed gradients, the optimizer (e.g., Adam, SGD) updates all the weights and biases across the network. For example, weights that led to an incorrect prediction of "dog" might be decreased, and weights that would have led to a correct "cat" prediction might be increased.

### How Gradients are Used:

The update rule for a weight \(w\) often looks like this:

\[
w_{\text{new}} = w_{\text{old}} - \alpha \frac{\partial L}{\partial w}
\]

Where:
*   \(w_{\text{new}}\) is the updated weight.
*   \(w_{\text{old}}\) is the current weight.
*   \(\alpha\) (alpha) is the learning rate, controlling how big of a step we take.
*   \(\frac{\partial L}{\partial w}\) is the partial derivative of the loss function \(L\) with respect to the weight \(w\) (this is the gradient).

## Practice Task

Consider a simple two-layer neural network predicting a single output. Suppose the loss is \(L = (y_{\text{predicted}} - y_{\text{actual}})^2\). If \(y_{\text{predicted}} = \sigma(w \cdot x + b)\) and the gradient of the loss with respect to \(y_{\text{predicted}}\) is \(\frac{\partial L}{\partial y_{\text{predicted}}} = 2(y_{\text{predicted}} - y_{\text{actual}})\), and the activation function is sigmoid \(\sigma(z)\) with derivative \(\sigma'(z)\), and we want to find \(\frac{\partial L}{\partial w}\).

Using the chain rule, what would be the expression for \(\frac{\partial L}{\partial w}\)?

Hint: \(\frac{\partial L}{\partial w} = \frac{\partial L}{\partial y_{\text{predicted}}} \cdot \frac{\partial y_{\text{predicted}}}{\partial z} \cdot \frac{\partial z}{\partial w}\), where \(z = w \cdot x + b\).

## Self-Check Questions

1.  What is the primary purpose of the backward pass in a neural network?
2.  How does backpropagation use the gradient of the loss function?
3.  What does the "learning rate" control in the weight update process?
4.  If a specific weight is found to have a large positive gradient, in which direction should it be adjusted to reduce the loss?

## Supports

- [[backward-pass-backpropagation-explanation|Backward pass (backpropagation) explanation]]
