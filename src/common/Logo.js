import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Logo.css';


class Logo extends Component {
    render() {
        return (
            <div className={`logo ${this.props.className}`}>
                <Link to="/"><div className="logo__image" /></Link>
            </div>
        );
    }
}

export default Logo;
