---
type: "medium"
title: "Typed Props and Events in React with TypeScript"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/software-engineering/frontend-development/react/microskills/typed-props-and-events|typed-props-and-events]]"
learning-time-in-minutes: 3
---
# Typed Props and Events in React with TypeScript

This lesson focuses on applying TypeScript to the boundaries of your React components, specifically for props and event handling. This ensures that data passed into and out of your components is predictable and type-safe, leading to more robust and maintainable React applications.

## Why Type Props and Events?

When building React features, components communicate with each other by passing data down as props and receiving events or callbacks from children. Without explicit types, you risk:

*   Passing incorrect data types to components, leading to runtime errors.
*   Misunderstanding what data a component expects or what events it can emit.
*   Difficulty in refactoring and maintaining your codebase as it grows.

TypeScript solves these problems by allowing you to define the shape of your props and the signatures of your event handlers, catching potential issues during development rather than at runtime.

## Typing Component Props

The most common way to define props in React with TypeScript is by using interfaces or type aliases.

### Using Interfaces

Interfaces are a powerful way to define the structure of objects.

**Example: A User Profile Card**

Let's create a `UserProfileCard` component that displays a user's name and age.

```typescript
// src/components/UserProfileCard.tsx

import React from 'react';

// Define the shape of the props using an interface
interface UserProfileCardProps {
  name: string;
  age: number;
  isActive?: boolean; // Optional prop
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({ name, age, isActive }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      {isActive !== undefined && <p>Status: {isActive ? 'Active' : 'Inactive'}</p>}
    </div>
  );
};

export default UserProfileCard;
```

**Explanation:**

*   `interface UserProfileCardProps { ... }`: We define an interface named `UserProfileCardProps` that outlines the expected properties.
*   `name: string;`: The `name` prop must be a string.
*   `age: number;`: The `age` prop must be a number.
*   `isActive?: boolean;`: The `?` makes `isActive` an optional prop. If it's not provided, it will be `undefined`.
*   `React.FC<UserProfileCardProps>`: This tells React that our functional component `UserProfileCard` will receive props that conform to the `UserProfileCardProps` interface.

**Usage:**

```typescript
// src/App.tsx

import React from 'react';
import UserProfileCard from './components/UserProfileCard';

function App() {
  return (
    <div>
      <UserProfileCard name="Alice" age={30} isActive={true} />
      <UserProfileCard name="Bob" age={25} /> {/* isActive is optional */}
      {/* This would cause a TypeScript error:
          <UserProfileCard name="Charlie" age="twenty" />
          <UserProfileCard name="David" />
      */}
    </div>
  );
}

export default App;
```

If you try to pass a string for `age` or forget to pass `name`, TypeScript will flag it as an error before you even run your application.

### Using Type Aliases

Type aliases can also be used for defining prop shapes, especially when you have more complex types or want to combine types.

```typescript
// src/components/ProductCard.tsx

import React from 'react';

// Define a type for product data
type Product = {
  id: string;
  name: string;
  price: number;
  inStock: boolean;
};

// Define the shape of the props using a type alias
type ProductCardProps = {
  product: Product;
  onAddToCart: (productId: string) => void; // Callback function prop
};

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div style={{ border: '1px solid #eee', padding: '15px', margin: '10px' }}>
      <h3>{product.name}</h3>
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>Availability: {product.inStock ? 'In Stock' : 'Out of Stock'}</p>
      <button onClick={() => onAddToCart(product.id)} disabled={!product.inStock}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
```

**Explanation:**

*   `type Product = { ... }`: We first define a `Product` type to represent the structure of a single product object.
*   `type ProductCardProps = { ... }`: This type alias defines the props for `ProductCard`.
*   `product: Product;`: It expects an object that matches the `Product` type.
*   `onAddToCart: (productId: string) => void;`: This defines a prop named `onAddToCart`. It's a function that takes one argument, `productId` (a string), and returns nothing (`void`).

## Typing Event Handlers and Callbacks

When components need to communicate back up to their parents (e.g., button clicks, form input changes), they use callback functions passed as props. Typing these callbacks is crucial.

The `onAddToCart` prop in the `ProductCard` example demonstrates this. The type `(productId: string) => void` clearly states:
*   It's a function.
*   It accepts a single argument named `productId` which must be a `string`.
*   It doesn't return any meaningful value (`void`).

**Using Standard Event Types:**

For common DOM events, React provides specific types that extend standard browser event types. You can use these for props that handle events directly.

```typescript
// src/components/SearchInput.tsx

import React from 'react';

interface SearchInputProps {
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder, onChange }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      style={{ padding: '8px', margin: '10px' }}
    />
  );
};

export default SearchInput;
```

**Explanation:**

*   `onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;`: This prop expects a function that receives a `React.ChangeEvent`. The generic `HTMLInputElement` specifies that this event is associated with an HTML input element. This gives you type safety for `event.target.value`, `event.target.name`, etc.

**Usage:**

```typescript
// src/App.tsx

import React, { useState } from 'react';
import SearchInput from './components/SearchInput';
import ProductCard from './components/ProductCard';

// Sample product data
const sampleProducts = [
  { id: 'p1', name: 'Laptop', price: 1200, inStock: true },
  { id: 'p2', name: 'Keyboard', price: 75, inStock: false },
  { id: 'p3', name: 'Mouse', price: 25, inStock: true },
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState<string[]>([]); // Array of product IDs

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleAddToCart = (productId: string) => {
    setCartItems(prevItems => [...prevItems, productId]);
    console.log(`Added ${productId} to cart.`);
  };

  const filteredProducts = sampleProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchInput placeholder="Search products..." onChange={handleSearchChange} />

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart} // Correctly typed callback
          />
        ))}
      </div>
      <p>Cart ({cartItems.length})</p>
    </div>
  );
}

export default App;
```

In this `App` component:
*   `handleSearchChange` correctly matches the `(event: React.ChangeEvent<HTMLInputElement>) => void` signature.
*   `handleAddToCart` correctly matches the `(productId: string) => void` signature.

## Best Practices

*   **Be Explicit:** Define interfaces or type aliases for all significant prop shapes.
*   **Use `React.FC`:** For functional components, `React.FC<PropsType>` provides good type inference.
*   **Optional Props:** Use the `?` modifier for props that might not always be present.
*   **Callback Signatures:** Clearly define the arguments and return types for all callback props.
*   **Avoid `any`:** Resist the urge to use `any` for props or event handlers. This defeats the purpose of TypeScript.

By diligently typing your component boundaries, you create a self-documenting and resilient React application. This practice is fundamental to building scalable and maintainable features.

## Supports

- [[skills/computing/software-engineering/frontend-development/react/microskills/typed-props-and-events|Typed props and events]]
