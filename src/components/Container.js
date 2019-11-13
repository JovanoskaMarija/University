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

const Container = () => {
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
  const [sortedBy, setSortedBy] = useState("default");

  useEffect(() => {
    fetch("http://localhost:5000/subjects/", { method: "get" })
      .then(res => res.json())
      .then(data => setSubjects(data))
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

  const handlePassed = subjectID => {
    const newPassedList = subjects.map(subject => {
      if (subject._id === subjectID) {
        const newSubject = subject;
        newSubject.isPassed = !subject.isPassed;
        return newSubject;
      } else {
        return subject;
      }
    });
    setSubjects(newPassedList);
  };

  const sortByName = value => {
    console.log(value);
    let sortedSubjects;
    if (value === sortedBy) {
      console.log("isti");
      return;
    }

    if (value === "a-z") {
      console.log("Pred a-z sortiranje", subjects);
      sortedSubjects = [...subjects].sort((a, b) => {
        if (a.name < b.name) return -1;
        else if (a.name > b.name) return 1;
        return 0;
      });
      console.log("Posle a-z sortiranje:", sortedSubjects);
    } else if (value === "z-a") {
      console.log("Pred z-a sortiranje", subjects);
      sortedSubjects = [...subjects].sort((a, b) => {
        if (a.name > b.name) return -1;
        else if (a.name < b.name) return 1;
        return 0;
      });
      console.log("Posle z-a sortiranje:", sortedSubjects);
    }
    if (value === "default") {
      console.log("Vo default sortiranje", subjects);
      sortedSubjects = [...subjects].sort((a, b) => {
        if (a._id < b._id) return -1;
        else if (a._id > b._id) return 1;
        return 0;
      });
    }
    setSubjects(sortedSubjects);
    setSortedBy(value);
    return sortedSubjects;
  };

  const filterByProfessor = subject => {
    return subject.professor
      .toLowerCase()
      .includes(filters.filterProfessor.toLowerCase());
  };

  const filterByName = subject => {
    return subject.name.toLowerCase().includes(filters.filterName.toLowerCase());
  };

  const filterByFaculty = subject => {
    return subject.faculty.toLowerCase().includes(filters.filterFaculty.toLowerCase());
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

  const data = subjects;

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
    .filter(filterByPassed)
    .filter(sortByName);
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
          sortName={sortedBy}
          onFilterChange={onFilterChange}
          handleSelected={handleSelected}
          handlePassed={handlePassed}
          sortByName={sortByName}
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
          sortName={sortedBy}
          onFilterChange={onFilterChange}
          handleSelected={handleSelected}
          handlePassed={handlePassed}
          sortByName={sortByName}
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
