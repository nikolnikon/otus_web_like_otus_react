import React, { Component } from 'react'
import Strip from '../common/Strip'
import EmployersSlider from './EmployersSlider';

class EmployersStrip extends Component {
    render() {
        const {settings, employers} = this.props;
        return (
            <Strip header={'Нашим выпускникам предлагают работу'}>
                <EmployersSlider settings={settings} employers={employers}/>
            </Strip>
        )
    }
}

export default EmployersStrip;