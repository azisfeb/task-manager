import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';

import App from './App';
import Register from './component/auth/register';
import Home from './component/dashboard/index';
import { ProtectedRoute } from './protected.route';

function Main(){
    return(
        <div className="App">
            <Route exact path="/" component={App} />
            <ProtectedRoute exact path="/home" component={Home} />
            <Route exact path="/signup" component={Register} />
        </div>
    )
}


ReactDOM.render(
    <BrowserRouter>
        <Main />
    </BrowserRouter>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
