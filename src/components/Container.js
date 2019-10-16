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
      filterProfessor: "",
      filterName: "",
      filterFaculty: "",
    };
  }

  handleFilterProfessorChange = searchProfesorText => {
    this.setState({
      filterProfessor: searchProfesorText
    });
  };

  handleFilterNameChange = searchNameText => {
    //console.log("Pred , ", searchNameText)
    this.setState({
      filterName: searchNameText
    });
  };

  handleFilterFacultyChange = searchFacultyText => {
    this.setState({
      filterFaculty: searchFacultyText
    })
  }

  filterByProfessor = subject => {
    return subject.professor
      .toLowerCase()
      .includes(this.state.filterProfessor.toLowerCase());
  };

  filterByName = subject => {
    return subject.name
      .toLowerCase()
      .includes(this.state.filterName.toLowerCase());
  };

  filterByFaculty = subject => {
    return subject.faculty
      .includes(this.state.filterFaculty.toLowerCase());
  };

  render() {
    const data = this.props.data;

    const filteredData = data
      .filter(this.filterByProfessor)
      .filter(this.filterByName)
      .filter(this.filterByFaculty);

    return (
      <MainContainer>
        <Menu />
        <Filters
          //data={data}
          filterProfessor={this.state.filterProfessor}
          filterName={this.state.filterName}
          filterFaculty={this.state.filterFaculty}
          onFilterProfessorChange={this.handleFilterProfessorChange}
          onFilterNameChange={this.handleFilterNameChange}
          onFilterFacultyChange={this.handleFilterFacultyChange}
        />
        <SubjectList
          //data={data}
          filteredData={filteredData}
        />
      </MainContainer>
    );
  }
}

export default Container;