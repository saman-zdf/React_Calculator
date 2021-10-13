import React from "react";
import { NumberGridDiv, NumberButton } from "./styled_components";

const NumberGrid = (props) => {

    return(
        <NumberGridDiv>
          <NumberButton onClick={props.clickHandler}>1</NumberButton>
          <NumberButton>2</NumberButton>
          <NumberButton>3</NumberButton>
          <NumberButton>4</NumberButton>
          <NumberButton>5</NumberButton>
          <NumberButton>6</NumberButton>
          <NumberButton>7</NumberButton>
          <NumberButton>8</NumberButton>
          <NumberButton>9</NumberButton>
        </NumberGridDiv>
    );    
}

export default NumberGrid