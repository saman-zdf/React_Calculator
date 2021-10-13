import React from 'react';
import { OperatorGridDiv, OperatorButton } from './styled_components';

const OperatorGrid = ({
  clearHandler,
  handleOperator,
  equalHandler,
  backHandler,
}) => {
  const operators = ['+', '-', '*', '/', '%'];
  return (
    <OperatorGridDiv>
      <OperatorButton onClick={clearHandler}>C</OperatorButton>
      <OperatorButton onClick={backHandler}>&lt;</OperatorButton>

      {operators.map((op, idx) => {
        return (
          <OperatorButton key={idx} onClick={handleOperator}>
            {op}
          </OperatorButton>
        );
      })}
      <OperatorButton onClick={equalHandler}>=</OperatorButton>
    </OperatorGridDiv>
  );
};

export default OperatorGrid;
