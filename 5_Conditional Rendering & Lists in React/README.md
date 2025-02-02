# **Chapter 5: Conditional Rendering & Lists in React**  

In this chapter, we’ll cover:  
✅ **Conditional Rendering** – Rendering UI based on conditions.  
✅ **Lists & Keys** – Rendering lists dynamically and using keys.  
✅ **Mapping Data** – Using `.map()` to display dynamic lists.  

---

## **5.1 Conditional Rendering in React**  
Conditional rendering means displaying different UI elements based on conditions like:  
🔹 User authentication (show login/logout button).  
🔹 Showing or hiding components dynamically.  
🔹 Displaying messages based on conditions.  

### **5.1.1 Using if-else (Class Component Example)**  
```jsx
import React, { Component } from "react";

class Greeting extends Component {
  constructor() {
    super();
    this.state = { isLoggedIn: false };
  }

  render() {
    if (this.state.isLoggedIn) {
      return <h2>Welcome, User!</h2>;
    } else {
      return <h2>Please Log In</h2>;
    }
  }
}

export default Greeting;
```
✅ The `if-else` checks `isLoggedIn` state and displays content accordingly.  

---

### **5.1.2 Using Ternary Operator (Functional Component Example)**  
```jsx
import React, { useState } from "react";

function Greeting() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h2>{isLoggedIn ? "Welcome, User!" : "Please Log In"}</h2>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default Greeting;
```
✅ The **ternary operator (`? :`)** is a shorter way to write `if-else`.  
✅ The **button toggles login state** when clicked.  

---

### **5.1.3 Using Logical AND (`&&`) for Simple Conditions**  
When rendering something **only if a condition is true**, use `&&`.  

#### **Example: Show a Logout Button Only if Logged In**
```jsx
function LogoutButton({ isLoggedIn }) {
  return <div>{isLoggedIn && <button>Logout</button>}</div>;
}
```
✅ If `isLoggedIn` is `false`, the button won’t render.  

---

## **5.2 Rendering Lists in React**  
Lists in React are created using the `.map()` method, which transforms an array into JSX elements.  

### **5.2.1 Simple List Rendering Example**  
```jsx
function FruitsList() {
  const fruits = ["Apple", "Banana", "Cherry"];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

export default FruitsList;
```
✅ `.map()` loops over `fruits` array and renders each item as `<li>`.  
✅ The `key` prop ensures React efficiently updates the list.  

---

### **5.2.2 Rendering a List of Objects**  
```jsx
function UserList() {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UserList;
```
✅ Always use **unique keys** (like `user.id`) instead of index when available.  

---

### **5.2.3 Dynamic List with Filtering**  
We can filter lists dynamically before rendering them.  

#### **Example: Show Only Users Older Than 18**
```jsx
function UserList() {
  const users = [
    { id: 1, name: "Alice", age: 22 },
    { id: 2, name: "Bob", age: 17 },
    { id: 3, name: "Charlie", age: 19 },
  ];

  const filteredUsers = users.filter((user) => user.age >= 18);

  return (
    <ul>
      {filteredUsers.map((user) => (
        <li key={user.id}>{user.name} (Age: {user.age})</li>
      ))}
    </ul>
  );
}

export default UserList;
```
✅ `.filter()` removes users below 18 before rendering.  

---

## **5.3 Handling Dynamic Lists with State**  
Lists often come from API calls or user inputs. We can manage them using **state**.  

### **5.3.1 Adding Items to a List**  
```jsx
import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState(["Buy groceries", "Read a book"]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]); // Add new task to list
      setNewTask(""); // Clear input field
    }
  };

  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}

export default TodoList;
```
✅ The **input field captures user input** and updates state.  
✅ Clicking **"Add Task"** updates the list dynamically.  

---

### **5.3.2 Removing Items from a List**  
```jsx
import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState(["Buy groceries", "Read a book"]);

  const removeTask = (indexToRemove) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
```
✅ Clicking "Remove" deletes the item from the list using `.filter()`.  

---

## **5.4 First Project: Dynamic To-Do List**  
🎯 **Goal:** Create a to-do list with add & remove functionality.  

### **Step 1: Create `TodoApp.js`**
```jsx
import React, { useState } from "react";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const removeTask = (indexToRemove) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
```
✅ This project lets users add and remove tasks dynamically.  

---

## **🚀 Chapter Summary**  
✔ **Conditional Rendering** – Using `if-else`, ternary operator, and `&&`.  
✔ **Lists & Keys** – Rendering dynamic lists using `.map()`.  
✔ **Mapping Data** – Filtering and modifying lists dynamically.  
✔ **Project:** Built a **To-Do List App** to practice lists & state.  

---