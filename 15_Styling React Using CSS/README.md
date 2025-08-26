## Chapter 15: Styling React Using CSS

---

### 15.1 How Many Types of Styling in React?

In React, we have **5 main ways to style components**:

1. **Inline Style** (using `style` attribute with JS object)
2. **External CSS File** (traditional `.css` file)
3. **CSS Modules** (scoped styling)
4. **Styled Components** (CSS-in-JS using `styled-components`)
5. **External CSS Libraries/Frameworks** (Bootstrap, TailwindCSS, etc.)

---

### 15.2 Inline Style in React

#### Difference from Regular Inline Style

* In **HTML**, inline style is written as a string:

  ```html
  <h1 style="color: red; font-size: 20px;">Hello</h1>
  ```
* In **React**, inline style is written as a **JavaScript object** with camelCase properties:

  ```jsx
  <h1 style={{ color: "red", fontSize: "20px" }}>Hello</h1>
  ```

---

#### Example: User Profile Card with Inline Style

```jsx
import React from "react";

function UserProfile() {
  const cardStyle = {
    border: "1px solid #ccc",
    padding: "20px",
    borderRadius: "10px",
    width: "200px",
    margin: "10px",
    textAlign: "center",
    backgroundColor: "#f9f9f9"
  };

  const imgStyle = {
    borderRadius: "50%",
    width: "80px",
    height: "80px"
  };

  return (
    <div style={cardStyle}>
      <img
        style={imgStyle}
        src="https://via.placeholder.com/80"
        alt="user"
      />
      <h3 style={{ color: "blue" }}>John Doe</h3>
      <p style={{ fontSize: "14px" }}>Frontend Developer</p>
    </div>
  );
}

export default UserProfile;
```

---

#### Multiple Cards + Dynamic and Conditional Inline Style

```jsx
import React, { useState } from "react";

function UserCard({ name, role }) {
  const [highlight, setHighlight] = useState(false);

  const cardStyle = {
    border: "1px solid #ccc",
    padding: "20px",
    margin: "10px",
    borderRadius: "10px",
    width: "200px",
    backgroundColor: highlight ? "#ffeeba" : "#f9f9f9"
  };

  return (
    <div style={cardStyle}>
      <h3>{name}</h3>
      <p>{role}</p>
      <button onClick={() => setHighlight(!highlight)}>
        Toggle Highlight
      </button>
    </div>
  );
}

function App() {
  return (
    <div style={{ display: "flex" }}>
      <UserCard name="John Doe" role="Frontend Developer" />
      <UserCard name="Jane Smith" role="Backend Developer" />
    </div>
  );
}

export default App;
```

✅ Style updates dynamically when you click the button.

---

### 15.3 External CSS

#### Steps:

1. Create a **CSS file** → `User.css`

   ```css
   .card {
     border: 1px solid #ccc;
     padding: 20px;
     border-radius: 10px;
     width: 200px;
     margin: 10px;
     background-color: #f9f9f9;
   }

   .name {
     color: blue;
   }
   ```

2. Import CSS file in component:

   ```jsx
   import "./User.css";

   function User() {
     return (
       <div className="card">
         <h3 className="name">John Doe</h3>
         <p>Frontend Developer</p>
       </div>
     );
   }

   export default User;
   ```

✅ External CSS is global, so classes may **conflict** between components.

---

### 15.4 CSS Modules

#### Why CSS Modules?

* To avoid **global style conflicts**.
* CSS classes are scoped **locally** to the component.

#### Example:

1. Create a file → `User.module.css`

   ```css
   .card {
     border: 1px solid #ccc;
     padding: 20px;
     border-radius: 10px;
     background-color: #f9f9f9;
   }
   .name {
     color: green;
   }
   ```

2. Import as an object:

   ```jsx
   import styles from "./User.module.css";

   function User() {
     return (
       <div className={styles.card}>
         <h3 className={styles.name}>John Doe</h3>
         <p>Frontend Developer</p>
       </div>
     );
   }

   export default User;
   ```

✅ Styles are automatically **scoped** → `User_card__xyz123`.

---

### 15.5 Styled Components

#### What are Styled Components?

* A **CSS-in-JS** library.
* Lets you write CSS inside JS components.
* Creates **scoped styles** automatically.

#### Installation:

```bash
npm install styled-components
```

#### Example:

```jsx
import styled from "styled-components";

{/*Using Core CSS*/}
const Card = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  background: #f9f9f9;
  width: 200px;
`;

{/*Using Object*/}
const Name = styled.h3({
  color: purple;
});

function User() {
  return (
    <Card>
      <Name>John Doe</Name>
      <p>Frontend Developer</p>
    </Card>
  );
}

export default User;
```

✅ Styles are scoped & dynamic (props-based styling also possible).

---

### 15.6 External CSS Libraries / Frameworks

#### (A) Bootstrap in React

1. Install Bootstrap:

   ```bash
   npm install bootstrap
   ```
2. Import in `index.js`:

   ```jsx
   import "bootstrap/dist/css/bootstrap.min.css";
   ```
3. Use Bootstrap classes:

   ```jsx
   function App() {
     return (
       <div>
         <button className="btn btn-primary">Click Me</button>
         <div className="alert alert-success">Success!</div>
       </div>
     );
   }
   ```

---

#### (B) Tailwind CSS in React

1. Install Tailwind CSS (official docs: [https://tailwindcss.com/docs/guides/create-react-app](https://tailwindcss.com/docs/guides/create-react-app))

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

2. Configure `tailwind.config.js`:

```js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

3. Add Tailwind directives to `index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. Use Tailwind classes:

```jsx
function App() {
  return (
    <div className="p-6 bg-gray-100">
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
        Tailwind Button
      </button>
    </div>
  );
}
```

---

### 15.7 Interview Questions

❓ **Q1. Difference between inline style and external CSS in React?**
➡️ Inline style is scoped only to that element (JS object). External CSS is global.

❓ **Q2. What are CSS Modules and why use them?**
➡️ CSS Modules make class names **unique** and avoid style conflicts.

❓ **Q3. Difference between CSS Modules and Styled Components?**
➡️ CSS Modules → separate `.module.css` file, compile to unique class names.
➡️ Styled Components → CSS-in-JS, write styles inside components, supports props-based styling.

❓ **Q4. Which is better: Bootstrap or Tailwind?**
➡️ Bootstrap → ready-made UI components.
➡️ Tailwind → utility-first CSS framework, more flexible and customizable.

❓ **Q5. Can we use multiple styling methods in the same project?**
➡️ ✅ Yes, but best practice is to choose **one main approach** (CSS Modules / Tailwind / Styled Components).

---