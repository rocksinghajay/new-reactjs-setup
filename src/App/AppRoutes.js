import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MainApp from '../views/MainApp'


const AppRoutes = () =>
    <Router>
        <Route exact path="/" component={MainApp} />
    </Router>

export default AppRoutes