import React, { Component } from 'react'
import RegistrationForm from './RegistrationForm'


class RegistrationSegment extends Component {
    render() {
        const {user} = this.props;
        return (
            <div className="registration">
                <div className="container">
                    <h1 className="h h_centered">Регистрация в Like OTUS</h1>
                    <div className="row row_justify_center">
                        <RegistrationForm user={user} />
                    </div>
                </div>
            </div>
        )
    }
}

export default RegistrationSegment;