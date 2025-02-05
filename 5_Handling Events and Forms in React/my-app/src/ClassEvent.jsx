import React, { Component } from 'react'

export default class ClassEvent extends Component {
    handleClick = (name) => {
        alert(`Class Component Button Clicked! ${name}`)
    }
    render() {
        return (
            <button onClick={()=>this.handleClick("Musaraf")}>Class Click</button>
        )
    }
}
