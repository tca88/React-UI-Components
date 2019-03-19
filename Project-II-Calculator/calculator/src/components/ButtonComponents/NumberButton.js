import React from 'react';
import './Button.css';

const NumberButton = props => {
    // console.log(props.calcProp);
    const { num } = props;
    const numItems = num.numbers.map((number) =>
        <div className="number-item" key={number}>
            {number}
                 </div>
                );
    return (
        <div>
            <div className="number-buttons">{numItems}</div>
        </div>
    );
};

export default NumberButton;