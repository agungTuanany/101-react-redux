import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

// COMPONENT
import App from "./components/App";

const createStoreWithMiddlewware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddlewware()}>
        <App />
    </Provider>,
    document.getElementById("root")
);
