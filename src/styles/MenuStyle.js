import styled from "styled-components";

export const Header = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  border: none;
  padding: 10px 0 10px 40px;
  border-radius: 0 0 6px 6px;
  color: #053D57;
  background-color: white;
  box-shadow: 1px 1px 4px 1px rgba(177, 177, 177, 0.4);
`;

export const NavigationBar = styled.div`
  display: flex;
  justify-content: flex-end;
  a {
    text-decoration: none;
    margin-right: 40px;
    color: #053D57;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    :hover{
      color: #97BCC7
    }
  }
`;
