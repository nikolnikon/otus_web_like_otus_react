import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeSegment from './HomeSegment'
import RegistrationSegment from '../user/RegistrationSegment'
import LoginSegment from '../user/LoginSegment'

class Main extends Component {
    render() {
        return (
            <main className="main">
                <Switch>
                    <Route exact path='/' component={HomeSegment}/>
                    <Route exact path='/users/register' render={() => (
                        <RegistrationSegment
                            user={this.props.user}
                            onUsernameChanged={this.props.onUsernameChanged}
                            onEmailChanged={this.props.onEmailChanged}
                            onFirstNameChanged={this.props.onFirstNameChanged}
                            onLastNameChanged={this.props.onLastNameChanged}
                            onPasswordChanged={this.props.onPasswordChanged}
                            onConfirmPasswordChanged={this.props.onConfirmPasswordChanged}
                        />
                    )}/>
                    <Route exact path='/users/login' render={() => (
                        <LoginSegment
                            user={this.props.user}
                            onUsernameChanged={this.props.onUsernameChanged}
                            onPasswordChanged={this.props.onPasswordChanged}
                        />
                    )}/>
                </Switch>
            </main>
        )
    }
}

export default Main;