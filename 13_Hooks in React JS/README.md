## Chapter 13: Hooks in React.js

---

### 13.1 What are Hooks?

* **Hooks** are special functions in React that allow you to **use state and other React features** in functional components.
* In older versions of React, we used **Class Components** for managing state and lifecycle.
* Now, React promotes **Functional Components + Hooks**, making code **simpler, shorter, and reusable**.

---

### 13.2 Why do we need Hooks?

* To use **state, lifecycle methods, and context** inside functional components.
* Makes components **cleaner and easier** to read compared to class components.
* Allows **logic reuse** (custom hooks).
* Encourages **modern React development**.

---

### 13.3 History of Hooks

* Before React **v16.8 (2019)**, state and lifecycle methods were available **only in class components**.
* Hooks were introduced in **React v16.8** to allow developers to use these features inside **functional components**.
* Today, **most new React apps use Hooks instead of classes**.

---

### 13.4 How to Identify Hooks?

* A hook is a **JavaScript function** whose name **starts with `use`** (e.g., `useState`, `useEffect`).
* Hooks can only be used:
  ✅ Inside **functional components**
  ✅ Inside **custom hooks**
  ❌ Not inside normal functions or class components

⚠️ **Rule of Hooks:**

1. Only call hooks at the **top level** (not inside loops, conditions).
2. Only call hooks from **React functional components** or **custom hooks**.

---

### 13.5 Some Popular React Hooks

1. **`useState`** → For state management in functional components.
2. **`useEffect`** → For lifecycle methods & side effects.
3. **`useContext`** → For using Context API (avoid prop drilling).
4. **`useRef`** → For referencing DOM elements & persisting values.
5. **`useReducer`** → For complex state management (like Redux alternative).
6. **`useMemo`** → For performance optimization (memoized values).
7. **`useCallback`** → For memoizing functions.
8. **`useLayoutEffect`** → Like `useEffect`, but runs synchronously after DOM mutations.
9. **`useImperativeHandle`** → Customizes ref handling in components.
10. **Custom Hooks** → Your own hooks built using other hooks.

---

### 13.6 Example (Basic Hook: useState)

```jsx
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0); // declare state

  return (
    <div>
      <h2>React Hook Example (useState)</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default App;
```

---

### 13.7 Interview Questions on Hooks

❓ **Q1. What are React Hooks?**
➡️ Functions that let you use state and lifecycle features in functional components.

❓ **Q2. Why were Hooks introduced?**
➡️ To replace class components with simpler functional components and enable state/lifecycle usage.

❓ **Q3. Can Hooks be used inside class components?**
➡️ ❌ No, only inside functional components or custom hooks.

❓ **Q4. What are the rules of Hooks?**
➡️ Call at top-level, only inside React components or custom hooks.

❓ **Q5. Give examples of commonly used Hooks.**
➡️ `useState`, `useEffect`, `useContext`, `useRef`, `useReducer`.

❓ **Q6. When should you use `useReducer` instead of `useState`?**
➡️ When state logic is complex (e.g., multiple state updates or dependent values).

---