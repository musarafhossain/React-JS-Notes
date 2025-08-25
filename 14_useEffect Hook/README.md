## Chapter 14: `useEffect` Hook

---

### 14.1 What is `useEffect`?

* `useEffect` is a React Hook used to handle **side effects** in functional components.
* **Side effects** = Anything that affects something outside the function scope (e.g., data fetching, DOM updates, event listeners, timers).
* Without `useEffect`, functional components would re-run logic **every render** (bad performance).

👉 `useEffect` allows us to **control when** certain logic should run.

---

### 14.2 Examples we will cover in this part

* `useEffect` with **state**
* `useEffect` with **props**
* Cleaning up side effects (inside & outside component)
* Fetching data with `useEffect`
* Using `useEffect` as lifecycle methods (`componentDidMount`, `componentDidUpdate`, `componentWillUnmount`)
* DOM manipulation
* Preventing extra re-renders with dependencies

---

### 14.3 Syntax of `useEffect`

```jsx
useEffect(() => {
  // Side effect logic here

  return () => {
    // Cleanup logic (optional)
  };
}, [dependencies]);
```

* **Callback** → Runs after render.
* **Dependencies array `[]`** → Controls when effect runs:

  * `[]` → Run once (like `componentDidMount`).
  * `[state/props]` → Run whenever dependency changes.
  * No array → Run after every render.
* **Cleanup function** → Runs when component unmounts (or before next effect).

---

### 14.4 `useEffect` with State

```jsx
import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]); // runs when 'count' changes

  return (
    <div>
      <h2>Counter Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Counter;
```

---

### 14.5 `useEffect` with Props

```jsx
function Child({ value }) {
  useEffect(() => {
    console.log("Prop changed:", value);
  }, [value]); // runs when props change

  return <h3>Value: {value}</h3>;
}
```

---

### 14.6 Removing Side Effects

#### Inside Component (Example: Timer Cleanup)

```jsx
function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return <p>Timer: {seconds}s</p>;
}
```

---

#### Outside Component (API abort example)

```jsx
function DataFetcher() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://jsonplaceholder.typicode.com/posts", {
      signal: controller.signal,
    })
      .then(res => res.json())
      .then(setData);

    return () => controller.abort(); // cancel fetch on unmount
  }, []);

  return <div>{data.length} posts loaded</div>;
}
```

---

### 14.7 Fetching Data with `useEffect`

```jsx
function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    }
    fetchUsers();
  }, []); // run once

  return (
    <ul>
      {users.map(u => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}
```

---

### 14.8 `useEffect` as Lifecycle Methods

#### Lifecycle in React Class Components

1. **Mounting** → `componentDidMount`
2. **Updating** → `componentDidUpdate`
3. **Unmounting** → `componentWillUnmount`

#### Equivalent in Functional Components with `useEffect`

```jsx
function LifecycleDemo({ value }) {
  // componentDidMount
  useEffect(() => {
    console.log("Mounted");
  }, []);

  // componentDidUpdate (runs when value changes)
  useEffect(() => {
    console.log("Updated: ", value);
  }, [value]);

  // componentWillUnmount
  useEffect(() => {
    return () => {
      console.log("Unmounted");
    };
  }, []);

  return <h2>Value: {value}</h2>;
}
```

---

### 14.9 DOM Manipulation Example

```jsx
function DomEffect() {
  const [color, setColor] = useState("blue");

  useEffect(() => {
    document.title = `Color: ${color}`;
  }, [color]);

  return (
    <div>
      <h2 style={{ color }}>Current Color: {color}</h2>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("green")}>Green</button>
    </div>
  );
}
```

---

### 14.10 Handling Props Side Effect

```jsx
function Child({ number }) {
  const [double, setDouble] = useState(0);

  useEffect(() => {
    setDouble(number * 2);
  }, [number]); // effect runs when props change

  return <p>Double Value: {double}</p>;
}
```

---

### 14.11 Interview Questions

❓ **Q1. What is `useEffect` used for?**
➡️ To handle side effects like API calls, timers, DOM manipulation, subscriptions.

❓ **Q2. What happens if you don’t provide a dependency array?**
➡️ The effect runs after **every render**.

❓ **Q3. What does an empty dependency array `[]` mean?**
➡️ Runs only **once** (like `componentDidMount`).

❓ **Q4. How do you clean up side effects in `useEffect`?**
➡️ By returning a **cleanup function** inside the effect.

❓ **Q5. How is `useEffect` similar to lifecycle methods?**
➡️ `useEffect(() => {}, [])` → `componentDidMount`
➡️ `useEffect(() => {}, [dep])` → `componentDidUpdate`
➡️ `useEffect(() => { return () => {} }, [])` → `componentWillUnmount`

❓ **Q6. Can `useEffect` run synchronously?**
➡️ No, it runs asynchronously after paint. If you need sync, use `useLayoutEffect`.

---