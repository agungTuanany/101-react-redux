import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// CONTAINERS
import Home from '../containers/Home';

// TYPE OF COMPONENT: Class-Component
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
