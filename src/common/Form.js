import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
    render() {
        return (
            <div className="form registration__form">
                <form>
                    {this.props.children}
                </form>
            </div>
        )
    }
}

export default Form;