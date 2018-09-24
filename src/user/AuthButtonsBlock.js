import React, { Component } from 'react'
import './AuthButtonsBlock.css'
import { Link } from 'react-router-dom'

class AuthButtonsBlock extends Component {
    render() {
        return (
            <div className="auth header__auth">
                <Link to="/users/login"><button className="auth__button">Вход</button></Link>
                <Link to="/users/register"><button className="auth__button">Регистрация</button></Link>
            </div>
        )
    }
}

export default AuthButtonsBlock;
