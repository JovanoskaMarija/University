import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 256px );
  overflow-y: scroll;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  box-sizing: border-box;
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
  @media only screen and (max-width: 1035px){
    ${props =>
    props.showFilters === true
      ? "height: calc(100vh - 309.2px );"
      : "height: calc(100vh - 256px );"};
  }
  @media only screen and (max-width: 635px){
    ${props =>
    props.showFilters === true
      ? "height: calc(100vh - 362.4px );"
      : "height: calc(100vh - 256px );"};
  }
  @media only screen and (max-width: 495px){
    ${props =>
    props.showFilters === true
      ? "height: calc(100vh - 415.6px );"
      : "height: calc(100vh - 256px );"};
  }
  @media only screen and (max-width: 431px){
    height: calc(100vh - 468.8px );
    ${props =>
    props.showFilters === true
      ? "height: calc(100vh -  468.8px );"
      : "height: calc(100vh - 256px );"};
  }
  @media only screen and (max-width: 386px){
    ${props =>
    props.showFilters === true
      ? "height: calc(100vh - 575.2px );"
      : "height: calc(100vh - 256px );"}
  }
  @media only screen and (max-width: 375px){
    ${props =>
    props.showFilters === true
      ? "height: calc(100vh - 628.4px );"
      : "height: calc(100vh - 256px );"}
  }
`;

export const List = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-evenly;
`;
