import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";

// COMPONENTS
import Post from "./component/posts";
import Profile from "./component/profile";

class App extends Component {
    render() {
        return <div> Home </div>;
    }
}

ReactDOM.render(
    <BrowserRouter>
        <div>
            <header>
                <Link to="/"> Home </Link> <br />
                <Link to="/post"> Post </Link> <br />
                <Link to="/profile"> Profile </Link> <br />
                <hr />
            </header>
            <Route exact path="/" component={App} />
            <Route path="/post" component={Post} />
            <Route path="/profile" component={Profile} />
        </div>
    </BrowserRouter>,
    document.querySelector("#root")
);
