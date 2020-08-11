import React from 'react'
import './css/bulma.min.css';
import './css/harvest.css'
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import EventLayout from './Events/EventLayout'
import FoodbankLayout from './Foodbanks/FoodbankLayout'
import FourZeroFour from './FourZeroFour'
import AddEventLayout from './Events/AddEvent/AddEventLayout'
import AboutLayout from './MiscComponents/AboutLayout';

function App() {
    return (
        <Router>

            <Switch>
                <Route path="/" exact component={EventLayout} />
                <Route path="/Event" component={EventLayout} />
                <Route path="/AddEvent" component={AddEventLayout} />
                <Route path='/Foodbank' component={FoodbankLayout} />
                <Route path='/About' component={AboutLayout} />
                <Route component={FourZeroFour} />
            </Switch>
        </Router>
    )
}

export default App