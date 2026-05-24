---
type: "medium"
title: "Navigation Routes in Flutter"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/software-engineering/mobile-development/flutter/microskills/navigation-route|navigation-route]]"
learning-time-in-minutes: 3
---
# Navigation Routes in Flutter

Connecting screens seamlessly is a fundamental aspect of building interactive Flutter applications. This lesson focuses on how to implement **Navigation Routes** to move between different screens.

## Understanding Routes

In Flutter, navigation between screens is managed through a Navigator widget. When you navigate, you're essentially pushing a new route onto a stack or popping an existing one. A "route" represents a screen or a page that the user can navigate to.

Think of it like a stack of cards:

*   When you open a new screen, you place a new card on top of the stack.
*   When you go back, you remove the top card from the stack.

Flutter provides two main ways to define and manage these routes:

1.  **Named Routes:** Predefined routes that you can refer to by a string name. This is generally preferred for structured applications.
2.  **Anonymous Routes:** Routes created on-the-fly using a builder function. Useful for simpler, one-off navigations.

## Implementing Named Routes

Named routes offer a clean and organized way to manage your application's navigation flow. You define these routes in your `MaterialApp` widget.

### Defining Routes

You use the `routes` property of `MaterialApp` to declare your named routes. Each route is a `Map` where the key is the route name (a `String`) and the value is a `WidgetBuilder` (a function that returns a `Widget`).

```dart
import 'package:flutter/material.dart';
import 'package:your_app_name/screens/home_screen.dart';
import 'package:your_app_name/screens/details_screen.dart';
import 'package:your_app_name/screens/settings_screen.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Navigation Demo',
      initialRoute: '/', // The route that opens first
      routes: {
        '/': (context) => const HomeScreen(), // Home page
        '/details': (context) => const DetailsScreen(), // Details page
        '/settings': (context) => const SettingsScreen(), // Settings page
      },
    );
  }
}
```

In this example:

*   `'/'` is the default route, often representing your `HomeScreen`.
*   `'/details'` maps to your `DetailsScreen`.
*   `'/settings'` maps to your `SettingsScreen`.

### Navigating to Named Routes

To navigate to a named route, you use `Navigator.pushNamed()`.

```dart
// Inside a widget in HomeScreen, for example, a button's onPressed:
Navigator.pushNamed(context, '/details');
```

This tells the `Navigator` to find the route named `'/details'` and push its corresponding widget onto the navigation stack.

### Returning to Previous Screens

To go back to the previous screen, you use `Navigator.pop()`. This removes the current route from the stack.

```dart
// Inside a widget in DetailsScreen, for example, an IconButton in the AppBar:
Navigator.pop(context);
```

## Implementing Anonymous Routes (Less Common for Structure)

While named routes are generally preferred for their organization, you can also navigate to routes that are defined directly within the `Navigator.push()` call. This is often referred to as anonymous routing because you don't pre-define them in `MaterialApp`.

### Navigating to an Anonymous Route

You use `Navigator.push()` and provide a `MaterialPageRoute` builder.

```dart
// Inside a widget in HomeScreen:
Navigator.push(
  context,
  MaterialPageRoute(builder: (context) => const DetailsScreen()),
);
```

Here, `MaterialPageRoute` is a type of `PageRoute` that creates a route on the fly. The `builder` function creates the widget for the new screen.

### Passing Data During Navigation

Often, you need to pass data from one screen to another.

**Passing data to a named route:**

You can pass arguments using `Navigator.pushNamed()` and access them in the destination screen using `ModalRoute.of(context)!.settings.arguments`.

```dart
// Navigating from HomeScreen
Navigator.pushNamed(context, '/details', arguments: 'Data from Home');

// Receiving data in DetailsScreen
@override
Widget build(BuildContext context) {
  final String data = ModalRoute.of(context)!.settings.arguments as String;
  return Scaffold(
    appBar: AppBar(title: const Text('Details')),
    body: Center(child: Text('Received: $data')),
  );
}
```

**Passing data to an anonymous route:**

The `arguments` parameter works similarly with `Navigator.push()`.

```dart
// Navigating from HomeScreen
Navigator.push(
  context,
  MaterialPageRoute(
    builder: (context) => DetailsScreen(dataFromHome: 'Data from Home'),
  ),
);

// In DetailsScreen constructor:
class DetailsScreen extends StatelessWidget {
  final String dataFromHome;
  const DetailsScreen({super.key, required this.dataFromHome});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Details')),
      body: Center(child: Text('Received: $dataFromHome')),
    );
  }
}
```

## Key Takeaways

*   **Named routes** are ideal for structuring your application's navigation.
*   Use `Navigator.pushNamed()` to navigate to a pre-defined route.
*   Use `Navigator.pop()` to go back to the previous screen.
*   Pass data between screens using the `arguments` parameter and `ModalRoute.of(context)!.settings.arguments`.

## Supports

- [[skills/computing/software-engineering/mobile-development/flutter/microskills/navigation-route|Navigation Route]]
