import React, { Component } from "react";
import Menu from "./Menu.js";
import Filters from "./Filters.js";
import SubjectList from "./SubjectList.js";

import styled from "styled-components";

const MainContainer = styled.div``;

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterProfessor: "",
      filterName: "",
      filterFaculty: "",
      filterProgram: "",
      filterExam: "",
      filterSemester: "",
      filterDifficulty: ""
    };
  }

  onFilterChange = (name, value) => {
    const filterName = "filter" + name[0].toUpperCase() + name.slice(1);
    this.setState({ [filterName]: value });
  };

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
      .toLowerCase()
      .includes(this.state.filterFaculty.toLowerCase());
  };

  filterByProgram = subject => {
    return subject.program.includes(this.state.filterProgram);
  };

  filterByExam = subject => {
    return subject.exam.includes(this.state.filterExam);
  };

  filterBySemester = subject => {
    return subject.semester.includes(this.state.filterSemester)
  }

  filterByDifficulty = subject => {
    return subject.difficulty.includes(this.state.filterDifficulty)
  }

  render() {
    const data = this.props.data;

    const filteredData = data
      .filter(this.filterByProfessor)
      .filter(this.filterByName)
      .filter(this.filterByFaculty)
      .filter(this.filterByProgram)
      .filter(this.filterByExam)
      .filter(this.filterBySemester)
      .filter(this.filterByDifficulty)

    return (
      <MainContainer>
        <Menu />
        <Filters
          filteredData={filteredData}
          filterProfessor={this.state.filterProfessor}
          filterName={this.state.filterName}
          filterFaculty={this.state.filterFaculty}
          filterProgram={this.state.filterProgram}
          onFilterChange={this.onFilterChange}
        />
        <SubjectList
          filteredData={filteredData}
        />
      </MainContainer>
    );
  }
}

export default Container;
