import React from 'react';
import './Display.css';



const CalculatorDisplay = props => {
    return (
        <div>
            <div className="calculator-display">{props.text}</div>
        </div>
    );
};

CalculatorDisplay.defaultProps = {
    text: '0',
};


export default CalculatorDisplay;