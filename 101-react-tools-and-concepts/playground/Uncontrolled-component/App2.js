import React, { Component } from "react";

class App2 extends Component {
    handleSubmitClick = () => {
        const values = {
            name: this.name.value,
            lastname: this.lastname.value
        };
        console.log(values);
    };

    render() {
        return (
            <div>
                <div>
                    <label>Enter Name </label> <br />
                    <input type="text" ref={input => (this.name = input)} />
                </div>

                <div>
                    <label>Enter Lastame </label> <br />
                    <input type="text" ref={input => (this.lastname = input)} />
                </div>
                <button onClick={this.handleSubmitClick}> Sign up </button>
            </div>
        );
    }
}

export default App2;
