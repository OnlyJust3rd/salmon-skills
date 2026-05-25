---
type: medium
title: Genetic Algorithm Implementation in Java
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[genetic-algorithm-implementation|genetic-algorithm-implementation]]"
learning-time-in-minutes: 3
---
# Genetic Algorithm Implementation in Java

This lesson focuses on **applying genetic algorithms (GAs)** to solve optimization problems by implementing them in Java. We will go through the core components of a GA and how to translate them into Java code.

## Core Concepts of Genetic Algorithms

Genetic algorithms are inspired by natural selection and evolution. They are powerful optimization techniques used to find approximate solutions to complex problems. The fundamental idea is to maintain a population of potential solutions and iteratively improve them through processes like selection, crossover, and mutation.

### Key Components:

1.  **Chromosome/Individual:** Represents a single candidate solution to the problem. In Java, this can often be modeled as an object containing the parameters that define a solution.
2.  **Population:** A collection of chromosomes.
3.  **Fitness Function:** Evaluates how good a particular chromosome is as a solution. A higher fitness value indicates a better solution. This function is crucial and problem-specific.
4.  **Selection:** The process of choosing parents from the current population based on their fitness. Fitter individuals have a higher chance of being selected.
5.  **Crossover (Recombination):** Combines genetic material from two parent chromosomes to create one or more offspring. This introduces new combinations of traits.
6.  **Mutation:** Randomly alters some genes in a chromosome. This prevents premature convergence and explores new areas of the solution space.
7.  **Generation:** One complete cycle of selection, crossover, and mutation, resulting in a new population.

## Implementing a Genetic Algorithm in Java

Let's outline a basic structure for a Java GA implementation. We'll consider a simple optimization problem, like finding the maximum of a mathematical function within a given range, as our example.

### 1. Representing the Chromosome

For our example, let's say we want to find the maximum of the function `f(x) = -x^2 + 10x` for `x` between 0 and 10. A chromosome can simply represent the value of `x`. We can use a `double` to store this value.

```java
class Chromosome {
    private double value; // Represents 'x' in our example

    public Chromosome(double value) {
        this.value = value;
    }

    public double getValue() {
        return value;
    }

    public void setValue(double value) {
        this.value = value;
    }

    // Method to represent the chromosome as a string for debugging
    @Override
    public String toString() {
        return "Chromosome{value=" + value + '}';
    }
}
```

### 2. Defining the Population

A `Population` class will hold a collection of `Chromosome` objects.

```java
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

class Population {
    private List<Chromosome> chromosomes;
    private int populationSize;

    public Population(int populationSize) {
        this.populationSize = populationSize;
        this.chromosomes = new ArrayList<>(populationSize);
    }

    public void addChromosome(Chromosome chromosome) {
        if (chromosomes.size() < populationSize) {
            chromosomes.add(chromosome);
        }
    }

    public List<Chromosome> getChromosomes() {
        return chromosomes;
    }

    public int getSize() {
        return populationSize;
    }

    // Initialize population with random chromosomes within a valid range
    public void initialize(double minVal, double maxVal) {
        Random random = new Random();
        chromosomes.clear();
        for (int i = 0; i < populationSize; i++) {
            double randomValue = minVal + (maxVal - minVal) * random.nextDouble();
            chromosomes.add(new Chromosome(randomValue));
        }
    }
}
```

### 3. The Fitness Function

This is where the problem-specific logic resides. For `f(x) = -x^2 + 10x`, the fitness is simply the function's value.

```java
class FitnessCalculator {
    // For f(x) = -x^2 + 10x, maximizing this function
    public double calculateFitness(Chromosome chromosome) {
        double x = chromosome.getValue();
        // Ensure x is within bounds if not handled elsewhere
        if (x < 0) x = 0;
        if (x > 10) x = 10;
        return -x * x + 10 * x;
    }
}
```

### 4. Selection

We'll implement a simple **tournament selection** where a few individuals are randomly chosen, and the fittest among them is selected.

```java
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

class Selection {
    private Random random = new Random();
    private FitnessCalculator fitnessCalculator;
    private int tournamentSize;

    public Selection(FitnessCalculator fitnessCalculator, int tournamentSize) {
        this.fitnessCalculator = fitnessCalculator;
        this.tournamentSize = tournamentSize;
    }

    public Chromosome selectParent(Population population) {
        List<Chromosome> potentialParents = new ArrayList<>();
        List<Chromosome> currentPopulation = population.getChromosomes();

        for (int i = 0; i < tournamentSize; i++) {
            int randomIndex = random.nextInt(currentPopulation.size());
            potentialParents.add(currentPopulation.get(randomIndex));
        }

        // Sort potential parents by fitness in descending order
        potentialParents.sort((c1, c2) -> Double.compare(
            fitnessCalculator.calculateFitness(c2), // Descending for max
            fitnessCalculator.calculateFitness(c1)
        ));

        return potentialParents.get(0); // The fittest in the tournament
    }
}
```

### 5. Crossover

**Single-point crossover** is a common method. We pick a crossover point and swap genetic material after that point. For our simple `double` representation, we can average the values.

```java
class Crossover {
    private Random random = new Random();
    private double crossoverRate;

    public Crossover(double crossoverRate) {
        this.crossoverRate = crossoverRate;
    }

    public Chromosome crossover(Chromosome parent1, Chromosome parent2) {
        if (random.nextDouble() < crossoverRate) {
            // Simple averaging crossover for numerical representation
            double offspringValue = (parent1.getValue() + parent2.getValue()) / 2.0;
            // Ensure offspring stays within bounds
            return new Chromosome(Math.max(0, Math.min(10, offspringValue)));
        } else {
            // If no crossover, return a copy of one of the parents (e.g., parent1)
            return new Chromosome(parent1.getValue());
        }
    }
}
```

### 6. Mutation

We can add a small random perturbation to a gene with a certain probability.

```java
class Mutation {
    private Random random = new Random();
    private double mutationRate;
    private double mutationStrength; // How much to change the gene
    private double minVal;
    private double maxVal;

    public Mutation(double mutationRate, double mutationStrength, double minVal, double maxVal) {
        this.mutationRate = mutationRate;
        this.mutationStrength = mutationStrength;
        this.minVal = minVal;
        this.maxVal = maxVal;
    }

    public void mutate(Chromosome chromosome) {
        if (random.nextDouble() < mutationRate) {
            double change = (random.nextDouble() * 2 - 1) * mutationStrength; // +/- mutationStrength
            double newValue = chromosome.getValue() + change;

            // Clamp the value to stay within the defined bounds
            newValue = Math.max(minVal, Math.min(maxVal, newValue));
            chromosome.setValue(newValue);
        }
    }
}
```

### 7. The Genetic Algorithm Runner

This class orchestrates the entire process.

```java
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Random;

class GeneticAlgorithm {
    private int populationSize;
    private double crossoverRate;
    private double mutationRate;
    private double mutationStrength;
    private int maxGenerations;
    private double minDomainValue;
    private double maxDomainValue;

    private Population currentPopulation;
    private FitnessCalculator fitnessCalculator;
    private Selection selection;
    private Crossover crossover;
    private Mutation mutation;

    public GeneticAlgorithm(int populationSize, double crossoverRate, double mutationRate,
                            double mutationStrength, int maxGenerations, double minDomainValue, double maxDomainValue) {
        this.populationSize = populationSize;
        this.crossoverRate = crossoverRate;
        this.mutationRate = mutationRate;
        this.mutationStrength = mutationStrength;
        this.maxGenerations = maxGenerations;
        this.minDomainValue = minDomainValue;
        this.maxDomainValue = maxDomainValue;

        this.fitnessCalculator = new FitnessCalculator();
        this.selection = new Selection(fitnessCalculator, 3); // Tournament size of 3
        this.crossover = new Crossover(crossoverRate);
        this.mutation = new Mutation(mutationRate, mutationStrength, minDomainValue, maxDomainValue);
        this.currentPopulation = new Population(populationSize);
    }

    public void run() {
        currentPopulation.initialize(minDomainValue, maxDomainValue);
        System.out.println("--- Initial Population ---");
        printPopulationInfo(currentPopulation, 0);

        for (int generation = 1; generation <= maxGenerations; generation++) {
            Population nextPopulation = new Population(populationSize);

            // Elitism: Carry over the best individual from the previous generation
            Chromosome bestOfCurrent = getFittestChromosome(currentPopulation);
            nextPopulation.addChromosome(bestOfCurrent);

            while (nextPopulation.getChromosomes().size() < populationSize) {
                Chromosome parent1 = selection.selectParent(currentPopulation);
                Chromosome parent2 = selection.selectParent(currentPopulation);

                Chromosome offspring = crossover.crossover(parent1, parent2);
                mutation.mutate(offspring);
                nextPopulation.addChromosome(offspring);
            }

            currentPopulation = nextPopulation;
            printPopulationInfo(currentPopulation, generation);
        }

        System.out.println("\n--- Genetic Algorithm Finished ---");
        Chromosome bestSolution = getFittestChromosome(currentPopulation);
        System.out.println("Best Solution Found: " + bestSolution + " with Fitness: " + fitnessCalculator.calculateFitness(bestSolution));
    }

    private Chromosome getFittestChromosome(Population population) {
        return Collections.max(population.getChromosomes(), Comparator.comparingDouble(fitnessCalculator::calculateFitness));
    }

    private void printPopulationInfo(Population population, int generation) {
        Chromosome fittest = getFittestChromosome(population);
        double averageFitness = population.getChromosomes().stream()
                .mapToDouble(fitnessCalculator::calculateFitness)
                .average()
                .orElse(0.0);
        System.out.printf("Generation %d: Best Fitness = %.4f, Average Fitness = %.4f%n",
                generation, fitnessCalculator.calculateFitness(fittest), averageFitness);
    }

    public static void main(String[] args) {
        // Example usage:
        // Problem: Maximize f(x) = -x^2 + 10x for x in [0, 10]
        int populationSize = 50;
        double crossoverRate = 0.8;
        double mutationRate = 0.02;
        double mutationStrength = 0.5; // Max possible change to 'x'
        int maxGenerations = 100;
        double minDomainValue = 0.0;
        double maxDomainValue = 10.0;

        GeneticAlgorithm ga = new GeneticAlgorithm(
            populationSize, crossoverRate, mutationRate,
            mutationStrength, maxGenerations, minDomainValue, maxDomainValue
        );
        ga.run();
    }
}
```

### Running the Code

To run this, save each class into its own `.java` file (e.g., `Chromosome.java`, `Population.java`, etc.) or combine them into a single file for simplicity in this example (ensuring the `main` method is in the `GeneticAlgorithm` class). Compile and run the `GeneticAlgorithm` class.

The output will show the progression of the population over generations, with the best and average fitness values increasing over time.

## Considerations and Next Steps

*   **Problem Representation:** The `Chromosome` class is highly dependent on the problem. For more complex problems, it might involve arrays, bit strings, or custom objects.
*   **Fitness Function Design:** This is critical. A poorly designed fitness function will lead to poor optimization results.
*   **Parameter Tuning:** `populationSize`, `crossoverRate`, `mutationRate`, and `mutationStrength` significantly impact performance. Experiment with these values.
*   **Selection Methods:** Other methods like Roulette Wheel selection or Rank selection can be explored.
*   **Crossover Methods:** One-point, two-point, uniform crossover are common for different representations.
*   **Elitism:** In the `run` method, we've added a basic form of elitism to ensure the best solution found so far is not lost.

By implementing these components, you can apply genetic algorithms to various optimization problems in Java.

## Supports

- [[genetic-algorithm-implementation|Genetic Algorithm Implementation]]
