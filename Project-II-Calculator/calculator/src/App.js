import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import { ClearButton, ZeroButton } from './components/ButtonComponents/ActionButton';
import OperatorButton from './components/ButtonComponents/OperatorButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const calcButtons = {
  operators: ['÷', '×', '−', '+', '='],
  numbers: [7, 8, 9, 4, 5, 6, 1, 2, 3],
  action1: 'clear',
  action2: 0,
};

const App = () => {
  return (
    <div className="app">
            <CalculatorDisplay />
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

export default App;
