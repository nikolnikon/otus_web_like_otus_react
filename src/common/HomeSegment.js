import React, { Component } from 'react'
import FeaturesStrip from '../feature/FeaturesStip'
import CoursesStrip from '../course/CoursesStrip'
import EmployersStrip from '../employer/EmployersStrip'
import { features, courses, employers } from './data'
import {fetchCourses} from "../actions/courseActions";
import {connect} from "react-redux";

// todo Сделать обработку ошибок
class HomeSegment extends Component {
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchCourses('http://localhost:8000'))
    }

    render() {
        const {courses} = this.props;
        return (
            <React.Fragment>
                <FeaturesStrip features={features}/>
                <CoursesStrip title="Скоро начнутся" courses={courses} className="strip_background_grey"/>
                <EmployersStrip employers={employers}/>
            </React.Fragment>
        )
    }
}

export default connect(
    (state) => (
        {
            courses: state.courses.items,
            loading: state.courses.loading,
            error: state.courses.error,
        }
    )
)(HomeSegment)