import React, { Component } from 'react'
import RegistrationForm from './RegistrationForm'


class RegistrationSegment extends Component {
    render() {
        return (
            <div className="registration">
                <div className="container">
                    <h1 className="h h_centered">Регистрация в Like OTUS</h1>
                    <div className="row row_justify_center">
                        <RegistrationForm
                            user={this.props.user}
                            onUsernameChanged={this.props.onUsernameChanged}
                            onEmailChanged={this.props.onEmailChanged}
                            onFirstNameChanged={this.props.onFirstNameChanged}
                            onLastNameChanged={this.props.onLastNameChanged}
                            onPasswordChanged={this.props.onPasswordChanged}
                            onConfirmPasswordChanged={this.props.onConfirmPasswordChanged}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default RegistrationSegment;