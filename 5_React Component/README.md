## Chapter 5: React Component

### 5.1 What is a Component?

* A **Component** is a **reusable piece of UI** in React.

* **General Example:**

  * Think of a **car** 🚗 → It has components like *engine, wheels, seats*.
  * Similarly, in UI → a **webpage** has components like *Navbar, Sidebar, Footer*.

* **In React:**

  * A component is a **JavaScript function or class** that returns UI (written in JSX).
  * Example usage in JSX:

    ```jsx
    <Navbar />
    <Footer />
    ```

* **Everything is a component** in React when building UI.

---

📊 **Component Diagram (Visualization):**

```
src
├── components
    ├── Header.jsx
    ├── Sidebar.jsx
    ├── MainContent
    │     └── Card.jsx
    └── Footer.jsx
```

👉 Each block (Header, Sidebar, Card) is a **component** that can be reused anywhere.

---

### 5.2 Types of Components

1. **Functional Component (Modern & Recommended)**

   * Simple JavaScript function that returns JSX.
   * Example:

     ```jsx
     function Welcome() {
       return <h1>Hello, I am a Functional Component</h1>;
     }
     export default Welcome;
     ```

2. **Class Component (Older Approach)**

   * ES6 Class that extends `React.Component`.
   * Example:

     ```jsx
     import React, { Component } from "react";

     class Welcome extends Component {
       render() {
         return <h1>Hello, I am a Class Component</h1>;
       }
     }

     export default Welcome;
     ```

3. **Component Lifecycle**

* React components go through different **lifecycle phases**.

    * **Mounting** → When a component is created and added to the DOM.
    * **Updating** → When a component re-renders due to state/props change.
    * **Unmounting** → When a component is removed from the DOM.

---

### 🟢 Lifecycle in **Functional Components** (using Hooks)

React **Hooks** like `useEffect` are used to simulate lifecycle methods.

```jsx
import { useState, useEffect } from "react";

function FunctionalLifecycle() {
  const [count, setCount] = useState(0);

  // Mounting → Runs once when component is created
  useEffect(() => {
    console.log("✅ Component Mounted");

    // Unmounting → Cleanup when component is removed
    return () => {
      console.log("❌ Component Unmounted");
    };
  }, []);

  // Updating → Runs every time 'count' changes
  useEffect(() => {
    console.log("🔄 Component Updated, count:", count);
  }, [count]);

  return (
    <div>
      <h2>Functional Component Lifecycle</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default FunctionalLifecycle;
```

✅ **Behavior:**

* Shows *“Mounted”* message once.
* Every time button is clicked → *“Updated”* message logs.
* If component is removed from screen → *“Unmounted”* logs.

---

### 🟦 Lifecycle in **Class Components**

Class components use **lifecycle methods**.

```jsx
import React, { Component } from "react";

class ClassLifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("📌 Constructor (Before Mounting)");
  }

  // Mounting
  componentDidMount() {
    console.log("✅ Component Mounted");
  }

  // Updating
  componentDidUpdate(prevProps, prevState) {
    console.log("🔄 Component Updated, count:", this.state.count);
  }

  // Unmounting
  componentWillUnmount() {
    console.log("❌ Component Unmounted");
  }

  render() {
    return (
      <div>
        <h2>Class Component Lifecycle</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increase
        </button>
      </div>
    );
  }
}

export default ClassLifecycle;
```

✅ **Behavior:**

* Logs constructor first, then “Mounted”.
* On clicking button → triggers re-render → “Updated”.
* If removed from screen → “Unmounted” logs.

---

### 5.3 How to Use a Component?

1. **Create a component** (e.g., `Hello.jsx`).

   ```jsx
   // path -> src/components
   function Hello() {
     return <h2>Hello from My Component!</h2>;
   }
   export default Hello;
   ```

2. **Import into another file (App.jsx):**

   ```jsx
   import Hello from "./components/Hello";

   function App() {
     return (
       <div>
         <h1>Main App Component</h1>
         <Hello />
       </div>
     );
   }

   export default App;
   ```

✅ Output → Your `App` now displays both text and imported component.

---

### 5.4 What Role Do Components Play in a React Application?

* **Reusability** → Write once, use multiple times.
* **Separation of Concerns** → UI is broken into smaller, manageable parts.
* **Maintainability** → Easier to debug and test.
* **Scalability** → Big apps can be built with small building blocks.

---

### 5.5 How to Write Your First React Component

```jsx
function Greeting() {
  return <p>Hello! This is my first React Component 🎉</p>;
}

export default Greeting;
```

* Import it in `App.jsx`:

  ```jsx
  import Greeting from "./Greeting";

  function App() {
    return (
      <div>
        <Greeting />
      </div>
    );
  }

  export default App;
  ```

---

### 5.6 Difference Between a Component and a Function

| **Aspect**       | **Function** (Normal JS)                | **Component** (React)                     |
| ---------------- | --------------------------------------- | ----------------------------------------- |
| **Purpose**      | Performs a task (e.g., calculate sum)   | Returns UI (HTML + JS using JSX)          |
| **Return Value** | Returns data (string, number, object)   | Returns JSX (UI elements)                 |
| **Usage**        | Called directly (`sum(2,3)`)            | Used inside JSX (`<Greeting />`)          |
| **State/Props**  | No state or props (just inputs/outputs) | Can manage **state** and accept **props** |
| **Integration**  | Pure JavaScript                         | Integrated with React rendering system    |

---
