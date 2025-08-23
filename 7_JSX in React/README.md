## Chapter 7: JSX in React

### 7.1 What is JSX?

* **JSX (JavaScript XML)** → A syntax extension for JavaScript.
* It looks like **HTML**, but works inside JavaScript.
* JSX makes it easier to create UI components.
* Example:

  ```jsx
  const element = <h1>Hello, JSX!</h1>;
  ```

---

### 7.2 Example of JSX

```jsx
function App() {
  return (
    <div>
      <h1>Welcome to React</h1>
      <p>This is written using JSX.</p>
    </div>
  );
}
export default App;
```

✅ JSX allows mixing **HTML + JavaScript** in the same file.

---

### 7.3 React Without JSX

JSX is optional. Without JSX, you must use `React.createElement()`.

```jsx
import React from "react";

function App() {
  return React.createElement(
    "div",
    {id: "rootEle", class: "parent"},
    React.createElement("h1", null, "Hello without JSX"),
    React.createElement("p", null, "This is React.createElement syntax")
  );
}
export default App;
```

👉 JSX is just **syntactic sugar** for `React.createElement()`.

---

### 7.4 JSX with Curly Braces {}

Curly braces allow embedding JavaScript expressions inside JSX.

#### a) Using Variable

```jsx
const name = "Musaraf";

function App() {
  return <h1>Hello, {name} 👋</h1>;
}
```

#### b) Using Condition

```jsx
const isLoggedIn = true;

function App() {
  return <h1>{isLoggedIn ? "Welcome back!" : "Please login"}</h1>;
}
```

#### c) Using Function

```jsx
function greet() {
  return "Good Morning!";
}

function App() {
  return <h2>{greet()}</h2>;
}
```

#### d) Using Operations

```jsx
function App() {
  return <h3>2 + 3 = {2 + 3}</h3>;
}
```

#### e) Using Object

```jsx
const user = { firstName: "John", lastName: "Doe" };

function App() {
  return <p>User: {user.firstName} {user.lastName}</p>;
}
```

#### f) Using Array

```jsx
const fruits = ["Apple", "Banana", "Mango"];

function App() {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}
```

---

### 7.5 JSX with HTML Tag Properties

You can use **attributes** like HTML but in **camelCase**.

```jsx
function App() {
  const imgURL = "https://via.placeholder.com/150";
  return (
    <div>
      <h1 style={{ color: "blue", fontSize: "24px" }}>Styled Heading</h1>
      <img src={imgURL} alt="Demo" />
      <button disabled={false}>Click Me</button>
    </div>
  );
}
```

---