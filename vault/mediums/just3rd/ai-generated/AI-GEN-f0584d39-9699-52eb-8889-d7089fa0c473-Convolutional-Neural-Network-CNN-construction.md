---
type: "medium"
title: "Building a Basic Convolutional Neural Network (CNN)"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/data/ai/deep-learning/microskills/convolutional-neural-network-cnn-construction|Convolutional Neural Network (CNN) construction]]"
---
# Building a Basic Convolutional Neural Network (CNN)

This lesson focuses on constructing a simple Convolutional Neural Network (CNN) for image-related tasks. CNNs are a powerful type of neural network particularly adept at processing grid-like data such as images.

## What is a CNN?

A CNN is a deep learning model designed to automatically and adaptively learn spatial hierarchies of features from input data. For images, this means it can learn to detect edges, then shapes, then more complex patterns. The core components of a CNN are:

*   **Convolutional Layers:** These layers apply learnable filters (kernels) to the input image to detect features. Each filter slides across the image, performing a dot product to produce a feature map.
*   **Pooling Layers:** These layers reduce the spatial dimensions (width and height) of the feature maps, which helps to reduce computation and control overfitting. Max pooling is a common type, taking the maximum value within a small window.
*   **Activation Functions:** Non-linear functions like ReLU (Rectified Linear Unit) are applied after convolutional layers to introduce non-linearity, allowing the network to learn complex patterns.
*   **Fully Connected Layers:** These layers take the high-level features extracted by the convolutional and pooling layers and use them for classification or regression.

## Practical Example: Image Classification with a Simple CNN

Let's consider a scenario where we want to build a basic CNN to classify images of cats and dogs. We'll use Python with the Keras API, a popular deep learning framework.

```python
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense, Activation

# Define the model architecture
model = Sequential()

# Convolutional Layer 1
model.add(Conv2D(32, (3, 3), input_shape=(64, 64, 3))) # 32 filters, 3x3 kernel, input shape (height, width, channels)
model.add(Activation('relu')) # ReLU activation function

# Pooling Layer 1
model.add(MaxPooling2D(pool_size=(2, 2))) # 2x2 max pooling window

# Convolutional Layer 2
model.add(Conv2D(64, (3, 3)))
model.add(Activation('relu'))

# Pooling Layer 2
model.add(MaxPooling2D(pool_size=(2, 2)))

# Flatten the output for fully connected layers
model.add(Flatten())

# Fully Connected Layer 1
model.add(Dense(128)) # 128 neurons
model.add(Activation('relu'))

# Output Layer (for binary classification: cats vs dogs)
model.add(Dense(1)) # 1 neuron for binary output
model.add(Activation('sigmoid')) # Sigmoid for binary classification (outputs probability between 0 and 1)

# Compile the model
model.compile(loss='binary_crossentropy',
              optimizer='adam',
              metrics=['accuracy'])

# Display the model's architecture
model.summary()
```

In this example:

1.  We initialize a `Sequential` model, which allows us to build the network layer by layer.
2.  We add `Conv2D` layers with a specified number of filters and kernel size. `input_shape` is only needed for the very first layer.
3.  `Activation('relu')` introduces non-linearity.
4.  `MaxPooling2D` downsamples the feature maps.
5.  `Flatten()` converts the 2D feature maps into a 1D vector.
6.  `Dense` layers are standard fully connected layers.
7.  The final `Dense` layer with `sigmoid` activation is for binary classification.

## Practice Task

Using the code structure above, modify the CNN to:

1.  Add a third `Conv2D` layer with 128 filters and a (3,3) kernel, followed by a ReLU activation and a `MaxPooling2D` layer.
2.  Change the `pool_size` of both `MaxPooling2D` layers to (3,3).
3.  Increase the number of neurons in the first `Dense` layer to 256.

## Self-Check Questions

1.  What is the primary purpose of a convolutional layer in a CNN?
2.  Why is pooling beneficial in CNNs?
3.  What is the role of the `Flatten` layer before the `Dense` layers?
4.  Which activation function is typically used for the output layer in a binary classification problem?

## Supports

- [[skills/data/ai/deep-learning/microskills/convolutional-neural-network-cnn-construction|Convolutional Neural Network (CNN) construction]]
