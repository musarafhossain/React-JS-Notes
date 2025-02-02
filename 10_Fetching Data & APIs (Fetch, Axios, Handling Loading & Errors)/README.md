# **Chapter 10: Fetching Data & APIs (Fetch, Axios, Handling Loading & Errors)**  

Fetching data from APIs is a common task in modern web applications. React provides simple ways to handle API requests, either with the native `fetch` API or third-party libraries like **Axios**. In this chapter, we will cover:  
✅ **Fetching Data with Fetch API** – Using the native JavaScript method.  
✅ **Fetching Data with Axios** – Using a popular third-party library for handling HTTP requests.  
✅ **Handling Loading & Errors** – How to manage loading states and errors during data fetching.

---

## **10.1 Fetching Data with Fetch API**

The **Fetch API** is built into modern browsers and provides a simple way to make HTTP requests to external resources.

### **10.1.1 Basic Fetch Request**
```jsx
import React, { useState, useEffect } from "react";

function DataFetching() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      {data ? (
        <ul>
          {data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default DataFetching;
```

- `fetch` makes an HTTP request to the given URL.
- `response.json()` converts the response to JSON format.
- `useEffect` triggers the data fetch on component mount.
- The component displays **loading** until data is fetched, then displays the data.

---

## **10.2 Fetching Data with Axios**

**Axios** is a popular promise-based HTTP client that simplifies the process of sending HTTP requests. It automatically handles JSON responses and provides additional features like request/response interception.

### **10.2.1 Installing Axios**
```bash
npm install axios
```

### **10.2.2 Basic Axios Request**
```jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      {data ? (
        <ul>
          {data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default DataFetching;
```

- Axios is used with `.get()` to fetch data from the provided URL.
- `response.data` contains the response payload.
- Error handling with `.catch()` allows handling network issues or failed requests.

---

## **10.3 Handling Loading & Errors**

When fetching data, it's crucial to manage **loading** and **error** states. React's state management system helps to track the request's status.

### **10.3.1 Managing Loading State**
```jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetching;
```

- **`loading`**: A state to track whether data is being fetched.
- **`error`**: A state to handle any issues during the fetch.
- **`setLoading(false)`**: Marks loading as complete after data is fetched or an error occurs.

---

### **10.3.2 Optimizing Error Handling**
Error handling can be more robust by checking specific HTTP error codes and giving users clear messages.

```jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        if (error.response) {
          // Request made and server responded
          setError(`Error: ${error.response.status} - ${error.response.data}`);
        } else if (error.request) {
          // The request was made but no response
          setError("Error: No response from server");
        } else {
          // Something else happened
          setError("Error: Something went wrong");
        }
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetching;
```

- **Error.response**: If the server responds with an error (e.g., 404 or 500).
- **Error.request**: If the request is made but no response is received.
- **Other Errors**: General errors like network failure or wrong configurations.

---

## **10.4 Handling POST Requests with Fetch and Axios**

Sending data to a server is another key aspect of working with APIs. Both **fetch** and **axios** support POST requests for submitting data.

### **10.4.1 Sending Data with Fetch**
```jsx
import React, { useState } from "react";

function SubmitForm() {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter post title"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SubmitForm;
```

- `method: "POST"`: Indicates we want to send data.
- `body: JSON.stringify(...)`: Converts JavaScript objects into JSON format.

### **10.4.2 Sending Data with Axios**
```jsx
import React, { useState } from "react";
import axios from "axios";

function SubmitForm() {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
        title,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter post title"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SubmitForm;
```

- `.post()` method simplifies sending data in the request body.

---

## **10.5 Project: Movie Search App Using Fetch or Axios**

### **Step 1: Create the Search Component**
```jsx
import React, { useState } from "react";
import axios from "axios";

function MovieSearch() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchMovies = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${query}&apikey=yourapikey`
      );
      setMovies(response.data.Search);
    } catch (err) {
      setError("Failed to fetch movies.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={searchMovies}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies"
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {movies && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.imdbID}>{movie.Title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MovieSearch;
```

---

# **🚀 Chapter Summary**
✔ **Fetching Data with Fetch** – Native method for HTTP requests.  
✔ **Fetching Data with Axios** – Simplified HTTP client with additional features.  
✔ **Handling Loading & Errors** – Track request status and manage errors gracefully.  
✔ **POST Requests** – Sending data to APIs.  
✔ **Project:** Created a **Movie Search App** with data fetching.

---