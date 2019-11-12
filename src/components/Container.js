import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import Menu from "./Menu.js";
import HomePage from "./HomePage";
import SubjectDetails from "./SubjectDetails";
import SubjectsContainer from "./SubjectsContainer";
import styled from "styled-components";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import "../style.css";

const MainContainer = styled.div`
  background-color: white;
`;

const Container = (props) => {
  const [subjects, setSubjects] = useState([]);
  const [filters, setFilters] = useState({
    filterProfessor: "",
    filterName: "",
    filterFaculty: "",
    filterProgram: [],
    filterExam: [],
    filterSemester: [],
    filterDifficulty: [],
    filterIsSelected: [],
    filterIsPassed: []
  });

  useEffect(() => {
    fetch("http://localhost:5000/subjects/", { method: "get" })
      .then(res => res.json())
      .then(data => setSubjects([...subjects, data]))
      .catch(err => console.log(err));
  }, []);

  const onFilterChange = (name, value) => {
    const filterName = "filter" + name[0].toUpperCase() + name.slice(1);
    setFilters({ ...filters, [filterName]: value });
  };

  const handleSelected = subjectID => {
    const newSelectedList = subjects.map(subject => {
      if (subject._id === subjectID) {
        const newSubject = subject;
        newSubject.isSelected = !subject.isSelected;
        return newSubject;
      } else {
        return subject;
      }
    });
    setSubjects(newSelectedList);
  };

  useEffect(() => {
    console.log("Subjects", subjects);
  }, [subjects]);

  const handlePassed = subjectID => {
    const newPassedList = subjects.map(subject => {
      if(subject._id === subjectID) {
        const passedSubject = subject;
        passedSubject.isPassed = !subject.isPassed;
        return passedSubject;
      } else {
        return subject
      }
    });
    setSubjects(newPassedList)
}

  const filterByProfessor = subject => {
    return subject.professor
      .toLowerCase()
      .includes(filters.filterProfessor.toLowerCase());
  };

  const filterByName = subject => {
    return subject.name
      .toLowerCase()
      .includes(filters.filterName.toLowerCase());
  };

  const filterByFaculty = subject => {
    return subject.faculty
      .toLowerCase()
      .includes(filters.filterFaculty.toLowerCase());
  };

  const filterByProgram = subject => {
    if (!filters.filterProgram.length) {
      return subject;
    }
    return filters.filterProgram.includes(subject.program);
  };

  const filterByExam = subject => {
    if (!filters.filterExam.length) {
      return subject;
    }
    return filters.filterExam.includes(subject.exam);
  };

  const filterBySemester = subject => {
    if (!filters.filterSemester.length) {
      return subject;
    }
    return filters.filterSemester.includes(subject.semester);
  };

  const filterByDifficulty = subject => {
    if (!filters.filterDifficulty.length) {
      return subject;
    }
    return filters.filterDifficulty.includes(subject.difficulty);
  };

  const filterBySelected = subject => {
    if (!filters.filterIsSelected.length) {
      return subject;
    }
    return filters.filterIsSelected.includes(subject.isSelected);
  };

  const filterByPassed = subject => {
    if (!filters.filterIsPassed.length) {
      if (!subject.isPassed) {
        return subject;
      }
    }
    return filters.filterIsPassed.includes(subject.isPassed);
  };

  //const data = subjectlist;
  const data = subjects;

  useEffect(() => {
    console.log("Data:",data)
  })

  const filteredData = data
  .filter(filterByProfessor)
  .filter(filterByName)
  .filter(filterByFaculty)
  .filter(filterByProgram)
  .filter(filterByExam)
  .filter(filterBySemester)
  .filter(filterByDifficulty)
  .filter(filterBySelected)
  .filter(filterByPassed);

  const filterSelected = data
  .filter(subject => subject.isSelected)
  .filter(filterByProfessor)
  .filter(filterByName)
  .filter(filterByFaculty)
  .filter(filterByProgram)
  .filter(filterByExam)
  .filter(filterBySemester)
  .filter(filterByDifficulty)
  .filter(filterByPassed);
  return (
    <MainContainer>
      <Menu />
      <Router>
        <HomePage path="/" />
        <SubjectsContainer
          path="/subjects"
          filteredData={filteredData}
          filterProfessor={filters.filterProfessor}
          filterName={filters.filterName}
          filterFaculty={filters.filterFaculty}
          filterProgram={filters.filterProgram}
          filterIsSelected={filters.filterIsSelected}
          filterIsPassed={filters.IsPassed}
          onFilterChange={onFilterChange}
          handleSelected={handleSelected}
          handlePassed={handlePassed}
        />
        <SubjectsContainer
          path="/selected"
          filteredData={filterSelected}
          filterProfessor={filters.filterProfessor}
          filterName={filters.filterName}
          filterFaculty={filters.filterFaculty}
          filterProgram={filters.filterProgram}
          filterIsSelected={filters.filterIsSelected}
          filterIsPassed={filters.IsPassed}
          onFilterChange={onFilterChange}
          handleSelected={handleSelected}
          handlePassed={handlePassed}
        />
        <SubjectDetails
          data={data}
          handleSelected={handleSelected}
          path="/subjects/:subjectId"
        />
      </Router>
    </MainContainer>
  );
};

export default Container;
