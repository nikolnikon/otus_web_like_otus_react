import React, { Component } from 'react'
import Carousel from '../common/Carousel'

export default class EmployersSlider extends Component {
    render() {
        const {settings, employers} = this.props;

        return (
            <Carousel settings={settings}>
                {
                    employers.map((employer) =>
                        <div>
                            <img src={employer.logo} alt={employer.name}/>
                        </div>
                    )
                }
            </Carousel>
        );
    }
}
