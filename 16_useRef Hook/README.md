## Chapter 16: `useRef` Hook

---

### 16.1 What is `useRef` Hook?

* `useRef` is a React hook that gives you a **mutable reference object**.
* This reference persists across re-renders **without causing the component to re-render**.
* It is commonly used to:
  ✅ Access and manipulate DOM elements directly
  ✅ Store values that don’t need re-rendering
  ✅ Maintain previous values of variables

---

### 16.2 How to Use `useRef`

**Syntax:**

```jsx
const refName = useRef(initialValue);
```

* `useRef(initialValue)` returns an object:

  ```js
  { current: initialValue }
  ```
* We can access the reference with `refName.current`.

---

### 16.3 Control Input Field with `useRef`

```jsx
import { useRef } from "react";

function InputControl() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.value = "Hello from useRef"; // set value
    inputRef.current.focus(); // focus input
  };

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Type here..." />
      <button onClick={handleClick}>Set Value</button>
    </div>
  );
}
export default InputControl;
```

✅ Here, `useRef` allows us to **manipulate the input field directly** without using `useState`.

---

### 16.4 Hide and Show Input Field with `useRef`

```jsx
import { useRef } from "react";

function ToggleInput() {
  const inputRef = useRef(null);

  const toggleVisibility = () => {
    if (inputRef.current.style.display === "none") {
      inputRef.current.style.display = "block"; // show input
    } else {
      inputRef.current.style.display = "none"; // hide input
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Toggle me!" />
      <button onClick={toggleVisibility}>Hide/Show</button>
    </div>
  );
}
export default ToggleInput;
```

✅ `useRef` helps directly change the input element’s CSS.

---

### 16.5 Other Common Uses of `useRef`

* Storing **previous value**:

  ```jsx
  const prevCount = useRef();
  useEffect(() => {
    prevCount.current = count;
  }, [count]);
  ```
* Storing **timeouts or intervals**:

  ```jsx
  const timerRef = useRef();
  timerRef.current = setTimeout(() => console.log("Run"), 1000);
  ```

---

### 16.6 Interview Questions

❓ **Q1. What is `useRef` in React?**
➡️ A hook that returns a mutable reference object that persists across re-renders.

❓ **Q2. What is the difference between `useRef` and `useState`?**
➡️ `useState` causes re-renders when updated, while `useRef` does **not**.

❓ **Q3. Can we use `useRef` to store values between renders?**
➡️ ✅ Yes, it can store previous values without re-rendering.

❓ **Q4. When would you use `useRef` instead of `useState`?**
➡️ When you want to store or manipulate values without triggering re-render (e.g., DOM elements, timers).

❓ **Q5. Can `useRef` be used for both DOM access and storing data?**
➡️ ✅ Yes, it is versatile.

---