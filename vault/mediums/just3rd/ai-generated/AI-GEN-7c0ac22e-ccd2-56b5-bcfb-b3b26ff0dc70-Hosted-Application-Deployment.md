---
type: "medium"
title: "Deploying Your Firebase Application with Firebase Hosting"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/cloud-devops/platform-engineering/firebase/microskills/hosted-application-deployment|Hosted Application Deployment]]"
---
# Deploying Your Firebase Application with Firebase Hosting

This lesson focuses on **Hosted Application Deployment**, a key part of applying Firebase Authentication, Database, and Hosting concepts. We'll explore how Firebase Hosting simplifies deploying your web applications.

## What is Firebase Hosting?

Firebase Hosting provides a global CDN (Content Delivery Network) to host your static web content, such as HTML, CSS, JavaScript, and images. It's designed for speed, security, and ease of use, allowing you to deploy your front-end applications quickly and reliably.

Think of it as a managed service that takes your application's build files and makes them accessible to users worldwide through a fast and secure network.

## Why Use Firebase Hosting for Deployment?

When you're building an application that uses Firebase Authentication and a Firebase Database, you'll often need a place to host your front-end code. Firebase Hosting integrates seamlessly with other Firebase services, offering several advantages:

*   **Speed:** Content is delivered from servers geographically close to your users via a global CDN.
*   **Security:** All content is served over SSL/TLS (HTTPS) by default, encrypting data in transit.
*   **Ease of Deployment:** Deploying updates is as simple as running a single command.
*   **Custom Domains:** You can easily connect your own domain name to your hosted application.
*   **Version Rollbacks:** Quickly revert to previous versions of your deployed site if something goes wrong.

## The Deployment Process: A Practical Walkthrough

To deploy your application using Firebase Hosting, you'll need the Firebase CLI (Command Line Interface) installed.

### Prerequisites:

1.  **Node.js and npm:** Ensure you have Node.js and npm (or Yarn) installed on your machine.
2.  **Firebase CLI:** Install the Firebase CLI globally:
    ```bash
    npm install -g firebase-tools
    ```
3.  **Firebase Project:** You need an existing Firebase project set up in the Firebase console.
4.  **Application Build:** Your front-end application should be built into static files (HTML, CSS, JS, etc.). This typically involves running a build command for your framework (e.g., `npm run build` for React, Vue, Angular).

### Steps for Deployment:

#### 1. Initialize Firebase in Your Project

Navigate to your project's root directory in your terminal and initialize Firebase:

```bash
firebase init
```

This command will guide you through a setup process.

*   **Select Features:** Choose `Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys`.
*   **Project Setup:** Select the Firebase project you want to associate with this application.
*   **Public Directory:** This is crucial. It's the directory where your build output is located. For many frameworks, this is `public` or `dist`. If you're unsure, check your framework's build configuration.
*   **Single-Page Application (SPA) Rewrites:** Answer `Y` if your application is an SPA (like React, Vue, Angular) and you want all routes to be handled by your `index.html`. This ensures deep linking and client-side routing works correctly.
*   **Overwrite `index.html`:** If a `public/index.html` file already exists from Firebase's default setup, it will ask if you want to overwrite it. Typically, you'll want to say `N` if your framework's build already generates its own `index.html` in the public directory.

After this, Firebase will create a `firebase.json` configuration file and a `.firebaserc` file in your project's root.

#### 2. Build Your Application

Before deploying, you need to generate the static assets of your application. Run your project's build command:

```bash
npm run build
# or
yarn build
```

This command will create a `dist` or `public` folder (depending on your project setup) containing all the files that need to be hosted.

#### 3. Deploy to Firebase Hosting

With Firebase initialized and your application built, you can now deploy:

```bash
firebase deploy
```

The Firebase CLI will upload your build files to Firebase Hosting. Once complete, it will provide you with a hosting URL, usually something like:

`https://your-project-id.web.app` or `https://your-project-id.firebaseapp.com`

You can also deploy specific targets if you have multiple hosting configurations.

#### 4. Connecting a Custom Domain (Optional but Recommended)

To use your own domain (e.g., `www.yourdomain.com`), go to the Firebase console > Hosting. Click "Add custom domain" and follow the instructions to verify your domain and set up DNS records.

## Reasoning About Deployment

Understanding Firebase Hosting involves considering how it manages your application's deployment lifecycle.

*   **What to Deploy:** You deploy the *output* of your build process – the static files. This means your front-end code, compiled assets, and any other static resources.
*   **Where to Deploy:** Firebase Hosting handles the distribution. You don't manage servers; Firebase does.
*   **When to Deploy:** You decide when to deploy. Typically, after a successful build and thorough testing, you'll run `firebase deploy` to push the latest version.
*   **Handling Updates:** When you deploy again, Firebase Hosting automatically updates the content on its CDN. This is a stateless deployment; each deployment replaces the previous one.

### Common Deployment Pitfalls

*   **Incorrect Public Directory:** Not specifying the correct `public` directory in `firebase.json` is a common mistake. Ensure it points to where your `index.html` and other assets reside after building.
*   **Missing Build Step:** Forgetting to run `npm run build` before `firebase deploy` means you're deploying your source code, not the optimized, deployable version.
*   **SPA Routing Issues:** If your app is an SPA and you didn't configure rewrites for `index.html` during `firebase init`, users might see 404 errors when trying to access deep links (e.g., `/about` or `/users/123`).
*   **Cache Invalidation:** While Firebase Hosting handles much of this, occasionally, very aggressive browser caching can cause issues. Using versioned asset names (e.g., `app.abcdef12.js`) in your build process helps mitigate this.

By leveraging Firebase Hosting, you can focus more on building your application's features and less on the complexities of server management and deployment infrastructure.

## Supports

- [[skills/cloud-devops/platform-engineering/firebase/microskills/hosted-application-deployment|Hosted Application Deployment]]
