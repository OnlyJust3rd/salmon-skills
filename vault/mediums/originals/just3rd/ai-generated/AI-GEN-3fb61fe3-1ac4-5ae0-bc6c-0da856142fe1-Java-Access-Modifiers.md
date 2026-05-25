---
type: medium
title: Java Access Modifiers
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[java-access-modifiers|java-access-modifiers]]"
related-skills:
  - "[[skills/computing/programming/programming-languages/java-programming/java-programming|java-programming]]"
learning-time-in-minutes: 3
---
# Java Access Modifiers

In Java, controlling who can access what parts of your code is crucial for building robust and secure applications. This is where access modifiers come into play. They are keywords that define the visibility or scope of classes, methods, and variables. Think of them as security guards for your code, deciding who gets in and who doesn't.

## What are Access Modifiers?

Access modifiers in Java determine the accessibility of classes, constructors, methods, and variables. They are fundamental to achieving encapsulation, a core principle of Object-Oriented Programming (OOP).

Java provides four access modifiers:

*   `public`
*   `protected`
*   `private`
*   (default) - no keyword

Let's explore each of them.

## The Four Access Modifiers

### 1. `public`

*   **Accessibility:** Members declared as `public` are accessible from any other class, within the same package or in different packages.
*   **Purpose:** To allow maximum visibility and accessibility. This is often used for methods that form the public interface of a class, allowing other parts of your program to interact with it.

**Example:**

```java
// In a file named MyClass.java
package com.example.package1;

public class MyClass {
    public String publicMessage = "Hello from public!";

    public void displayMessage() {
        System.out.println(publicMessage);
    }
}
```

```java
// In a different file, e.g., AnotherClass.java, potentially in another package
package com.example.package2;

import com.example.package1.MyClass;

public class AnotherClass {
    public static void main(String[] args) {
        MyClass obj = new MyClass();
        System.out.println(obj.publicMessage); // Accessible
        obj.displayMessage();                 // Accessible
    }
}
```

### 2. `protected`

*   **Accessibility:** Members declared as `protected` are accessible within their own package and by subclasses (classes that inherit from them) in any package.
*   **Purpose:** To allow access within a package and to subclasses, enabling controlled inheritance.

**Example:**

```java
// In a file named Parent.java
package com.example.parent;

public class Parent {
    protected String protectedData = "This is protected.";

    protected void showProtectedData() {
        System.out.println(protectedData);
    }
}
```

```java
// In a file named Child.java, in the same package
package com.example.parent;

public class Child extends Parent {
    public void accessParent() {
        System.out.println(protectedData); // Accessible within the same package
        showProtectedData();              // Accessible within the same package
    }
}
```

```java
// In a file named OtherClass.java, in a different package
package com.example.other;

import com.example.parent.Parent;

public class OtherClass {
    public static void main(String[] args) {
        Parent p = new Parent();
        // System.out.println(p.protectedData); // ERROR: protected in Parent cannot be accessed from OtherClass
        // p.showProtectedData();             // ERROR: protected in Parent cannot be accessed from OtherClass
    }
}
```

### 3. `private`

*   **Accessibility:** Members declared as `private` are accessible only within their own class.
*   **Purpose:** To restrict access, enforcing encapsulation by hiding the internal state of an object. This is the most restrictive access modifier.

**Example:**

```java
// In a file named SecretKeeper.java
package com.example.security;

public class SecretKeeper {
    private String secretMessage = "Super secret!";

    // Public method to access private data (getter)
    public String getSecretMessage() {
        return secretMessage;
    }

    // Public method to modify private data (setter)
    public void setSecretMessage(String message) {
        // You can add validation here if needed
        this.secretMessage = message;
    }

    private void revealSecret() {
        System.out.println("This is a private method.");
    }
}
```

```java
// In a file named Accessor.java, in the same package
package com.example.security;

public class Accessor {
    public static void main(String[] args) {
        SecretKeeper keeper = new SecretKeeper();

        // System.out.println(keeper.secretMessage); // ERROR: secretMessage has private access in SecretKeeper
        // keeper.revealSecret();                 // ERROR: revealSecret() has private access in SecretKeeper

        System.out.println(keeper.getSecretMessage()); // Accessible via public getter
        keeper.setSecretMessage("New secret!");
        System.out.println(keeper.getSecretMessage());
    }
}
```

### 4. Default (Package-Private)

*   **Accessibility:** If no explicit access modifier is used, the member has default access. This means it's accessible only within its own package.
*   **Purpose:** To allow members to be accessed by other classes within the same package but not by classes in different packages, nor by subclasses in different packages.

**Example:**

```java
// In a file named PackageFriend.java
package com.example.friends;

class PackageFriend { // No keyword, so default access
    String friendlyData = "I'm friendly within my package.";

    void sayHello() {
        System.out.println("Hello from package-private method!");
    }
}
```

```java
// In a file named PackageMate.java, in the SAME package
package com.example.friends;

public class PackageMate {
    public static void main(String[] args) {
        PackageFriend friend = new PackageFriend();
        System.out.println(friend.friendlyData); // Accessible within the same package
        friend.sayHello();                      // Accessible within the same package
    }
}
```

```java
// In a file named Outsider.java, in a DIFFERENT package
package com.example.strangers;

// import com.example.friends.PackageFriend; // This import might work, but access won't.

public class Outsider {
    public static void main(String[] args) {
        // PackageFriend friend = new PackageFriend(); // ERROR: PackageFriend is not public in com.example.friends; cannot be accessed from outside package
        // System.out.println(friend.friendlyData);   // ERROR: friendlyData is package-private
        // friend.sayHello();                        // ERROR: sayHello() is package-private
    }
}
```

## Summary Table of Access Levels

| Modifier   | Class | Package | Subclass (same package) | Subclass (different package) | World |
| :--------- | :---: | :-----: | :-----------------------: | :--------------------------: | :---: |
| `public`   | Y     | Y       | Y                         | Y                            | Y     |
| `protected`| Y     | Y       | Y                         | Y (Inherited)                | N     |
| `default`  | Y     | Y       | Y                         | N                            | N     |
| `private`  | Y     | N       | N                         | N                            | N     |

*(Y = Accessible, N = Not Accessible)*

## Why Use Access Modifiers?

*   **Encapsulation:** They are the primary mechanism for hiding internal implementation details of a class. This prevents external code from directly manipulating an object's state in unexpected ways, leading to more stable and predictable software.
*   **Security:** `private` access protects sensitive data from unauthorized access.
*   **Maintainability:** By controlling what parts of a class are accessible, you make it easier to change the internal implementation without breaking other parts of your application. Other developers using your class only need to worry about the `public` interface.
*   **Flexibility:** Different levels of access allow you to design your classes and packages with appropriate boundaries.

Understanding and correctly applying access modifiers is a fundamental step towards writing well-structured, secure, and maintainable Java code.

## Supports

- [[java-access-modifiers|Java Access Modifiers]]
