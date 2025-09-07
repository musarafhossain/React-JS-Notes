## Chapter 22: **Derived State in React.js**

---

### 22.1 What is Derived State?

* **Derived state** is data that can be **calculated** from existing **state** or **props**, instead of being stored separately in state.
* Instead of creating multiple states (which may cause **bugs** or **unnecessary re-renders**), we derive values from already available state.

📌 **Key Point**:

* Derived state is usually stored in **variables** (or constants), **not in `useState`**.
* Examples: total count, last item, filtered list, formatted string, unique values, etc.

---

### 22.2 Why Not Store Derived State in `useState`?

❌ Wrong way:

```jsx
const [count, setCount] = useState(users.length); 
```

* Problem → `count` will become outdated if we update `users` but forget to update `count`.

✅ Correct way:

```jsx
const count = users.length; // derived from users
```

---

### 22.3 Example: Derived State

```jsx
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");

  const handleAddUsers = () => {
    if (user.trim() !== "") {
      setUsers([...users, user]);
      setUser(""); // clear input
    }
  };

  // Derived states (no extra useState needed)
  const total = users.length;
  const last = users[users.length - 1];
  const unique = [...new Set(users)].length;

  return (
    <div>
      <h2>Total User : {total} </h2>
      <h2>Last User : {last || "None"}</h2>
      <h2>Unique Total User : {unique}</h2>

      <input
        type="text"
        value={user}
        onChange={(event) => setUser(event.target.value)}
        placeholder="add new user"
      />
      <button onClick={handleAddUsers}>Add User</button>

      {users.map((item, index) => (
        <h4 key={index}>{item}</h4>
      ))}
    </div>
  );
}

export default App;
```

✅ Here,

* `total` → derived from `users.length`
* `last` → derived from `users[users.length-1]`
* `unique` → derived from `new Set(users)`

We did **not** create extra states like `total`, `last`, or `unique` → they are calculated on render.

---

### 22.4 How Derived State Improves Performance

1. **Prevents Redundant State**

   * Avoids managing multiple states for the same data → less code, fewer bugs.

2. **Always Fresh Values**

   * Derived values are always recalculated from the current state.
   * No risk of stale or outdated state.

3. **Reduces Re-renders**

   * If you store `total` in `useState`, updating both `users` and `total` would trigger **two re-renders**.
   * With derived state, only `users` updates → derived values update automatically.

4. **Simplifies Code**

   * Less `useState`, less `setState`, cleaner component logic.

---

### 22.5 Interview Questions

❓ **Q1. What is Derived State in React?**
➡️ Data that can be calculated from existing state or props, instead of being stored as separate state.

❓ **Q2. Why should we avoid extra state for derived values?**
➡️ It causes redundancy, bugs (stale values), and extra re-renders.

❓ **Q3. Give an example of Derived State.**
➡️ Example:

```jsx
const total = users.length; 
```

Instead of `useState` for `total`.

❓ **Q4. How does derived state improve performance?**
➡️ Reduces redundant states, prevents unnecessary re-renders, keeps values always in sync.

❓ **Q5. Can we use derived state with props?**
➡️ Yes. Example:

```jsx
const fullName = `${props.firstName} ${props.lastName}`;
```

---