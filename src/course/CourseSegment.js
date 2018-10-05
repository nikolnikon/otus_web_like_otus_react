import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCourses} from "../actions/courseActions";
import CoursesStrip from "./CoursesStrip";


// todo Вопрос. Где лучше делать загрузку курсов с сервера? Выбирал между родительскими элементами компонентов, которым
// необходимы курсы, и каким-то очень глобальным компонентом типа App или Main. В первом случае не надо передавать
// данные через большое количество промежуточных компонентов, во втором меньше обращений к сервису.

class CourseSegment extends Component {
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchCourses('http://localhost:8000'))
    }

    render() {
        const {courses} = this.props;
        return (
            <CoursesStrip title="Список курсов для IT специалистов" courses={courses} className="strip_background_grey"/>
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
)(CourseSegment)
