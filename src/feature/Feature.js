import React, { Component } from 'react';
import './Feature.scss'

class Feature extends Component {
    render(){
        return (
            <div className="feature">
                <div className="feature__cell">
                    <img src={this.props.image.url} alt={this.props.image.alt} />
                </div>
                <div className="feature__cell">
                    <h3 className="feature__title">{this.props.title}</h3>
                    <p className="feature__description">
                        {this.props.description}
                    </p>
                </div>
            </div>
        )
    }
}

export default Feature;
