import React from 'react'

const FunctionEvent = () => {
    const handleClick = (name) => {
        alert(`Function Component Button Clicked! ${name}`)
    }
    return (
        <button onClick={()=>handleClick("Musaraf")}>Function Click</button>
    )
}

export default FunctionEvent