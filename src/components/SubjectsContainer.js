import React from "react";
import Filters from "./Filters";
import SubjectList from "./SubjectList";

import { Router } from "@reach/router";

const SubjectsContainer = props => {
  return (
    <div>
      <Filters
        filteredData={props.filteredData}
        onFilterChange={props.onFilterChange}
        sortData={props.sortData}
      />
      <Router>
        <SubjectList
          handleSelected={props.handleSelected}
          handlePassed={props.handlePassed}
          handleCurrentlyListening={props.handleCurrentlyListening}
          filteredData={props.filteredData}
          path="/"
        />

        <SubjectList
          handleSelected={props.handleSelected}
          handlePassed={props.handlePassed}
          handleCurrentlyListening={props.handleCurrentlyListening}
          filteredData={props.filterSelected}
          path="/"
        />
      </Router>
    </div>
  );
};

export default SubjectsContainer;
