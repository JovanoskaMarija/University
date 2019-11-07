import React, { Component } from "react";
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

class Filters extends Component {
  state = {
    isChecked: false,
    professor: "",
    program: "",
    exam: "",
    semester: "",
    difficulty: "",
    isPassed: false.professor,
    // displaySubjects: "",
  };

  onChecked = () => {
    this.setState({ isChecked: !this.state.isChecked });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    this.props.onFilterChange(name, value);
  };

  render() {
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

    // const displaySubjectsOptions = [
    //   { label: "List", value: "list" },
    //   { label: "Cards", value: "cards" }
    // ];

    return (
      <Container>
        <ToggleFilters>
          <ToggleButton
            style={{ width: "120px" }}
            onLabel="Show Filters"
            offLabel="Hide Filters"
            checked={!this.state.isChecked}
            onChange={this.onChecked}
          />
        </ToggleFilters>

        {this.state.isChecked && (
          <Filter>
            <Separator>
              <Button
                type="button"
                label="Professor"
                onClick={e => this.professorOverlayPanel.toggle(e)}
              />
              <OverlayPanel
                style={{ backgroundColor: "#F2F1EF" }}
                ref={el => (this.professorOverlayPanel = el)}
              >
                <p>Enter Professor:</p>
                <InputText
                  id="float-input"
                  type="text"
                  size="30"
                  name="professor"
                  value={this.props.filterProfessor}
                  onChange={this.handleChange}
                  tooltip="Professor"
                  tooltipOptions={{ position: "bottom" }}
                />
              </OverlayPanel>
            </Separator>

            <Separator>
              <Button
                type="button"
                label="Subject Name"
                onClick={e => this.nameOverlayPanel.toggle(e)}
              />
              <OverlayPanel
                style={{ backgroundColor: "#F2F1EF" }}
                ref={el => (this.nameOverlayPanel = el)}
              >
                <p>Enter Subject Name:</p>
                <InputText
                  id="float-input"
                  type="text"
                  size="30"
                  name="name"
                  value={this.props.filterName}
                  onChange={this.handleChange}
                  tooltip="Name"
                  tooltipOptions={{ position: "bottom" }}
                />
              </OverlayPanel>
            </Separator>

            <Separator>
              <Button
                type="button"
                label="Faculty"
                onClick={e => this.facultyOverlayPanel.toggle(e)}
              />
              <OverlayPanel
                style={{ backgroundColor: "#F2F1EF" }}
                ref={el => (this.facultyOverlayPanel = el)}
              >
                <p>Enter Faculty:</p>
                <InputText
                  id="float-input"
                  type="text"
                  size="30"
                  name="faculty"
                  value={this.props.filterFaculty}
                  onChange={this.handleChange}
                  tooltip="Faculty"
                  tooltipOptions={{ position: "bottom" }}
                />
              </OverlayPanel>
            </Separator>

            <Separator>
              <Button
                type="button"
                label="Program"
                onClick={e => this.programOverlayPanel.toggle(e)}
              />
              <OverlayPanel
                style={{ backgroundColor: "#F2F1EF" }}
                ref={el => (this.programOverlayPanel = el)}
              >
                <p>Choose Program: </p>
                <SelectButton
                  value={this.state.program}
                  multiple={true}
                  options={programOptions}
                  name="program"
                  onChange={this.handleChange}
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
                  this.examOverlayPanel.toggle(e);
                }}
              />
              <OverlayPanel
                style={{ backgroundColor: "#F2F1EF" }}
                ref={el => (this.examOverlayPanel = el)}
              >
                <p>Choose Exam Options:</p>
                <SelectButton
                  value={this.state.exam}
                  multiple={true}
                  options={examOptions}
                  name="exam"
                  onChange={this.handleChange}
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
                  this.difficultyOverlayPanel.toggle(e);
                }}
              />
              <OverlayPanel
                style={{ backgroundColor: "#F2F1EF" }}
                ref={el => (this.difficultyOverlayPanel = el)}
              >
                <p>Choose Difficulty:</p>
                <SelectButton
                  value={this.state.difficulty}
                  multiple={true}
                  options={difficultyOptions}
                  name="difficulty"
                  onChange={this.handleChange}
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
                  this.semesterOverlayPanel.toggle(e);
                }}
              />
              <OverlayPanel
                style={{ backgroundColor: "#F2F1EF" }}
                ref={el => (this.semesterOverlayPanel = el)}
              >
                <p>Choose Semester:</p>
                <SelectButton
                  value={this.state.semester}
                  multiple={true}
                  options={semesterOptions}
                  name="semester"
                  onChange={this.handleChange}
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
                  this.passedOverlayPanel.toggle(e);
                }}
              />
              <OverlayPanel
                style={{ backgroundColor: "#F2F1EF" }}
                ref={el => (this.passedOverlayPanel = el)}
              >
                <p>Choose Passed Subjects:</p>
                <SelectButton
                  value={this.state.isPassed}
                  multiple={true}
                  options={isPassedOptions}
                  name="isPassed"
                  onChange={this.handleChange}
                  tooltip="Passed"
                  tooltipOptions={{ position: "bottom" }}
                />
              </OverlayPanel>
            </Separator>

            {/* <SelectButton
              value={this.state.displaySubjects}
              multiple={true}
              options={displaySubjectsOptions}
              name="displaySubjects"
              onChange={this.handleChange}
              tooltip="Passed"
              tooltipOptions={{ position: "bottom" }}
            /> */}
          </Filter>
        )}
      </Container>
    );
  }
}

export default Filters;
