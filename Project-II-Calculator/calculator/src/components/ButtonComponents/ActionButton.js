import React from 'react';
import './Button.css';

const ClearButton = props => {

    return (
        <div>
            <div className="clear-button">{props.action.action1}</div>
        </div>
    );

}; 

const ZeroButton = props => {

    return (
        <div>
            <div className="zero-button">{props.action.action2}</div>
        </div>
    );

}; 

export { ClearButton, ZeroButton };