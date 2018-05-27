import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, Switch, NavLink } from "react-router-dom";

// COMPONENTS
import Post from "./component/posts";
import Profile from "./component/profile";
import PostsItems from "./component/posts_item";
import NotFound from "./component/404";
class App extends Component {
    render() {
        return <div> Home </div>;
    }
}

ReactDOM.render(
    <BrowserRouter>
        <div>
            <header>
                <NavLink
                    activeStyle={{ color: "red" }}
                    activeClassName="selected"
                    to="/"
                >
                    Home
                </NavLink>
                <br />
                <NavLink to="/post"> Post </NavLink> <br />
                <NavLink to="/profile"> Profile </NavLink> <br />
                <hr />
            </header>
            <Switch>
                <Route path="/post/:id" component={PostsItems} />
                <Route path="/profile" component={Profile} />
                <Route path="/post" component={Post} />
                <Route exact path="/" component={App} />
                <Route path="*" component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>,
    document.querySelector("#root")
);
