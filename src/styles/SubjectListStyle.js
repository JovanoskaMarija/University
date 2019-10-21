import styled from "styled-components";

export const Container = styled.div`
  height: 550px;
  overflow-y: scroll;
  margin: auto;
  display: flex;
  box-sizing: border-box;
  margin-top: 30px;
  padding: 20px;
  background-color: rgba(0,0,0,0.02);
  border-top: 1px solid red;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #f2f2f2;
  }
  &::-webkit-scrollbar {
    width: 12px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #349cc7;
  }
`;

export const List = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
