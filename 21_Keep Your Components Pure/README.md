## Chapter 21: Keep Your Components Pure

---

### 21.1 What is a Pure Function in JavaScript?

* A **pure function** is a function that:
  ✅ Always returns the **same output** for the same input.
  ✅ Has **no side effects** (doesn’t modify external variables, DOM, or state directly).

👉 Example of Pure Function:

```js
function add(a, b) {
  return a + b; // depends only on input, no external effect
}
```

👉 Example of Impure Function:

```js
let total = 0;
function addToTotal(num) {
  total += num;   // modifies external variable (side effect ❌)
  return total;
}
```

---

### 21.2 What is a Pure Component in React?

* A **Pure Component** is a React component that:
  ✅ Renders the **same output** for the same props and state.
  ✅ Does **not modify props or external values directly**.
  ✅ Helps React optimize performance (avoids unnecessary re-renders).

💡 **Note:**

* In **class components**, React has `React.PureComponent`.
* In **functional components**, purity depends on writing clean logic.

---

### 21.3 Example of Impure Component ❌ (Avoid This)

```jsx
import { useState } from "react";

function ImpureCounter({ initial }) {
  let count = initial; // ❌ count resets every render

  function increase() {
    count++; // ❌ directly mutating local variable
    console.log("New Count:", count);
  }

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increase}>Increase</button>
    </div>
  );
}

export default ImpureCounter;
```

⚠️ Problem:

* The component is **impure** because it **does not rely only on props/state**.
* UI does not update properly since React is not aware of `count` changes.

---

### 21.4 Example of Pure Component ✅

```jsx
import { useState } from "react";

function PureCounter({ initial }) {
  const [count, setCount] = useState(initial); // ✅ state controlled by React

  function increase() {
    setCount(prev => prev + 1); // ✅ pure state update
  }

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increase}>Increase</button>
    </div>
  );
}

export default PureCounter;
```

✅ Pure Component Rules Followed:

* Uses **state** instead of modifying variables.
* Always produces predictable UI based on state/props.

---

### 21.5 Interview Questions

❓ **Q1. What is a pure function?**
➡️ A function that always gives the same output for the same input and has no side effects.

❓ **Q2. What is a pure component in React?**
➡️ A component that renders the same output for the same state and props, without side effects.

❓ **Q3. Give an example of an impure React component.**
➡️ A component that directly modifies props, global variables, or state outside of `setState`/`useState`.

❓ **Q4. Why should components be pure?**
➡️ To make them predictable, easier to test, and more efficient (React can optimize rendering).

❓ **Q5. Difference between Pure Component and Regular Component?**
➡️ Pure Component automatically implements a **shallow comparison** of props and state to prevent unnecessary re-renders.

---