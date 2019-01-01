import React from 'react'
import { Route } from "react-router-dom";

// Components
import App from './components/App'
import Home from './components/Home'

const AppRoutes = ()=> (
    <App>
        <Route path='/' component={Home}/>
    </App>
)

export default AppRoutes