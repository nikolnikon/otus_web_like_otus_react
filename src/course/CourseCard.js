import React, { Component } from 'react';
import './CourseCard.css'

class CourseCard extends Component {
    render() {
        const {course} = this.props;
        const formatter = new Intl.DateTimeFormat('ru', {
            day: 'numeric',
            month: 'long',
        });
        return (
            <div className="course-card">
                <div className="course-card__image">
                    <img src="https://via.placeholder.com/350x220/e8117f/ffffff" alt={course.name}/>
                </div>
                <div className="course-card__content">
                    <h3 className="course-card__header">{course.name}</h3>
                    <div className="course-card__description">
                        <span className="course-card__start-date">
                            C {formatter.format(Date.parse(course.start_date))}, {course.duration} месяцев
                        </span>
                        <p>
                            {course.brief}
                        </p>
                    </div>
                </div>
                {/*<div className="course-card__extra-content course-card__extra-content_bold">*/}
                    {/*<p>*/}
                        {/*{*/}
                            {/*course.tags.map((tag) => tag + '')*/}
                        {/*}*/}
                    {/*</p>*/}
                {/*</div>*/}
            </div>
        )
    }
}

export default CourseCard;
