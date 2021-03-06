import React, { Component } from 'react'
import Strip from '../common/Strip'
import CourseCard from './CourseCard'

class CoursesStrip extends Component {
    render() {
        const {courses, title} = this.props;
        return (
            <Strip title={title} className={this.props.className}>
                <div className="row row_justify_center">
                    {
                        courses.map((course) =>
                            <CourseCard
                                course={course}
                                key={course.name}
                            />
                        )
                    }
                </div>
            </Strip>
        )
    }
}

export default CoursesStrip;
