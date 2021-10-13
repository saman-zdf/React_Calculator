import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 500px;
  height: auto;
  padding: 1rem;
  margin: auto;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Display = styled.div`
  width: 90%;
  padding: 1rem;
  background-color: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ButtonField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 97%;
`;

export const NumberGridDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  width: 70%;
  height: auto;
`;

export const OperatorGridDiv = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NumberButton = styled.div`
  width: 30%;
  height: 100px;
  border: 1px solid red;
  display: grid;
  place-items: center;
`;
export const OperatorButton = styled.div`
  width: 100%;
  height: 49px;
  border: 1px solid red;
  display: grid;
  place-items: center;
`;
