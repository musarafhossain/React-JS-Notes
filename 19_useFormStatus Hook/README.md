## Chapter 19: `useFormStatus` Hook in React.js

---

### 19.1 What is `useFormStatus`?

* The useFormStatus hook in React provides information about the submission status of a form. 
* It's particularly useful for displaying UI elements like loading indicators or disabling submit buttons while the form is being processed, enhancing the user experience during form submissions.

---

### 19.2 Example Code

```jsx
import { useFormStatus } from "react-dom";

function App() {
  // Form submit handler (simulate async work)
  const handleSubmit = async () => {
    await new Promise((res) => setTimeout(res, 5000)); // wait 5 seconds
    console.log("Form submitted successfully!");
  };

  // CustomerForm is a child component
  function CustomerForm() {
    const { pending } = useFormStatus(); // track form status

    return (
      <div>
        <input type="text" name="username" placeholder="Enter Name" />
        <br />
        <br />
        <input type="password" name="password" placeholder="Enter Password" />
        <br />
        <br />
        {/* Disable button while submitting */}
        <button disabled={pending}>
          {pending ? "Submitting..." : "Submit"}
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>useFormStatus Hook in React.js</h1>
      <form action={handleSubmit} method="post">
        <CustomerForm />
      </form>
    </div>
  );
}

export default App;
```

---

### 19.3 Steps in the Example

1. **Form is created** with `form` tag.
2. **`handleSubmit`** function simulates an API call with `setTimeout`.
3. `CustomerForm` uses `useFormStatus()` hook to get:

   * `pending` → Boolean (true when form is submitting)
4. **Button is disabled** while `pending = true` (during form submission).
5. Once complete, form re-enables the button.

---

### 19.4 Interview Questions

❓ **Q1. What is `useFormStatus` used for?**
➡️ To track form submission status (loading state, submitted data, HTTP method).

❓ **Q2. Where does `useFormStatus` come from?**
➡️ From **`react-dom`**, not from `react`.

❓ **Q3. Can you use `useFormStatus` outside of a form?**
➡️ ❌ No, it must be used in a component rendered inside a `<form>`.

❓ **Q4. What is `pending` in `useFormStatus`?**
➡️ A boolean that becomes `true` while form submission is happening.

❓ **Q5. How does `useFormStatus` improve user experience?**
➡️ It helps disable inputs, show spinners or text like `"Submitting..."` so users know their form is being processed.

❓ **Q6. Difference between `useFormStatus` and `useFormState`?**
➡️

* `useFormStatus` → Tracks the **status** of a form (loading, method, data).
* `useFormState` → Tracks **form field values and validation errors**.

---

