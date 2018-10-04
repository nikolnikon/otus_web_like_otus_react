import React from 'react'
import classNames from 'classnames'
import './Form.css'

const Form = (props) => (
    <div className={classNames('form', props.className)}>
        <form>
            {props.children}
        </form>
    </div>
);

export default Form;