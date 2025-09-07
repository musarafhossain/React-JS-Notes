## ✅ Chapter 29: Rules for Hooks

---

### 29.1 What are Hooks?

* **Hooks** are special functions in React that let you “hook into” React features like **state, lifecycle, refs, context, etc.** from function components.
* Hooks **always start with `use_____`** (e.g., `useState`, `useEffect`, `useRef`).

---

### 29.2 Rules for Hooks

🔴 **Never do this:**

* ❌ Call Hooks **inside conditions** or **loops**.
* ❌ Call Hooks **after a conditional return** statement.
* ❌ Call Hooks **inside event handlers**.
* ❌ Call Hooks in **class components**.
* ❌ Call Hooks inside `try/catch/finally`.
* ❌ Call Hooks from **regular JavaScript functions**.

✅ **Always do this:**

* Call Hooks **only at the top level** of a **React function component**.
* Call Hooks from **custom Hooks**.

---

### 29.3 Example: Correct vs Wrong Usage

```jsx
import { useState } from "react";

export default function App() {
  // ✅ Correct: useState at the top level
  const [user, setUser] = useState("");

  if (true) {
    // ❌ Wrong: Hooks inside conditions
    // const [data, setData] = useState(); 
  }

  return (
    <div>
      <h1>Hook Rules in React.js</h1>
      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => setUser(e.target.value)}
      />
      <p>User: {user}</p>
    </div>
  );
}
```

---

### 29.4 Custom Hooks

#### What are Custom Hooks?

* A **Custom Hook** is a JavaScript function whose name starts with `use`.
* It allows you to **reuse logic** across multiple components.
* Custom Hooks can **call other Hooks** inside them.

---

#### Example: Custom Hook for Toggle UI

```jsx
import { useState } from "react";

// ✅ Custom Hook
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = () => setValue((prev) => !prev);

  return [value, toggle];
}

// ✅ Using Custom Hook
export default function App() {
  const [isVisible, toggleVisible] = useToggle();

  return (
    <div>
      <h1>Custom Hook Example</h1>
      <button onClick={toggleVisible}>
        {isVisible ? "Hide" : "Show"}
      </button>

      {isVisible && <p>Hello, I am visible!</p>}
    </div>
  );
}
```

---

### 29.5 Interview Questions

❓ **Q1. Why must Hooks start with `use`?**
➡️ This naming convention lets React verify that all rules are being followed.

❓ **Q2. Where can Hooks be used?**
➡️ Inside **function components** and **custom hooks** only.

❓ **Q3. Can we use Hooks in class components?**
➡️ No, Hooks are only for **function components**.

❓ **Q4. Why can’t we call Hooks inside loops or conditions?**
➡️ Because React relies on the **order of Hooks calls** for state management. Conditions/loops break this order.

❓ **Q5. What are custom Hooks?**
➡️ A **custom Hook** is a function that starts with `use` and allows logic reuse. Example: `useToggle`, `useFetch`.

---
