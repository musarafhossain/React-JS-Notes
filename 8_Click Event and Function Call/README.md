## Chapter 8: Click Event and Function Call

---

### 8.1 Difference Between JS Function Call and React Function Call

| **Aspect**         | **JavaScript Function Call**                    | **React Function Call (with JSX)**                                    |
| ------------------ | ----------------------------------------------- | --------------------------------------------------------------------- |
| **Syntax**         | `myFunction()`                                  | `onClick={myFunction}`                                                |
| **Execution**      | Runs immediately when code executes             | Runs **only when user clicks**                                        |
| **Example**        | `<button onclick="myFunction()">Click</button>` | `<button onClick={myFunction}>Click</button>`                         |
| **Inline Support** | Allowed in JS as string                         | Allowed in React with arrow function (`onClick={() => myFunction()}`) |

👉 In **React**, we use **camelCase (`onClick`)** instead of lowercase (`onclick`).

---

### 8.2 Make a Function

```jsx
function showMessage() {
  alert("Hello, this is a React function!");
}
```

---

### 8.3 Make Button and Click Event

```jsx
function App() {
  function showMessage() {
    alert("Button Clicked!");
  }

  return <button onClick={showMessage}>Click Me</button>;
}
```

✅ When user clicks → function runs.

---

### 8.4 Call Function on Click Event

* Correct Way:

  ```jsx
  <button onClick={showMessage}>Click Me</button>
  ```
* ❌ Wrong Way (executes immediately, not on click):

  ```jsx
  <button onClick={showMessage()}>Click Me</button>
  ```

---

### 8.5 Call Arrow Function

```jsx
function App() {
  const showMessage = () => {
    alert("Arrow Function Clicked!");
  };

  return <button onClick={showMessage}>Click Me</button>;
}
```

---

### 8.6 Pass Params with Function Call

✅ Using Arrow Function Wrapper:

```jsx
function App() {
  function greetUser(name) {
    alert("Hello, " + name);
  }

  return (
    <div>
      <button onClick={() => greetUser("Musaraf")}>Greet Musaraf</button>
      <button onClick={() => greetUser("John")}>Greet John</button>
    </div>
  );
}
```

---

### 8.7 Interview Question

**Q: Why don’t we call the function directly in React (`onClick={myFunction()}`)?**

* Because it executes **immediately** during render, instead of waiting for the user click.
* Correct way is to pass a **reference** (`onClick={myFunction}`) or use an **arrow function** (`onClick={() => myFunction(param)}`).

---