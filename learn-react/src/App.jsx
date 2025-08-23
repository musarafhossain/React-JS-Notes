import HelloClass from "./components/HelloClass";
import HelloFunction from "./components/HelloFunction";
import MyFirstComponent from "./MyFirstComponent";

function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>My first React app is running successfully 🚀</p>
      <MyFirstComponent />
      <HelloClass />
      <HelloFunction />
    </div>
  );
}

export default App;