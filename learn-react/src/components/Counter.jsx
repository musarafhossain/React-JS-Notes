import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log("Component Mounted");
    }, []);
    
    useEffect(()=>{
        console.log("Count Updated:", count);
    }, [count]);

    return (
        <div>
            <h1>Counter App</h1>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count-1)}>Decrease</button>
            <button onClick={()=>setCount(count+1)}>Increase</button>
        </div>
    )
}

export default Counter  