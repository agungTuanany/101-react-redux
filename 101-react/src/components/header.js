import React, { Component } from "react";

// TYPE OF COMPONENT: Class-Component
class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            keywords: ""
        };
    }

    inputChange(event) {
        console.log(event.target.value);
    }

    render() {
        return (
            <header>
                <div onClick={() => console.log("clicked")} className="logo">
                    logo
                </div>
                <input onChange={this.inputChange} />
            </header>
        );
    }
}

export default Header;
