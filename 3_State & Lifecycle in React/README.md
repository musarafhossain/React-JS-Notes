# **Chapter 3: State & Lifecycle in React**  

## **3.1 What is State in React?**  
State is a **built-in object** in React that allows components to store and manage dynamic data. Unlike **props**, which are **read-only**, state is **mutable** and allows components to re-render when the state changes.  

📌 **Key Differences Between Props and State:**  

| Feature  | Props  | State  |
|----------|--------|--------|
| Mutability  | Immutable (Read-only)  | Mutable (Can change)  |
| Ownership  | Passed from parent to child  | Managed within the component  |
| Re-rendering  | Does not trigger re-render  | Changes trigger re-render  |

---

## **3.2 Managing State in Functional Components (useState Hook)**  
Functional components use the **useState Hook** to manage state.  

### **Basic Example: Counter App**  
```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // Declare state

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```
✅ The `useState(0)` initializes state (`count`).  
✅ `setCount(count + 1)` updates the state and re-renders the component.  

---

## **3.3 Managing State in Class Components**  
Class components use the `this.state` object and `this.setState()` method.  

### **Class Component Example (Counter App)**  
```jsx
import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = { count: 0 }; // Initialize state
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 }); // Update state
  };

  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
```
✅ `this.state` stores the initial state.  
✅ `this.setState({ count: this.state.count + 1 })` updates the state.  

---

## **3.4 The useEffect Hook (Handling Side Effects in Functional Components)**  
The `useEffect` Hook allows us to perform **side effects** in functional components, such as:  
✅ Fetching data from an API  
✅ Updating the DOM  
✅ Subscribing to events  

### **Basic useEffect Example (Title Updater)**  
```jsx
import React, { useState, useEffect } from "react";

function TitleUpdater() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`; // Side effect: Update document title
  }, [count]); // Runs when count changes

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default TitleUpdater;
```
✅ `useEffect(() => {...}, [count])` runs when `count` changes.  
✅ If the dependency array `[count]` is **empty (`[]`)**, `useEffect` runs only once after the first render.  

---

## **3.5 Class Component Lifecycle Methods**  
In class components, we use lifecycle methods instead of `useEffect`.  

### **Important Lifecycle Methods**  

| Lifecycle Method | When It Runs |
|-----------------|--------------|
| `componentDidMount()` | Runs **once** after the component mounts (like `useEffect` with `[]`). |
| `componentDidUpdate(prevProps, prevState)` | Runs when **state or props** change (like `useEffect` with dependencies). |
| `componentWillUnmount()` | Runs when the component is **removed** (like `useEffect` cleanup). |

### **Example: Updating Title in Class Components**  
```jsx
import React, { Component } from "react";

class TitleUpdater extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  componentDidMount() {
    document.title = `Count: ${this.state.count}`;
  }

  componentDidUpdate() {
    document.title = `Count: ${this.state.count}`;
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default TitleUpdater;
```
✅ `componentDidMount()` runs **once** when the component is first rendered.  
✅ `componentDidUpdate()` updates the title whenever `count` changes.  

---

## **3.6 Cleanup Function in useEffect**  
Some side effects (like event listeners) need **cleanup** to prevent memory leaks.  

### **Example: Event Listener Cleanup**  
```jsx
import React, { useState, useEffect } from "react";

function MouseTracker() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const updateMousePosition = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    
    return () => {
      window.removeEventListener("mousemove", updateMousePosition); // Cleanup
    };
  }, []);

  return (
    <h2>Mouse Position: {x}, {y}</h2>
  );
}

export default MouseTracker;
```
✅ The `return` function inside `useEffect` removes the event listener when the component **unmounts**.  

---

## **3.7 First Project: Timer App with Start & Stop**  
🎯 **Goal:** Create a Timer component that starts counting when mounted and stops when unmounted.  

### **Step 1: Create `Timer.js`**  
```jsx
import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup function
  }, []);

  return <h2>Time: {seconds}s</h2>;
}

export default Timer;
```

### **Step 2: Use Timer Component in `App.js`**  
```jsx
import React, { useState } from "react";
import Timer from "./Timer";

function App() {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div>
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? "Stop Timer" : "Start Timer"}
      </button>
      {showTimer && <Timer />}
    </div>
  );
}

export default App;
```
✅ The Timer **starts** when mounted and **stops** when unmounted.  
✅ The `return` statement in `useEffect` ensures cleanup.  

---

## **🚀 Chapter Summary**  
✔ **State** allows components to store and manage data.  
✔ Functional components use `useState`, while class components use `this.state`.  
✔ The `useEffect` Hook handles **side effects** like API calls or updating the DOM.  
✔ Class components use **lifecycle methods**: `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`.  
✔ We built a **Timer App** that starts and stops using state and `useEffect`.  

---

## **📌 Next Chapter: Handling Events & Forms**  
In the next chapter, we'll learn how to handle **user input, form validation, event handling, and controlled components**. Ready to move on? 🚀