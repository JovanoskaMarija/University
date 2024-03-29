import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 129.2px );
  overflow-y: scroll;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  box-sizing: border-box;
  /* margin-top: 30px; */
  padding: 20px;
  background-color: #F2F1EF;
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
  align-content: flex-start;
  justify-content: space-evenly;
`;
