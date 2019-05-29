import React from 'react';
import ActionButton from '../ButtonComponents/ActionButton';
import NumberButton from '../ButtonComponents/NumberButton';
import './Display.css';

const CalculatorDisplay = props => {
  return (
    <div className="calculatorDisplay">
    <div className="answer">0</div>
    <div className="row1">
      <ActionButton text="clear"/> 
      <NumberButton info="/" buttonStyle="redBtn" />
    </div>
    <div className="row2">
      <NumberButton info="7"/>
      <NumberButton info="8"/>
      <NumberButton info="9"/>
      <NumberButton info="x" buttonStyle="redBtn" />
    </div>
    <div className="row3">
      <NumberButton info="4"/>
      <NumberButton info="5"/>
      <NumberButton info="6"/>
      <NumberButton info="-" buttonStyle="redBtn" />
    </div>
    <div className="row4">
      <NumberButton info="1"/>
      <NumberButton info="2"/>
      <NumberButton info="3"/>
      <NumberButton info="+" buttonStyle="redBtn" />
    </div>
    <div className="row5">
      <ActionButton text="0"/> 
      <NumberButton info="=" buttonStyle="redBtn" />
    </div>
    </div>
  );
};


export default CalculatorDisplay;