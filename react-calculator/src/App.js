import React from 'react'
import NumberGrid from './components/NumberGrid'
import OperatorGrid from './components/OperatorGrid'
import {Wrapper, Display, ButtonField,} from "./components/styled_components" 

const App = () => {

  const clickHandler = (event) => {
    console.log(event.target.innerText)
  }
  return (
    <Wrapper >
      <Display>
        <p onClick={()=>{console.log("123")}} style={{cursor: "pointer"}}>123</p>
      </Display>
      <ButtonField>
        <NumberGrid clickHandler={clickHandler}/> 
        <OperatorGrid /> 
      </ButtonField>
    </Wrapper>
  )
}

export default App
