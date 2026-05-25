---
type: medium
title: Core Structures of Artificial Neural Networks
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[core-structures-of-artificial-neural-networks|core-structures-of-artificial-neural-networks]]"
related-skills:
  - "[[skills/computing/data-ai/artificial-intelligence/machine-learning/deep-learning/artificial-neural-network/artificial-neural-network|artificial-neural-network]]"
learning-time-in-minutes: 3
---
# Core Structures of Artificial Neural Networks

Artificial Neural Networks (ANNs) are inspired by the structure and function of the human brain. Understanding their core structural elements is key to understanding how they learn and process information. This lesson focuses on the fundamental building blocks of ANNs.

## What are the Core Structures?

At their heart, ANNs are composed of interconnected processing units called **neurons** (or nodes). These neurons are organized into layers:

*   **Input Layer:** This layer receives the raw data. Each neuron in the input layer typically represents a feature of the input data. For example, if you're feeding an image of a digit to an ANN, each input neuron might represent the brightness of a single pixel.

*   **Hidden Layer(s):** These layers lie between the input and output layers. They perform complex computations and feature extraction on the data. ANNs can have one or many hidden layers, and the number of neurons in these layers is a design choice. More hidden layers and neurons generally allow the network to learn more complex patterns, but also increase computational cost and risk of overfitting.

*   **Output Layer:** This layer produces the final result of the network's processing. The number of neurons in the output layer depends on the task. For a binary classification problem (e.g., is this email spam or not?), there might be one output neuron. For a multi-class classification problem (e.g., identifying a handwritten digit from 0-9), there would be ten output neurons.

Each neuron in one layer is typically connected to neurons in the next layer. These connections have associated **weights**, which are numerical values that determine the strength of the connection. During the learning process, these weights are adjusted to improve the network's performance. Neurons also have an **activation function**, which determines whether and how strongly a neuron "fires" or passes information to the next layer.

## Practical Example: Recognizing Handwritten Digits

Imagine you are building an ANN to recognize handwritten digits (0-9).

1.  **Input Layer:** If your images are 28x28 pixels, your input layer would have 784 neurons (28 \* 28). Each neuron receives the intensity value of one pixel.

2.  **Hidden Layers:** You might have one or two hidden layers. The first hidden layer could learn to detect basic shapes like curves or lines. Subsequent hidden layers might combine these basic shapes to recognize more complex features like loops or endpoints, which are characteristic of specific digits.

3.  **Output Layer:** Since you want to classify digits from 0 to 9, your output layer will have 10 neurons. Each neuron will correspond to one digit. The neuron with the highest activation value will indicate the network's predicted digit.

The connections between these neurons will have weights that are learned over time. For instance, a connection between a pixel that consistently forms the top curve of a '3' and a neuron in the hidden layer designed to detect curves will likely have a strong positive weight.

## Practice Task

Draw a simple ANN with one input layer, one hidden layer, and one output layer. Label each layer and indicate the general flow of information. Imagine this network is designed to classify an image as either a "cat" or a "dog." What might the number of neurons in each layer be, and what would the output layer represent?

## Self-Check Questions

1.  What is the role of the input layer in an ANN?
2.  What is the purpose of hidden layers?
3.  What determines the number of neurons in the output layer?
4.  What are weights, and why are they important in an ANN?

## Supports

- [[core-structures-of-artificial-neural-networks|Core Structures of Artificial Neural Networks]]
