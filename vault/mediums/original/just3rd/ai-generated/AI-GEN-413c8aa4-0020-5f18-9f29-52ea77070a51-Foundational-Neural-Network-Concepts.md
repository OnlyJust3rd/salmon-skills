---
type: "medium"
title: "Foundational Neural Network Concepts"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/data-ai/artificial-intelligence/artificial-neural-network/microskills/foundational-neural-network-concepts|foundational-neural-network-concepts]]"
learning-time-in-minutes: 3
---
# Foundational Neural Network Concepts

This lesson introduces the fundamental building blocks of Artificial Neural Networks (ANNs). Understanding these core concepts is essential for comprehending how ANNs learn and process information.

## What are Neural Networks?

At their heart, neural networks are computational models inspired by the structure and function of the biological brain. They are designed to recognize patterns and make decisions, often in complex data. They achieve this by processing information through interconnected layers of "neurons" or nodes.

## Key Components and Terms

*   **Neuron (or Node):** The basic unit of a neural network. It receives input signals, processes them, and produces an output signal. Think of it as a tiny processing unit.

*   **Input Layer:** The first layer of neurons that receive raw data. Each neuron in this layer typically represents a feature of the input data (e.g., a pixel value in an image, a word in a sentence).

*   **Hidden Layer(s):** Layers of neurons located between the input and output layers. These layers perform intermediate computations and learn to extract increasingly complex features from the data. A network can have one or many hidden layers.

*   **Output Layer:** The final layer of neurons that produces the network's prediction or classification. The number of neurons in the output layer depends on the task (e.g., one neuron for binary classification, multiple neurons for multi-class classification).

*   **Weights:** Numerical values associated with the connections between neurons. These weights determine the strength of the signal passed from one neuron to another. During learning, these weights are adjusted.

*   **Bias:** An additional parameter added to the weighted sum of inputs in a neuron. It allows the activation function to be shifted, which can improve the model's ability to fit the data.

*   **Activation Function:** A mathematical function applied to the output of a neuron. It introduces non-linearity into the network, allowing it to learn complex relationships. Common examples include Sigmoid, ReLU (Rectified Linear Unit), and Tanh.

## Practical Scenario

Imagine you are building a simple neural network to identify whether an email is spam or not spam.

*   **Input Layer:** Might have neurons representing the frequency of certain words ("free," "money," "win"), the presence of all caps, or the sender's domain.
*   **Hidden Layers:** These layers would process the input features to identify more complex patterns indicative of spam (e.g., a combination of promotional words and suspicious sender information).
*   **Output Layer:** A single neuron could output a probability score indicating the likelihood of the email being spam.

## Practice Task

List the main components of a neural network and briefly describe the role of each.

## Self-Check Questions

1.  What is the fundamental unit of a neural network called?
2.  Which layer of a neural network receives the raw input data?
3.  What do weights represent in a neural network?
4.  What is the purpose of an activation function?
5.  Can a neural network have more than one hidden layer?

## Supports

- [[skills/computing/data-ai/artificial-intelligence/artificial-neural-network/microskills/foundational-neural-network-concepts|Foundational Neural Network Concepts]]
