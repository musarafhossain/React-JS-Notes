# **Chapter 13: Testing in React (Jest, React Testing Library, Unit & Integration Tests)**

Testing is essential for ensuring the reliability and maintainability of your React applications. In this chapter, we will explore how to test React applications using **Jest** (a JavaScript testing framework) and **React Testing Library** (a library for testing React components). We will also cover unit and integration testing techniques.

---

## **13.1 Introduction to Testing in React**

Testing React applications ensures that components behave as expected and remain functional during development. The two main goals of testing in React are:

1. **Unit Testing**: Testing individual components or functions in isolation.
2. **Integration Testing**: Testing how different parts of the application work together.

For testing React components, **Jest** is the most popular testing framework, while **React Testing Library** provides a set of utilities for testing React components in a way that simulates how they would be used in the browser.

---

## **13.2 Jest: JavaScript Testing Framework**

Jest is a testing framework created by Facebook, and it works seamlessly with React. It provides:

- **Test runners**: Run tests and report the results.
- **Mocking functions**: Mock API calls or other external functions.
- **Snapshots**: Capture the rendered output of components to compare in future tests.

### **13.2.1 Setting Up Jest**

Jest is often set up automatically when you use **`create-react-app`**, but if you're setting it up manually, install it with the following command:

```bash
npm install --save-dev jest
```

You also need to install **@testing-library/react** (for React component testing) and **@testing-library/jest-dom** (for DOM assertions):

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom
```

Jest works with the `package.json` file, where you can add a script to run tests:

```json
"scripts": {
  "test": "jest"
}
```

### **13.2.2 Writing a Basic Jest Test**
Here is a simple test for a component:

```tsx
// MyComponent.tsx
import React from 'react';

const MyComponent = () => {
  return <h1>Hello, World!</h1>;
};

export default MyComponent;
```

```tsx
// MyComponent.test.tsx
import { render } from '@testing-library/react';
import MyComponent from './MyComponent';

test('renders the correct text', () => {
  const { getByText } = render(<MyComponent />);
  const element = getByText(/Hello, World!/i);
  expect(element).toBeInTheDocument();
});
```

- **`render()`**: Renders the component.
- **`getByText()`**: Finds an element by its text content.
- **`expect()`**: The assertion, checking if the element is in the document.

---

## **13.3 React Testing Library**

**React Testing Library** encourages testing from the user's perspective by interacting with the DOM the way a user would. The goal is to test the behavior of components, rather than their internal implementation.

### **13.3.1 Rendering Components**

You can render a component using the `render()` function from React Testing Library:

```tsx
import { render } from '@testing-library/react';
import MyComponent from './MyComponent';

test('renders component', () => {
  render(<MyComponent />);
});
```

### **13.3.2 Queries**

The testing library provides several query methods to find elements within the rendered component. Some of the most commonly used queries are:

- **`getByText`**: Find elements by their text content.
- **`getByRole`**: Find elements by their ARIA role.
- **`getByLabelText`**: Find form elements by their label.
- **`getByPlaceholderText`**: Find form elements by placeholder text.
- **`queryByText`**: Returns `null` if the element is not found (useful for assertions that an element does not exist).

### **13.3.3 Example: Button Click Test**
Here’s an example that tests a button click event:

```tsx
// Button.tsx
import React, { useState } from 'react';

const Button = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return <button onClick={handleClick}>{clicked ? 'Clicked' : 'Click Me'}</button>;
};

export default Button;
```

```tsx
// Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('button click changes text', () => {
  render(<Button />);
  const button = screen.getByText(/Click Me/i);
  fireEvent.click(button);
  expect(screen.getByText(/Clicked/i)).toBeInTheDocument();
});
```

- **`fireEvent.click()`**: Simulates a click event.
- **`screen.getByText()`**: Finds the element by its text and checks if it has changed after the click.

---

## **13.4 Unit Testing in React**

Unit testing involves testing individual components or functions in isolation.

### **13.4.1 Testing a Simple Component**
A unit test for a simple component ensures that it renders correctly and performs its basic functions, like updating state.

```tsx
// Counter.tsx
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
```

```tsx
// Counter.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('increments count when button is clicked', () => {
  render(<Counter />);
  const button = screen.getByText(/Increment/i);
  fireEvent.click(button);
  expect(screen.getByText(/1/i)).toBeInTheDocument();
});
```

### **13.4.2 Mocking API Calls in Unit Tests**
In some cases, components may depend on external API calls. To test these components, you can mock the API calls using `jest.mock()`.

```tsx
// DataComponent.tsx
import React, { useEffect, useState } from 'react';

const DataComponent = ({ fetchData }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then((response) => setData(response));
  }, [fetchData]);

  return <div>{data ? data : 'Loading...'}</div>;
};

export default DataComponent;
```

```tsx
// DataComponent.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import DataComponent from './DataComponent';

jest.mock('./fetchData', () => ({
  fetchData: jest.fn(),
}));

test('displays data after fetch', async () => {
  const mockData = 'Hello, World!';
  fetchData.mockResolvedValue(mockData);

  render(<DataComponent fetchData={fetchData} />);
  
  await waitFor(() => screen.getByText(mockData));
  expect(screen.getByText(mockData)).toBeInTheDocument();
});
```

- **`jest.mock()`**: Mocks the `fetchData` function for testing.
- **`waitFor()`**: Waits for an async update in the DOM, such as after fetching data.

---

## **13.5 Integration Testing in React**

Integration testing focuses on testing how components interact with each other and with external systems (such as APIs).

### **13.5.1 Example: Form Submission**
Here’s an example of an integration test where a form component interacts with an API.

```tsx
// Form.tsx
import React, { useState } from 'react';

const Form = ({ submitForm }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
```

```tsx
// Form.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form';

test('submits the form with name', () => {
  const mockSubmit = jest.fn();
  render(<Form submitForm={mockSubmit} />);

  const input = screen.getByPlaceholderText(/Enter your name/i);
  const button = screen.getByText(/Submit/i);

  fireEvent.change(input, { target: { value: 'John' } });
  fireEvent.click(button);

  expect(mockSubmit).toHaveBeenCalledWith('John');
});
```

- **`jest.fn()`**: Creates a mock function to track calls to `submitForm`.
- **`fireEvent.change()`**: Simulates entering text into an input field.

---

# **🚀 Chapter Summary**
✔ **Jest**: Jest is the testing framework that provides tools for running tests, mocking, and assertions.  
✔ **React Testing Library**: Focuses on testing components from the user’s perspective using queries like `getByText`, `getByRole`, and `fireEvent`.  
✔ **Unit Testing**: Test individual components or functions in isolation.  
✔ **Integration Testing**: Test how components and APIs interact together.  
✔ **Mocking**: Use Jest’s mocking capabilities to isolate components from external dependencies like APIs.

---