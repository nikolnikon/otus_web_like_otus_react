import React, { Component } from 'react'
import FeaturesStrip from '../feature/FeaturesStip'
import CoursesStrip from '../course/CoursesStrip'
import EmployersStrip from '../employer/EmployersStrip'
import { features, courses, employers } from './data'

class HomeSegment extends Component {
    render() {
        return (
            <React.Fragment>
                <FeaturesStrip features={features}/>
                <CoursesStrip courses={courses} className="strip_background_grey"/>
                <EmployersStrip employers={employers}/>
            </React.Fragment>
        )
    }
}

export default HomeSegment;