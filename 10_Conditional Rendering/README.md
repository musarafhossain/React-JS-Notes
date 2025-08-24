## Chapter 10: Conditional Rendering

---

### 10.1 What is Conditional Rendering?

* **Conditional Rendering** means **showing different UI** based on conditions.
* In React, you use **JavaScript conditions (if, ternary, logical operators)** inside JSX.
* Example: Show a **Login button** if the user is not logged in, otherwise show **Logout button**.

---

### 10.2 Why Conditional Rendering is Needed?

* UI should **respond to state or props**.
* Examples:

  * Show “Loading…” while fetching data.
  * Display cart items if available, else show “Cart is empty”.
  * Render admin panel only if user is an admin.

---

### 10.3 Methods of Conditional Rendering

#### (1) **If/Else Outside JSX**

```jsx
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h2>Welcome Back!</h2>;
  } else {
    return <h2>Please Login</h2>;
  }
}
```

---

#### (2) **Ternary Operator (`condition ? true : false`)**

```jsx
function Greeting({ isLoggedIn }) {
  return (
    <h2>{isLoggedIn ? "Welcome Back!" : "Please Login"}</h2>
  );
}
```

---

#### (3) **Logical AND (`&&`)**

* If condition is true → show UI.
* If condition is false → render nothing.

```jsx
function Messages({ hasMessages }) {
  return (
    <div>
      <h2>Inbox</h2>
      {hasMessages && <p>You have new messages!</p>}
    </div>
  );
}
```

---

#### (4) **Switch Case Rendering**

```jsx
function Status({ status }) {
  switch (status) {
    case "loading":
      return <p>Loading...</p>;
    case "success":
      return <p>Data Loaded ✅</p>;
    case "error":
      return <p>Error ❌</p>;
    default:
      return <p>Unknown State</p>;
  }
}
```

---

#### (5) **Element Variables (Store JSX in variable)**

```jsx
function Greeting({ isLoggedIn }) {
  let content;
  if (isLoggedIn) {
    content = <h2>Welcome Back!</h2>;
  } else {
    content = <h2>Please Login</h2>;
  }
  return <div>{content}</div>;
}
```

---

### 10.4 Example: Login/Logout Button

```jsx
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h1>Conditional Rendering Example</h1>
      {isLoggedIn ? (
        <div>
          <h2>Welcome Back!</h2>
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Please Login</h2>
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        </div>
      )}
    </div>
  );
}

export default App;
```

✅ UI changes based on `isLoggedIn` state.

---

### 10.5 Interview Questions

**Q1: What is Conditional Rendering in React?**
➡ Showing different UI based on conditions (state/props).

**Q2: Which operators are used for conditional rendering in JSX?**
➡ `if-else`, `ternary ( ? : )`, `&&`, `switch`.

**Q3: What is the difference between `&&` and ternary operator in React?**

* `&&` → Renders something **only if condition is true**, otherwise renders nothing.
* Ternary → Handles **both true and false cases**.

---