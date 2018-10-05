import React, { Component } from 'react'
import './LoginForm.scss'
import Form from '../common/Form'

class LoginForm extends Component {
    constructor(props) {
        super(props);
    }

    handleUsernameChanged = (e) => (
        this.props.onUsernameChanged(e.target.value)
    );

    handlePasswordChanged = (e) => (
        this.props.onPasswordChanged(e.target.value)
    );

    render() {
        return(
            <Form className="login__form">
                <input
                    type='hidden'
                    name='csrfmiddlewaretoken'
                    value='Ov6tBpqRxmLwobZelKvhulm7QkTq3HdhXiS2AttfzglQ5FY17wUPYMlWLVcyOqZm'
                />
                <div className="row row_justify_center">
                    <div className="form__field form__field_full">
                        <label htmlFor="id_username" className="form__label form__label_bold">Имя пользователя</label>
                        <input
                            type="text"
                            name="username"
                            maxLength="150"
                            autoFocus
                            required
                            id="id_username"
                            value={this.props.user.username}
                            onChange={this.handleUsernameChanged}
                            className="form__input form__input_size_large"
                        />
                    </div>
                </div>

                <div className="row row_justify_center">
                    <div className="form__field form__field_full">
                        <label htmlFor="id_password" className="form__label form__label_bold">Пароль</label>
                        <input
                            type="password"
                            name="password"
                            required
                            id="id_password"
                            value={this.props.user.password}
                            onChange={this.handlePasswordChanged}
                            className="form__input form__input_size_large"
                        />
                    </div>
                </div>
                <div className="row row_justify_center">
                    <input
                        type="submit"
                        value="Войти"
                        className="form__button"
                    />
                </div>
            </Form>
        )
    }
}

export default LoginForm;
