import React, { useRef } from 'react'

const UncontrolledComponent = () => {
    const inputRef = useRef(null);
    const handleSubmit = (event)=>{
        event.preventDefault();
        alert(`Sbmitted Name : ${inputRef.current.value}`)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" ref={inputRef}/>
            <button type="submit">Uncontrolled Submit</button>
        </form>
    )
}

export default UncontrolledComponent