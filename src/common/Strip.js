import React, { Component } from 'react';
import './Strip.css';

class Strip extends Component {
    render() {
        return (
            <div className={`strip ${this.props.className}`}>
                <div className="container">
                    <h2 className="strip__title">{this.props.title}</h2>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Strip;
