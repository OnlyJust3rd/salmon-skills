---
type: medium
title: Basic Neural Network Operations
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[basic-neural-network-operations|basic-neural-network-operations]]"
learning-time-in-minutes: 4
---
# Basic Neural Network Operations

Understanding how a basic neural network processes information is fundamental to grasping more complex Artificial Neural Networks. This lesson will walk you through the core operations of a simple neural network, building on concepts from Chapters 1-3 of Krose and van der Smagt.

## What's Happening Inside?

A basic neural network, much like the ones discussed in the early chapters of Krose and van der Smagt, is designed to learn patterns from data. It achieves this through a series of interconnected components:

*   **Neurons (or Nodes):** These are the fundamental processing units. Each neuron receives input signals, processes them, and produces an output signal.
*   **Weights:** These are numerical values associated with the connections between neurons. They determine the strength or importance of each input signal.
*   **Bias:** This is an additional value added to the weighted sum of inputs within a neuron. It helps shift the activation function.
*   **Activation Function:** This non-linear function determines the output of a neuron based on its weighted inputs and bias. It introduces complexity that allows the network to learn non-linear relationships.

The information flow in a basic neural network is typically layered:

1.  **Input Layer:** Receives the raw data.
2.  **Hidden Layer(s):** Neurons in these layers process the inputs and pass their outputs to the next layer.
3.  **Output Layer:** Produces the final result or prediction of the network.

## Practical Scenario: Predicting House Prices

Imagine a very simple neural network designed to predict the price of a house based on two features: its size (in square feet) and the number of bedrooms.

*   **Input Layer:** Has two neurons, one for "size" and one for "bedrooms."
*   **Hidden Layer:** Contains a small number of neurons (e.g., 3). Each neuron in this layer receives inputs from both "size" and "bedrooms," weighted differently. Each neuron also has a bias and an activation function (like a sigmoid or ReLU).
*   **Output Layer:** Has one neuron that outputs the predicted house price.

**How the information flows:**

1.  The size (e.g., 1500 sq ft) and number of bedrooms (e.g., 3) are fed into the input layer.
2.  These inputs are multiplied by weights and summed up, with a bias added, in each of the hidden layer neurons.
3.  The activation function is applied to this sum in each hidden neuron, producing an output.
4.  These outputs from the hidden layer neurons are then fed into the output layer neuron.
5.  Again, they are weighted, summed with a bias, and an activation function is applied to produce the final predicted house price.

## Practice Task

Consider a neural network with:
*   2 input neurons (feature A, feature B)
*   1 hidden layer with 2 neurons (H1, H2)
*   1 output neuron (Output)

Let's trace the operation for a single data point: Feature A = 0.5, Feature B = 0.2.

Assume the following weights and biases:
*   Input to H1: Weight A->H1 = 1.0, Weight B->H1 = 0.5, Bias H1 = 0.1
*   Input to H2: Weight A->H2 = 0.3, Weight B->H2 = 0.8, Bias H2 = 0.2
*   H1 to Output: Weight H1->Output = 0.7, Bias Output = 0.3
*   H2 to Output: Weight H2->Output = 0.9, Bias Output = 0.3

For simplicity, use the identity activation function for all neurons (output = input). Calculate:
1.  The output of H1.
2.  The output of H2.
3.  The final output of the network.

## Self-Check Questions

1.  What is the role of weights in a neural network?
2.  How does an activation function influence a neuron's output?
3.  In a basic feedforward network, in which direction does information typically flow?
4.  If you wanted to add more complexity to capture more intricate patterns, what part of the network structure would you likely modify?

## Supports

- [[basic-neural-network-operations|Basic Neural Network Operations]]
