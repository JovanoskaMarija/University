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

    //console.log({filterName, name, value})
    //console.log("Filter imeto e :", filterName, name ,value)
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
    if (!this.state.filterProgram) {
      return subject;
    }
    return this.state.filterProgram.includes(subject.program);
  };

  filterByExam = subject => {
    if (!this.state.filterExam) {
      return SubjectList;
    }
    return this.state.filterExam.includes(subject.exam);
  };

  filterBySemester = subject => {
    if(!this.state.filterSemester){
      return subject
    }
    return this.state.filterSemester.includes(subject.semester)
  }

  filterByDifficulty = subject => {
    if(!this.state.filterDifficulty){
      return subject
    }
    return this.state.filterDifficulty.includes(subject.difficulty)
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
          //data={data}
          filteredData={filteredData}
          filterProfessor={this.state.filterProfessor}
          filterName={this.state.filterName}
          filterFaculty={this.state.filterFaculty}
          filterProgram={this.state.filterProgram}
          onFilterChange={this.onFilterChange}
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
