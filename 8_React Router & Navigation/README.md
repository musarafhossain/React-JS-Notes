# **Chapter 8: React Router & Navigation**  

React Router is the standard library for handling routing and navigation in React applications. It allows you to navigate between different views, manage the browser history, and display different components based on the URL. In this chapter, we will cover:  
✅ **Routing Basics** – Setting up routing and navigating between pages.  
✅ **Dynamic Routes** – Creating routes that change based on parameters.  
✅ **Nested Routes** – Implementing routes inside other routes.  

---

## **8.1 Routing Basics – Setting Up Navigation**  
React Router lets you define **routes** in your app and map them to components.  

### **8.1.1 Installing React Router**
```bash
npm install react-router-dom
```

### **8.1.2 Basic Routing Setup**
You need to import the `BrowserRouter` to handle the routing and `Route` to map URLs to components.

```jsx
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Router>
  );
}

export default App;
```
- `BrowserRouter` provides the routing functionality.
- `Link` creates a clickable link that navigates to different routes.
- `Route` defines what component should be displayed for each URL path.  

---

## **8.2 Dynamic Routes – Parameterized Routes**  
Dynamic routes allow you to capture parts of the URL as parameters and pass them to components.

### **8.2.1 Creating Dynamic Routes**
```jsx
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function UserProfile({ match }) {
  return <h2>Profile of User {match.params.userId}</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/user/1">User 1</Link> | <Link to="/user/2">User 2</Link>
      </nav>

      <Route path="/user/:userId" component={UserProfile} />
    </Router>
  );
}

export default App;
```
- `:userId` is a **dynamic segment** in the URL.
- `match.params.userId` gives access to the dynamic parameter value in the component.  

---

### **8.2.2 Accessing Query Parameters with `useLocation`**
Sometimes you need to access query parameters from the URL (e.g., `?id=123`).

```jsx
import React from "react";
import { BrowserRouter as Router, Route, Link, useLocation } from "react-router-dom";

function QueryPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  return <h2>Query Parameter ID: {id}</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/query?id=123">Query Page</Link>
      </nav>

      <Route path="/query" component={QueryPage} />
    </Router>
  );
}

export default App;
```
- `useLocation()` gives access to the current URL, including search/query parameters.  

---

## **8.3 Nested Routes – Routing Inside Other Routes**  
You can define routes inside other routes, which allows you to **nest components** and create a more structured navigation.  

### **8.3.1 Basic Nested Routes**
```jsx
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <Link to="/dashboard/profile">Profile</Link> |{" "}
        <Link to="/dashboard/settings">Settings</Link>
      </nav>
      <Route path="/dashboard/profile" component={Profile} />
      <Route path="/dashboard/settings" component={Settings} />
    </div>
  );
}

function Profile() {
  return <h3>Profile Page</h3>;
}

function Settings() {
  return <h3>Settings Page</h3>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/dashboard">Go to Dashboard</Link>
      </nav>
      <Route path="/dashboard" component={Dashboard} />
    </Router>
  );
}

export default App;
```
- `Route` is nested inside the `Dashboard` component, and different sub-routes (`/dashboard/profile`, `/dashboard/settings`) render different content.  
- This creates **nested navigation** for the dashboard page.  

---

### **8.3.2 Rendering Nested Routes in a Layout Component**
You can create a **layout component** with nested routes inside it.

```jsx
import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav>
        <Link to="/home">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <hr />
      <div>
        <h2>Layout Content</h2>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </div>
  );
}

function Home() {
  return <h3>Home Page</h3>;
}

function About() {
  return <h3>About Page</h3>;
}

function App() {
  return (
    <Router>
      <Route path="/" component={Layout} />
    </Router>
  );
}

export default App;
```
- `Layout` component wraps the main content and displays sub-pages like **Home** and **About**.  

---

## **8.4 Redirects & Navigation with `useHistory`**  
React Router provides **programmatic navigation** using `useHistory` for redirecting or navigating to other pages.

### **8.4.1 Redirecting to Another Page**
```jsx
import React from "react";
import { BrowserRouter as Router, Route, Link, useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();

  const handleLogin = () => {
    // Simulate login success
    history.push("/profile");
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}

function Profile() {
  return <h2>Profile Page</h2>;
}

function App() {
  return (
    <Router>
      <Route path="/login" component={Login} />
      <Route path="/profile" component={Profile} />
      <Link to="/login">Go to Login</Link>
    </Router>
  );
}

export default App;
```
- `useHistory().push("/profile")` programmatically redirects to the profile page after login.  

---

## **8.5 Project: Multi-Step Form Using React Router**  
🎯 **Goal:** Build a **multi-step form** with React Router.

### **Step 1: Set Up Route for Each Step**
```jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Step1() {
  return (
    <div>
      <h3>Step 1: Enter Personal Info</h3>
      <Link to="/step2">Next</Link>
    </div>
  );
}

function Step2() {
  return (
    <div>
      <h3>Step 2: Enter Address</h3>
      <Link to="/step3">Next</Link>
    </div>
  );
}

function Step3() {
  return (
    <div>
      <h3>Step 3: Review & Submit</h3>
      <Link to="/step1">Start Over</Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Route path="/step1" component={Step1} />
      <Route path="/step2" component={Step2} />
      <Route path="/step3" component={Step3} />
    </Router>
  );
}

export default App;
```
- **Step 1 → Step 2 → Step 3** create a multi-step form flow using React Router.

---

# **🚀 Chapter Summary**
✔ **React Router** allows you to manage routes and navigation in a React app.  
✔ **Dynamic Routes** let you handle route parameters in URLs.  
✔ **Nested Routes** enable structured layouts and sub-navigation.  
✔ **useHistory** provides programmatic navigation and redirects.  
✔ **Project:** Built a **multi-step form** with React Router.  

---