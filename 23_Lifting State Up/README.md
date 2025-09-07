## ✅ Chapter 23: Lifting State Up in React.js

---

### 23.1 What is Lifting State Up?

* In React, **Lifting State Up** means **moving the state to the nearest common parent** component so that multiple child components can share and use it.
* Instead of each component keeping its own copy of the data, the **parent stores the state**, and children communicate via **props**.
* This avoids duplication and keeps data in **sync across components**.

---

### 23.2 Why Lifting State Up is Needed?

* To share data between sibling components.
* To keep a **single source of truth** for state.
* To make UI updates consistent across multiple components.

---

### 23.3 Example: Two Components Sharing State

👉 We have two components:

1. **AddUser** → Takes input (child component).
2. **DisplayUser** → Displays the entered name (child component).
3. **App** → Common parent that manages the state.

```jsx
import { useState } from "react";
import AddUser from "./AddUser";
import DisplayUser from "./DisplayUser";

function App() {
  const [user, setUser] = useState('');

  return (
    <div>
      <AddUser setUser={setUser} />
      <DisplayUser user={user} />
    </div>
  );
}
export default App;
```

---

### AddUser.js

```jsx
function AddUser({ setUser }) {
  return (
    <div>
      <h1>Add User</h1>
      <input 
        type="text" 
        onChange={(event) => setUser(event.target.value)} 
        placeholder="Enter User name" 
      />
      <hr />
    </div>
  );
}
export default AddUser;
```

---

### DisplayUser.js

```jsx
function DisplayUser({ user }) {
  return (
    <div>
      <h3>User Name: {user}</h3>
    </div>
  );
}
export default DisplayUser;
```

---

### 23.4 How It Works

* **State (`user`)** is kept in `App` (parent).
* `AddUser` updates the state via `setUser`.
* `DisplayUser` receives the updated `user` via props.
* Thus, both child components **share the same state** through the parent.

---

### 23.5 Interview Questions

❓ **Q1. What is Lifting State Up?**
➡️ Moving state from child to parent so that it can be shared between multiple children.

❓ **Q2. Why do we need to lift state up in React?**
➡️ To avoid duplication of state, keep data consistent, and make a single source of truth.

❓ **Q3. How do you pass data from child to parent in React?**
➡️ By passing a callback function (e.g., `setUser`) from parent to child, and child calls it to update state.

❓ **Q4. What’s the difference between lifting state up and using Context API?**
➡️ Lifting state up works for **local sharing** between few components.
➡️ Context API is better for **global sharing** (deeply nested components).

❓ **Q5. Can we avoid lifting state up?**
➡️ If state is needed by multiple children → ❌ No.
➡️ If state is needed only inside one component → ✅ Keep it local.

---