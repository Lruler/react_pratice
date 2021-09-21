import React, { Component } from 'react'
import Count from './components/Count'
import Person from './components/Person'

import './global.css'

export default class App extends Component {
    render() {
        return (
            <div>
                <Count/>
                <hr />
                <Person/>
            </div>
        )
    }
}
