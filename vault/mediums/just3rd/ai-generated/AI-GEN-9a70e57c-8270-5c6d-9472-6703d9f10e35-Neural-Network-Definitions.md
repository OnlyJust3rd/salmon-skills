---
type: "medium"
title: "Neural Network Definitions"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/data/ai/artificial-neural-network/microskills/neural-network-definitions|neural-network-definitions]]"
---
# Neural Network Definitions

This lesson focuses on understanding the fundamental building blocks of Artificial Neural Networks. By mastering these definitions, you'll build a strong foundation for more complex concepts.

## Core Concepts

Artificial Neural Networks (ANNs) are computational models inspired by the structure and function of biological neural networks. They are designed to recognize patterns and make decisions, much like the human brain. To understand how they work, we need to define their key components:

*   **Neuron (or Node):** The basic processing unit of a neural network. It receives input signals, processes them, and produces an output signal. Think of it as a single processing unit that performs a simple calculation.

*   **Input Layer:** The first layer of neurons that receives the raw data or features from the outside world. Each neuron in the input layer typically represents a single feature of the data.

*   **Hidden Layer(s):** Layers of neurons between the input and output layers. These layers perform complex computations and extract higher-level features from the input data. A network can have one or more hidden layers.

*   **Output Layer:** The final layer of neurons that produces the network's prediction or classification. The number of neurons in the output layer depends on the specific task (e.g., one neuron for binary classification, multiple neurons for multi-class classification).

*   **Weight:** A numerical value associated with a connection between neurons. Weights determine the strength of the signal passed from one neuron to another. Higher weights mean a stronger influence.

*   **Bias:** An additional parameter added to the weighted sum of inputs in a neuron. It allows the neuron to activate even when all inputs are zero, providing flexibility to the model.

*   **Activation Function:** A mathematical function applied to the output of a neuron. It introduces non-linearity into the network, enabling it to learn complex patterns. Common examples include Sigmoid, ReLU, and Tanh.

## Practical Scenario

Imagine you're building a simple neural network to decide if you should carry an umbrella tomorrow.

*   **Input Layer:** You might have neurons for "Is it raining today?" (Yes/No), "Is the sky cloudy?" (Yes/No), and "Is the temperature low?" (Yes/No).
*   **Hidden Layer(s):** These layers would process the input information. For example, a hidden neuron might learn to recognize "cloudy and low temperature" as a pattern indicating potential rain.
*   **Output Layer:** A single neuron that outputs "Carry Umbrella" (1) or "Don't Carry Umbrella" (0).
*   **Weights:** The connection from "Is it raining today?" to the hidden layer might have a high weight, indicating it's a very important factor.
*   **Bias:** A bias term could help the output neuron decide to recommend an umbrella even if the direct inputs are not strong indicators, but the overall context suggests it.
*   **Activation Function:** Applied to each neuron's computation to decide its output.

## Practice Task

For each of the following, identify which fundamental neural network component it represents:

1.  The raw temperature readings from a weather sensor.
2.  A parameter that shifts the activation threshold of a neuron.
3.  The final decision of the network: "recommend an umbrella."
4.  The mathematical operation that determines if a neuron "fires."
5.  The signal strength between two connected processing units.

## Self-Check Questions

1.  What is the primary role of a neuron in a neural network?
2.  How does the input layer differ from the output layer?
3.  Explain the significance of weights in a neural network connection.
4.  Why are hidden layers important in a neural network?
5.  What is the purpose of an activation function?

## Supports

- [[skills/data/ai/artificial-neural-network/microskills/neural-network-definitions|Neural Network Definitions]]
