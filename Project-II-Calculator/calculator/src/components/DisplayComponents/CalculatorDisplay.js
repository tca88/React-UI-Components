import React from 'react';
import './Display.css';
import NumberButton from '../ButtonComponents/NumberButton';
import { ClearButton, ZeroButton } from '../ButtonComponents/ActionButton';
import OperatorButton from '../ButtonComponents/OperatorButton';

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
                <ClearButton action={calcButtons} />
                <NumberButton num={calcButtons} />
                <ZeroButton action={calcButtons} />
                </div>
                <OperatorButton operator={calcButtons} />
            </div>
        </div>
    );
};

export default CalculatorDisplay;