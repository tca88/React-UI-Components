import React from 'react';
import './Button.css';

const NumberButton = props => {
    // const { num } = props;
    // console.log(props)
    // const numItems = num.numbers.map((number) =>
        // <div className="number-item" key={number}>
        //     {number}
        //          </div>
    //             );
    return (
        <div>
            <div className={props.numberButtonStyle}>{props.text}</div>
        </div>
    );
};

NumberButton.defaultProps = {
    numberButtonStyle: 'number-item',
    text: '0',
};

export default NumberButton;