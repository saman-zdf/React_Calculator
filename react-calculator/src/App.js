import React, { useState, useEffect } from 'react';
import NumberGrid from './components/NumberGrid';
import OperatorGrid from './components/OperatorGrid';
import { Wrapper, Display, ButtonField } from './components/styled_components';

const App = () => {
  const [result, setResult] = useState('');
  const [expression, setExpression] = useState('');

  const clickHandler = (event) => {
    if (event.target.innerHTML === expression) {
      setExpression(expression + event.target.innerHTML);
    } else {
      setExpression(event.target.innerHTML);
    }
    console.log(expression);
  };
  useEffect(() => {
    setResult(result + expression);
  }, [expression]);

  const equalHandler = () => {
    try {
      console.log(eval(result));
      setResult(eval(result));
    } catch (err) {
      alert(err.message);
    }
  };
  const clearHandler = () => {
    setResult('');
    setExpression('');
  };
  const backHandler = () => {
    return setResult(result.slice(0, -1));
  };

  return (
    <Wrapper>
      <Display>
        <p>{result}</p>
      </Display>
      <ButtonField>
        <NumberGrid clickHandler={clickHandler} />
        <OperatorGrid
          handleOperator={clickHandler}
          equalHandler={equalHandler}
          clearHandler={clearHandler}
          backHandler={backHandler}
        />
      </ButtonField>
    </Wrapper>
  );
};

export default App;
