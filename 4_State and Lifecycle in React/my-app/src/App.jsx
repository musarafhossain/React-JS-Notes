import FunctionCounter from "./FunctionCounter"
import ClassCounter from "./ClassCounter"
import MouseTracker from "./MouseTracker"
import Timer from "./Timer"
import { useState } from "react"

function App() {
  const [showTimer, setShowTimer] = useState(false);
  return (
    <>
      <FunctionCounter />
      <ClassCounter />
      <MouseTracker />
      <div>
        <button onClick={() => setShowTimer(!showTimer)}>
          {showTimer ? "Stop Timer" : "Start Timer"}
        </button>
        {showTimer && <Timer />}
      </div>
    </>
  )
}

export default App
