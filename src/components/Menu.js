import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

const Header = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  border: none;
  padding: 10px;
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
