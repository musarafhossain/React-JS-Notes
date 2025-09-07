## ✅ Chapter 26: useActionState Hook

---

### 26.1 What is the use of `useActionState` Hook?

* `useActionState` is a **React 19+ hook** used to handle **forms and actions**.
* It helps manage:
  ✅ **Form submission results** (success/failure).
  ✅ **Pending state** while the form is being submitted.
* Cleaner than handling with only `useState`.

💡 In short → It **updates state automatically based on the result of a form action and gives a pending flag**.

---

### 26.2 Make Input Form (Basic Setup)

```jsx
<form>
  <input type="text" placeholder="Enter name" />
  <button type="submit">Submit</button>
</form>
```

---

### 26.3 Example of `useActionState` Hook with Pending

```jsx
import { useActionState } from "react";

// Example async function (form action)
async function submitForm(prevState, formData) {
  const name = formData.get("name"); // get input value
  await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate delay

  if (!name) {
    return { success: false, message: "Name is required" };
  }
  return { success: true, message: `Hello, ${name}!` };
}

function App() {
  // useActionState returns [state, action, pending]
  const [state, formAction, pending] = useActionState(submitForm, {
    success: false,
    message: ""
  });

  return (
    <div>
      <h2>useActionState Example</h2>
      <form action={formAction}>
        <input type="text" name="name" placeholder="Enter your name" />
        <button type="submit" disabled={pending}>
          {pending ? "Submitting..." : "Submit"}
        </button>
      </form>

      {state.message && (
        <p style={{ color: state.success ? "green" : "red" }}>
          {state.message}
        </p>
      )}
    </div>
  );
}

export default App;
```

✅ **How this works**:

1. When form is submitted → `pending = true`.
2. Button shows `"Submitting..."` (and disabled).
3. Once action completes → `state` updates with result, `pending = false`.

---

### 26.4 Interview Questions

❓ **Q1. What is `useActionState` in React?**
➡️ A React 19 hook for handling **form actions**, updating state automatically after submission.

❓ **Q2. What does the `pending` value represent?**
➡️ A **boolean** that is `true` while the form is submitting and `false` after it finishes.

❓ **Q3. How is `useActionState` better than `useState` for forms?**
➡️ It automatically handles **action results** and provides a built-in **pending state** for async handling.

❓ **Q4. Can `useActionState` handle async actions?**
➡️ ✅ Yes, perfect for API calls and server validation.

❓ **Q5. In which React version was it introduced?**
➡️ React **19**.

---