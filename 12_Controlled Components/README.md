## Chapter 12: Controlled Components

---

### 12.1 What is a Controlled Component?

* A **Controlled Component** is a form input element (**input, textarea, select, checkbox, radio**) whose **value is controlled by React’s State**.
* Instead of letting the DOM manage the input value, React keeps the value in **state**.
* This makes the input a **“single source of truth”**.

🔑 Steps to make an input controlled:

1. **Define a state** to hold the input value.
2. **Attach `value` attribute** of input to the state.
3. **Update state using `onChange` handler**.

---

### 12.2 How to Identify a Controlled Component?

✅ If an input’s `value` comes from **React state** and changes are handled by **setState (or useState)** → it is controlled.
❌ If input directly manages its own value in DOM → it is uncontrolled.

⚠️ **Error if used wrongly:**
If you set a `value` without `onChange`, React will warn:

> “You provided a `value` prop to a form field without an `onChange` handler.”

---

### 12.3 Example: Controlled Input Field

```jsx
import { useState } from "react";

function App() {
  const [name, setName] = useState(""); // state

  const handleChange = (e) => {
    setName(e.target.value); // update state
  };

  const handleClear = () => {
    setName(""); // clear input
  };

  return (
    <div>
      <h2>Controlled Input Example</h2>
      <input 
        type="text" 
        value={name} 
        onChange={handleChange} 
        placeholder="Enter your name" 
      />
      <p>Value: {name}</p>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}

export default App;
```

✅ Input field value is always in **sync with state**.

---

### 12.4 Controlled Form (Multiple Fields)

```jsx
import { useState } from "react";

function App() {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Controlled Form</h2>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Enter name"
      />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Enter email"
      />
      <p>Name: {form.name}</p>
      <p>Email: {form.email}</p>
    </div>
  );
}

export default App;
```

---

### 12.5 Benefits of Controlled Components

* **Single Source of Truth** → React controls all form data.
* **Validation & Manipulation** → Easy to validate before submitting.
* **Dynamic Updates** → Live updates (e.g., character count, formatting).

---

### 12.6 Handle Checkbox

```jsx
import { useState } from "react";

function App() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div>
      <h2>Checkbox Example</h2>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckbox}
        />
        Accept Terms
      </label>
      <p>Checked: {isChecked ? "Yes" : "No"}</p>
    </div>
  );
}

export default App;
```

---

### 12.7 Handle Radio Buttons

```jsx
import { useState } from "react";

function App() {
  const [gender, setGender] = useState("male"); // default selection

  return (
    <div>
      <h2>Radio Button Example</h2>
      <label>
        <input
          type="radio"
          value="male"
          checked={gender === "male"}
          onChange={(e) => setGender(e.target.value)}
        />
        Male
      </label>
      <label>
        <input
          type="radio"
          value="female"
          checked={gender === "female"}
          onChange={(e) => setGender(e.target.value)}
        />
        Female
      </label>
      <p>Selected: {gender}</p>
    </div>
  );
}

export default App;
```

---

### 12.8 Handle Dropdown (Select Box)

```jsx
import { useState } from "react";

function App() {
  const [city, setCity] = useState("Delhi"); // default selection

  return (
    <div>
      <h2>Dropdown Example</h2>
      <select value={city} onChange={(e) => setCity(e.target.value)}>
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Kolkata">Kolkata</option>
      </select>
      <p>Selected City: {city}</p>
    </div>
  );
}

export default App;
```

---

## 12.9 Full Form Handling Example

Here we’ll build a complete form that handles:
✔ Text Input
✔ Email Input
✔ Checkbox
✔ Radio Buttons
✔ Dropdown
✔ Form Submit

---

### 📝 Code: Full Form Handling in React

```jsx
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "male",
    city: "Delhi",
    terms: false,
  });

  // handle change for all fields
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form Submitted!\n${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <div>
      <h2>Full Form Handling Example</h2>
      <form onSubmit={handleSubmit}>
        {/* Text Input */}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter name"
        />
        <br />

        {/* Email Input */}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
        />
        <br />

        {/* Radio Buttons */}
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
          />
          Female
        </label>
        <br />

        {/* Dropdown */}
        <select name="city" value={formData.city} onChange={handleChange}>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Kolkata">Kolkata</option>
        </select>
        <br />

        {/* Checkbox */}
        <label>
          <input
            type="checkbox"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
          />
          Accept Terms
        </label>
        <br />

        {/* Submit */}
        <button type="submit">Submit</button>
      </form>

      {/* Display live data */}
      <h3>Live Data Preview:</h3>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
}

export default App;
```

---