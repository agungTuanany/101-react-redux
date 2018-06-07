// MAIN index.js

import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route } from 'react-router-dom';
// COMPONENT
import App from './components/App';
import Car from './components/car';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/car/:id" component={Car} />
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);
