import React from 'react'
import { Route, Switch } from "react-router-dom"
import Error404 from './components/Error/404'

// Components
import App from './components/App'
import Home from './components/Home'

const AppRoutes = ()=> (
    <App>
        <Switch>
            <Route path='/' component={Home}/>
            <Route component={Error404}/>
        </Switch>
    </App>
)

export default AppRoutes