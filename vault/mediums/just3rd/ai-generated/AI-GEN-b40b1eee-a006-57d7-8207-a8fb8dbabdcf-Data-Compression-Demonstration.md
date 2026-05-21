---
type: "medium"
title: "Demonstrating Huffman Coding for Data Compression"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/algorithms/algorithm-classification/microskills/data-compression-demonstration|data-compression-demonstration]]"
---
# Demonstrating Huffman Coding for Data Compression

Huffman coding is a lossless data compression algorithm that assigns variable-length codes to input characters, with lengths based on the characters' frequencies. More frequent characters get shorter codes, and less frequent characters get longer codes, leading to an overall reduction in the size of the data.

## Practical Scenario: Compressing Text Data

Imagine you have a text file containing a novel. Some letters, like 'e' and 't', appear much more frequently than others, like 'q' and 'z'. If we were to assign a fixed-length binary code (say, 8 bits) to each unique character, we would be using the same amount of space for 'e' as for 'z'. Huffman coding optimizes this by giving 'e' a very short code and 'z' a much longer one.

Let's walk through a small example.

### Sample Data and Frequencies

Consider the following string: `AAAAABBBCCDE`

First, we count the frequency of each character:

*   A: 5
*   B: 3
*   C: 2
*   D: 1
*   E: 1

### Building the Huffman Tree

1.  **Create Leaf Nodes:** Each character becomes a leaf node with its frequency as its weight.
    *   (A, 5), (B, 3), (C, 2), (D, 1), (E, 1)

2.  **Combine Smallest Frequencies:** Repeatedly combine the two nodes with the smallest frequencies into a new parent node. The parent node's frequency is the sum of its children's frequencies.

    *   Combine (D, 1) and (E, 1) -> Parent node (DE, 2)
        *   Current nodes: (A, 5), (B, 3), (C, 2), (DE, 2)
    *   Combine (C, 2) and (DE, 2) -> Parent node (CDE, 4)
        *   Current nodes: (A, 5), (B, 3), (CDE, 4)
    *   Combine (B, 3) and (CDE, 4) -> Parent node (BCDE, 7)
        *   Current nodes: (A, 5), (BCDE, 7)
    *   Combine (A, 5) and (BCDE, 7) -> Root node (ABCDE, 12)

3.  **Assign Codes:** Traverse the tree from the root to each leaf. Assign '0' to the left branch and '1' to the right branch.

    *   A: 0 (Left from root)
    *   B: 10 (Right from root, then left)
    *   C: 110 (Right, Right, Left)
    *   D: 1110 (Right, Right, Right, Left)
    *   E: 1111 (Right, Right, Right, Right)

### Encoding the Data

Now, replace each character in the original string with its Huffman code:

`AAAAABBBCCDE` becomes:
`00000 101010 110110 1110 1111`

This is `0000010101011011011101111` in a continuous bitstream.

If we used 8-bit ASCII for each character, the original string would require 12 characters * 8 bits/character = 96 bits. The Huffman coded string uses 25 bits. This is a significant compression!

### Practice Task

Given the string: `GOOGOL`

1.  Calculate the frequency of each character.
2.  Construct the Huffman tree.
3.  Determine the Huffman codes for each unique character.
4.  Encode the string `GOOGOL` using your generated codes.

### Self-Check Questions

1.  What happens to the length of the Huffman code as the frequency of a character increases?
2.  Is Huffman coding a lossless or lossy compression method? How do you know?
3.  In our example, which character received the shortest Huffman code and why?

## Supports

- [[skills/programming/algorithms/algorithm-classification/microskills/data-compression-demonstration|Data Compression Demonstration]]
