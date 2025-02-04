import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor() {
        super();
        this.state = { count: 0 }
    }

    componentDidMount(){
        console.log(`componentDidMount : ${this.state.count}`);
    }

    componentDidUpdate(){
        console.log(`componentDidUpdate : ${this.state.count}`);
    }

    componentWillUnmount(){
        console.log(`componentWillUnmount : ${this.state.count}`);
    }

    render() {
        return (
            <>
                <h1>Count : {this.state.count}</h1>
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Increament</button>
                <button onClick={() => { this.setState({ count: this.state.count - 1 }) }}>Decreament</button>
            </>
        )
    }
}

export default ClassCounter;
