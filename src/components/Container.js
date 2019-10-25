import React, { Component } from "react";
import { Router } from "@reach/router";
import Menu from "./Menu.js";
import Filters from "./Filters.js";
import SubjectList from "./SubjectList.js";
import styled from "styled-components";
import subjectlist from "../data/subjectsList";

const MainContainer = styled.div``;

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subjects: [],
      filterProfessor: "",
      filterName: "",
      filterFaculty: "",
      filterProgram: [],
      filterExam: [],
      filterSemester: [],
      filterDifficulty: [],
      filterIsSelected: [],
      filterIsPassed: []
    };
  }

  onFilterChange = (name, value) => {
    const filterName = "filter" + name[0].toUpperCase() + name.slice(1);
    this.setState({ [filterName]: value });
  };

  handleSelected = subjectID => {
    this.setState(prevState => {
      const oldSubjectList = prevState.subjects;
      // od stari do novi, razlikata e shto samo vo eden predmet,ima sega isSelected smeneto
      const newSubjectList = oldSubjectList.map(subject => {
        if (subject.id === subjectID) {
          const newSubject = subject;
          newSubject.isSelected = !subject.isSelected;
          return newSubject;
        } else {
          return subject;
        }
      });
      return { subjects: newSubjectList };
    });
  };

  handlePassed = subjectID => {
    this.setState(prevState => {
      const oldList = prevState.subjects;
      const newList = oldList.map(subject => {
        if (subject.id === subjectID) {
          const selectedSubject = subject;
          selectedSubject.isPassed = !subject.isPassed;
          return selectedSubject;
        } else {
          return subject;
        }
      });
      return { subjects: newList };
    });
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
    // console.log(subject);
    // console.log(this.state.filterProgram);
    // if(!this.state.filterProgram || !this.state.filterProgram.length){     proveruvame dali stringot e prazen ili nizata e prazna vo zavisno kako sme go definirale vo state dali e string ili e niza
    if (!this.state.filterProgram.length) {
      return subject;
    }
    return this.state.filterProgram.includes(subject.program);
  };

  filterByExam = subject => {
    if (!this.state.filterExam.length) {
      return subject;
    }
    return this.state.filterExam.includes(subject.exam);
  };

  filterBySemester = subject => {
    if (!this.state.filterSemester.length) {
      return subject;
    }
    return this.state.filterSemester.includes(subject.semester);
  };

  filterByDifficulty = subject => {
    if (!this.state.filterDifficulty.length) {
      return subject;
    }
    return this.state.filterDifficulty.includes(subject.difficulty);
  };

  filterBySelected = subject => {
    if (!this.state.filterIsSelected.length) {
      return subject;
    }
    return this.state.filterIsSelected.includes(subject.isSelected);
  };

  filterByPassed = subject => {
    if (!this.state.filterIsPassed.length) {
      if(!subject.isPassed){
        return subject;
      }
    }
    return this.state.filterIsPassed.includes(subject.isPassed);
  };

  componentDidMount() {
    // const fetchSubjectList = async () => {
    //   const subjectList = await new Promise(resolve =>
    //       resolve(sl)
    //   )
    //   this.setState({ subjects :subjectList})
    // }
    // fetchSubjectList();

    this.setState({ subjects: subjectlist });
  }

  render() {
    const data = subjectlist;

    const filteredData = data
      .filter(this.filterByProfessor)
      .filter(this.filterByName)
      .filter(this.filterByFaculty)
      .filter(this.filterByProgram)
      .filter(this.filterByExam)
      .filter(this.filterBySemester)
      .filter(this.filterByDifficulty)
      .filter(this.filterBySelected)
      .filter(this.filterByPassed);

const filterSelected = data.filter(subject => subject.isSelected)
    return (
      <MainContainer>
        <Menu />
        <Filters
          filteredData={filteredData}
          filterProfessor={this.state.filterProfessor}
          filterName={this.state.filterName}
          filterFaculty={this.state.filterFaculty}
          filterProgram={this.state.filterProgram}
          filterIsSelected={this.state.filterIsSelected}
          filterIsPassed={this.state.IsPassed}
          onFilterChange={this.onFilterChange}
        />
        <Router>
          <SubjectList
            handleSelected={this.handleSelected}
            handlePassed={this.handlePassed}
            filteredData={filteredData}
            path="/subjects"
          />
          <SubjectList 
           handleSelected={this.handleSelected}
           handlePassed={this.handlePassed}
            filteredData={filterSelected}
            path="/selected" 
          />   
        </Router>
        {/* <SubjectList
          filteredData={filteredData}
        /> */}
      </MainContainer>
    );
  }
}

export default Container;
