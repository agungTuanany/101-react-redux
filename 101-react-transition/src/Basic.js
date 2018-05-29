import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./App.css";

class Basic extends Component {
    constructor(props) {
        super(props);

        this.state = { items: [99, 25] };
        // this.handleAdd = this.handleAdd.bind(this);
    }

    addElements() {
        return this.state.items.map(function(item, i) {
            return (
                <CSSTransition
                    key={i}
                    classNames="basic"
                    timeout={{ enter: 500, exit: 500 }}
                    appear={500}
                >
                    <div className="item">{item}</div>
                </CSSTransition>
            );
        });
    }

    generateNumber() {
        //let random = Math.floor(Math.random() * 100) + 1;
        let newArray = [
            ...this.state.items,
            Math.floor(Math.random() * 100) + 1
        ];

        this.setState({
            items: newArray
        });
    }

    removeNumber() {
        let newArray = this.state.items.slice(0, -1);
        this.setState({
            items: newArray
        });
    }

    render() {
        return (
            <div>
                <TransitionGroup>{this.addElements()}</TransitionGroup>
                <div className="btns">
                    <div
                        className="btn-add"
                        onClick={() => this.generateNumber()}
                    >
                        Add Elements
                    </div>
                    <div
                        className="btn-remove"
                        onClick={() => this.removeNumber()}
                    >
                        Remove Elements
                    </div>
                </div>
            </div>
        );
    }
}

export default Basic;
