import React, { Component } from 'react'
import './Header.scss'
import Menu from './Menu'
import Logo from './Logo'
import AuthButtonsBlock from '../user/AuthButtonsBlock'
import { Link } from 'react-router-dom'

// todo Вопрос. Где лучше объявлять переменные типа header_menu_items? Варианты, которые приходят на ум: App.js, Header.js (global scope), Header.js (внутри метода render). Последний вариант, как я понимаю, будет приводить к перерисовке Menu всякий раз, когда перерисовывается Header, т.к. при этом будут меняться props для Menu.

const header_menu_items = [
    {name: 'Курсы', url: '/courses'},
    {name: 'Мероприятия', url: '#'},
    {name: 'Обучение', url: '#'},
    {name: 'Работа в компаниях', url: '#'},
    {name: 'Компаниям', url: '#'},
    {name: 'Блог', url: '#'},
];

class Header extends Component {
    render() {
        return (
            <header className="header page__header">
                <div className="container header__container">
                    <div className="row">
                        <Logo className="header__logo"/>
                        <Menu className="header__menu"
                              items={header_menu_items}
                        />
                        <AuthButtonsBlock/>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
