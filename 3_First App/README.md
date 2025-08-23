## Chapter 3: First App

### 3.1 Write First Code in React App

When you create a new React app with **Vite**, you get some default files and sample code.
To write your **own code**, follow these steps:

---

### 3.2 Where to Start Writing Code in React.js

* Go to the folder:

  ```
  src/App.jsx
  ```
* This file is the **main component** of your React app.

---

### 3.3 Remove Default Code

* Open `App.jsx`.
* Delete everything inside the `return()` and write fresh code.

**Example:**

```jsx
function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>My first React app is running successfully 🚀</p>
    </div>
  );
}

export default App;
```

---

### 3.4 Write Fresh Code

* Save the file → React automatically refreshes the browser.
* Open browser at [http://localhost:5173](http://localhost:5173) → you will see your first React output.

---

### 3.5 Make First New File in React.js

You can create a **new component** and use it inside `App.jsx`.

1. Create a new file:

   ```
   src/MyFirstComponent.jsx
   ```

2. Write component code:

   ```jsx
   function MyFirstComponent() {
     return <h2>This is my first React component!</h2>;
   }

   export default MyFirstComponent;
   ```

3. Import & use inside `App.jsx`:

   ```jsx
   import MyFirstComponent from "./MyFirstComponent";

   function App() {
     return (
       <div>
         <h1>Hello, React!</h1>
         <MyFirstComponent />
       </div>
     );
   }

   export default App;
   ```

✅ Output → Your app now shows both the main heading and the new component message.

---