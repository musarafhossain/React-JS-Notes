# **Chapter 9: State Management (Context API, Redux Toolkit, Zustand)**  

State management is a crucial part of React development, allowing components to share and manage state effectively. In this chapter, we’ll explore three powerful tools for state management in React:  
✅ **Context API** – React’s built-in solution for simple state sharing.  
✅ **Redux Toolkit** – A more complex but powerful state management library.  
✅ **Zustand** – A lightweight state management tool with a simple API.

---

## **9.1 Context API – Built-in React State Management**

The **Context API** is a simple and effective way to manage global state in a React application. It allows you to pass data through the component tree without having to manually pass props at every level.

### **9.1.1 Creating a Global State with Context API**

#### Step 1: Create a Context and Provider
```jsx
import React, { createContext, useState } from "react";

// Step 1: Create a Context
const ThemeContext = createContext();

// Step 2: Create a Provider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

#### Step 2: Use the Context in Components
```jsx
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff" }}>
      Toggle Theme
    </button>
  );
}

export default ThemeButton;
```

- `ThemeContext.Provider` wraps the component tree and provides the state to all components.
- `useContext(ThemeContext)` allows components to access the state.

---

## **9.2 Redux Toolkit – Advanced State Management**

Redux is a state management library that uses a centralized store for state, enabling predictable state updates. The **Redux Toolkit** is the official, recommended way to write Redux logic, simplifying many tasks.

### **9.2.1 Setting Up Redux Toolkit**

#### Step 1: Install Redux Toolkit and React-Redux
```bash
npm install @reduxjs/toolkit react-redux
```

#### Step 2: Create a Redux Slice (State Logic)
```jsx
import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => { state.count += 1; },
    decrement: (state) => { state.count -= 1; },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

#### Step 3: Create the Redux Store
```jsx
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

const store = configureStore({
  reducer: { counter: counterReducer },
});

export default store;
```

#### Step 4: Provide Redux Store to App
```jsx
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Counter from "./Counter";

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
```

#### Step 5: Access Redux State in Components
```jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default Counter;
```
- **Slices** define actions and reducers.  
- **`useDispatch`** allows dispatching actions.  
- **`useSelector`** accesses state from the Redux store.  

---

### **9.2.2 Redux Toolkit with Asynchronous Actions (Thunk)**

Redux Toolkit simplifies async actions with `createAsyncThunk`. Let’s fetch data from an API using Redux.

```jsx
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Step 1: Create an Async Thunk
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
});

const postsSlice = createSlice({
  name: "posts",
  initialState: { posts: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default postsSlice.reducer;
```

- **`createAsyncThunk`** automatically handles pending, fulfilled, and rejected states.  
- Use `extraReducers` to manage async states in the Redux slice.

---

## **9.3 Zustand – Lightweight State Management**

**Zustand** is a minimalistic state management library that has a simple API and works well with React. It provides an easy-to-use global state store without requiring boilerplate like Redux.

### **9.3.1 Setting Up Zustand**

#### Step 1: Install Zustand
```bash
npm install zustand
```

#### Step 2: Create a Zustand Store
```jsx
import create from "zustand";

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export default useStore;
```

#### Step 3: Use the Zustand Store in Components
```jsx
import React from "react";
import useStore from "./store";

function Counter() {
  const { count, increment, decrement } = useStore();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
```

- **`create`** initializes the store.
- The store contains **state** and **actions** like `increment` and `decrement`.

---

### **9.3.2 Zustand with Multiple States**
```jsx
import create from "zustand";

const useStore = create((set) => ({
  count: 0,
  theme: "light",
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  toggleTheme: () => set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
}));

export default useStore;
```

- Zustand’s state can handle **multiple pieces of state** without much overhead.

---

# **9.4 Project: Task Management App with Context API, Redux, and Zustand**

### **Step 1: Create Task Manager Using Context API**
```jsx
import React, { useState, createContext, useContext } from "react";

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask }}>
      {children}
    </TaskContext.Provider>
  );
}

function TaskList() {
  const { tasks, addTask } = useContext(TaskContext);

  return (
    <div>
      <button onClick={() => addTask("New Task")}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
```

---

# **🚀 Chapter Summary**
✔ **Context API** – Simple solution for global state management.  
✔ **Redux Toolkit** – Advanced, scalable state management with asynchronous actions.  
✔ **Zustand** – Lightweight, minimal API for state management.  
✔ **Project:** Created a **Task Management App** using different state management libraries.

---