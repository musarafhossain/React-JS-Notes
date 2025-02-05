import React from 'react'

const RenderingList = () => {
    const cities = ['Kolkata', 'Delhi', 'Mumbai']
    return (
        <ol>
            {cities.map((city, index) =>
                <li key={index}>{city}</li>
            )}
        </ol>
    )
}

export default RenderingList