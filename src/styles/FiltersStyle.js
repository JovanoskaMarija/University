import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;

export const Filter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 10px;
  @media only screen and (max-width: 1050px){
    display: flex;
    align-items: center;
    justify-content: center
  }
 
`;

export const Separator = styled.div`
  margin: 10px;
`;

export const ToggleFilters = styled.div`
  padding: 10px ;
  margin: 10px;
`;
