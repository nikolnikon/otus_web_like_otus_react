import React from 'react'
import './AuthButtonsBlock.scss'
import { Link } from 'react-router-dom'

const AuthButtonsBlock = () => (
    <div className="auth header__auth">
        <Link to="/users/login"><button className="auth__button">Вход</button></Link>
        <Link to="/users/register"><button className="auth__button">Регистрация</button></Link>
    </div>
);

export default AuthButtonsBlock;
