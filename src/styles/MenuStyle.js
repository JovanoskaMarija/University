import styled from "styled-components";

export const Header = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  border: none;
  padding: 10px 40px;
  color: #349cc7;
  background-color: rgba(0, 0, 0, 0.02);
  box-shadow: 1px 1px 2px 1px rgba(177, 177, 177, 0.4);
  h3 {
    margin: 0;
  }
`;

export const NavigationBar = styled.div`
  display: flex;
  justify-content: flex-end;
  a {
    text-decoration: none;
    color: #000000;
    margin-left: 40px;
  }
`;
