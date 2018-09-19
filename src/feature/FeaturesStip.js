import React, { Component } from 'react';
import Strip from "../common/Strip";
import Feature from "./Feature";

class FeaturesStrip extends Component {
    render() {
        const {features} = this.props
        return (
            <Strip header={'Получите навыки для отличной карьеры в IT'}>
                <div className="row row_wrapped row_justify_space-between">
                {
                    features.map((feature) =>
                        <Feature
                            image={feature.image}
                            title={feature.title}
                            description={feature.description}
                            key={feature.title}
                        />
                    )
                }
            </div>
            </Strip>
        )
    }
}

export default FeaturesStrip;