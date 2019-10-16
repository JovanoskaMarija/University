import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

const Header = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  background-color: #FFFFFF;
  border: none;
  border-radius: 0 6px;
  padding: 10px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  h3 { margin: 0;}
`;

const NavigationBar = styled.div`
    display:flex;
    justify-content: space-between;
    width:20%;
    a{text-decoration: none; color: #000000}
`;

const Menu = () => {
  return (
    <Header>
      <h3>University</h3>
      <NavigationBar>
        <Link to="/subjects">Subjects</Link>
        <Link to="/selected-subjects">Selected Subjects</Link>
      </NavigationBar>
    </Header>
  );
};

export default Menu;
