import React, { Component } from 'react';
import './Menu.css';

// todo Спросить, как отрендерить переменное число a внтри nav

class Menu extends Component {
    render() {
        const {className, items} = this.props
        return (
            <nav className={`menu ${className}`}>
                {
                    items.map((item) =>
                        <a className="menu__item" href={item.url} key={item.name}>{item.name}</a>
                    )
                }
            </nav>
        );
    }
}

export default Menu;