import React, { Component } from "react";
import Menu from "./Menu.js";
import Filters from "./Filters.js";
import SubjectList from "./SubjectList.js";

import styled from "styled-components";

const MainContainer = styled.div`
  background-color: #f9f9f9;
`;

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const data = this.props.data;

    return (
      <MainContainer>
        <Menu />
        <SubjectList
          data={data}
        />
      </MainContainer>
    );
  }
}

export default Container;
