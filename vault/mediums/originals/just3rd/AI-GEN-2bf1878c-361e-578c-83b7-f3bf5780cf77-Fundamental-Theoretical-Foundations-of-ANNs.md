---
type: medium
title: Fundamental Theoretical Foundations of ANNs
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[fundamental-theoretical-foundations-of-anns|fundamental-theoretical-foundations-of-anns]]"
related-skills:
  - "[[skills/computing/data-ai/artificial-intelligence/machine-learning/deep-learning/artificial-neural-network/artificial-neural-network|artificial-neural-network]]"
learning-time-in-minutes: 3
---
# Fundamental Theoretical Foundations of ANNs

Artificial Neural Networks (ANNs) are inspired by the structure and function of the human brain. Understanding their foundational principles is key to grasping how they learn and make predictions.

### What are the Basic Theoretical Principles?

At their core, ANNs are built upon a few fundamental ideas:

1.  **Neurons (Nodes):** These are the basic processing units of an ANN. Each neuron receives input signals, processes them, and then outputs a signal. Think of them as tiny computational units.
2.  **Connections (Weights):** Neurons are connected to each other. Each connection has an associated "weight," which determines the strength and influence of the signal passing through it. Positive weights amplify a signal, while negative weights suppress it.
3.  **Activation Function:** After a neuron receives signals from its connected neurons, it applies an activation function to its summed input. This function determines whether the neuron "fires" (activates) and what its output signal will be. It introduces non-linearity, allowing the network to learn complex patterns.
4.  **Layers:** Neurons are typically organized into layers:
    *   **Input Layer:** Receives the initial data.
    *   **Hidden Layers:** Perform computations and feature extraction. There can be one or many hidden layers.
    *   **Output Layer:** Produces the final result or prediction.

### Practical Example: Recognizing a Simple Shape

Imagine an ANN designed to recognize a simple square.

*   **Input Layer:** This layer would receive pixels from an image. For a 2x2 image, it might have 4 neurons, each representing a pixel's intensity.
*   **Hidden Layer(s):** Neurons here might learn to detect edges, corners, or lines. For instance, one neuron might activate if the top two pixels are dark and the bottom two are light, indicating a horizontal line. Another might detect vertical lines.
*   **Connections and Weights:** The connections between input and hidden layers would have weights. A weight might be high if the input pixel is crucial for detecting a specific edge.
*   **Activation Function:** If the sum of weighted inputs to a hidden neuron exceeds a certain threshold (determined by the activation function), that neuron fires, signaling it has detected a feature (like an edge).
*   **Output Layer:** A single neuron in the output layer might fire if the combined signals from the hidden layers strongly indicate the presence of a square.

### Practice Task

Consider a simple ANN with one input neuron, one hidden neuron, and one output neuron.

1.  **Input:** The input neuron receives a value of `2`.
2.  **Connection 1 (Input to Hidden):** The weight of the connection is `0.5`.
3.  **Hidden Neuron:** The hidden neuron sums its inputs. It has no other incoming connections.
4.  **Activation Function (Hidden):** Use a simple threshold activation function: if the sum is greater than `0.8`, the neuron outputs `1`; otherwise, it outputs `0`.
5.  **Connection 2 (Hidden to Output):** The weight of this connection is `3`.
6.  **Output Neuron:** The output neuron sums its inputs and directly outputs this sum (no further activation function for this exercise).

Calculate the final output of this ANN.

### Self-Check Questions

1.  What is the primary role of a neuron in an ANN?
2.  How do weights on connections influence the information flow within an ANN?
3.  Why are activation functions important in ANNs?
4.  In the square recognition example, what might a hidden layer neuron be responsible for detecting?

## Supports

- [[fundamental-theoretical-foundations-of-anns|Fundamental Theoretical Foundations of ANNs]]
