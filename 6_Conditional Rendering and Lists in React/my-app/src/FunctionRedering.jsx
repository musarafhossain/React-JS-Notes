import React, { useState } from 'react'

const FunctionRedering = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <>
            <h2>{isLoggedIn ? "Welcome, User!" : "Please Log In"}</h2>
            <button onClick={() => { setIsLoggedIn(!isLoggedIn) }}>
                {isLoggedIn ? "Logout" : "Login"}
            </button>
            <div>{isLoggedIn&& <h1>Hello, Musaraf</h1> }</div>
        </>
    )
}

export default FunctionRedering