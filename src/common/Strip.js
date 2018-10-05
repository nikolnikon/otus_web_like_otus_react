import React, { Component } from 'react'
import classNames from 'classnames'
import './Strip.scss'

class Strip extends Component {
    render() {
        return (
            //todo Вопрос. Если className не передается (что допустимо), то в браузере вижу в атрибуте class "undrfined".
            // Это допустимо или лучше при рендере делать проверку, что проп задан?
            <div className={classNames('strip', this.props.className)}>
                <div className="container">
                    <h2 className="strip__title">{this.props.title}</h2>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Strip;
