import React, { useState } from "react";
import { Link } from "@reach/router";
import { Header, NavigationBar } from "../styles/MenuStyle";
import { MenuIcon } from "../icons/Icons";

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          color: isCurrent ? "#97BCC7" : "#006884",
          fontStyle: isCurrent ? "italic" : null,
          textShadow: isCurrent ? "2px 2px 5px rgba(128,128,128,0.4)" : null
        }
      };
    }}
  />
);

const Menu = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = e => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  return (
    <Header>
      <NavigationBar>
        <NavLink to="/">University</NavLink>
      </NavigationBar>
      <div
        className="menu-icon"
        aria-hidden="true"
        onClick={e => handleToggle(e)}
      >
        <MenuIcon />
      </div>
      <NavigationBar>
        <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
          <NavLink to="/subjects">Subjects</NavLink>
          <NavLink to="/selected">Selected</NavLink>
        </ul>
      </NavigationBar>
    </Header>
  );
};
export default Menu;
