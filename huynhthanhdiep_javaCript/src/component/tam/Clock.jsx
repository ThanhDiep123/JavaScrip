import React, { Component } from 'react'
export class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    render() {
        return (
            <div>
                <div>
                    <h1> Hello, world</h1>
                    <h2> It is{this.state.date.toLocaleTimeString()}</h2>
                </div>
            </div>
        )
    }
}

export default Clock