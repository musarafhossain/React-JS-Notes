import React, { useState, useEffect } from 'react'

const FunctionCounter = () => {
    const [count, setCount] = useState(0)
    useEffect(()=>{
        document.title = count
    }, [count]);
    return (
        <>
            <h1>Count: {count} </h1>
            <button onClick={() => setCount(count + 1)}>Increament</button>
            <button onClick={() => setCount(count - 1)}>Decreament</button>
        </>
    )
}

export default FunctionCounter