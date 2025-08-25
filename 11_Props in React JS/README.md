## Chapter 11: Props in React JS

---

### 11.1 What are Props?

* **Props** stands for **Properties**.
* Props are used to **pass data from parent component to child component**.
* They are **read-only (immutable)** → child component **cannot change props**.
* Think of props like **function parameters**.

---

### 11.2 Why Use Props?

* To make components **reusable**.
* To send **dynamic data** (like text, numbers, arrays, objects, functions).
* To style components differently.

---

### 11.3 Example: Basic Props

```jsx
// Child Component
function Welcome({name}) {
  return <h2>Hello, {name}!</h2>;
}
```

```jsx
// Parent Component
function App() {
  return (
    <div>
      <Welcome name="Musaraf" />
      <Welcome name="John" />
      <Welcome name="Sarah" />
    </div>
  );
}

export default App;
```

✅ Output:

```
Hello, Musaraf!
Hello, John!
Hello, Sarah!
```

---

### 11.4 Passing Different Types of Data

#### (1) **Variable**

```jsx
function User({username}) {
  return <h3>User: {username}</h3>;
}
```

```jsx
function App() {
  const name = "Alice";
  return <User username={name} />;
}
```

---

#### (2) **Object**

```jsx
function Profile({user}) {
  return <p>{user.name} - {user.age} years old</p>;
}
```

```jsx
function App() {
  const user = { name: "David", age: 25 };
  return <Profile user={user} />;
}
```

---

#### (3) **Array**

```jsx
function Items(props) {
  return (
    <ul>
      {props.list.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  );
}
```

```jsx
function App() {
  const fruits = ["Apple", "Banana", "Mango"];
  return <Items list={fruits} />;
}
```

---

### 11.5 Props with Event (Pass Data on Click)

```jsx
function Button(props) {
  return <button onClick={() => props.onClick(props.message)}>Click Me</button>;
}
```

```jsx
function App() {
  const showMessage = (msg) => {
    alert(msg);
  };

  return <Button onClick={showMessage} message="Hello from Child!" />;
}
```

✅ When you click the button → alert will show `"Hello from Child!"`.

---

### 11.6 Default Props

```jsx
function Greeting(props) {
  return <h2>Hello, {props.name}</h2>;
}

Greeting.defaultProps = {
  name: "Guest"
};
```

```jsx
function App() {
  return (
    <div>
      <Greeting name="Musaraf" />
      <Greeting />
    </div>
  );
}
```

✅ Output:

```
Hello, Musaraf
Hello, Guest
```

---

### 11.7 Passing JSX with Props

```jsx
function Card({children}) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "5px" }}>
      {children}
    </div>
  );
}
```

```jsx
function App() {
  return (
    <div>
      <Card>
        <h3>This is inside Card</h3>
      </Card>
      <Card>
        <button>Click Me</button>
      </Card>
    </div>
  );
}
```

---

### 11.8 Change Style with Props

```jsx
function Button({backgroundColor, text}) {
  return (
    <button style={{ backgroundColor: backgroundColor, padding: "10px" }}>
      {text}
    </button>
  );
}
```

```jsx
function App() {
  return (
    <div>
      <Button text="Primary" color="blue" />
      <Button text="Danger" color="red" />
    </div>
  );
}
```

✅ Props help make **customized, reusable components**.

---

### 11.9 Interview Questions

**Q1: What are Props in React?**
➡ Props are used to pass data from parent to child components.

**Q2: Are Props mutable or immutable?**
➡ Props are **immutable** (cannot be modified by child).

**Q3: Difference between State and Props?**

* **Props** → Passed from parent, read-only, external data.
* **State** → Managed inside component, mutable, internal data.

**Q4: Can we pass a function as a prop?**
➡ Yes, functions can be passed as props (useful for event handling).

---