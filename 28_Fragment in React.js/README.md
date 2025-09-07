## ✅ Chapter 28: Fragment in React.js

---

### 28.1 What is Fragment?

* A **Fragment** in React is a wrapper that lets you group **multiple elements** without adding extra nodes (`<div>`, `<span>`, etc.) to the **DOM**.
* Syntax:

```jsx
<React.Fragment> ... </React.Fragment>
```

or shorthand:

```jsx
<> ... </>
```

---

### 28.2 Issues Without Fragment

* In React, a component can **only return one parent element**.
* If you try to return multiple elements without wrapping them, you’ll get an error.

❌ Example without Fragment:

```jsx
function App() {
  return (
    <h1>Hello</h1>
    <p>Welcome to React</p>
  ); // ❌ Error: Adjacent JSX elements must be wrapped
}
```

✅ Fixed with Fragment:

```jsx
function App() {
  return (
    <>
      <h1>Hello</h1>
      <p>Welcome to React</p>
    </>
  );
}
```

---

### 28.3 Example

```jsx
import React from "react";

function App() {
  return (
    <>
      <h2>React Fragment Example</h2>
      <p>This is paragraph one.</p>
      <p>This is paragraph two.</p>
    </>
  );
}

export default App;
```

* Here, `<>...</>` (Fragment shorthand) wraps multiple elements **without creating extra divs** in the DOM.

💡 Output DOM (no extra divs):

```html
<h2>React Fragment Example</h2>
<p>This is paragraph one.</p>
<p>This is paragraph two.</p>
```

---

### 28.4 Interview Questions

❓ **Q1. What is a Fragment in React?**
➡️ A Fragment lets you group multiple elements without adding extra nodes to the DOM.

❓ **Q2. Difference between Fragment and a `<div>` wrapper?**
➡️ `<div>` creates an extra node in the DOM, while Fragment does not.

❓ **Q3. What are two ways to write Fragment in React?**
➡️ `<React.Fragment>...</React.Fragment>` and shorthand `<>...</>`.

❓ **Q4. Can a Fragment have attributes?**
➡️ Yes, but only **`key`** attribute is allowed (useful in lists).

❓ **Q5. When should you prefer Fragment over `<div>`?**
➡️ When you don’t want extra nodes in the DOM (e.g., table rows, cleaner structure).

---