import React, { Component } from 'react';
import './Logo.css';

// todo Ворос. Для класса logo не заданы стили, но он определяет блок. Это допустимо?

class Logo extends Component {
    render() {
        return (
            <div className={`logo ${this.props.className}`}>
                <a className="logo__image" href="/"/>
            </div>
        );
    }
}

export default Logo;
