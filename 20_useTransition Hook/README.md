## Chapter 20: `useTransition` Hook in React.js

---

### 20.1 What is `useTransition`?

* **`useTransition`** is a **React Hook** introduced in **React 18** as part of **Concurrent Features**.
* It allows us to **mark certain updates as “non-urgent” (transitions)** so they don’t block urgent updates like typing, clicking, or animations.
* **Normal state updates = urgent** (immediately reflect in UI).
* **Transition updates = non-urgent** (can be delayed without blocking UI).

---

### 20.2 Why useTransition?

👉 Imagine a **search box**:

* You type fast → urgent update (typing should not lag).
* But filtering a **large list** is slow → non-urgent (transition).

With `useTransition`, React ensures typing feels **smooth** while delaying heavy work in the background.

---

### 20.3 Syntax

```jsx
const [isPending, startTransition] = useTransition();

startTransition(() => {
  // non-urgent state update
});
```

* **isPending** → Boolean value (`true` if transition is in progress).
* **startTransition(callback)** → Wrap non-urgent state updates here.

---

### 20.4 Example: Button with Loader

```jsx
import { useState, useTransition } from "react";

function App() {
  const [pending, startTransition] = useTransition();

  const handleButton = () => {
    startTransition(async () => {
      await new Promise(res => setTimeout(res, 5000)); // simulate delay
    });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>useTransition Hook in React.js</h1>

      {pending ? (
        <img
          style={{ width: "100px" }}
          src="https://res.cloudinary.com/bytesizedpieces/image/upload/v1656084931/article/a-how-to-guide-on-making-an-animated-loading-image-for-a-website/animated_loader_gif_n6b5x0.gif"
          alt="loading"
        />
      ) : (
        <p>Not Loading</p>
      )}

      <br />
      <button disabled={pending} onClick={handleButton}>
        {pending ? "Loading..." : "Click"}
      </button>
    </div>
  );
}

export default App;
```

✅ Button becomes disabled while transition is running.
✅ Loader appears until transition finishes.

---

### 20.5 Example: Smooth Search with useTransition

```jsx
import { useState, useTransition } from "react";

function SearchApp() {
  const [query, setQuery] = useState("");
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const items = Array.from({ length: 10000 }, (_, i) => `Item ${i}`);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value); // urgent update (typing stays smooth)

    startTransition(() => {
      const filtered = items.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setList(filtered);
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Search with useTransition</h2>
      <input type="text" value={query} onChange={handleChange} />

      {isPending && <p>Loading...</p>}

      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchApp;
```

✅ Typing stays smooth.
✅ Heavy filtering happens in the background.
✅ `isPending` shows loading status.

---

### 20.6 Interview Questions

❓ **Q1. What is `useTransition`?**
➡️ A hook in React 18 to mark updates as **non-urgent** so they don’t block urgent UI updates.

❓ **Q2. What are urgent vs non-urgent updates?**
➡️ Urgent → typing, button clicks (must be instant).
➡️ Non-urgent → data fetching, filtering, rendering big lists.

❓ **Q3. What does `isPending` mean?**
➡️ It’s `true` while transition is ongoing, useful for showing a **loader**.

❓ **Q4. Can you use multiple transitions in one component?**
➡️ ✅ Yes, you can use multiple `startTransition` calls for different non-urgent updates.

❓ **Q5. What problem does `useTransition` solve?**
➡️ Prevents UI **lagging/freezing** when heavy state updates happen.

---