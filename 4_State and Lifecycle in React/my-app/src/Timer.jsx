import React, { useState, useEffect } from 'react'

const Timer = () => {
    const [second, setSecond] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setSecond((prevSeconds) => prevSeconds + 1);
          }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div>Time : {second}</div>
    )
}

export default Timer