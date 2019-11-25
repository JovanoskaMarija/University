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
        showFilters={props.showFilters}
        onShowFilters={props.onShowFilters}
      />
      <Router>
        <SubjectList
          handleSelected={props.handleSelected}
          handlePassed={props.handlePassed}
          handleCurrentlyListening={props.handleCurrentlyListening}
          filteredData={props.filteredData}
          showFilters={props.showFilters}
          path="/"
        />

        <SubjectList
          handleSelected={props.handleSelected}
          handlePassed={props.handlePassed}
          handleCurrentlyListening={props.handleCurrentlyListening}
          filteredData={props.filterSelected}
          showFilters={props.showFilters}
          path="/"
        />
      </Router>
    </div>
  );
};

export default SubjectsContainer;
