## ✅ Chapter 27: useId Hook

---

### 27.1 What is `useId` Hook?

* `useId` is a **React hook** that generates a **unique, stable ID** for elements.
* IDs generated with `useId` are:
  ✅ **Consistent** across server and client (important for SSR).
  ✅ **Unique** within the application.
  ✅ **Stable** → does not change between re-renders.

💡 Mainly used for **accessibility** (like linking `<label>` to `<input>`) or when you need unique IDs inside forms/lists.

---

### 27.2 How to use it?

* Import from React:

```jsx
import { useId } from "react";

const id = useId(); // generates a unique ID
```

* Attach the ID to HTML elements:

```jsx
<label htmlFor={id}>Name</label>
<input id={id} type="text" />
```

---

### 27.3 Example

```jsx
import { useId } from "react";

function App() {
  const nameId = useId();
  const emailId = useId();

  return (
    <div>
      <h2>useId Hook Example</h2>

      <div>
        <label htmlFor={nameId}>Name: </label>
        <input id={nameId} type="text" placeholder="Enter your name" />
      </div>

      <div>
        <label htmlFor={emailId}>Email: </label>
        <input id={emailId} type="email" placeholder="Enter your email" />
      </div>
    </div>
  );
}

export default App;
```

✅ Here, `useId` ensures both inputs have unique and stable IDs, even across re-renders or SSR.

---

### 27.4 Interview Questions

❓ **Q1. What is `useId` used for?**
➡️ To generate unique, stable IDs for elements (commonly for accessibility with labels, inputs, etc.).

❓ **Q2. Why not just use `Math.random()` or `Date.now()` for IDs?**
➡️ Those are not stable across server and client rendering, which can break SSR hydration. `useId` is stable and consistent.

❓ **Q3. Can we use `useId` inside loops?**
➡️ ✅ Yes, but each call must be consistent. If used inside dynamic loops, ensure the number of calls is the same between renders.

❓ **Q4. Does `useId` generate the same ID every time the component re-renders?**
➡️ ✅ Yes, it’s stable for the lifetime of the component.

❓ **Q5. In which React version was `useId` introduced?**
➡️ React **18**.

---