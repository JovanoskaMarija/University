import React from "react";
import { Link } from "@reach/router";
import { Header, NavigationBar } from "../styles/MenuStyle";
import { MenuIcon } from "../icons/Icons";

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          color: isCurrent ? "#97BCC7" :  "#006884" ,
          fontStyle: isCurrent ? "italic" : null,
          textShadow: isCurrent ? "2px 2px 5px rgba(128,128,128,0.4)" : null
        }
      };
    }}
  />
);

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
  }
  handleToggle = e => {
    e.preventDefault();
    this.setState(
      {
        isExpanded: !this.state.isExpanded
      },
      console.log("Posle", this.state.isExpanded)
    );
  };

  render() {
    const { isExpanded } = this.state;
    return (
      <Header>
        <NavigationBar>
          <NavLink to="/">University</NavLink>
        </NavigationBar>
        <div
          className="menu-icon"
          aria-hidden="true"
          onClick={e => this.handleToggle(e)}
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
  }
}

export default Menu;
