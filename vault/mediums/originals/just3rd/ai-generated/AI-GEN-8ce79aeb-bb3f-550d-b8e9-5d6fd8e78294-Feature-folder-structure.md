---
type: "medium"
title: "Feature Folder Structure in React"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/software-engineering/frontend-development/react/microskills/feature-folder-structure|feature-folder-structure]]"
learning-time-in-minutes: 3
---
# Feature Folder Structure in React

When building React applications, especially those that grow in complexity, how you organize your code matters. For this learning module, we're focusing on implementing feature components, and a key part of that is establishing a sensible **feature folder structure**. This structure helps you group related components, hooks, and other assets for a specific user-facing feature.

## Why a Feature Folder Structure?

Imagine building an e-commerce site. You'll have features like "Product Listing," "Shopping Cart," "User Profile," and "Checkout." Without a good structure, your `components` folder could quickly become a chaotic mess of unrelated files.

A feature folder structure offers several benefits:

*   **Modularity:** Code related to a single feature is kept together, making it easier to understand, maintain, and even move or delete the entire feature if needed.
*   **Discoverability:** When you need to work on a specific feature, you know exactly where to find its associated code.
*   **Scalability:** As your application grows, this organization helps prevent the codebase from becoming unmanageable.
*   **Team Collaboration:** It provides a clear convention for how the team should organize new features, reducing confusion.

## The Core Idea: Grouping by Feature

The fundamental principle is to create a top-level folder (often named `features` or `modules`) and then create subfolders within it for each distinct user-facing feature. Inside each feature folder, you'll then organize the components, hooks, and other utilities that belong *specifically* to that feature.

### Common Structure Inside a Feature Folder

Within a feature's dedicated folder, you'll typically find:

*   **`components/`**: Contains presentational and container components specific to this feature.
*   **`hooks/`**: Houses custom React Hooks used exclusively by this feature.
*   **`utils/`**: Any helper functions or utilities needed by this feature.
*   **`types.ts`**: TypeScript type definitions relevant to this feature (if using TypeScript).
*   **`index.ts`**: An entry point file to export components and hooks, making imports cleaner.

## Example: Implementing a "User Profile" Feature

Let's walk through an example of structuring the "User Profile" feature.

### Directory Structure

```
src/
├── components/       // Global or shared components
│   └── Button.tsx
├── hooks/            // Global or shared hooks
│   └── useFetch.ts
├── features/         // Top-level folder for all features
│   └── UserProfile/  // Folder for the User Profile feature
│       ├── components/
│       │   ├── ProfileHeader.tsx
│       │   ├── ProfileDetails.tsx
│       │   └── EditProfileForm.tsx
│       ├── hooks/
│       │   └── useUserProfile.ts
│       ├── utils/
│       │   └── formatUserData.ts
│       ├── types.ts
│       └── index.ts
└── App.tsx
```

### Explanation of Files

*   **`features/UserProfile/components/ProfileHeader.tsx`**: A component displaying the user's name and avatar.
*   **`features/UserProfile/components/ProfileDetails.tsx`**: Displays detailed user information like email, join date, etc.
*   **`features/UserProfile/components/EditProfileForm.tsx`**: The form used for editing profile information.
*   **`features/UserProfile/hooks/useUserProfile.ts`**: A custom hook that might fetch user data, manage editing state, or handle form submissions for the profile.
*   **`features/UserProfile/utils/formatUserData.ts`**: A utility function to format how user data is displayed (e.g., date formatting).
*   **`features/UserProfile/types.ts`**: Defines interfaces for `UserProfile` data, form states, etc.

    ```typescript
    // features/UserProfile/types.ts
    export interface UserProfileData {
      id: string;
      name: string;
      email: string;
      joinedDate: string; // Or Date object
      avatarUrl?: string;
    }

    export interface EditProfileFormState {
      name: string;
      email: string;
    }
    ```
*   **`features/UserProfile/index.ts`**: This file acts as an export hub for the feature.

    ```typescript
    // features/UserProfile/index.ts
    export { default as UserProfile } from './components/ProfileHeader'; // Assuming ProfileHeader is the main entry point for rendering the profile view
    export { useUserProfile } from './hooks/useUserProfile';
    export type { UserProfileData, EditProfileFormState } from './types';
    ```

Now, in your `App.tsx` or another parent component, you can import and use the User Profile feature like this:

```typescript
// App.tsx
import React from 'react';
import { UserProfile, useUserProfile, UserProfileData } from './features/UserProfile'; // Importing from the index.ts

function App() {
  // Example of using the hook and component
  const { userData, loading, error } = useUserProfile('user-123'); // Fetch data for a specific user

  if (loading) {
    return <div>Loading profile...</div>;
  }

  if (error) {
    return <div>Error loading profile: {error.message}</div>;
  }

  return (
    <div>
      <h1>My Application</h1>
      {userData && <UserProfile user={userData} />}
      {/* Other parts of your app */}
    </div>
  );
}

export default App;
```

## When Not to Over-Engineer

While a feature folder structure is beneficial, avoid creating a new folder for every single tiny component. If a component is truly generic and used across multiple features (e.g., a primary `Button` or `Input`), it should live in a shared `components` directory at the `src/` level. Similarly, hooks that are broadly applicable should reside in a shared `hooks` directory. The key is to differentiate between feature-specific code and application-wide utilities.

By adopting a clear feature folder structure, you're applying a fundamental principle of good software design that will pay dividends as your React applications evolve.

## Supports

- [[skills/computing/software-engineering/frontend-development/react/microskills/feature-folder-structure|Feature folder structure]]
