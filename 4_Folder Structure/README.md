## Chapter 4: File and Folder Structure of React App

When you create a new React app with **Vite**, it generates a default folder and file structure. Understanding this structure is very important before you start coding.

---

### 4.1 Most Important Files

* **package.json**

  * Stores project metadata (name, version, scripts).
  * Lists dependencies and devDependencies.
  * Example:

    ```json
    {
        "name": "learn-react",
        "private": true,
        "version": "0.0.0",
        "type": "module",
        "scripts": {
            "dev": "vite",
            "build": "vite build",
            "lint": "eslint .",
            "preview": "vite preview"
        },
        "dependencies": {
            "react": "^19.1.1",
            "react-dom": "^19.1.1"
        },
        "devDependencies": {
            "@eslint/js": "^9.33.0",
            "@types/react": "^19.1.10",
            "@types/react-dom": "^19.1.7",
            "@vitejs/plugin-react": "^5.0.0",
            "eslint": "^9.33.0",
            "eslint-plugin-react-hooks": "^5.2.0",
            "eslint-plugin-react-refresh": "^0.4.20",
            "globals": "^16.3.0",
            "vite": "^7.1.2"
        }
        }
    ```

* **package-lock.json**

  * Auto-generated file.
  * Locks the exact version of installed packages.
  * Ensures consistent installation across different systems.

---

### 4.2 Config Files

* **vite.config.js**

  * Configuration file for Vite.
  * Used to customize build, plugins, aliases, etc.

* **eslint.config.js**

  * Configuration file for ESLint.
  * Helps maintain coding standards and catch errors.

---

### 4.3 Folder Structure

```
my-app/
│
├── node_modules/       → Stores all installed dependencies
├── public/             → Public assets (not processed by Vite)
│   └── vite.svg
├── src/                → Main source code folder
│   ├── assets/         → Images, icons, static resources
│   ├── App.css         → Styles for App.jsx
│   ├── App.jsx         → Main component of the app
│   ├── index.css       → Global CSS
│   └── main.jsx        → Entry point (renders App component)
│
├── .gitignore          → Files/folders ignored by Git
├── eslint.config.js    → ESLint configuration
├── index.html          → Root HTML file
├── package.json        → Project metadata & dependencies
├── package-lock.json   → Dependency version lock
├── vite.config.js      → Vite configuration
└── README.md           → Project description
```

---

### 4.4 Where to Write Code

* You will **mostly write code inside the `src/` folder**.
* **`App.jsx`** → main component (start coding here).
* **`components/` folder (you create)** → reusable components.
* **`assets/`** → images, icons, CSS files.
* **`main.jsx`** → entry file that renders your root component (`App`).

---