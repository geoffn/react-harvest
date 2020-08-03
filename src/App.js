import React from 'react'
import './css/bulma.min.css';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import EventLayout from './Events/EventLayout'
import FoodbankLayout from './Foodbanks/FoodbankLayout'
import FourZeroFour from './FourZeroFour'

function App() {
    return (
        <Router>
            <div className="container">
                <Link to="/">Events</Link>
                <Link to="/Foodbank">Foodbank</Link>
            </div>
            <Switch>
                <Route path="/" exact component={EventLayout} />
                <Route path="/Event" component={EventLayout} />
                <Route path='/Foodbank' component={FoodbankLayout} />
                <Route component={FourZeroFour} />
            </Switch>
        </Router>
    )
}

export default App