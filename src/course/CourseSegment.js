import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCourses} from "../actions/courseActions";
import CoursesStrip from "./CoursesStrip";


class CourseSegment extends Component {
    componentDidMount() {
        const {dispatch, limit} = this.props;
        dispatch(fetchCourses('http://localhost:8000'))
    }
    render() {
        const {courses} = this.props;
        return (
            <CoursesStrip courses={courses} className="strip_background_grey"/>
        )
    }
}

function mapStateToProps(state) {
    return {
        courses: state.courses.items,
        loading: state.courses.loading,
        error: state.courses.error,
    }
}

export default connect(mapStateToProps)(CourseSegment)
