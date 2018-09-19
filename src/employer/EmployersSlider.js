import React, { Component } from 'react'
import Carousel from '../common/Carousel'

export default class EmployersSlider extends Component {
    render() {
        const {employers} = this.props;

        return (
            <Carousel>
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
