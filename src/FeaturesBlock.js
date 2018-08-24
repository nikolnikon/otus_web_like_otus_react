import React, { Component } from 'react';
import './App.css'
import Feature from './Feature';

class FeaturesBlock extends Component {
    render() {
        return (
            <div className="row row_wrapped row_justify_space-between">
                {
                    this.props.features.map((feature) =>
                        <Feature
                            image={feature.image}
                            title={feature.title}
                            description={feature.description}
                            key={feature.title}
                        />
                    )
                }
            </div>
        )
    }
}

export default FeaturesBlock;
