import React, { Component } from "react";
import styled from "styled-components";
import { InputText } from "primereact/inputtext";
import { SelectButton } from "primereact/selectbutton";

import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const Filter = styled.div`
  width: 96%;
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 10px 10px 0 10px;
`;

const Separator = styled.div`
  margin: 10px;
`;

class Filters extends Component {
  state = {
    professor: "",
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
        <Separator>
        <InputText
          id="float-input"
          type="text"
          size="30"
          name="professor"
          placeholder="Search Professor"
          value={this.props.filterProfessor}
          onChange={this.handleChange}
          tooltip="Professor"
          tooltipOptions={{ position: "bottom" }}
        /> 
        </Separator>
        <Separator>
          <InputText
          id="float-input"
          type="text"
          size="30"
          name="name"
          placeholder="Search Subject Name"
          value={this.props.filterName}
          onChange={this.handleChange}
          tooltip="Name"
          tooltipOptions={{ position: "bottom" }}
        />
        </Separator>
        <Separator>
          <InputText
          id="float-input"
          type="text"
          size="30"
          name="faculty"
          placeholder="Search Faculty"
          value={this.props.filterFaculty}
          onChange={this.handleChange}
          tooltip="Faculty"
          tooltipOptions={{ position: "bottom" }}
        />
        </Separator>
        <Separator>
          <SelectButton
            value={this.state.program}
            multiple={true}
            options={programOptions}
            name="program"
            onChange={this.handleChange}
            tooltip="Program"
            tooltipOptions={{ position: "bottom" }}
          />
        </Separator>
        <Separator>
          <SelectButton
            value={this.state.exam}
            multiple={true}
            options={examOptions}
            name="exam"
            onChange={this.handleChange}
            tooltip="Exam"
            tooltipOptions={{ position: "bottom" }}
          />
        </Separator>

        <Separator>
          <SelectButton
            value={this.state.semester}
            multiple={true}
            options={semesterOptions}
            name="semester"
            onChange={this.handleChange}
            tooltip="Semester"
            tooltipOptions={{ position: "bottom" }}
          />
        </Separator>
        <Separator>
          <SelectButton
            value={this.state.difficulty}
            multiple={true}
            options={difficultyOptions}
            name="difficulty"
            onChange={this.handleChange}
            tooltip="Difficulty"
            tooltipOptions={{ position: "bottom" }}
          />
        </Separator>

      </Filter>
    );
  }
}

export default Filters;
