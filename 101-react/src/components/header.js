/**
State is an object that servers us just like a databases so we can store values, check for events , in conclusion thrue the State we can control how the component behaves.

@params .bind(this): this is refered to class, not to the function "this.setState()".
    It's changing behavior of "this" function.
    It's make a relationship with the function and actual class

React is not allowed using :
    this.state.push('')
                ^^
 */
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
        // console.log(event.target.value);
        this.setState({ keywords: event.target.value });
    }

    render() {
        return (
            <header>
                <div onClick={() => console.log("clicked")} className="logo">
                    logo
                </div>
                <input onChange={this.inputChange.bind(this)} />
            </header>
        );
    }
}

export default Header;
