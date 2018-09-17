import React, { Component } from 'react'
import Strip from "./Strip"
import EmployersSlider from "./EmployersSlider";

class EmployersStrip extends Component {
    render() {
        return (
            <Strip header={'Нашим выпускникам предлагают работу'}>
                <EmployersSlider/>
            </Strip>
        )
    }
}

export default EmployersStrip;