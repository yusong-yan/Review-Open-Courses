import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Courses from './Courses/Courses'
import Course from './Course/Course'

const App = () => {
    return (
        <Switch>
            <Route exact path="/" component = {Courses}/>
            <Route exact path="/courses/:slug" component = {Course}/>
        </Switch>
    )
}

export default App