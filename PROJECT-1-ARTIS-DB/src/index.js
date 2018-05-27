import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

// COMPONENT
import Home from "./components/home";
import Artis from "./component/artis";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/artis/:artisid" component={Artis} />
            </div>
        </BrowserRouter>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
