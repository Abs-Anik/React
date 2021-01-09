import React, { Component } from 'react';

export default class Test extends Component {

    constructor() {
        super();
        this.state = {
            data: 1,
            name: 'Test'
        }
    }

    test() {

        this.setState({ name: "New Test" });
        this.setState({ data: this.state.data + 1 });
        console.log('............Test................');
    }

    render() {
        return (
            <>
                <h1>State in class based component</h1>
                <h2>{this.state.name} = {this.state.data}</h2>
                <button onClick={() => this.test()}>Class State</button>
            </>
        )
    }
}