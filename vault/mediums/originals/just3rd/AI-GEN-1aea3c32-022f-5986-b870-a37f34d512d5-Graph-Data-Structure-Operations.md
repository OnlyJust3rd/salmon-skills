---
type: "medium"
title: "Graph Data Structure Operations"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/computer-science/algorithms/algorithmic-thinking/microskills/graph-data-structure-operations|graph-data-structure-operations]]"
related-skills:
  - "[[skills/computing/computer-science/algorithms/algorithmic-thinking/algorithmic-thinking|algorithmic-thinking]]"
learning-time-in-minutes: 3
---
# Graph Data Structure Operations

This lesson focuses on the practical execution of algorithms to modify the components of a graph data structure. You will learn how to add and remove vertices (nodes) and edges (connections) within a graph. This is a fundamental skill for working with graphs and is essential for implementing more complex graph algorithms.

### Core Idea: Modifying Graph Components

Graphs are dynamic structures. Often, you need to change them to represent evolving relationships or to prepare them for further analysis. This involves performing operations that directly alter the graph's vertices and edges.

*   **Adding a Vertex:** When you add a new vertex, you are introducing a new entity into your graph. This vertex initially has no connections to any other vertices.
*   **Removing a Vertex:** Removing a vertex means deleting it from the graph. Crucially, all edges connected to this vertex must also be removed to maintain graph integrity.
*   **Adding an Edge:** An edge connects two existing vertices. When you add an edge, you are establishing a relationship between these two entities.
*   **Removing an Edge:** Removing an edge severs the connection between two vertices.

### Practical Example: Social Network Updates

Imagine you are building a social network application. You need to be able to add new users (vertices) and create connections (edges) between them. You also need to handle cases where users leave the platform or disconnect from each other.

Let's consider a simple Python implementation using an adjacency list representation for our graph.

```python
class Graph:
    def __init__(self):
        self.graph = {} # Dictionary to store adjacency list

    def add_vertex(self, vertex):
        if vertex not in self.graph:
            self.graph[vertex] = []
            print(f"Vertex '{vertex}' added.")
        else:
            print(f"Vertex '{vertex}' already exists.")

    def remove_vertex(self, vertex):
        if vertex in self.graph:
            # Remove all edges pointing to this vertex
            for v, neighbors in self.graph.items():
                if vertex in neighbors:
                    neighbors.remove(vertex)
            
            # Remove the vertex itself
            del self.graph[vertex]
            print(f"Vertex '{vertex}' removed.")
        else:
            print(f"Vertex '{vertex}' not found.")

    def add_edge(self, vertex1, vertex2):
        if vertex1 in self.graph and vertex2 in self.graph:
            # For an undirected graph, add edges in both directions
            if vertex2 not in self.graph[vertex1]:
                self.graph[vertex1].append(vertex2)
            if vertex1 not in self.graph[vertex2]:
                self.graph[vertex2].append(vertex1)
            print(f"Edge between '{vertex1}' and '{vertex2}' added.")
        else:
            print("One or both vertices not found to add edge.")

    def remove_edge(self, vertex1, vertex2):
        if vertex1 in self.graph and vertex2 in self.graph:
            # For an undirected graph, remove edges in both directions
            if vertex2 in self.graph[vertex1]:
                self.graph[vertex1].remove(vertex2)
            if vertex1 in self.graph[vertex2]:
                self.graph[vertex2].remove(vertex1)
            print(f"Edge between '{vertex1}' and '{vertex2}' removed.")
        else:
            print("One or both vertices not found to remove edge.")

    def display(self):
        for vertex, neighbors in self.graph.items():
            print(f"{vertex}: {', '.join(neighbors)}")

# --- Scenario ---
my_network = Graph()

# Add some users (vertices)
my_network.add_vertex("Alice")
my_network.add_vertex("Bob")
my_network.add_vertex("Charlie")
my_network.add_vertex("David")

# Establish friendships (edges)
my_network.add_edge("Alice", "Bob")
my_network.add_edge("Alice", "Charlie")
my_network.add_edge("Bob", "David")

print("\n--- Initial Network ---")
my_network.display()

# Alice disconnects from Charlie
my_network.remove_edge("Alice", "Charlie")

# David leaves the network
my_network.remove_vertex("David")

print("\n--- Updated Network ---")
my_network.display()
```

In this example, `add_vertex`, `remove_vertex`, `add_edge`, and `remove_edge` are the algorithms that perform the graph manipulation operations.

### Practice Task

Create a new `Graph` instance.
1.  Add three vertices: "A", "B", and "C".
2.  Add an edge between "A" and "B".
3.  Add an edge between "B" and "C".
4.  Add a vertex "D".
5.  Try to add an edge between "A" and "D" (note that "D" is not yet connected to anything specific, but the `add_edge` function accounts for existing vertices).
6.  Display your graph.
7.  Remove the edge between "A" and "B".
8.  Remove vertex "C".
9.  Display your graph again.

### Self-Check Questions

1.  What happens to existing edges when you remove a vertex?
2.  If you try to add an edge between two vertices that don't exist, what should happen?
3.  In an undirected graph, when you add an edge between `X` and `Y`, how many entries are typically modified in the adjacency list representation?
4.  Why is it important to ensure a vertex exists before adding an edge to it?

## Supports

- [[skills/computing/computer-science/algorithms/algorithmic-thinking/microskills/graph-data-structure-operations|Graph Data Structure Operations]]
