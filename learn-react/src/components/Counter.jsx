import React, { useState } from 'react'

const Counter = () => {
    const [count, SetCount] = useState(0);
  return (
    <div>
        <h2>Counter Component</h2>
        <h1>Count: {count}</h1>
        <button onClick={()=> SetCount(count+1)}>Increase</button>
        <button onClick={()=> SetCount(count-1)}>Decrease</button>
        <button onClick={()=> SetCount(0)}>Reset</button>
    </div>
  )
}

export default Counter