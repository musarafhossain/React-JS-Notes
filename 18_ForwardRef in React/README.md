## Chapter 18: ForwardRef in React

---

### 18.1 What is ForwardRef in React?

* Normally in React, **`ref`** is used to access DOM elements or child component instances directly.
* By default, **refs cannot be passed down from parent to child component**.
* **`forwardRef`** is a technique that allows a component to **forward its ref** to another component or DOM element.

📌 In short:
👉 `forwardRef` makes it possible for parent components to get **ref access** to DOM nodes or child components.

---

### 18.2 Implement ForwardRef (Before React 19)

Before React 19, we used the `React.forwardRef` API.

#### Example: Input Box with ForwardRef

### `CustomInput.jsx`
```jsx
import React, { forwardRef } from "react";

// Child Component
const CustomInput = (props, ref) => {
  return <input ref={ref} type="text" placeholder="Enter text here..." />;
};

export default forwardRef(CustomInput);
```

### `App.jsx`
```jsx
import React, { useRef } from "react";
import CustomInput from "./CustomInput"; // Import Child

function App() {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus(); // Access child input directly
  };

  return (
    <div>
      <h2>ForwardRef Example (Before React 19)</h2>
      <CustomInput ref={inputRef} />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default App;
```

✅ Here, the parent `App` can call `focus()` on the `CustomInput` child’s `<input>` because of `forwardRef`.

---

### 18.3 Implement ForwardRef in React 19

React 19 introduced **new ref handling improvements**:

* You no longer need to wrap everything in `forwardRef`.
* Function components **directly accept refs by default** (if they support them).

#### Example in React 19

### `CustomInput.jsx`
```jsx
import React from "react";

function CustomInput(props) {
  return <input ref={props.ref} type="text" placeholder="Enter text (React 19)" />;
}

export default CustomInput;
```

### `App.jsx`
```jsx
import React, { useRef } from "react";
import CustomInput from "./CustomInput";

function App() {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>ForwardRef Example (React 19)</h2>
      <CustomInput ref={inputRef} />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default App;
```

🚀 In React 19, **forwardRef is becoming more natural**, and function components can directly handle refs more easily.

---

### 18.4 Interview Questions on ForwardRef

❓ **Q1. What is `forwardRef` in React?**
➡️ It is a technique to pass refs from parent to child, allowing the parent to access child DOM elements or components.

❓ **Q2. Why do we need `forwardRef`?**
➡️ Without `forwardRef`, a parent cannot directly access the child’s DOM node.

❓ **Q3. Difference between React 18 and React 19 `forwardRef`?**
➡️

* **React 18 (and before):** Must use `React.forwardRef` explicitly.
* **React 19:** Function components naturally support refs; forwardRef usage is simplified.

❓ **Q4. Can we pass refs through multiple components?**
➡️ Yes, by forwarding refs multiple levels using `forwardRef`.

❓ **Q5. What are some real use cases of forwardRef?**
➡️

* Custom input components that expose `focus()`.
* Passing refs to reusable UI libraries.
* Integrating with third-party DOM libraries.

---