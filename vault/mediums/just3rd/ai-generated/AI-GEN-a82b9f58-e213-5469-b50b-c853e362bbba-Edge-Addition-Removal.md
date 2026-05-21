---
type: "medium"
title: "Adding and Removing Edges in Graphs"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/algorithms/algorithmic-thinking/microskills/edge-addition-removal|edge-addition-removal]]"
---
# Adding and Removing Edges in Graphs

Graphs are powerful data structures for representing relationships. Sometimes, these relationships change. This lesson focuses on how to update a graph by adding or removing connections, known as edges. This skill is a fundamental part of manipulating graph data structures, which is essential for implementing graph algorithms.

## What are Edges?

In a graph, an **edge** represents a connection between two **vertices** (or nodes). For example, in a social network graph, an edge might represent a "friendship" between two people (vertices). In a transportation network, an edge could represent a flight or train route between two cities.

Updating these relationships is a common operation. You might need to:
*   Add a new friendship when two people connect.
*   Remove a flight route if it's discontinued.

## Implementing Edge Addition and Removal

We'll look at how to implement these operations, often using pseudocode or a common programming approach.

### Adding an Edge

To add an edge between vertex `A` and vertex `B`:

1.  **Check if the vertices exist:** Ensure both `A` and `B` are already in the graph. If not, you might need to add them first.
2.  **Add the connection:** Record that `A` is connected to `B`, and (if it's an undirected graph) `B` is connected to `A`.

**Pseudocode for adding an undirected edge:**

```pseudocode
function addEdge(graph, vertexA, vertexB):
  if vertexA is in graph and vertexB is in graph:
    add vertexB to adjacency list of vertexA
    add vertexA to adjacency list of vertexB
  else:
    print "One or both vertices not found."
```

### Removing an Edge

To remove an edge between vertex `A` and vertex `B`:

1.  **Check if the edge exists:** Verify that `A` and `B` are indeed connected.
2.  **Remove the connection:** Delete the record of the connection from the data structures representing the graph.

**Pseudocode for removing an undirected edge:**

```pseudocode
function removeEdge(graph, vertexA, vertexB):
  if vertexA is connected to vertexB:
    remove vertexB from adjacency list of vertexA
    remove vertexA from adjacency list of vertexB
  else:
    print "No edge found between these vertices."
```

## Practical Scenario: Social Network Updates

Imagine a social network where users are vertices and friendships are edges.

*   **Adding an edge:** When User X sends a friend request to User Y, and User Y accepts, you need to add an edge between them.
*   **Removing an edge:** If User X unfriends User Y, you need to remove the edge between them.

In a typical adjacency list representation of a graph, adding an edge involves appending one vertex to the other's list, and removing involves searching and deleting.

## Practice Task

Consider a graph representing flight routes between cities.

1.  **Scenario:** A new flight route is established between London and Paris. Write down (or think through) the steps to add this edge to your graph representation. Assume London and Paris already exist as cities (vertices).
2.  **Scenario:** The flight route between New York and Los Angeles is discontinued. Write down (or think through) the steps to remove this edge.

## Self-Check Questions

1.  What is the primary action performed when adding an edge?
2.  When removing an edge, why is it important to check if the edge already exists?
3.  In an undirected graph, when you add an edge between vertex P and vertex Q, how many connections are you typically updating?

## Supports

- [[skills/programming/algorithms/algorithmic-thinking/microskills/edge-addition-removal|Edge Addition/Removal]]
