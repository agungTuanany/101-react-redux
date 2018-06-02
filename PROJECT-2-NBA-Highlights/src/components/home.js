import React, { Component } from "react";

// COMPONENT
import Featured from "./featured";
import Subcriptions from "./subscriptions";

const URL_HOME = "http://localhost:3004/home";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            home: ""
        };
    }

    componentDidMount() {
        fetch(URL_HOME, { mehtod: "GET" })
            .then(response => response.json())
            .then(json => {
                // console.log(json);
                this.setState({
                    home: json
                });
            });
    }

    render() {
        return (
            <div>
                <Featured slides={this.state.home.slider} />
                <Subcriptions />
            </div>
        );
    }
}

export default Home;
