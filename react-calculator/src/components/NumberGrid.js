import React from 'react';
import { NumberGridDiv, NumberButton } from './styled_components';

const NumberGrid = (props) => {
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  return (
    <NumberGridDiv>
      {numbers.map((num, idx) => {
        return (
          <NumberButton key={idx} onClick={props.clickHandler}>
            {num}
          </NumberButton>
        );
      })}
    </NumberGridDiv>
  );
};

export default NumberGrid;
