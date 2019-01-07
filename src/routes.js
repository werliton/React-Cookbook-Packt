import React from 'react'
import { Route, Switch } from "react-router-dom"
import Error404 from './components/Error/404'

// Components
import App from './components/App'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Notes from './components/Notes';
import Coins from './components/Coins/';
import Todo from './components/Todo/Todo';
import PhrasesContainer from './components/Phrase/';

const AppRoutes = ()=> (
    <App>
        <Switch>
            <Route path='/' component={Home} exact/>            
            <Route path='/about' component={About} exact/>   
            <Route path='/todo' component={Todo} exact/>
            <Route path='/contact' component={Contact} exact/>
            <Route path='/coins' component={Coins} exact/>
            <Route path='/notes' component={Notes} exact/>
            <Route path='/notes/:noteId' component={Notes} exact/>
            <Route path='/phrases' component={PhrasesContainer} exact/>
            <Route component={Error404}/>
        </Switch>
    </App>
)

export default AppRoutes