import React, { Component } from "react";

class App extends Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {
        return <div {...this.state} />;
    }
}

export default App;
