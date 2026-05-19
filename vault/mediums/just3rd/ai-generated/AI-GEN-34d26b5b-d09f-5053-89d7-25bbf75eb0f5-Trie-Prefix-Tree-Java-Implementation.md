---
type: "medium"
title: "Trie (Prefix Tree) Java Implementation"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/java-programming/microskills/trie-prefix-tree-java-implementation|Trie (Prefix Tree) Java Implementation]]"
---
# Trie (Prefix Tree) Java Implementation

In Java programming, implementing string algorithms efficiently often relies on specialized data structures. The Trie, also known as a prefix tree, is a fundamental structure for handling string-related operations, particularly those involving prefixes. This lesson focuses on coding the Trie data structure in Java.

## What is a Trie?

A Trie is a tree-like data structure where each node represents a character, and the path from the root to a node forms a prefix. It's particularly useful for tasks like:

*   **Autocomplete/Typeahead:** Suggesting words as a user types.
*   **Spell Checking:** Identifying misspelled words.
*   **Dictionary/Lexicon Storage:** Storing a set of words for quick lookups.
*   **Longest Common Prefix:** Finding the longest common prefix among a set of strings.

### Core Idea

Each node in a Trie typically has:

1.  **Children:** A mapping from characters to child nodes. This can be an array (e.g., for lowercase English letters) or a hash map.
2.  **End of Word Flag:** A boolean indicating whether the path from the root to this node represents a complete word.

## Java Implementation

We'll create two main classes: `TrieNode` and `Trie`.

### TrieNode Class

This class represents a single node in our Trie.

```java
import java.util.HashMap;
import java.util.Map;

class TrieNode {
    // Using a HashMap to store children, allowing for any character set.
    // For a fixed alphabet (like 'a'-'z'), an array of size 26 could be more efficient.
    Map<Character, TrieNode> children;
    boolean isEndOfWord;

    public TrieNode() {
        children = new HashMap<>();
        isEndOfWord = false;
    }
}
```

**Explanation:**

*   `children`: A `HashMap` where keys are characters and values are `TrieNode`s. This allows us to dynamically add children for any character encountered.
*   `isEndOfWord`: A boolean flag to mark if the path ending at this node forms a complete word in our dictionary.

### Trie Class

This class will manage the entire Trie structure and provide methods for insertion and searching.

```java
import java.util.HashMap;
import java.util.Map;

// TrieNode definition as above
class TrieNode {
    Map<Character, TrieNode> children;
    boolean isEndOfWord;

    public TrieNode() {
        children = new HashMap<>();
        isEndOfWord = false;
    }
}

class Trie {
    private TrieNode root;

    public Trie() {
        root = new TrieNode();
    }

    /**
     * Inserts a word into the trie.
     * @param word The word to insert.
     */
    public void insert(String word) {
        TrieNode currentNode = root;
        for (char ch : word.toCharArray()) {
            // If the character is not already a child, create a new node for it.
            currentNode.children.putIfAbsent(ch, new TrieNode());
            // Move to the child node corresponding to the current character.
            currentNode = currentNode.children.get(ch);
        }
        // Mark the end of the word at the last node.
        currentNode.isEndOfWord = true;
    }

    /**
     * Searches for a word in the trie.
     * @param word The word to search for.
     * @return true if the word is found in the trie, false otherwise.
     */
    public boolean search(String word) {
        TrieNode currentNode = root;
        for (char ch : word.toCharArray()) {
            TrieNode node = currentNode.children.get(ch);
            // If the character path doesn't exist, the word is not in the trie.
            if (node == null) {
                return false;
            }
            currentNode = node;
        }
        // The word exists only if the path exists AND the last node is marked as end of word.
        return currentNode.isEndOfWord;
    }

    /**
     * Checks if there is any word in the trie that starts with the given prefix.
     * @param prefix The prefix to check.
     * @return true if there is at least one word with the given prefix, false otherwise.
     */
    public boolean startsWith(String prefix) {
        TrieNode currentNode = root;
        for (char ch : prefix.toCharArray()) {
            TrieNode node = currentNode.children.get(ch);
            // If the character path doesn't exist, no word starts with this prefix.
            if (node == null) {
                return false;
            }
            currentNode = node;
        }
        // If we reached the end of the prefix, it means the prefix exists.
        return true;
    }

    // Optional: Method to delete a word (more complex, involves backtracking)
    // Optional: Method to find all words with a given prefix
}
```

**Explanation:**

*   `root`: The starting `TrieNode` of our Trie.
*   `insert(String word)`:
    *   We traverse the Trie from the `root`.
    *   For each character in the `word`, we check if a child node for that character exists.
    *   If not, we create a new `TrieNode` and add it to the current node's children.
    *   We then move to the child node.
    *   Once all characters are processed, we set `isEndOfWord = true` on the final node.
*   `search(String word)`:
    *   Similar traversal to `insert`.
    *   If at any point a character's child node is missing, the word is not in the Trie, so we return `false`.
    *   If we successfully traverse all characters, we return the `isEndOfWord` status of the final node. This is crucial: just reaching a node doesn't mean the word exists; it must be explicitly marked as an end of a word.
*   `startsWith(String prefix)`:
    *   This method is simpler. We traverse the Trie following the `prefix`.
    *   If the path for the `prefix` exists completely, we return `true`. We don't care about the `isEndOfWord` flag here, as we only need to know if the prefix itself is a valid start to any word.

## How it Works: A Walkthrough

Let's insert the words "apple", "app", and "apricot" into our Trie.

1.  **Insert "apple":**
    *   `root` -> 'a' -> `TrieNode_a`
    *   `TrieNode_a` -> 'p' -> `TrieNode_ap`
    *   `TrieNode_ap` -> 'p' -> `TrieNode_app`
    *   `TrieNode_app` -> 'l' -> `TrieNode_appl`
    *   `TrieNode_appl` -> 'e' -> `TrieNode_apple`. Mark `isEndOfWord = true`.

2.  **Insert "app":**
    *   We traverse: `root` -> 'a' -> 'p' -> 'p'.
    *   The nodes for 'a', 'p', and 'p' already exist from "apple".
    *   We reach `TrieNode_app`. Mark `isEndOfWord = true`.

3.  **Insert "apricot":**
    *   `root` -> 'a' -> `TrieNode_a` (exists)
    *   `TrieNode_a` -> 'p' -> `TrieNode_ap` (exists)
    *   `TrieNode_ap` -> 'r' -> `TrieNode_apr` (new)
    *   `TrieNode_apr` -> 'i' -> `TrieNode_apri` (new)
    *   ... and so on until 't'. Mark the final node `isEndOfWord = true`.

**Example Usage:**

```java
public class Main {
    public static void main(String[] args) {
        Trie trie = new Trie();
        trie.insert("apple");
        trie.insert("app");
        trie.insert("apricot");

        System.out.println("Searching for 'apple': " + trie.search("apple"));    // true
        System.out.println("Searching for 'app': " + trie.search("app"));        // true
        System.out.println("Searching for 'ap': " + trie.search("ap"));          // false (path exists, but not marked as end of word)
        System.out.println("Searching for 'appl': " + trie.search("appl"));      // false
        System.out.println("Searching for 'banana': " + trie.search("banana"));  // false

        System.out.println("Starts with 'app': " + trie.startsWith("app"));      // true
        System.out.println("Starts with 'ap': " + trie.startsWith("ap"));        // true
        System.out.println("Starts with 'apr': " + trie.startsWith("apr"));      // true
        System.out.println("Starts with 'b': " + trie.startsWith("b"));          // false
    }
}
```

## Performance Considerations

*   **Time Complexity:**
    *   Insertion: $$O(L)$$, where L is the length of the word.
    *   Search: $$O(L)$$, where L is the length of the word.
    *   `startsWith`: $$O(P)$$, where P is the length of the prefix.
*   **Space Complexity:** $$O(N \times |\Sigma|)$$ in the worst case, where N is the total number of characters in all stored words, and $$|\Sigma|$$ is the size of the alphabet. However, if many words share prefixes, the space can be significantly less than storing all strings individually. Using a `HashMap` for children makes the space complexity closer to $$O(N \times K)$$ where K is the average number of distinct characters at each node, which can be much smaller than $$|\Sigma|$$ for sparse Tries.

This implementation provides a solid foundation for understanding and using Tries in Java for various string manipulation tasks.

## Supports

- [[skills/programming/programming-languages/java-programming/microskills/trie-prefix-tree-java-implementation|Trie (Prefix Tree) Java Implementation]]
