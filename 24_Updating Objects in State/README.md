## ✅ Chapter 24: Updating Objects in State

---

### 24.1 Make Object in State

In React, you can store **objects** in state using `useState`.

```jsx
import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    name: "John",
    age: 25,
    city: "New York"
  });

  return (
    <div>
      <h2>User Information</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>City: {user.city}</p>
    </div>
  );
}

export default App;
```

---

### 24.2 Display Object Values

* Access object properties using **dot notation** (`user.name`) or **bracket notation** (`user["name"]`).

```jsx
<p>Name: {user.name}</p>
<p>City: {user["city"]}</p>
```

---

### 24.3 Update Object Key

When updating objects in React state, always use the **spread operator (`...`)** to keep immutability.

```jsx
<button onClick={() => setUser({ ...user, age: user.age + 1 })}>
  Increase Age
</button>

<button onClick={() => setUser({ ...user, city: "Los Angeles" })}>
  Change City
</button>
```

✅ This way, React only updates the changed key (`age` or `city`) but keeps other keys unchanged.

---

### 24.4 Update Nested Object Key

For **nested objects**, you need to spread at each level.

```jsx
function App() {
  const [user, setUser] = useState({
    name: "Alice",
    address: {
      city: "London",
      zipcode: 12345
    }
  });

  return (
    <div>
      <h2>{user.name}</h2>
      <p>City: {user.address.city}</p>
      <p>Zipcode: {user.address.zipcode}</p>

      <button
        onClick={() =>
          setUser({
            ...user,
            address: { ...user.address, city: "Manchester" }
          })
        }
      >
        Update City
      </button>
    </div>
  );
}
```

⚠️ Always use **nested spread operators** when updating nested objects.

---

### 24.5 Interview Questions

❓ **Q1. Can we directly modify state objects in React?**
➡️ ❌ No, because React state must be immutable. Always use `setState` with a copy of the object.

❓ **Q2. How do you update an object in state?**
➡️ By spreading the old object (`...state`) and updating only the required property.

❓ **Q3. What happens if we directly change a property in state (e.g., `user.age = 30`)?**
➡️ React will not detect the change, and the component will not re-render.

❓ **Q4. How to update deeply nested objects in state?**
➡️ Use multiple spread operators (`...`) for each level or use state management libraries (like Redux, Zustand) for complex cases.

❓ **Q5. Is it better to keep deeply nested state objects in React?**
➡️ ❌ No. Try to keep state as **flat as possible** for better performance and easier updates.

---