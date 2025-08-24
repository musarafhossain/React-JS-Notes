## Chapter 9: State in React JS

---

### 9.1 Why State is Required?

* State allows React components to **store dynamic data**.
* Without state, data would always be static.
* Example: Counters, Forms, Toggle buttons → need **state** to remember values.
* **Whenever state changes, React re-renders the component automatically** so UI always stays in sync with data.

---

### 9.2 What is State?

* **State is a container to store data** (like a variable inside a component).
* Unlike normal variables, state is **mutable** (can change) and **reactive**.
* To use state → we import **useState hook** from React.
* **On change, state automatically re-renders the component → updates UI.**

---

### 9.3 What are Hooks?

* **Hooks** are special features in React for **Functional Components**.
* Hooks let you use React features without writing class components.
* Examples:

  * `useState` → Manage state.
  * `useEffect` → Handle lifecycle & side effects.
  * `useContext`, `useReducer`, etc.

---

### 9.4 How to Use State

1. Import `useState`:

   ```jsx
   import { useState } from "react";
   ```

2. Create a state variable:

   ```jsx
   const [count, setCount] = useState(0);
   ```

   * `count` → current state value.
   * `setCount` → function to update state.
   * `0` → initial value.

---

### 9.5 Example of State (Counter App)

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
```

✅ Every click updates the state → React automatically re-renders UI.

---

### 9.6 State in Different Components

* **Parent Component (`App.jsx`)**

  ```jsx
  import Counter from "./Counter";

  function App() {
    return (
      <div>
        <h1>App Component</h1>
        <Counter />
      </div>
    );
  }

  export default App;
  ```

* **Child Component (`Counter.jsx`)**

  ```jsx
  import { useState } from "react";

  function Counter() {
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>Counter Value: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
    );
  }

  export default Counter;
  ```

👉 Each component manages its own **independent state**.

---

### 9.7 Multiple States

You can use **more than one state** inside a component.

```jsx
import { useState } from "react";

function UserProfile() {
  const [name, setName] = useState("John");
  const [age, setAge] = useState(25);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <button onClick={() => setName("Musaraf")}>Change Name</button>
      <button onClick={() => setAge(age + 1)}>Increase Age</button>
    </div>
  );
}

export default UserProfile;
```

✅ React allows multiple `useState` calls in a single component.

---

### 9.8 Interview Question

**Q1: Difference between State and Props?**

* **State** → Internal, owned by component, can be changed with `setState/useState`.
* **Props** → External, passed from parent to child, read-only.

**Q2: Why do we need `useState` instead of normal variables?**

* Normal variables don’t trigger re-render.
* `useState` tells React to re-render when value changes.

**Q3: Can we use state in class components?**

* Yes, but with `this.state` and `this.setState()`.
* Example:

  ```jsx
  class Counter extends React.Component {
    constructor() {
      super();
      this.state = { count: 0 };
    }
    render() {
      return (
        <div>
          <p>{this.state.count}</p>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            Increase
          </button>
        </div>
      );
    }
  }
  ```

---