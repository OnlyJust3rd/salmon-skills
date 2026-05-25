---
type: "medium"
title: "Understanding Graph Properties: Connectivity and Degree"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/computer-science/data-structures/graph-and-tree-modeling/microskills/graph-properties|graph-properties]]"
related-skills:
  - "[[skills/computing/computer-science/data-structures/graph-and-tree-modeling/graph-and-tree-modeling|graph-and-tree-modeling]]"
learning-time-in-minutes: 4
---
# Understanding Graph Properties: Connectivity and Degree

Graphs are powerful tools for modeling relationships between entities. To effectively use them, we need to understand their fundamental properties. This lesson focuses on two key properties: **connectivity** and **degree**.

## What is Connectivity?

Connectivity in a graph tells us how "connected" the nodes (or vertices) are to each other. Imagine a social network: if everyone can reach everyone else, directly or indirectly, the network is highly connected.

### Connected Components

For **undirected graphs**, connectivity is often discussed in terms of **connected components**. A connected component is a subgraph where any two nodes are connected to each other by paths, and which is connected to no additional nodes in the supergraph.

Think of it like this:
*   **One Connected Component:** If you can start at any node and reach any other node in the graph by following the edges, the entire graph is considered connected.
*   **Multiple Connected Components:** If the graph is split into several distinct groups of nodes, where nodes within a group are connected but there are no paths between nodes in different groups, then each group is a separate connected component.

**Example:**

Consider a graph representing cities and roads:

*   If all cities are reachable from each other, there is **one connected component**.
*   If you have cities in North America and separate cities in Europe, and no roads connect them, you'd have **two connected components**: one for North America and one for Europe.

### Reachability in Directed Graphs

For **directed graphs**, connectivity is a bit more nuanced. Instead of just being "connected," we talk about **reachability**. A node `B` is reachable from node `A` if there is a directed path from `A` to `B`.

We can also define:
*   **Strongly Connected Components (SCCs):** In a directed graph, a strongly connected component is a subgraph where for any two nodes `u` and `v` within the subgraph, there is a directed path from `u` to `v` *and* a directed path from `v` to `u`.
*   **Weakly Connected Components:** If you ignore the direction of the edges in a directed graph and treat it as an undirected graph, the connected components of that resulting undirected graph are called weakly connected components.

**Example:**

Imagine a graph of websites and hyperlinks:
*   If website A links to B, and B links to C, then C is reachable from A.
*   If website D links to E, and E links to D, then D and E form a strongly connected component. Even if there are other links outside this pair, as long as D and E can reach each other, they are strongly connected.

## What is Degree?

The **degree** of a node in a graph refers to the number of edges connected to it. This property gives us insight into how "influential" or "busy" a node is.

### Degree in Undirected Graphs

In an undirected graph, the degree of a node is simply the count of edges incident to it.

**Example:**

In the social network example, the degree of a person is the number of friends they have directly connected to them.

*   Node A is connected to Nodes B and C. The degree of Node A is 2.
*   Node B is connected to Node A and Node D. The degree of Node B is 2.

### In-degree and Out-degree in Directed Graphs

In a directed graph, edges have a direction. This means we distinguish between edges *coming into* a node and edges *going out of* a node.

*   **In-degree:** The number of edges pointing *towards* a node.
*   **Out-degree:** The number of edges pointing *away from* a node.

**Example:**

Consider a directed graph representing a company's reporting structure:
*   If Node A reports to Node B, there's an edge from A to B. Node B has an **in-degree** of 1 (from A) and an **out-degree** of 0 (if no one reports to B).
*   If Node C manages Node D and Node E, there are edges from C to D and C to E. Node C has an **out-degree** of 2, and its **in-degree** would depend on who it reports to.

### The Handshaking Lemma

A fundamental property relating degrees in undirected graphs is the Handshaking Lemma. It states that the sum of the degrees of all nodes in a graph is equal to twice the number of edges.

$$ \sum_{v \in V} \text{deg}(v) = 2|E| $$

Where:
*   $V$ is the set of vertices (nodes).
*   $E$ is the set of edges.
*   $\text{deg}(v)$ is the degree of vertex $v$.
*   $|E|$ is the number of edges.

This lemma makes intuitive sense: each edge connects two nodes, so when you sum the degrees, you're effectively counting each edge twice (once for each endpoint).

**Key Takeaway:** Understanding connectivity and degree provides essential information about the structure and relationships within a graph. These properties are foundational for analyzing network behavior, flow, and influence.

## Supports

- [[skills/computing/computer-science/data-structures/graph-and-tree-modeling/microskills/graph-properties|Graph Properties]]
