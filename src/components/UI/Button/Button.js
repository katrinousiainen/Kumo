import React from 'react';
import classes from './Button.scss';

const button = (props) => (
    <button
        disabled={props.disabled}
        className="btn btn-dark"
        id="button"
        onClick={props.clicked}>{props.children}</button>
);

export default button;
