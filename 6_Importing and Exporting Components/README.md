## Chapter 6: Importing and Exporting Components

### 6.1 Why Do We Need to Import and Export Components?

* React applications are built with **multiple components**.
* To **reuse** a component in another file, you must **export it** from where it is defined and **import it** where you want to use it.
* This makes code **modular, clean, and maintainable**.

---

### 6.2 Make a New File for a Component

Example: Create a new file → `src/Header.jsx`

```jsx
function Header() {
  return <h1>Welcome to My React App</h1>;
}

export default Header;  // exporting
```

---

### 6.3 Exporting Components

#### 1) **Default Export**

* Only **one default export per file**.
* Example:

  ```jsx
  function Footer() {
    return <p>Copyright 2025 ©</p>;
  }
  export default Footer;
  ```

---

#### 2) **Named Export**

* Can export **multiple items** from one file.
* Example (`utils.js`):

  ```jsx
  export function add(a, b) {
    return a + b;
  }

  export function multiply(a, b) {
    return a * b;
  }
  ```

---

#### 3) **Multiple Export (Mix of Named + Default)**

* A file can have **1 default** and **many named exports**.
* Example (`math.js`):

  ```jsx
  export default function divide(a, b) {
    return a / b;
  }

  export function subtract(a, b) {
    return a - b;
  }
  ```

---

### 6.4 Importing Components

#### Import Default Export

```jsx
import Header from "./Header";   // No curly braces
```

#### Import Named Export

```jsx
import { add, multiply } from "./utils";   // Use curly braces
```

#### Import Both (Default + Named)

```jsx
import divide, { subtract } from "./math";
```

---

### Example in `App.jsx`

```jsx
import Header from "./Header";            // default export
import Footer from "./Footer";            // default export
import { add, multiply } from "./utils";  // named export
import divide, { subtract } from "./math"; // mixed export

function App() {
  return (
    <div>
      <Header />
      <p>Add: {add(5, 3)}</p>
      <p>Multiply: {multiply(4, 2)}</p>
      <p>Divide: {divide(10, 2)}</p>
      <p>Subtract: {subtract(10, 4)}</p>
      <Footer />
    </div>
  );
}

export default App;
```

✅ Output: Renders `Header` and `Footer` + shows math results.

---