// Understanding why React give adivse why not to use 'refs'

import React, { Component } from "react";

class Refs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: "change with refs",
            color: "blue"
        };
    }

    changeText() {
        this.setState({color:'red'});
    }

    render() {
        const style = {
            color: this.state.color
        };

        return (
            <div>
                <h4 style={style}>{this.state.data}</h4>
                <div onClick={() => this.changeText()}> CHANGE COLOR </div>
            </div>
        );
    }
}

export default Refs;
