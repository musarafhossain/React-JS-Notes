# **Chapter 4: Handling Events & Forms in React**  

## **4.1 Handling Events in React**  
React uses **synthetic events**, which are wrappers around native browser events for consistency across all browsers. Event handling in React is similar to JavaScript, but with some differences:  

🔹 Event handlers are written in **camelCase** (`onClick` instead of `onclick`).  
🔹 You pass a **function reference** instead of a string (`onClick={handleClick}` instead of `onClick="handleClick()"`).  
🔹 In class components, event handlers need `this` binding.  

---

### **4.1.1 Handling Click Events**  
#### **Functional Component Example**  
```jsx
function ClickButton() {
  const handleClick = () => {
    alert("Button Clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}

export default ClickButton;
```

#### **Class Component Example**  
```jsx
import React, { Component } from "react";

class ClickButton extends Component {
  handleClick() {
    alert("Button Clicked!");
  }

  render() {
    return <button onClick={this.handleClick}>Click Me</button>;
  }
}

export default ClickButton;
```
✅ In class components, `handleClick` is a regular method.  
✅ If accessing `this`, use `this.handleClick = this.handleClick.bind(this);` in the constructor.  

---

### **4.1.2 Handling Events with Parameters**  
#### **Passing Parameters in Functional Components**  
```jsx
function ClickButton() {
  const handleClick = (name) => {
    alert(`Hello, ${name}!`);
  };

  return <button onClick={() => handleClick("Alice")}>Click Me</button>;
}

export default ClickButton;
```

#### **Passing Parameters in Class Components**  
```jsx
import React, { Component } from "react";

class ClickButton extends Component {
  handleClick(name) {
    alert(`Hello, ${name}!`);
  }

  render() {
    return <button onClick={() => this.handleClick("Alice")}>Click Me</button>;
  }
}

export default ClickButton;
```
✅ Using an **arrow function** inside `onClick` allows passing arguments.  

---

## **4.2 Handling Forms in React**  
Forms in React work differently because form elements like `<input>` maintain their own state. React uses **controlled components** to manage form inputs through state.  

### **4.2.1 Controlled Components (Recommended Approach)**  
A **controlled component** has its form elements controlled by React state.  

#### **Example: Controlled Input Field**
```jsx
import React, { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value); // Updates state
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted Name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledForm;
```
✅ The input field value is controlled by `name` state.  
✅ `onChange` updates state, keeping React and the input field in sync.  

---

### **4.2.2 Uncontrolled Components (Direct DOM Access)**  
An **uncontrolled component** does not store form data in React state but directly accesses it using `useRef` or `ref`.  

#### **Example: Uncontrolled Input with useRef**  
```jsx
import React, { useRef } from "react";

function UncontrolledForm() {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted Name: ${inputRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;
```
✅ `useRef` allows direct access to the DOM element.  
✅ This is useful when integrating with **non-React code** (e.g., third-party libraries).  

---

### **4.2.3 Handling Multiple Inputs in Forms**  
If a form has multiple fields, we can use a **single state object** to manage all values.  

#### **Example: Form with Multiple Inputs**  
```jsx
import React, { useState } from "react";

function MultiInputForm() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${formData.name}, Email: ${formData.email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MultiInputForm;
```
✅ `name` attributes in `<input>` help update the correct field.  
✅ The spread operator `...formData` ensures previous values are not lost.  

---

### **4.2.4 Handling Checkboxes, Radio Buttons, and Select Dropdowns**  
#### **Example: Handling Checkboxes**  
```jsx
import React, { useState } from "react";

function CheckboxExample() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <label>
        <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
        Subscribe to newsletter
      </label>
      <p>{isChecked ? "Subscribed" : "Not Subscribed"}</p>
    </div>
  );
}

export default CheckboxExample;
```

#### **Example: Handling Radio Buttons**
```jsx
import React, { useState } from "react";

function RadioButtonExample() {
  const [gender, setGender] = useState("");

  return (
    <div>
      <label>
        <input type="radio" value="Male" checked={gender === "Male"} onChange={(e) => setGender(e.target.value)} />
        Male
      </label>
      <label>
        <input type="radio" value="Female" checked={gender === "Female"} onChange={(e) => setGender(e.target.value)} />
        Female
      </label>
      <p>Selected: {gender}</p>
    </div>
  );
}

export default RadioButtonExample;
```

#### **Example: Handling Select Dropdowns**
```jsx
import React, { useState } from "react";

function SelectExample() {
  const [color, setColor] = useState("Red");

  return (
    <div>
      <select value={color} onChange={(e) => setColor(e.target.value)}>
        <option value="Red">Red</option>
        <option value="Blue">Blue</option>
        <option value="Green">Green</option>
      </select>
      <p>Selected Color: {color}</p>
    </div>
  );
}

export default SelectExample;
```

---

## **4.3 First Project: Login Form**  
🎯 **Goal:** Build a controlled form that captures **email & password** and displays an alert on submission.  

### **Step 1: Create `LoginForm.js`**  
```jsx
import React, { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Email: ${email}, Password: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
```

---

## **🚀 Chapter Summary**  
✔ React handles events with **camelCase** and function references.  
✔ Forms can be **controlled** (React state) or **uncontrolled** (useRef).  
✔ We built a **Login Form** as a practical example.  

---

## **📌 Next Chapter: Conditional Rendering & Lists**  
We'll cover **if-else, ternary operators, and rendering lists dynamically**. Ready to move on? 🚀