import React, { Component } from 'react'

export class ClassRendering extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: false,
        }
    }
    render() {
        if (this.state.isLoggedIn) {
            return (
                <>
                    <h2>Welcome, User!</h2>
                    <button onClick={() => { this.setState({ isLoggedIn: false }) }}>
                        Logout
                    </button>
                </>
            )
        } else {
            return (
                <>
                    <h2>Please Log In</h2>
                    <button onClick={() => { this.setState({ isLoggedIn: true }) }}>
                        Login
                    </button>
                </>
            )
        }
    }
}

export default ClassRendering