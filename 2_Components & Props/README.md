# **Chapter 2: Components & Props**  

## **2.1 What are Components?**  
In React, **components** are reusable building blocks that define parts of the user interface. A React application is made up of multiple components that work together.  

### **Types of Components in React**  
React has two main types of components:  

1️⃣ **Functional Components** (Modern, Recommended)  
2️⃣ **Class Components** (Older, Used in Legacy Code)  

---

## **2.2 Functional Components (Modern Approach)**  
A functional component is simply a JavaScript function that returns JSX (UI). It is the preferred approach in modern React because it is simpler and works with **React Hooks**.  

### **Example of a Functional Component**  
```jsx
import React from "react";

function Greeting() {
  return <h1>Hello, React!</h1>;
}

export default Greeting;
```

### **Rendering a Functional Component in `App.js`**  
```jsx
import React from "react";
import Greeting from "./Greeting"; // Importing the component

function App() {
  return (
    <div>
      <Greeting />
    </div>
  );
}

export default App;
```

✅ Functional components **do not** have their own state (before Hooks). They are just functions returning JSX.  

---

## **2.3 Class Components (Older Approach)**  
Class components were the standard before React Hooks were introduced. They use ES6 **classes** and require the `render()` method to return JSX.  

### **Example of a Class Component**  
```jsx
import React, { Component } from "react";

class Greeting extends Component {
  render() {
    return <h1>Hello, React!</h1>;
  }
}

export default Greeting;
```

### **Rendering a Class Component in `App.js`**  
```jsx
import React from "react";
import Greeting from "./Greeting";

function App() {
  return (
    <div>
      <Greeting />
    </div>
  );
}

export default App;
```

✅ Class components **have lifecycle methods** and **state** (before Hooks). However, modern React prefers **functional components** with **Hooks** for state management.  

---

## **2.4 Props (Passing Data to Components)**  
**Props** (short for "properties") allow you to pass data from a parent component to a child component. They make components reusable and dynamic.  

### **Using Props in a Functional Component**  
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Welcome;
```

### **Passing Props from Parent to Child**  
```jsx
import React from "react";
import Welcome from "./Welcome";

function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
    </div>
  );
}

export default App;
```
✅ The `name` prop changes the output dynamically.  

---

## **2.5 Props in Class Components**  
```jsx
import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

export default Welcome;
```
📌 In class components, **props are accessed using `this.props`** instead of `props`.  

---

## **2.6 Default Props & Prop Types**  
### **Setting Default Props**  
If a prop is missing, we can provide a default value.  
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

Welcome.defaultProps = {
  name: "Guest",
};

export default Welcome;
```
✅ If `name` is not provided, it defaults to `"Guest"`.  

---

### **PropTypes (Type Checking for Props)**  
PropTypes help catch errors by enforcing the correct data types for props.  

```jsx
import PropTypes from "prop-types";

function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

Welcome.propTypes = {
  name: PropTypes.string.isRequired, // name must be a string
};

export default Welcome;
```
✅ If `name` is missing or not a string, a warning appears in the console.  

---

## **2.7 Reusability with Props**  
By using props, we can create **reusable** components that can be used multiple times with different data.  

### **Example: Creating a Reusable Button Component**  
```jsx
function Button(props) {
  return <button>{props.label}</button>;
}

export default Button;
```
```jsx
import Button from "./Button";

function App() {
  return (
    <div>
      <Button label="Submit" />
      <Button label="Cancel" />
      <Button label="Download" />
    </div>
  );
}

export default App;
```
✅ The `Button` component is used multiple times with different `label` props.  

---

## **2.8 First Project: Profile Card Component**  
### 🎯 **Goal:** Create a reusable `ProfileCard` component that displays user info dynamically.  

### **Step 1: Create `ProfileCard.js`**  
```jsx
function ProfileCard(props) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Location: {props.location}</p>
    </div>
  );
}

export default ProfileCard;
```

### **Step 2: Use `ProfileCard` in `App.js`**  
```jsx
import React from "react";
import ProfileCard from "./ProfileCard";

function App() {
  return (
    <div>
      <h1>User Profiles</h1>
      <ProfileCard name="Alice" age={25} location="New York" />
      <ProfileCard name="Bob" age={30} location="Los Angeles" />
    </div>
  );
}

export default App;
```
✅ The `ProfileCard` component is **reused** with different user data.  

---

## **🚀 Chapter Summary**  
✔ React components are **reusable building blocks** of an app.  
✔ There are **functional** and **class components** (functional components are preferred).  
✔ **Props** allow data to be passed from a **parent** to a **child** component.  
✔ We can set **default props** and use **PropTypes** for type checking.  
✔ Props enable **reusability**, making React apps more efficient.  
✔ We built a **ProfileCard** project to practice props and reusability.  

---

## **📌 Next Chapter: State & Lifecycle**  
In the next chapter, we'll dive into **state, useState Hook, class component lifecycle methods, and real-time updates**. Ready to move on? 🚀