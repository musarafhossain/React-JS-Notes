# **Chapter 7: React Hooks (Part 2)**  

In this chapter, we’ll cover advanced React Hooks:  
✅ **`useContext`** – Managing global state without prop drilling.  
✅ **`useReducer`** – Handling complex state logic (like Redux).  
✅ **Custom Hooks** – Creating reusable logic.  

---

# **7.1 useContext – Managing Global State**  
`useContext` helps **avoid prop drilling** by providing global state management.

## **7.1.1 Creating a Theme Context**
```jsx
import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext(); // Step 1: Create Context

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Step 2: Use Context in a Component
function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff" }}>
      Toggle Theme
    </button>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ThemeButton />
    </ThemeProvider>
  );
}
```
✅ `ThemeContext.Provider` **shares state globally**.  
✅ `useContext(ThemeContext)` **accesses theme and toggle function**.  

---

## **7.2 useReducer – Managing Complex State**  
`useReducer` is an alternative to `useState`, useful for **handling complex state logic**.  

### **7.2.1 Counter Example with useReducer**  
```jsx
import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      throw new Error("Unknown action type");
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default Counter;
```
✅ `useReducer(reducer, initialState)` manages state.  
✅ `dispatch({ type: "increment" })` updates the state using actions.  

---

### **7.2.2 Todo List with useReducer**  
```jsx
import React, { useReducer, useState } from "react";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, { id: Date.now(), text: action.text }];
    case "remove":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error("Unknown action type");
  }
}

function TodoApp() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => dispatch({ type: "add", text: input })}>Add</button>
      <ul>
        {state.map((todo) => (
          <li key={todo.id}>
            {todo.text} <button onClick={() => dispatch({ type: "remove", id: todo.id })}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
```
✅ `useReducer` efficiently handles **adding and removing todos**.  

---

# **7.3 Custom Hooks – Reusing Logic**
Custom Hooks let you **encapsulate reusable logic** in functions.

## **7.3.1 Creating a useLocalStorage Hook**
```jsx
import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const savedValue = localStorage.getItem(key);
    return savedValue ? JSON.parse(savedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

// Usage Example
function Counter() {
  const [count, setCount] = useLocalStorage("count", 0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```
✅ `useLocalStorage` **saves state to local storage** and persists it across page reloads.  

---

## **7.3.2 useFetch – Fetch Data Easily**
```jsx
import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}

// Usage Example
function UsersList() {
  const { data, loading } = useFetch("https://jsonplaceholder.typicode.com/users");

  return loading ? <p>Loading...</p> : <ul>{data.map((user) => <li key={user.id}>{user.name}</li>)}</ul>;
}

export default UsersList;
```
✅ `useFetch` makes API requests reusable for different components.  

---

# **7.4 Project: Dark Mode Toggle Using useContext & useReducer**  
🎯 **Goal:** Implement a **Dark Mode Toggle** using `useContext` & `useReducer`.  

### **Step 1: Create `ThemeContext.js`**
```jsx
import { createContext, useReducer, useContext } from "react";

const ThemeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case "toggle":
      return state === "light" ? "dark" : "light";
    default:
      return state;
  }
};

export function ThemeProvider({ children }) {
  const [theme, dispatch] = useReducer(themeReducer, "light");

  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
```

---

### **Step 2: Use Theme Context in Components**
```jsx
import React from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";

function ThemeToggleButton() {
  const { theme, dispatch } = useTheme();

  return (
    <button
      onClick={() => dispatch({ type: "toggle" })}
      style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff" }}
    >
      Toggle Theme
    </button>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ThemeToggleButton />
    </ThemeProvider>
  );
}
```
✅ `useReducer` manages theme switching.  
✅ `useContext` makes the theme globally available.  

---

# **🚀 Chapter Summary**  
✔ **useContext** – Manages global state without prop drilling.  
✔ **useReducer** – Handles complex state updates with a reducer function.  
✔ **Custom Hooks** – Encapsulate and reuse logic (`useFetch`, `useLocalStorage`).  
✔ **Project:** Built a **Dark Mode Toggle** using `useContext` & `useReducer`.  

---
