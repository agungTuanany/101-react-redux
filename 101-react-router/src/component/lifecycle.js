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
    // 3 BEFORE GETS CREATED
    componentWillMount() {
        console.log("before components gets created");
        // IF YOU PUT THIS BEFORE REACT RENDERED JSX WILL GET ERROR: CANNOT READ PROPERTY 'style' of null. cause rendered before JSX
        // document.querySelector("h4").style.color = "red";
    }
    componentWillUpdate() {
        console.log("BEFORE UPDATE");
    }
    componentDidUpdate() {
        console.log("AFTER UPDATE");
    }
    shouldComponentUpdate(nextProps, nextState) {
        // this log will show you the title state
        console.log(this.state.title);
        // this log with nextState will catching the update state
        console.log(nextState.title);
        // shouldComponentUpdate will always return 'true'
        // return false;
        if (nextState.title === "something else") {
            return false;
        }
        return true;
    }

    // 4 RENDER JSX
    render() {
        return (
            <div>
                <h4>{this.state.title}</h4>
                <div>{this.state.body}</div>
                <div onClick={() => this.setState({ title: "something else" })}>
                    CLICK TO CHANGE
                </div>
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
