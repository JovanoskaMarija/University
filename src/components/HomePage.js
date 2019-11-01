import React from "react";
import Logo from "../logo.png";
import {LogoContainer} from '../styles/HomePageStyle'


const HomePage = () => {
  return (
    <LogoContainer>
      <img src={Logo} alt="Smiley face" />
    </LogoContainer>
  );
};

export default HomePage;
