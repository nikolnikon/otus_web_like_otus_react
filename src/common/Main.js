import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeSegment from './HomeSegment'
import RegistrationSegment from '../user/RegistrationSegment'
import { user } from './data'

class Main extends Component {
    render() {
        return (
            <main className="main">
                {/*{this.props.children}*/}
                <Switch>
                    <Route exact path='/' component={HomeSegment}/>
                    <Route exact path='/users/register' render={() => (
                        <RegistrationSegment user={user}/>
                    )}/>
                </Switch>
            </main>
        )
    }
}

export default Main;