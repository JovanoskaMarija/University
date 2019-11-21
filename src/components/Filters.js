import React, { useState } from "react";
import {
  Container,
  Filter,
  Separator,
  ToggleFilters
} from "../styles/FiltersStyle";
import { InputText } from "primereact/inputtext";
import { SelectButton } from "primereact/selectbutton";
import { ToggleButton } from "primereact/togglebutton";
import { Button } from "primereact/button";
import { OverlayPanel } from "primereact/overlaypanel";
import { Dropdown } from "primereact/dropdown";

const Filters = props => {
  const [showFilters, setShowFilters] = useState(true);
  const [filters, setFilters] = useState({
    professor: "",
    program: "",
    exam: "",
    semester: "",
    difficulty: "",
    isPassed: false
  });

  const [sortedBy, setSortedBy] = useState("default");

  const onShowFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleChange = e => {
    let { name, value } = e.target;
    if (value === null) {
      value = [];
    }
    setFilters({ ...filters, [name]: value });
    props.onFilterChange(name, value);
  };

  const handleSortBy = e => {
    let { value } = e.target;
    if (value === null) {
      value = "default";
    }

    //go zema value od Options i spored toa odreduva sortBy, sortIn
    const sortOptionsMapping = {
      "a-z": {
        sortBy: "name",
        sortIn: "asc"
      },
      "z-a": {
        sortBy: "name",
        sortIn: "desc"
      },
      "easiest-first": {
        sortBy: "difficulty",
        sortIn: "asc"
      },
      "hardest-first": {
        sortBy: "difficulty",
        sortIn: "desc"
      },
      semester: {
        sortBy: "semester",
        sortIn: "asc"
      },
      "less-popular": {
        sortBy: "studentsAttending",
        sortIn: "asc"
      },
      "most-popular": {
        sortBy: "studentsAttending",
        sortIn: "desc"
      },
      "lowest-grade": {
        sortBy: "averageGrade",
        sortIn: "asc"
      },
      "highest-grade": {
        sortBy: "averageGrade",
        sortIn: "desc"
      },
      "lowest-passed-percentage": {
        sortBy: "passedPercentage",
        sortIn: "asc"
      },
      "highest-passed-percentage": {
        sortBy: "passedPercentage",
        sortIn: "desc"
      },
      "default": {
        sortBy: "_id",
        sortIn: "asc"
      }
    };

    setSortedBy(value);
    //destructuring
    const { sortBy, sortIn } = sortOptionsMapping[value];
    props.sortData(sortBy, sortIn);
  };

  const options = [
    { label: "-- Sort By --", value: "default" },
    { label: "Name (A-Z)", value: "a-z" },
    { label: "Name (Z-A)", value: "z-a" },
    { label: "Semester", value: "semester" },
    { label: "Easiest Subject First", value: "easiest-first" },
    { label: "Hardest Subject First", value: "hardest-first" },
    { label: "Less Popular Subject", value: "less-popular" },
    { label: "Most Popular Subject", value: "most-popular" },
    { label: "Lowest Average Grade", value: "lowest-grade" },
    { label: "Highest Average Grade", value: "highest-grade" },
    { label: "Highest passed percentage", value: "highest-passed-percentage" },
    { label: "Lowest passed percentage", value: "lowest-passed-percentage" }
  ];

  const programOptions = [
    { label: "New", value: "new" },
    { label: "Old", value: "old" }
  ];

  const examOptions = [
    { label: "Exam", value: "exam" },
    { label: "Midterms", value: "midterms" }
  ];

  const semesterOptions = [
    { label: "Winter", value: "winter" },
    { label: "Summer", value: "summer" }
  ];

  const difficultyOptions = [
    { label: "Easy", value: "easy" },
    { label: "Medium", value: "medium" },
    { label: "Difficult", value: "difficult" }
  ];

  const isPassedOptions = [{ label: "Passed", value: true }];

  return (
    <div>
      <Container>
        <ToggleFilters>
          <ToggleButton
            style={{ width: "120px" }}
            onLabel="Show Filters"
            offLabel="Hide Filters"
            checked={!showFilters}
            onChange={onShowFilters}
          />
        </ToggleFilters>

        {showFilters && (
          <Filter>
            <Separator>
              <Button
                type="button"
                label="Professor"
                onClick={e => filters.professorOverlayPanel.toggle(e)}
              />
              <OverlayPanel ref={el => (filters.professorOverlayPanel = el)}>
                <p>Enter Professor:</p>
                <InputText
                  id="float-input"
                  type="text"
                  size="30"
                  name="professor"
                  value={props.filterProfessor}
                  onChange={handleChange}
                  tooltip="Professor"
                  tooltipOptions={{ position: "bottom" }}
                />
              </OverlayPanel>
            </Separator>

            <Separator>
              <Button
                type="button"
                label="Subject Name"
                onClick={e => filters.nameOverlayPanel.toggle(e)}
              />
              <OverlayPanel ref={el => (filters.nameOverlayPanel = el)}>
                <p>Enter Subject Name:</p>
                <InputText
                  id="float-input"
                  type="text"
                  size="30"
                  name="name"
                  value={props.filterName}
                  onChange={handleChange}
                  tooltip="Name"
                  tooltipOptions={{ position: "bottom" }}
                />
              </OverlayPanel>
            </Separator>

            <Separator>
              <Button
                type="button"
                label="Faculty"
                onClick={e => filters.facultyOverlayPanel.toggle(e)}
              />
              <OverlayPanel ref={el => (filters.facultyOverlayPanel = el)}>
                <p>Enter Faculty:</p>
                <InputText
                  id="float-input"
                  type="text"
                  size="30"
                  name="faculty"
                  value={props.filterFaculty}
                  onChange={handleChange}
                  tooltip="Faculty"
                  tooltipOptions={{ position: "bottom" }}
                />
              </OverlayPanel>
            </Separator>

            <Separator>
              <Button
                type="button"
                label="Program"
                onClick={e => filters.programOverlayPanel.toggle(e)}
              />
              <OverlayPanel ref={el => (filters.programOverlayPanel = el)}>
                <p>Choose Program: </p>
                <SelectButton
                  value={filters.program}
                  multiple={true}
                  options={programOptions}
                  name="program"
                  onChange={handleChange}
                  tooltip="Program"
                  tooltipOptions={{ position: "bottom" }}
                />
              </OverlayPanel>
            </Separator>

            <Separator>
              <Button
                type="button"
                label="Exam"
                onClick={e => {
                  filters.examOverlayPanel.toggle(e);
                }}
              />
              <OverlayPanel ref={el => (filters.examOverlayPanel = el)}>
                <p>Choose Exam Options:</p>
                <SelectButton
                  value={filters.exam}
                  multiple={true}
                  options={examOptions}
                  name="exam"
                  onChange={handleChange}
                  tooltip="Exam"
                  tooltipOptions={{ position: "bottom" }}
                />
              </OverlayPanel>
            </Separator>

            <Separator>
              <Button
                type="button"
                label="Difficulty"
                onClick={e => {
                  filters.difficultyOverlayPanel.toggle(e);
                }}
              />
              <OverlayPanel ref={el => (filters.difficultyOverlayPanel = el)}>
                <p>Choose Difficulty:</p>
                <SelectButton
                  value={filters.difficulty}
                  options={difficultyOptions}
                  name="difficulty"
                  onChange={handleChange}
                  tooltip="Difficulty"
                  tooltipOptions={{ position: "bottom" }}
                />
              </OverlayPanel>
            </Separator>

            <Separator>
              <Button
                type="button"
                label="Semester"
                onClick={e => {
                  filters.semesterOverlayPanel.toggle(e);
                }}
              />
              <OverlayPanel ref={el => (filters.semesterOverlayPanel = el)}>
                <p>Choose Semester:</p>
                <SelectButton
                  value={filters.semester}
                  options={semesterOptions}
                  name="semester"
                  onChange={handleChange}
                  tooltip="Semester"
                  tooltipOptions={{ position: "bottom" }}
                />
              </OverlayPanel>
            </Separator>

            <Separator>
              <Button
                type="button"
                label="Passed"
                onClick={e => {
                  filters.passedOverlayPanel.toggle(e);
                }}
              />
              <OverlayPanel ref={el => (filters.passedOverlayPanel = el)}>
                <p>Choose Passed Subjects:</p>
                <SelectButton
                  value={filters.isPassed}
                  multiple={true}
                  options={isPassedOptions}
                  name="isPassed"
                  onChange={handleChange}
                  tooltip="Passed"
                  tooltipOptions={{ position: "bottom" }}
                />
              </OverlayPanel>
            </Separator>
          </Filter>
        )}
      </Container>

      <p
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          marginRight: "20px"
        }}
      >
        Subjects shown: {props.filteredData.length}
      </p>

      <Container>
        <ToggleFilters>
          <Dropdown
            value={sortedBy}
            options={options}
            onChange={handleSortBy}
            tooltip="Sort By"
            tooltipOptions={{ position: "bottom" }}
          />
        </ToggleFilters>
      </Container>
    </div>
  );
};

export default Filters;
