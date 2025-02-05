import React, { useState } from 'react'

const ControlledComponent = () => {
    const [name, setname] = useState('');
    const handleChange = (event)=>{
        setname(event.target.value)
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        alert(`Sbmitted Name : ${name}`)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={handleChange}/>
            <button type="submit">Controlled Submit</button>
        </form>
    )
}

export default ControlledComponent