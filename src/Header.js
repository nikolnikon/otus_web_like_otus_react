import React, { Component } from 'react';
import './Header.css';
import Menu from './Menu';
import Logo from './Logo';

// todo Вопрос. Надо ли создавать отдельные компоненты для блоков page, container, row?

class Header extends Component {
    render() {
        return (
            <header className="header page__header">
                <div className="container header__container">
                    <div className="row">
                        <Logo className="header__logo"/>
                        <Menu className="header__menu"
                              items={[
                                  {name: 'Курсы', url: '#'},
                                  {name: 'Мероприятия', url: '#'},
                                  {name: 'Обучение', url: '#'},
                                  {name: 'Работа в компаниях', url: '#'},
                                  {name: 'Компаниям', url: '#'},
                                  {name: 'Блог', url: '#'},
                              ]}
                        />
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
