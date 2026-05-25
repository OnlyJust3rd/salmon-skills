---
type: medium
title: "Activity Selection Problem: Greedy Approach in Java"
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[activity-selection-greedy-java-implementation|activity-selection-greedy-java-implementation]]"
learning-time-in-minutes: 3
---
# Activity Selection Problem: Greedy Approach in Java

This lesson focuses on implementing a greedy solution for the Activity Selection problem in Java. This is a classic example of applying greedy algorithms, and understanding its implementation will help you develop skills in solving similar scheduling and optimization challenges.

## The Activity Selection Problem

Imagine you have a set of activities, each with a start time and a finish time. Your goal is to select the maximum number of non-overlapping activities that can be performed by a single person or resource. Two activities are considered non-overlapping if the finish time of the first activity is less than or equal to the start time of the second activity.

**Example:**
Consider these activities:
*   Activity A: Start = 1, Finish = 4
*   Activity B: Start = 3, Finish = 5
*   Activity C: Start = 0, Finish = 6
*   Activity D: Start = 5, Finish = 7
*   Activity E: Start = 3, Finish = 9
*   Activity F: Start = 5, Finish = 9
*   Activity G: Start = 8, Finish = 10
*   Activity H: Start = 2, Finish = 14
*   Activity I: Start = 12, Finish = 16
*   Activity J: Start = 10, Finish = 12

If we pick Activity A (1-4), we can then pick Activity D (5-7), and then Activity G (8-10), and finally Activity I (12-16). This gives us 4 activities. Can we do better?

## The Greedy Strategy

The core idea of a greedy algorithm is to make the locally optimal choice at each step with the hope that this choice will lead to a globally optimal solution. For the Activity Selection problem, the proven greedy strategy is:

**Sort the activities by their finish times in ascending order. Then, iteratively select the next activity whose start time is greater than or equal to the finish time of the previously selected activity.**

Why does this work? By picking the activity that finishes earliest, we leave the maximum amount of time available for subsequent activities, thus maximizing our chances of fitting more activities in.

## Java Implementation

Let's translate this strategy into Java code.

### 1. Representing Activities

We'll need a way to store the start and finish times for each activity. A simple `Activity` class is suitable.

```java
class Activity {
    int start;
    int finish;
    String name; // Optional: for identification

    public Activity(int start, int finish, String name) {
        this.start = start;
        this.finish = finish;
        this.name = name;
    }

    @Override
    public String toString() {
        return "Activity{" +
               "name='" + name + '\'' +
               ", start=" + start +
               ", finish=" + finish +
               '}';
    }
}
```

### 2. Sorting Activities

The first step in our greedy approach is to sort the activities by their finish times. We can use Java's `Collections.sort` or `Arrays.sort` with a custom `Comparator`.

```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

// ... (Activity class definition above)

public class ActivitySelection {

    public static void selectActivities(List<Activity> activities) {
        // Sort activities based on finish times
        Collections.sort(activities, Comparator.comparingInt(a -> a.finish));

        // ... rest of the implementation
    }

    // ... main method for testing
}
```

### 3. Selecting Non-Overlapping Activities

After sorting, we iterate through the sorted activities. We select the first activity, and then for subsequent activities, we pick the first one that starts after the previously selected activity finishes.

```java
// ... (inside the selectActivities method)

        if (activities.isEmpty()) {
            System.out.println("No activities to select.");
            return;
        }

        // Select the first activity
        Activity lastSelected = activities.get(0);
        System.out.println("Selected: " + lastSelected);

        // Iterate through the rest of the activities
        for (int i = 1; i < activities.size(); i++) {
            Activity currentActivity = activities.get(i);

            // If the current activity's start time is greater than or equal to
            // the finish time of the last selected activity, then select it
            if (currentActivity.start >= lastSelected.finish) {
                lastSelected = currentActivity;
                System.out.println("Selected: " + lastSelected);
            }
        }
```

### 4. Putting It All Together (Complete Code)

Here's the complete Java code for the Activity Selection problem using the greedy approach.

```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

class Activity {
    int start;
    int finish;
    String name;

    public Activity(int start, int finish, String name) {
        this.start = start;
        this.finish = finish;
        this.name = name;
    }

    @Override
    public String toString() {
        return "Activity{" +
               "name='" + name + '\'' +
               ", start=" + start +
               ", finish=" + finish +
               '}';
    }
}

public class ActivitySelection {

    public static void selectActivities(List<Activity> activities) {
        if (activities == null || activities.isEmpty()) {
            System.out.println("No activities provided.");
            return;
        }

        // Step 1: Sort activities by their finish times
        Collections.sort(activities, Comparator.comparingInt(a -> a.finish));

        System.out.println("--- Selected Activities ---");

        // Step 2: Select the first activity
        Activity lastSelected = activities.get(0);
        System.out.println("Selected: " + lastSelected.name + " (Start: " + lastSelected.start + ", Finish: " + lastSelected.finish + ")");

        // Step 3: Iterate through the rest and pick compatible ones
        for (int i = 1; i < activities.size(); i++) {
            Activity currentActivity = activities.get(i);

            // If the current activity starts after or at the same time
            // the last selected activity finishes, select it.
            if (currentActivity.start >= lastSelected.finish) {
                lastSelected = currentActivity;
                System.out.println("Selected: " + lastSelected.name + " (Start: " + lastSelected.start + ", Finish: " + lastSelected.finish + ")");
            }
        }
        System.out.println("---------------------------");
    }

    public static void main(String[] args) {
        List<Activity> activities = new ArrayList<>();
        activities.add(new Activity(1, 4, "A"));
        activities.add(new Activity(3, 5, "B"));
        activities.add(new Activity(0, 6, "C"));
        activities.add(new Activity(5, 7, "D"));
        activities.add(new Activity(3, 9, "E"));
        activities.add(new Activity(5, 9, "F"));
        activities.add(new Activity(8, 10, "G"));
        activities.add(new Activity(2, 14, "H"));
        activities.add(new Activity(12, 16, "I"));
        activities.add(new Activity(10, 12, "J"));

        selectActivities(activities);
    }
}
```

### Output of the `main` method:

```
--- Selected Activities ---
Selected: A (Start: 1, Finish: 4)
Selected: D (Start: 5, Finish: 7)
Selected: G (Start: 8, Finish: 10)
Selected: I (Start: 12, Finish: 16)
---------------------------
```

As you can see, the greedy algorithm correctly selected the maximum number of non-overlapping activities (A, D, G, I).

## Time Complexity

The dominant factor in the time complexity is the sorting step.
*   Sorting `n` activities takes $$ O(n \log n) $$ time.
*   Iterating through the sorted activities to select them takes $$ O(n) $$ time.

Therefore, the overall time complexity of this greedy algorithm is $$ O(n \log n) $$.

## Key Takeaways

*   The Activity Selection problem is a prime example where a greedy approach yields an optimal solution.
*   The greedy choice is to always pick the activity that finishes earliest among the compatible ones.
*   Implementation involves sorting activities by finish time and then a single pass to select compatible activities.
*   The time complexity is dominated by the sorting step, making it efficient for large datasets.

## Supports

- [[activity-selection-greedy-java-implementation|Activity Selection Greedy Java Implementation]]
