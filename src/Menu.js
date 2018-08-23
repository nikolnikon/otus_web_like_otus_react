import React, { Component } from 'react';
import './Menu.css';

// todo Спросить, как отрендерить переменное число a внтри nav

class Menu extends Component {
    render() {
        return (
            <nav className={`menu ${this.props.className}`}>
                <a className="menu__item">Курсы</a>
                <a className="menu__item">Мероприятия</a>
                <a className="menu__item">Обучение</a>
                <a className="menu__item">Работа в компаниях</a>
                <a className="menu__item">Компаниям</a>
                <a className="menu__item">Блог</a>
            </nav>
        );
    }
}

export default Menu;