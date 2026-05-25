---
type: medium
title: Developing Functional Models for Interactive Systems
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[functional-model-development|functional-model-development]]"
learning-time-in-minutes: 5
---
# Developing Functional Models for Interactive Systems

When prototyping interactive systems, we need to move beyond static designs and create something that *behaves* like the final product. This is where developing functional models comes in. A functional model, or working model/simulation, brings your design concepts to life, allowing you to test their interactivity and identify potential issues before significant development effort is invested. This micro-skill is about applying your understanding of interactive system design to create these dynamic representations.

## What is a Functional Model?

A functional model is a simplified, executable version of an interactive system or a part of it. It focuses on demonstrating the core behaviors, interactions, and workflows, rather than the final visual polish or complete feature set. Think of it as a living blueprint.

**Key Characteristics:**

*   **Interactive:** Users can engage with it, triggering responses.
*   **Behavioral:** It simulates how the system will react to user input or other events.
*   **Iterative:** It's a tool for testing and refining design choices.
*   **Simplified:** It omits non-essential details to focus on the core functionality.

## Why Create Functional Models?

Functional models are crucial for the "Apply" level of Bloom's Taxonomy when prototyping. They allow you to:

*   **Validate Design Decisions:** See if your intended interactions actually work as expected.
*   **Identify Usability Issues Early:** Uncover confusing workflows or unexpected behaviors before they become costly to fix.
*   **Communicate Concepts Effectively:** Demonstrate the intended user experience to stakeholders more convincingly than static mockups.
*   **Test Performance (Basic):** Get a feel for how quickly certain operations might respond.
*   **Refine Requirements:** The act of building a model often reveals ambiguities or omissions in the initial requirements.

## Types of Functional Models

The approach to building a functional model depends on the complexity of the system and the specific aspects you want to prototype.

### 1. Low-Fidelity Prototypes (Interactive Wireframes)

These are often created using specialized prototyping tools that allow you to link screens or elements to simulate navigation and basic user flows.

*   **Tools:** Figma, Adobe XD, Sketch (with prototyping features), InVision.
*   **Focus:** Navigation, basic user journeys, information architecture.
*   **Example:** Linking buttons on a signup screen to a confirmation screen.

### 2. Medium-Fidelity Prototypes (Simulations with Basic Logic)

These involve more complex interactions and can sometimes be built using visual scripting or simple code.

*   **Tools:** JavaScript with HTML/CSS, tools like ProtoPie, Axure RP.
*   **Focus:** Specific interactive components (e.g., a drag-and-drop interface, a complex form validation), state changes.
*   **Example:** A calculator prototype where pressing number buttons updates the display and the "equals" button performs the calculation.

### 3. High-Fidelity Prototypes (Near-Functional Simulations)

These closely resemble the final product in terms of appearance and can simulate complex logic and integrations. They often involve actual code.

*   **Tools:** Front-end frameworks (React, Vue, Angular) with mock data, game engines for interactive experiences.
*   **Focus:** Realism, detailed interactions, data manipulation (even if simulated).
*   **Example:** A travel booking interface where selecting dates updates available flights, and adding to a cart simulates price changes.

## Developing a Functional Model: A Step-by-Step Approach

Let's consider prototyping a simple online ordering system for a coffee shop. We want to prototype the flow of selecting a drink, customizing it, and adding it to a cart.

**Step 1: Define the Scope and Key Interactions**

What is the most critical part of the interaction we want to model?
*   Selecting a drink from a menu.
*   Choosing size, milk type, and additions (e.g., extra shot, syrup).
*   Adding the customized drink to a virtual cart.
*   Viewing the cart summary.

**Step 2: Choose Your Tool and Approach**

For this example, let's aim for a medium-fidelity prototype using simple HTML, CSS, and JavaScript. This allows us to demonstrate dynamic behavior.

**Step 3: Structure Your Interface (HTML)**

We'll need elements for the menu, customization options, and the cart.

```html
<div class="menu">
  <h2>Our Drinks</h2>
  <div class="drink-item" data-id="latte">Latte</div>
  <div class="drink-item" data-id="cappuccino">Cappuccino</div>
  <div class="drink-item" data-id="espresso">Espresso</div>
</div>

<div class="customizer" style="display: none;">
  <h3>Customize Your Drink</h3>
  <p id="current-drink-name"></p>
  <div>
    <label for="size">Size:</label>
    <select id="size">
      <option value="small">Small</option>
      <option value="medium">Medium</option>
      <option value="large">Large</option>
    </select>
  </div>
  <div>
    <label for="milk">Milk:</label>
    <select id="milk">
      <option value="whole">Whole Milk</option>
      <option value="skim">Skim Milk</option>
      <option value="almond">Almond Milk</option>
    </select>
  </div>
  <button id="add-to-cart">Add to Cart</button>
</div>

<div class="cart">
  <h2>Your Cart</h2>
  <ul id="cart-items">
    <!-- Cart items will be added here -->
  </ul>
  <p>Total: $<span id="cart-total">0.00</span></p>
</div>
```

**Step 4: Style It (CSS - Simplified)**

Basic styling to make it presentable.

```css
.menu { border: 1px solid #ccc; padding: 10px; margin-bottom: 10px; }
.drink-item { cursor: pointer; padding: 5px; margin-bottom: 5px; background-color: #f0f0f0; }
.drink-item:hover { background-color: #e0e0e0; }
.customizer { border: 1px solid #ccc; padding: 10px; margin-bottom: 10px; }
.cart { border: 1px solid #ccc; padding: 10px; }
```

**Step 5: Add Interactivity (JavaScript)**

This is where the "functional" aspect comes to life.

```javascript
let selectedDrink = null;
let cart = [];
let cartTotal = 0;

// Drink data (simulated pricing)
const drinkPrices = {
  latte: 3.50,
  cappuccino: 3.25,
  espresso: 2.00
};

const sizeMultipliers = {
  small: 1.0,
  medium: 1.1,
  large: 1.2
};

const milkOptions = {
  whole: 0.0,
  skim: 0.0,
  almond: 0.50 // Extra charge for almond milk
};

// --- Event Listeners ---
document.querySelectorAll('.drink-item').forEach(item => {
  item.addEventListener('click', () => {
    selectedDrink = {
      id: item.dataset.id,
      name: item.textContent,
      size: 'medium', // Default
      milk: 'whole',  // Default
      price: drinkPrices[item.dataset.id]
    };
    document.getElementById('current-drink-name').textContent = selectedDrink.name;
    document.querySelector('.customizer').style.display = 'block';
  });
});

document.getElementById('add-to-cart').addEventListener('click', () => {
  if (!selectedDrink) return;

  selectedDrink.size = document.getElementById('size').value;
  selectedDrink.milk = document.getElementById('milk').value;

  const sizePriceModifier = sizeMultipliers[selectedDrink.size];
  const milkExtra = milkOptions[selectedDrink.milk] || 0;
  let finalPrice = selectedDrink.price * sizePriceModifier + milkExtra;

  // Add tax or other calculations here if needed for the model

  cart.push({
    name: `${selectedDrink.name} (${selectedDrink.size}, ${selectedDrink.milk})`,
    price: finalPrice.toFixed(2)
  });

  cartTotal += finalPrice;
  renderCart();

  // Reset customizer and selected drink for next selection
  document.querySelector('.customizer').style.display = 'none';
  selectedDrink = null;
  document.getElementById('size').value = 'medium';
  document.getElementById('milk').value = 'whole';
});

// --- Helper Functions ---
function renderCart() {
  const cartItemsList = document.getElementById('cart-items');
  cartItemsList.innerHTML = ''; // Clear existing items

  cart.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - $${item.price}`;
    cartItemsList.appendChild(listItem);
  });

  document.getElementById('cart-total').textContent = cartTotal.toFixed(2);
}

// Initialize cart display if needed (e.g., on page load if items are pre-loaded)
renderCart();
```

**Step 6: Test and Iterate**

Run this HTML file in a browser. Click on a drink. See the customizer appear. Select options. Click "Add to Cart". Check if the cart updates correctly with the name and calculated price.

*   **Problem:** What if the almond milk price isn't added correctly?
*   **Solution:** Debug the JavaScript calculation logic in the `add-to-cart` listener.
*   **Problem:** The customizer doesn't disappear after adding to cart.
*   **Solution:** Ensure `document.querySelector('.customizer').style.display = 'none';` is correctly placed.

## Mistakes to Avoid

*   **Over-scoping:** Trying to model *everything* at once. Focus on the critical path.
*   **Ignoring Behavior:** Creating static mockups and calling them functional models.
*   **Lack of Iteration:** Building a model and not using it to gather feedback or make improvements.
*   **Tool Overload:** Using overly complex tools for simple interactions, or vice-versa. Choose the right tool for the job.
*   **Forgetting the User:** The model should help understand the *user's* experience, not just the system's logic.

By developing functional models, you actively apply your design knowledge to create tangible, interactive prototypes. This hands-on approach is fundamental to successfully prototyping interactive systems.

## Supports

- [[functional-model-development|Functional Model Development]]
