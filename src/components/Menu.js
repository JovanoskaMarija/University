import React from "react";
import { Link } from "@reach/router";
import { Header, NavigationBar } from "../styles/MenuStyle";

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        style: {
          fontStyle: isCurrent ? "italic" : null,
          textShadow: isCurrent ? "2px 2px 5px rgba(128,128,128,0.4)" : null
        }
      };
    }}
  />
);

const Menu = () => {
  return (
    <Header>
      <NavigationBar>
        <NavLink to="/">University</NavLink>
      </NavigationBar>
      <NavigationBar>
        <NavLink to="/subjects">Subjects</NavLink>
        <NavLink to="/selected">Selected</NavLink>
      </NavigationBar>
    </Header>
  );
};

export default Menu;
