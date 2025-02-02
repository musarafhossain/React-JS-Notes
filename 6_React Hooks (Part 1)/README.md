# **Chapter 6: React Hooks (Part 1)**  
React Hooks allow functional components to use state and lifecycle features previously only available in class components.  

### **📌 Hooks Covered in This Chapter:**  
✅ `useState` – Managing state in functional components.  
✅ `useEffect` – Handling side effects (e.g., API calls, event listeners).  
✅ `useRef` – Managing DOM references and persisting values across renders.  

---

# **6.1 useState – Managing State in Functional Components**  
The `useState` Hook enables state management inside functional components.  

### **6.1.1 Basic Example**  
```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // State variable

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```
✅ `useState(0)` initializes `count` to **0**.  
✅ Calling `setCount(count + 1)` updates the state.  

---

### **6.1.2 Updating State Based on Previous State**  
```jsx
function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1); // Safe state update
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```
✅ Using `setCount(prevCount => prevCount + 1)` ensures the correct state update.  

---

### **6.1.3 Using useState with Objects**  
```jsx
function Profile() {
  const [user, setUser] = useState({ name: "Alice", age: 25 });

  return (
    <div>
      <h2>Name: {user.name}</h2>
      <h2>Age: {user.age}</h2>
      <button onClick={() => setUser({ ...user, age: user.age + 1 })}>
        Increase Age
      </button>
    </div>
  );
}
```
✅ `setUser({ ...user, age: user.age + 1 })` ensures we don’t lose previous properties.  

---

# **6.2 useEffect – Handling Side Effects**  
The `useEffect` Hook lets you **run side effects** (e.g., API calls, subscriptions) inside functional components.  

### **6.2.1 Basic useEffect Example**  
```jsx
import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`; // Side effect
  });

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
✅ Runs **after every render** by default.  
✅ Updates the **document title** whenever `count` changes.  

---

### **6.2.2 Running useEffect Only Once (on Mounting)**
```jsx
useEffect(() => {
  console.log("Component Mounted");
}, []); // Empty dependency array runs only once
```
✅ Adding `[]` makes it run **only on the first render** (like `componentDidMount`).  

---

### **6.2.3 Running useEffect When a Specific State Changes**  
```jsx
useEffect(() => {
  console.log(`Count updated: ${count}`);
}, [count]); // Runs only when `count` changes
```
✅ This effect runs **only when `count` changes**.  

---

### **6.2.4 Cleanup Function in useEffect**  
When using effects like **event listeners or subscriptions**, we need cleanup.  

#### **Example: Adding & Removing Event Listeners**  
```jsx
useEffect(() => {
  const handleResize = () => {
    console.log("Window resized:", window.innerWidth);
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize); // Cleanup
  };
}, []);
```
✅ The cleanup function **removes** the event listener when the component unmounts.  

---

# **6.3 useRef – Managing References & Persisting Values**  
The `useRef` Hook is used for:  
🔹 Accessing and **modifying DOM elements**.  
🔹 **Persisting values across renders** without causing re-renders.  

---

### **6.3.1 Accessing DOM Elements with useRef**  
```jsx
import React, { useRef } from "react";

function InputFocus() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus(); // Focus the input field
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default InputFocus;
```
✅ `inputRef.current.focus()` **directly manipulates** the DOM element.  

---

### **6.3.2 Persisting Values Without Re-renders**  
`useRef` can store values **without triggering re-renders**.  

```jsx
function Counter() {
  const countRef = useRef(0);

  const increment = () => {
    countRef.current += 1;
    console.log("Count:", countRef.current);
  };

  return (
    <div>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```
✅ Unlike `useState`, changing `countRef.current` **does not re-render** the component.  

---

# **6.4 First Project: Stopwatch Using useRef & useState**  
🎯 **Goal:** Build a stopwatch with **start, stop, and reset** functionality.  

### **Step 1: Create `Stopwatch.js`**  
```jsx
import React, { useState, useRef } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  return (
    <div>
      <h2>Time: {time} sec</h2>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Stopwatch;
```
✅ **`useRef` stores the interval ID**, preventing re-renders.  
✅ **`useState` updates the time every second** when the timer is running.  

---

# **🚀 Chapter Summary**  
✔ **useState** – Manages component state in functional components.  
✔ **useEffect** – Handles side effects like API calls & event listeners.  
✔ **useRef** – Manages DOM elements & stores values without re-rendering.  
✔ **Project:** Built a **Stopwatch** using `useRef` & `useState`.  

---

# **📌 Next Chapter: React Hooks (Part 2)**
We’ll cover **`useContext`, `useReducer`, and `useMemo`** for advanced state management and optimization. Ready to move on? 🚀