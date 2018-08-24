import React, { Component } from 'react';
import Strip from "./Strip";
import FeaturesBlock from "./FeaturesBlock";

class FeaturesStrip extends Component {
    render() {
        return (
            <Strip header={'Получите навыки для отличной карьеры в IT'}>
                <FeaturesBlock features={this.props.features}/>
            </Strip>
        )
    }
}

export default FeaturesStrip;