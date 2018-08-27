import React, { Component } from 'react';
import Strip from './Strip';

class CoursesStrip extends Component {
    render() {
        return (
            <Strip header={'Скоро начнутся'}>
                <FeaturesBlock features={this.props.features}/>
            </Strip>
        )
    }
}

export default CoursesStrip;
