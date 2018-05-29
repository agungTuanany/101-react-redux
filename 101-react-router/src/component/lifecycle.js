import React, { Component } from "react";

class Lifecycle extends Component {
    // 1 GET DEFAULT STATE
    constructor(props) {
        super(props);

        // 2 set INITIAL STATE
        this.state = {
            title: "Pulp finction in cinemas",
            body: "some dummy text"
        };
    }
    // BEFORE GETS CREATED
    componentWillMount() {
        console.log("before components gets created");
        // IF YOU PUT THIS BEFORE REACT RENDERED JSX WILL GET ERROR: CANNOT READ PROPERTY 'style' of null. cause rendered before JSX
        // document.querySelector("h4").style.color = "red";
    }

    // 4 RENDER JSX
    render() {
        return (
            <div>
                <h4>{this.state.title}</h4>
                <h4>{this.state.body}</h4>
            </div>
        );
    }

    // 5 AFTER A COMPONENT IS MOUNTED
    componentDidMount() {
        console.log("after component gets created");
        document.querySelector("h4").style.color = "red";
    }
}

export default Lifecycle;
