### **Chapter 1: Introduction to React**  
**Prerequisites**: Basic understanding of HTML, CSS, JavaScript (ES6+), and Node.js.

---

### **1.1 What is React?**
- **Definition**: React is an open-source JavaScript library for building user interfaces (UIs), developed by Facebook (Meta) in 2013.
- **Purpose**: Create reusable UI components and manage the **view layer** of web/mobile apps efficiently.
- **Key Features**:
  - **Component-Based Architecture**: Break UIs into independent, reusable pieces.
  - **Declarative Syntax**: Describe *what* the UI should look like (not *how* to render it).
  - **Virtual DOM**: Optimizes rendering performance by minimizing direct DOM manipulation.

---

### **1.2 Why React?**
- **Performance**: Virtual DOM diffing ensures efficient updates.
- **Reusability**: Components reduce code duplication.
- **Ecosystem**: Rich tools (React DevTools, Next.js) and libraries (React Router, Redux).
- **Community**: Backed by Meta and a massive developer community.

---

### **1.3 Core Concepts**
#### **1.3.1 Components**
- **Functional Components**: 
  - JavaScript functions that return JSX.
  ```jsx
  function Welcome() {
    return <h1>Hello, React!</h1>;
  }
  ```
- **Class Components** (Legacy, but good to know):
  - ES6 classes extending `React.Component`.
  ```jsx
  class Welcome extends React.Component {
    render() {
      return <h1>Hello, React!</h1>;
    }
  }
  ```

#### **1.3.2 JSX (JavaScript XML)**
- **What is JSX?**: Syntax extension for JavaScript that allows HTML-like code in JS.
- **Example**:
  ```jsx
  const element = <h1 className="title">Welcome to React</h1>;
  ```
- **Key Rules**:
  - Use `className` instead of `class`.
  - Always close tags (e.g., `<img />`).
  - JSX is transpiled to `React.createElement()` calls via Babel.

#### **1.3.3 Virtual DOM**
- **How It Works**:
  1. React creates a lightweight copy of the real DOM (Virtual DOM).
  2. On state changes, React compares the old and new Virtual DOM (diffing).
  3. Only the changed parts are updated in the real DOM (reconciliation).

---

### **1.4 Setting Up a React Environment**
#### **1.4.1 Create React App (CRA)**
- **Command**: 
  ```bash
  npx create-react-app my-app
  cd my-app
  npm start
  ```
- **Folder Structure**:
  ```
  my-app/
    ├── node_modules/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── App.js
    │   └── index.js
    └── package.json
  ```

#### **1.4.2 Alternative Tools**
- **Vite**: Faster build tool for modern React apps.
- **Next.js**: Framework for server-rendered React apps.

---

### **1.5 Hello World in React**
#### **1.5.1 Basic Example**
```jsx
// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return <h1>Hello, React!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

#### **1.5.2 Dynamic Content with Props**
```jsx
function Greeting(props) {
  return <h2>Welcome, {props.name}!</h2>;
}

function App() {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
    </div>
  );
}
```

---

### **1.6 Project 1: Static Component Page**
**Objective**: Build a static portfolio header using components.  
**Steps**:
1. Create a `Header` component with a logo and navigation links.
2. Style it using CSS-in-JS (inline styles) or a separate CSS file.
3. Render it in `App.js`.

**Example Code**:
```jsx
// Header.js
function Header() {
  return (
    <header className="header">
      <h1>My Portfolio</h1>
      <nav>
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
      </nav>
    </header>
  );
}

// App.js
function App() {
  return (
    <div>
      <Header />
    </div>
  );
}
```

---

### **1.7 Summary**
- React is a component-based library for building UIs.
- JSX simplifies writing HTML-like code in JavaScript.
- Virtual DOM ensures efficient updates.
- Start with `create-react-app` for quick setup.

**Next Chapter Preview**:  
**Chapter 2**: State, Props, and Event Handling.  
**Project 2**: Interactive Todo List App.

---

Let me know if you want to dive deeper into any topic or proceed to Chapter 2!