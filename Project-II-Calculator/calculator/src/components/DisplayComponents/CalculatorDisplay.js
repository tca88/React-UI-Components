import React from 'react';
import './Display.css';
import NumberButton from '../ButtonComponents/NumberButton';

const calcButtons = {
    operators: ['÷', '×', '−', '+', '='],
    numbers: [7, 8, 9, 4, 5, 6, 1, 2, 3],
    action1: 'clear',
    action2: 0,
};

const CalculatorDisplay = () => {
    return (
        <div className="claculator-display">
            <div className="all-buttons">
                <div className="action-number-buttons">
                <NumberButton num={calcButtons} />
                </div>
            </div>
        </div>
    );
};

export default CalculatorDisplay;