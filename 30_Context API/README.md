## ✅ Chapter 30: Context API

---

### 30.1 What is Context API?

* The **Context API** allows data sharing across multiple components without **prop drilling**.
* It is used for **global state management** in React apps.

---

### 30.2 How Context API Works?

**3 main parts:**

1. **`createContext`** → Creates a Context object.
2. **`Provider`** → Provides data to children.
3. **`useContext`** → Consumes the data inside a component.

---

### 30.3 Example with Different Files

📂 **Project Structure**

```
src/
 ├── App.jsx
 ├── UserContext.js
 ├── ChildComponent.jsx
```

---

#### 📌 `UserContext.js`

```jsx
import { createContext } from "react";

// ✅ Create Context
const UserContext = createContext();

export default UserContext;
```

---

#### 📌 `App.jsx`

```jsx
import React, { useState } from "react";
import UserContext from "./UserContext";
import ChildComponent from "./ChildComponent";

function App() {
  const [user, setUser] = useState("Musaraf");

  return (
    // ✅ Provide Context
    <UserContext.Provider value={{ user, setUser }}>
      <div>
        <h1>Context API Example</h1>
        <ChildComponent />
      </div>
    </UserContext.Provider>
  );
}

export default App;
```

---

#### 📌 `ChildComponent.jsx`

```jsx
import React, { useContext } from "react";
import UserContext from "./UserContext";

function ChildComponent() {
  // ✅ Consume Context
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h2>Hello, {user}</h2>
      <button onClick={() => setUser("John Doe")}>Change User</button>
    </div>
  );
}

export default ChildComponent;
```

---

### 30.4 Update Data with Context API

* The `setUser` function is passed via Context.
* Any child component can update the parent’s state.
* In the example, clicking the button updates the **user** value globally.

---

### 30.5 Interview Questions

❓ **Q1. What problem does Context API solve?**
➡️ Avoids **prop drilling**.

❓ **Q2. What are the 3 main parts of Context API?**
➡️ `createContext`, `Provider`, `useContext`.

❓ **Q3. Can Context API replace Redux?**
➡️ For small projects, yes. For large apps with complex state, **Redux is better**.

❓ **Q4. Can multiple Contexts be used together?**
➡️ Yes, you can nest multiple Context Providers.

❓ **Q5. What happens if a component using `useContext` is not wrapped inside a `Provider`?**
➡️ It gets the **default value** of the context.

---