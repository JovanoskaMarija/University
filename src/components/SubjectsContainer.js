import React from "react";
import Filters from "./Filters";
import SubjectList from "./SubjectList";

import { Router } from "@reach/router";

const SubjectsContainer = props => {
  return (
    <div>
      <Filters
        filteredData={props.filteredData}
        filterProfessor={props.filterProfessor}
        filterName={props.filterName}
        filterFaculty={props.filterFaculty}
        filterProgram={props.filterProgram}
        filterIsSelected={props.filterIsSelected}
        filterIsPassed={props.IsPassed}
        onFilterChange={props.onFilterChange}
        sortData={props.sortData}
      />
      <Router>
        <SubjectList
          handleSelected={props.handleSelected}
          handlePassed={props.handlePassed}
          filteredData={props.filteredData}
          path="/"
        />

        <SubjectList
          handleSelected={props.handleSelected}
          handlePassed={props.handlePassed}
          filteredData={props.filterSelected}
          path="/"
        />
      </Router>
    </div>
  );
};

export default SubjectsContainer;
