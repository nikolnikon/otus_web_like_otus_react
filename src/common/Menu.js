import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.css'


class Menu extends Component {
    render() {
        const {className, items} = this.props;
        return (
            <nav className={`menu ${className}`}>
                {
                    items.map((item) =>
                        <NavLink to={item.url}
                                 className="menu__item"
                                 activeClassName="menu__item"
                                 key={item.name}>
                            {item.name}
                        </NavLink>
                    )
                }
            </nav>
        );
    }
}

export default Menu;