import React, { Component } from "react";

class App2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            lastname: ""
        };
    }

    handleNameChange = event => {
        this.setState({ name: event.target.value });
    };

    handleLastNameChange = event => {
        this.setState({ lastname: event.target.value });
    };

    componentWillUpdate(nextProps, nextState) {
        console.log(nextState);
    }

    render() {
        return (
            <form>
                <div>
                    <label>Enter Name </label> <br />
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                    />
                </div>

                <div>
                    <label>Enter Lastame </label> <br />
                    <input
                        type="text"
                        value={this.state.lastname}
                        onChange={this.handleLastNameChange}
                    />
                </div>
            </form>
        );
    }
}

export default App2;
