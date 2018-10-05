import React from 'react';
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import './Logo.css';


const Logo = (props) => (
    <div className={classNames('logo', props.className)}>
        <Link to="/"><div className="logo__image" /></Link>
    </div>
);

export default Logo;
