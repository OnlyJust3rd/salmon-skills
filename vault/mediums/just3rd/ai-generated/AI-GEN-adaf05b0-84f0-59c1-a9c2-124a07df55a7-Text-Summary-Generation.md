---
type: "medium"
title: "Generating Text Summaries"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/data/data-science/text-summarization/microskills/text-summary-generation|text-summary-generation]]"
---
# Generating Text Summaries

This lesson focuses on **Text Summary Generation**, a core component of Text Summarization. We'll explore how to practically produce concise summaries from input documents using learned techniques.

## Understanding Text Summarization Goals

The goal of text summarization is to create a shorter version of a document that retains the most important information. This is crucial for quickly understanding large amounts of text, such as news articles, research papers, or reports.

There are two primary approaches to text summarization:

1.  **Extractive Summarization:** This method identifies and extracts the most important sentences directly from the original text to form the summary.
2.  **Abstractive Summarization:** This method generates new sentences that capture the essence of the original text, often rephrasing or synthesizing information.

## Implementing Extractive Summarization with LexRank

LexRank is a popular graph-based algorithm for extractive summarization. It models sentences as nodes in a graph and uses their similarity to rank them by importance. Sentences that are similar to many other important sentences are considered more central and thus more likely to be included in the summary.

### How LexRank Works (Conceptual)

1.  **Sentence Representation:** Each sentence in the document is treated as a node.
2.  **Sentence Similarity:** A similarity score is calculated between every pair of sentences. Common methods include cosine similarity based on TF-IDF (Term Frequency-Inverse Document Frequency) scores of words.
3.  **Graph Construction:** A graph is built where nodes are sentences, and edges represent the similarity between them.
4.  **PageRank Algorithm:** The PageRank algorithm (similar to how Google ranks web pages) is applied to this sentence graph. Sentences that are "linked" to by many other important sentences receive a higher rank.
5.  **Summary Selection:** The top-ranked sentences are selected to form the summary.

### Practical Implementation (Python Example)

While you can implement LexRank from scratch, libraries like `sumy` provide a convenient way to use it.

First, install the library:

```bash
pip install sumy
```

Then, you can use it as follows:

```python
from sumy.parsers.plaintext import PlaintextParser
from sumy.nlp.tokenizers import Tokenizer
from sumy.summarizers.lex_rank import LexRankSummarizer
from sumy.nlp.stemmers import Stemmer
from sumy.utils import get_stop_words

LANGUAGE = "english"
SENTENCES_COUNT = 3 # Number of sentences in the summary

def summarize_with_lexrank(text):
    parser = PlaintextParser.from_string(text, Tokenizer(LANGUAGE))
    stemmer = Stemmer(LANGUAGE)
    summarizer = LexRankSummarizer(stemmer)
    summarizer.stop_words = get_stop_words(LANGUAGE)

    summary = summarizer(parser.document, SENTENCES_COUNT)
    return " ".join([str(sentence) for sentence in summary])

# Example Usage:
document = """
The Orbiter Discovery is scheduled to depart from the Kennedy Space Center on Tuesday,
carrying a crew of seven astronauts. The mission's primary objective is to deliver a new
module to the International Space Station. This module will enhance the station's research
capabilities and provide additional living space for future crews. The launch window
opens at 10:00 AM Eastern Time. Mission control is closely monitoring weather conditions.
The astronauts have completed their final training and are ready for the journey.
Discovery has a distinguished history of space exploration, having completed numerous
successful missions over the past two decades. This mission marks one of its final
flights before its retirement.
"""

print("Original Document:\n", document)
print("\n--- LexRank Summary ---")
print(summarize_with_lexrank(document))
```

This code snippet takes a given text, tokenizes it, and then uses LexRank to select the top `SENTENCES_COUNT` sentences to form a summary.

## Implementing Abstractive Summarization using Neural Models

Abstractive summarization is more complex as it requires the model to understand the source text and then generate new, coherent sentences. Modern approaches often use Transformer-based neural networks.

### Core Idea: Encoder-Decoder Architecture

Abstractive summarization models typically employ an **Encoder-Decoder** architecture, often built using Transformers.

*   **Encoder:** Reads the input document and converts it into a rich, contextualized numerical representation (a "thought vector").
*   **Decoder:** Takes this representation and generates the summary word by word, conditioned on the encoded information and the words it has already generated.

Transformer models excel here due to their **attention mechanisms**, which allow the model to focus on relevant parts of the input text when generating each word of the summary.

### Popular Models and Libraries

Several pre-trained models are excellent for abstractive summarization. Libraries like `transformers` from Hugging Face make these models accessible.

First, install the library:

```bash
pip install transformers torch
```

Here's an example using the BART model, known for its strong summarization capabilities:

```python
from transformers import BartTokenizer, BartForConditionalGeneration

def summarize_with_bart(text, max_length=150, min_length=40):
    model_name = "bart-large-cnn" # A popular BART model fine-tuned for summarization
    tokenizer = BartTokenizer.from_pretrained(model_name)
    model = BartForConditionalGeneration.from_pretrained(model_name)

    inputs = tokenizer([text], max_length=1024, return_tensors='pt', truncation=True)

    # Generate summary
    summary_ids = model.generate(inputs['input_ids'],
                                 num_beams=4, # Use beam search for better quality
                                 max_length=max_length,
                                 min_length=min_length,
                                 early_stopping=True)

    summary = tokenizer.decode(summary_ids[0], skip_special_tokens=True)
    return summary

# Example Usage with the same document:
document = """
The Orbiter Discovery is scheduled to depart from the Kennedy Space Center on Tuesday,
carrying a crew of seven astronauts. The mission's primary objective is to deliver a new
module to the International Space Station. This module will enhance the station's research
capabilities and provide additional living space for future crews. The launch window
opens at 10:00 AM Eastern Time. Mission control is closely monitoring weather conditions.
The astronauts have completed their final training and are ready for the journey.
Discovery has a distinguished history of space exploration, having completed numerous
successful missions over the past two decades. This mission marks one of its final
flights before its retirement.
"""

print("\n--- BART Abstractive Summary ---")
print(summarize_with_bart(document))
```

This code loads a pre-trained BART model and its tokenizer. It then encodes the input text and uses the model's `generate` method to produce an abstractive summary. Parameters like `num_beams`, `max_length`, and `min_length` control the generation process.

## Choosing the Right Approach

*   **LexRank (Extractive):**
    *   **Pros:** Preserves original phrasing, ensures factual accuracy (as sentences are directly from the source), computationally less intensive.
    *   **Cons:** Can sometimes produce summaries that lack coherence or flow, might miss nuances that require rephrasing.
    *   **When to use:** When absolute factual fidelity to the original wording is paramount, or when dealing with documents where sentence structure is already clear and informative.

*   **Neural Models (Abstractive):**
    *   **Pros:** Can generate more fluent, human-like summaries, capable of paraphrasing and synthesizing information for better conciseness.
    *   **Cons:** Can sometimes "hallucinate" information not present in the original text, computationally more expensive, requires larger datasets for training.
    *   **When to use:** When a more readable and synthesized summary is desired, and slight deviations from original wording are acceptable.

By understanding these two approaches, you can effectively generate concise summaries for various applications.

## Supports

- [[skills/data/data-science/text-summarization/microskills/text-summary-generation|Text Summary Generation]]
