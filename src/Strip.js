import React, { Component } from 'react';
import './Strip.css';

class Strip extends Component {
    render() {
        return (
            <div className="strip">
                <div className="container">
                    <h2>{this.props.header}</h2>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Strip;
