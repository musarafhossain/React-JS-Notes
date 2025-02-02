# **Chapter 12: React with TypeScript (Types, Props & State in TypeScript)**

TypeScript provides static typing to JavaScript, allowing for better tooling and easier debugging. When working with React, TypeScript can greatly enhance the development process by providing type safety, improved code completion, and better error handling. In this chapter, we will learn how to use **TypeScript** in a React application, focusing on **types**, **props**, and **state**.

---

## **12.1 Setting Up TypeScript in a React Project**

To start using TypeScript in a React project, you need to ensure that TypeScript is installed and the project is set up correctly.

### **12.1.1 Installing TypeScript in a React Project**
If you're creating a new React project, you can use `create-react-app` with TypeScript template:

```bash
npx create-react-app my-app --template typescript
```

If you’re adding TypeScript to an existing project, you can install TypeScript and the necessary types:

```bash
npm install --save typescript @types/react @types/react-dom
```

After this, create a `tsconfig.json` file if it doesn’t already exist. This file will contain TypeScript configuration options.

---

## **12.2 Types in TypeScript**

In TypeScript, you define types to ensure that variables, props, and state conform to a specific structure.

### **12.2.1 Basic Types in TypeScript**
TypeScript provides several built-in types, such as:

- `string`
- `number`
- `boolean`
- `null` / `undefined`
- `any` (use cautiously, as it disables type checking)
- `void` (used for functions that don't return a value)

### **12.2.2 Defining Types for Variables**
```tsx
let message: string = "Hello, world!";
let count: number = 42;
let isActive: boolean = true;
```

### **12.2.3 Defining Types for Arrays and Objects**
```tsx
let numbers: number[] = [1, 2, 3, 4];
let user: { name: string; age: number } = { name: "John", age: 30 };
```

---

## **12.3 Props in TypeScript**

In React with TypeScript, props must be explicitly typed to ensure type safety across components.

### **12.3.1 Defining Props Types for Functional Components**
You can define types for props using an **interface** or **type alias**.

#### **Example 1: Using an Interface**
```tsx
import React from "react";

// Defining the type of props using an interface
interface GreetingProps {
  name: string;
  age: number;
}

const Greeting: React.FC<GreetingProps> = ({ name, age }) => {
  return <h1>Hello, {name}. You are {age} years old.</h1>;
};

export default Greeting;
```

- **`GreetingProps`**: Defines the expected types for `name` and `age` props.
- **`React.FC<GreetingProps>`**: Specifies that `Greeting` is a functional component that accepts `GreetingProps` as props.

#### **Example 2: Using Type Alias**
```tsx
import React from "react";

// Defining the type of props using a type alias
type GreetingProps = {
  name: string;
  age: number;
};

const Greeting: React.FC<GreetingProps> = ({ name, age }) => {
  return <h1>Hello, {name}. You are {age} years old.</h1>;
};

export default Greeting;
```

Both **interface** and **type** can be used to define props, but interfaces are generally preferred for defining complex structures and type inheritance.

---

## **12.4 State in TypeScript**

When using React’s `useState` hook, you must provide types for state variables to ensure type safety.

### **12.4.1 Basic Usage of `useState` with TypeScript**
By default, `useState` in TypeScript can infer the type based on the initial value, but it’s good practice to explicitly define the type when necessary.

#### **Example 1: Defining State Type Explicitly**
```tsx
import React, { useState } from "react";

const Counter: React.FC = () => {
  // Explicitly typing the state variable as 'number'
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default Counter;
```

- **`useState<number>(0)`**: The state `count` is explicitly typed as a `number`.

#### **Example 2: Complex State Types**
When the state involves multiple fields or an array of objects, you can define the types more explicitly.

```tsx
import React, { useState } from "react";

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, task: "Learn TypeScript", completed: false },
    { id: 2, task: "Build React App", completed: false },
  ]);

  const toggleCompletion = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
            onClick={() => toggleCompletion(todo.id)}
          >
            {todo.task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
```

- **`Todo[]`**: The state `todos` is an array of `Todo` objects.
- **`Todo` interface**: Defines the structure for each todo item.

---

## **12.5 Combining Props and State in TypeScript**

When a component uses both props and state, TypeScript ensures that each is correctly typed.

#### **Example: Counter Component with Props and State**
```tsx
import React, { useState } from "react";

interface CounterProps {
  initialCount: number;
}

const Counter: React.FC<CounterProps> = ({ initialCount }) => {
  const [count, setCount] = useState<number>(initialCount);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
};

export default Counter;
```

- **`CounterProps`**: The component accepts a prop `initialCount` of type `number`.
- **`useState<number>`**: The component maintains `count` state, which is also typed as `number`.

---

## **12.6 Default Props in TypeScript**

You can define default values for props using TypeScript. To ensure type safety, you can use the `defaultProps` property.

```tsx
import React from "react";

interface ButtonProps {
  label: string;
  color?: string; // Optional prop
}

const Button: React.FC<ButtonProps> = ({ label, color = "blue" }) => {
  return <button style={{ backgroundColor: color }}>{label}</button>;
};

Button.defaultProps = {
  color: "blue",
};

export default Button;
```

- **Optional prop (`color?`)**: The `color` prop is optional. If not provided, it will default to `"blue"`.

---

## **12.7 Type Inference in TypeScript**

TypeScript can infer types based on the values you provide, so explicit types aren't always necessary.

### **Example: Type Inference with `useState`**
```tsx
const [name, setName] = useState("John"); // inferred as string
```

### **Example: Type Inference for Props**
```tsx
const Welcome: React.FC = ({ name }) => {
  return <h1>Welcome, {name}</h1>;
};

Welcome.defaultProps = {
  name: "Guest",
};
```

---

## **12.8 Project: To-Do List App with TypeScript**

### **Step 1: Define State and Props Types**
Define types for todos and props (if any), then implement state management and UI rendering using TypeScript.

### **Step 2: Implement CRUD Operations**
Create functions to add, delete, and update todos, ensuring that types are respected throughout the app.

---

# **🚀 Chapter Summary**
✔ **TypeScript in React**: TypeScript improves React development by enforcing types for props, state, and other variables.  
✔ **Typing Props & State**: Explicitly define types for props and state to ensure type safety.  
✔ **Default Props**: Set default values for optional props to enhance usability.  
✔ **Type Inference**: TypeScript can infer types automatically in many cases, reducing the need for manual typing.

---