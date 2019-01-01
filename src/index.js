import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import './index.css';
import * as serviceWorker from './serviceWorker';
import configureStore from './shared/redux/configureStore'

// Routes
import AppRoutes from './routes'

// Configurando Redux Store
const store = configureStore(window.initialState)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <AppRoutes />
        </Router>
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
