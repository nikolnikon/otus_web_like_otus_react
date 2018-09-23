import React, { Component } from 'react'
import './RegistrationForm.css'
import Form from '../common/Form'

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
    }

    handleUsernameChanged = (e) => (
        this.props.onUsernameChanged(e.target.value)
    );

    handleEmailChanged = (e) => (
      this.props.onEmailChanged(e.target.value)
    );

    handleFirstNameChanged = (e) => (
        this.props.onFirstNameChanged(e.target.value)
    );

    handleLastNameChanged = (e) => (
        this.props.onLastNameChanged(e.target.value)
    );

    handlePasswordChanged = (e) => (
        this.props.onPasswordChanged(e.target.value)
    );

    handleConfirmPasswordChanged = (e) => (
        this.props.onConfirmPasswordChanged(e.target.value)
    );

    render() {
        return(
            <Form>
                <input
                    type='hidden'
                    name='csrfmiddlewaretoken'
                    value='Ov6tBpqRxmLwobZelKvhulm7QkTq3HdhXiS2AttfzglQ5FY17wUPYMlWLVcyOqZm'
                />
                <div className="row row_justify_center">
                    <div className="form__field form__field_full">
                        <label htmlFor="id_first_name" className="form__label form__label_bold">Имя</label>
                        <input
                            type="text"
                            name="first_name"
                            maxLength="30"
                            id="id_first_name"
                            value={this.props.user.first_name}
                            onChange={this.handleFirstNameChanged}
                            className="form__input form__input_size_large"
                        />
                    </div>
                    <div className="form__field form__field_full">
                        <label htmlFor="id_last_name" className="form__label form__label_bold">Фамилия</label>
                        <input
                            type="text"
                            name="last_name"
                            maxLength="150"
                            id="id_last_name"
                            value={this.props.user.last_name}
                            onChange={this.handleLastNameChanged}
                            className="form__input form__input_size_large"
                        />
                    </div>
                </div>

                <div className="row row_justify_center">
                    <div className="form__field form__field_full">
                        <label htmlFor="id_username" className="form__label form__label_bold">Имя
                            пользователя</label>
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
                    <div className="form__field form__field_full">
                        <label htmlFor="id_email" className="form__label form__label_bold">E-mail</label>
                        <input
                            type="email"
                            name="email"
                            required
                            id="id_email"
                            value={this.props.user.email}
                            onChange={this.handleEmailChanged}
                            className="form__input form__input_size_large"
                        />
                    </div>
                </div>

                <div className="row row_justify_center">
                    <div className="form__field form__field_full">
                        <label htmlFor="id_password1" className="form__label form__label_bold">Пароль</label>
                        <input
                            type="password"
                            name="password1"
                            required
                            id="id_password1"
                            value={this.props.user.password}
                            onChange={this.handlePasswordChanged}
                            className="form__input form__input_size_large"
                        />
                    </div>
                    <div className="form__field form__field_full">
                        <label htmlFor="id_password2" className="form__label form__label_bold">Подтверждение
                            пароля</label>
                        <input
                            type="password"
                            name="password2"
                            required
                            id="id_password2"
                            value={this.props.user.confirmed_password}
                            onChange={this.handleConfirmPasswordChanged}
                            className="form__input form__input_size_large"
                        />
                    </div>
                </div>
                <div className="row row_justify_center">
                    <input
                        type="submit"
                        value="Начать обучение"
                        className="form__button"
                    />
                </div>
            </Form>
        )
    }
}

export default RegistrationForm;
