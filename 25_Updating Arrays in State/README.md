## ✅ Chapter 25: Updating Arrays in State

---

### 25.1 Make Array in State

You can store an **array** in React state using `useState`.

```jsx
import { useState } from "react";

function App() {
  const [fruits, setFruits] = useState(["Apple", "Banana", "Mango"]);

  return (
    <div>
      <h2>Fruit List</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

---

### 25.2 Display Array Data on UI

Use the **`.map()`** function to display arrays in JSX.

```jsx
<ul>
  {fruits.map((fruit, index) => (
    <li key={index}>{fruit}</li>
  ))}
</ul>
```

---

### 25.3 Update Array Data

Since React state must be immutable, we use **spread operator (`...`)** to create a new array when updating.

#### Add Item to Array

```jsx
<button onClick={() => setFruits([...fruits, "Orange"])}>Add Orange</button>
```

#### Remove Item from Array

```jsx
<button onClick={() => setFruits(fruits.filter(fruit => fruit !== "Banana"))}>
  Remove Banana
</button>
```

#### Update Specific Item

```jsx
<button
  onClick={() =>
    setFruits(fruits.map(fruit => (fruit === "Apple" ? "Green Apple" : fruit)))
  }
>
  Update Apple
</button>
```

---

### 25.4 Update Object of Array

When the array contains **objects**, you need to map and update the required object.

```jsx
function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Alice", age: 30 },
    { id: 3, name: "Bob", age: 28 }
  ]);

  const updateAge = (id, newAge) => {
    setUsers(
      users.map(user =>
        user.id === id ? { ...user, age: newAge } : user
      )
    );
  };

  return (
    <div>
      <h2>User List</h2>
      {users.map(user => (
        <p key={user.id}>
          {user.name} - {user.age} years
          <button onClick={() => updateAge(user.id, user.age + 1)}>
            Increase Age
          </button>
        </p>
      ))}
    </div>
  );
}

export default App;
```

✅ Here, we used `map()` + **spread operator** to update a specific object inside the array.

---

### 25.5 Interview Questions

❓ **Q1. Can we directly modify an array in state using `push` or `splice`?**
➡️ ❌ No, because they mutate the original array. Always return a **new array** with `setState`.

❓ **Q2. How do you add a new item to an array in state?**
➡️ Use spread operator: `setState([...state, newItem])`.

❓ **Q3. How do you update a specific item inside an array in state?**
➡️ Use `map()` to create a new array, update only the matching item.

❓ **Q4. How do you remove an item from an array in state?**
➡️ Use `filter()` to return a new array without the item.

❓ **Q5. Which is better for state: arrays of objects or normalized state?**
➡️ **Normalized state** (flattened structure) is better for performance in large apps, but arrays of objects are fine for small apps.

---