## Chapter 17: Uncontrolled Component

---

### 17.1 What is an Uncontrolled Component?

* An **Uncontrolled Component** is a form input element that **manages its own state internally**, rather than being controlled by React state.
* In simple words:
  ✅ The input value is handled by the **DOM itself**
  ✅ React just **reads the value** when needed (e.g., on submit)
  ✅ Unlike **Controlled Components**, we don’t use `useState` to store input values.

📌 Example difference:

* **Controlled** → `<input value={state} onChange={...} />`
* **Uncontrolled** → `<input defaultValue="Hello" />` + use **ref** or **querySelector** to get the value.

---

### 17.2 Make Uncontrolled Component with **Query Selector**

```jsx
import { useState } from "react";

function UncontrolledForm() {
  const [submittedValue, setSubmittedValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputVal = document.querySelector("#myInput").value; // DOM query
    setSubmittedValue(inputVal);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input id="myInput" type="text" defaultValue="Hello" />
        <button type="submit">Submit</button>
      </form>
      <p>Submitted Value: {submittedValue}</p>
    </div>
  );
}

export default UncontrolledForm;
```

✅ Here the input value is directly accessed from the DOM (`document.querySelector`).

---

### 17.3 Make Uncontrolled Component with **useRef**

```jsx
import { useRef, useState } from "react";

function UncontrolledRefForm() {
  const inputRef = useRef(null);
  const [submittedValue, setSubmittedValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedValue(inputRef.current.value); // get value from ref
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} defaultValue="React" />
        <button type="submit">Submit</button>
      </form>
      <p>Submitted Value: {submittedValue}</p>
    </div>
  );
}

export default UncontrolledRefForm;
```

✅ Here the input field is **uncontrolled**, and React accesses its value via `useRef`.

---

### 17.4 Interview Questions

❓ **Q1. What is the difference between Controlled and Uncontrolled Components?**
➡️ Controlled → React manages the value in state.
➡️ Uncontrolled → DOM manages the value, React reads it when needed.

❓ **Q2. When should you use uncontrolled components?**
➡️ When you don’t need real-time validation or state updates (e.g., simple forms, third-party libraries).

❓ **Q3. What are the ways to create uncontrolled components in React?**
➡️ Using **Refs (`useRef`)** or directly accessing DOM (`document.querySelector`).

❓ **Q4. Which is recommended: Controlled or Uncontrolled?**
➡️ Controlled (most cases), because it keeps React as the **single source of truth**.
➡️ Uncontrolled is useful for **simple forms or quick integration**.

❓ **Q5. Can you mix controlled and uncontrolled components?**
➡️ Yes, but it is generally not recommended as it may cause bugs.

---