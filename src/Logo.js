import React, { Component } from 'react';
import './Logo.css';


class Logo extends Component {
    render() {
        return (
            <div className={`logo ${this.props.className}`}>
                <a className="logo__image" href="/" />
            </div>
        );
    }
}

export default Logo;
