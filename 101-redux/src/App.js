/* eslint react/prop-types: 0 */

import React, { Component } from "react";

import MoviesList from "./containers/movies_list";

class App extends Component {
    render() {
        return (
            <div>
                <MoviesList />
            </div>
        );
    }
}

export default App;
