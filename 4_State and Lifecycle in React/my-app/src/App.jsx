import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Count :- {count}</h1>
      <button type="button" onClick={setCount(count+1)}>Increament</button>
    </>
  )
}

export default App
