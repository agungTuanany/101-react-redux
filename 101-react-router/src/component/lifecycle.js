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
    // this component will not been called, cause this compoennt will trigered after the component recieve new props is not call when component start
    componentWillReceiveProps() {
        console.log("BEFORE RECIEVIMG PROPS");
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
    // we destroy a lifecyle component before we go to the different
    //  component. It usefull for (1) clear some state or before going to different
    //  views, (2) need to do in state or (3)global variabel, and going to next
    //  component without conflig
    componentWillUnmount() {
        console.log("UNMOUNT");
    }
}

export default Lifecycle;
