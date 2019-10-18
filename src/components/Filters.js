import React, { Component } from "react";
import styled from "styled-components";
import { Dropdown } from "primereact/dropdown";
import { SelectButton } from "primereact/selectbutton";

import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const Filter = styled.div`
  width: 96%;
  margin: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 10px;
`;

const Input = styled.input`
  min-width: 240px;
  margin: 10px;
  color: blue;
  background-color: white;
  border: none;
  border-radius: 4px;
  padding: 10px;
  box-shadow: inset 0px 0px 11px 2px rgba(0, 0, 0, 0.2);
`;

const StyleSelectButton = styled(SelectButton)`
  margin: 20px;
  color: red;
  background-color: yellow;
`;

class Filters extends Component {
  state = {
    professor:"",
    program: "",
    exam: "",
    semester: "",
    difficulty: ""
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
    return (
      <Filter>
        <Input
          type="text"
          name="professor"
          placeholder="Search Professor"
          //onChange={this.handleFilterProfessorChange}
          onChange={this.handleChange}
          value={this.props.filterProfessor}
        />
        <Input
          type="text"
          name="name"
          placeholder="Search Subject Name"
          //onChange={this.handleFilterNameChange}
          onChange={this.handleChange}
          value={this.props.filterName}
        />
        <Input
          type="text"
          name="faculty"
          placeholder="Search Faculty"
          onChange={this.handleChange}
          value={this.props.filterFaculty}
        />

        <StyleSelectButton>
        <SelectButton
          value={this.state.program}
          multiple={true}
          options={programOptions}
          name="program"
          onChange={this.handleChange}
          // onChange={this.handleFilterProgramChange}
        />
        </StyleSelectButton>
        <SelectButton
          value={this.state.exam}
          multiple={true}
          options={examOptions}
          name="exam"
          onChange={this.handleChange}
        />
        <SelectButton
          value={this.state.semester}
          multiple={true}
          options={semesterOptions}
          name="semester"
          onChange={this.handleChange}
        />
        <SelectButton
          value={this.state.difficulty}
          multiple={true}
          options={difficultyOptions}
          name="difficulty"
          onChange={this.handleChange}
        />
        {/* <Dropdown
          value={this.props.difficulty}
          options={difficulty}
          onChange={this.onCarChange}
          filter={true}
          filterPlaceholder="Select difficulty"
          filterBy="label,value"
          showClear={true}
        /> */}
        {/* <MultiSelect
          value={this.props.filterData}
          placeholder="Search Professor"
          onChange={this.handleFilterProfessorChange}
          filter={true}
        /> */}
        
      </Filter>
    );
  }
}

export default Filters;
