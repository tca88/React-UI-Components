import React from 'react';
import './Button.css';

const OperatorButton = props => {
    // console.log(props.calcProp);
    const { operator } = props;
    const operatorItems = operator.operators.map((operator) =>
        <div className="operator-item" key={operator}>
            {operator}
                 </div>
                );
    return (
        <div>
            <div className="operator-buttons">{operatorItems}</div>
        </div>
    );
};

export default OperatorButton;