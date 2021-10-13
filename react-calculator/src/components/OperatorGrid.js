import React from "react";
import { OperatorGridDiv, OperatorButton } from "./styled_components";

const OperatorGrid = () => {
    return(
    <OperatorGridDiv>
        <OperatorButton><p>+</p></OperatorButton>
        <OperatorButton><p>-</p></OperatorButton>
        <OperatorButton><p>x</p></OperatorButton>
        <OperatorButton><p>/</p></OperatorButton>
        <OperatorButton><p>%</p></OperatorButton>
        <OperatorButton><p>=</p></OperatorButton>
    </OperatorGridDiv>
    );
}

export default OperatorGrid
