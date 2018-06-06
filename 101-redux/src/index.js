import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

// REDUCERS
import reducers from "./reducers";

// COMPONENT
import App from "./App";

const createStoreWithMiddlewware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddlewware(reducers)}>
        <App />
    </Provider>,
    document.getElementById("root")
);
