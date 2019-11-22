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

import { filterDataWithFilters, filteringOptions, empty } from "./functions.js";

const MainContainer = styled.div`
  background-color: white;
`;

const Container = () => {
  const [subjects, setSubjects] = useState([]);
  const [filters, setFilters] = useState({
    professor: "",
    name: "",
    faculty: "",
    program: [],
    exam: [],
    semester: [],
    difficulty: [],
    isSelected: [],
    isPassed: [],
  });

  const [sortedBy, setSortedBy] = useState({
    sortBy: "",
    sortIn: ""
  });

  useEffect(() => {
    fetch("http://localhost:5000/subjects/", { method: "get" })
      .then(res => res.json())
      .then(data => setSubjects(data))
      .catch(err => console.log(err));
  }, []);

  const onFilterChange = (name, value) => {
   setFilters({ ...filters, [name]: value });
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

  const handleCurrentlyListening = subjectID => {
    const newList = subjects.map(subject => {
      if (subject._id === subjectID) {
        const newSubject = subject;
        newSubject.isCurrentlyListening = !subject.isCurrentlyListening;
        return newSubject;
      } else {
        return subject;
      }
    });
    setSubjects(newList);
  };

  const sortData = (sortBy, sortIn) => {
    let sortedSubjects;

    sortedSubjects = [...subjects].sort((a, b) => {
      if (sortIn === "asc") {
        if (a[sortBy] < b[sortBy]) return -1;
        else if (a[sortBy] > b[sortBy]) return 1;
        else return 0;
      } else {
        if (a[sortBy] > b[sortBy]) return -1;
        else if (a[sortBy] < b[sortBy]) return 1;
        else return 0;
      }
    });
    setSortedBy(sortedBy);
    setSubjects(sortedSubjects);
    return sortedSubjects;
  };

  const data = subjects;

  const options = {
    professor: filteringOptions.checkIncludes,
    name: filteringOptions.checkIncludes,
    faculty: filteringOptions.checkIncludes,
    difficulty: filteringOptions.checksInRange,
    semester: filteringOptions.checksSameParity,
    isPassed: filteringOptions.checkForArray
  };

  const filteredData = filterDataWithFilters(data, empty(filters), options);

  const filterSelected = filterDataWithFilters(data, empty(filters), options).filter(subject => subject.isSelected);

  return (
    <MainContainer>
      <Menu />
      <Router>
        <HomePage path="/" />
        <SubjectsContainer
          path="/subjects"
           filteredData={filteredData}
          onFilterChange={onFilterChange}
          handleSelected={handleSelected}
          handlePassed={handlePassed}
          handleCurrentlyListening={handleCurrentlyListening}
          sortBy={sortedBy.sortBy}
          sortIn={sortedBy.sortIn}
          sortData={sortData}
        />
        <SubjectsContainer
          path="/selected"
          filteredData={filterSelected}
          onFilterChange={onFilterChange}
          handleSelected={handleSelected}
          handlePassed={handlePassed}
          handleCurrentlyListening={handleCurrentlyListening}
          sortBy={sortedBy.sortBy}
          sortIn={sortedBy.sortIn}
          sortData={sortData}
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
