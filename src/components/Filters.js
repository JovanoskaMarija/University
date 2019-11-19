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

  const [sortedBy, setSortedBy] = useState("");
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
    setSortedBy(value);
    props.sortBy(value);
  };

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

  const sortByNameOptions = [
    { label: "A-Z", value: "a-z", sort: "name", sortIn: "ascending" },
    { label: "Z-A", value: "z-a", sort: "name", sortIn: "descendin" }
  ];

  const sortByDifficultyOptions = [
    { label: "Easiest First", value: "easies-first" },
    { label: "Hardest First", value: "hardest-first" }
  ];

  const sortBySemesterOptions = [{ label: "Semester", value: "semester" }];

;

  return (
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
            <OverlayPanel
              style={{ backgroundColor: "#F2F1EF" }}
              ref={el => (filters.professorOverlayPanel = el)}
            >
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
            <OverlayPanel
              style={{ backgroundColor: "#F2F1EF" }}
              ref={el => (filters.nameOverlayPanel = el)}
            >
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
            <OverlayPanel
              style={{ backgroundColor: "#F2F1EF" }}
              ref={el => (filters.facultyOverlayPanel = el)}
            >
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
            <OverlayPanel
              style={{ backgroundColor: "#F2F1EF" }}
              ref={el => (filters.programOverlayPanel = el)}
            >
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
            <OverlayPanel
              style={{ backgroundColor: "#F2F1EF" }}
              ref={el => (filters.examOverlayPanel = el)}
            >
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
            <OverlayPanel
              style={{ backgroundColor: "#F2F1EF" }}
              ref={el => (filters.difficultyOverlayPanel = el)}
            >
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
            <OverlayPanel
              style={{ backgroundColor: "#F2F1EF" }}
              ref={el => (filters.semesterOverlayPanel = el)}
            >
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
            <OverlayPanel
              style={{ backgroundColor: "#F2F1EF" }}
              ref={el => (filters.passedOverlayPanel = el)}
            >
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

          <Separator>
            <Button
              type="button"
              label="Sort By"
              onClick={e => {
                filters.sortByOverlayPanel.toggle(e);
              }}
            />
            <OverlayPanel
              style={{ backgroundColor: "#F2F1EF" }}
              ref={el => (filters.sortByOverlayPanel = el)}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <p>Name: </p>
                <SelectButton
                  value={sortedBy}
                  sort={sortedBy}
                  options={sortByNameOptions}
                  name="sortByName"
                  onChange={handleSortBy}
                  tooltip="Sort By Name"
                  tooltipOptions={{ position: "bottom" }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <p>Semester:</p>
                <SelectButton
                  value={sortedBy}
                  options={sortBySemesterOptions}
                  name="sortBySemester"
                  onChange={handleSortBy}
                  tooltip="Sort By Semester"
                  tooltipOptions={{ position: "bottom" }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <p>Name:</p>
                <SelectButton
                  value={sortedBy}
                  options={sortByDifficultyOptions}
                  name="sortByDifficulty"
                  onChange={handleSortBy}
                  tooltip="Sort By Difficulty"
                  tooltipOptions={{ position: "bottom" }}
                />
              </div>
            </OverlayPanel>
          </Separator>
        </Filter>
      )}
    </Container>
  );
};

export default Filters;
