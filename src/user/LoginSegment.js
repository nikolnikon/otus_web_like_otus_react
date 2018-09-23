import React, { Component } from 'react'
import LoginForm from "./LoginForm";


class LoginSegment extends Component {
    render() {
        return (
            <div className="login">
                <div className="container">
                    <h1 className="h h_centered">Войти в Like OTUS</h1>
                    <div className="row row_justify_center">
                        <LoginForm
                            user={this.props.user}
                            onUsernameChanged={this.props.onUsernameChanged}
                            onPasswordChanged={this.props.onPasswordChanged}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginSegment;