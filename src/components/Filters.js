import React, { Component } from "react";
import { Filter, Separator } from "../styles/FiltersStyle";
import { InputText } from "primereact/inputtext";
import { SelectButton } from "primereact/selectbutton";
import { ToggleButton } from "primereact/togglebutton";

import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

class Filters extends Component {
  state = {
    checked: false,
    professor: "",
    program: "",
    exam: "",
    semester: "",
    difficulty: "",
    isPassed: false
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

    return (
      <Filter>
        <div>
          <ToggleButton
            onLabel="Filters"
            offLabel="Filters"
            checked={!this.state.checked}
            onChange={e =>
              this.setState(
                { checked: !this.state.checked },
                console.log("Posle", this.state.checked)
              )
            }
          />
        </div>
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
        <Separator>
          <SelectButton
            value={this.state.isPassed}
            multiple={true}
            options={isPassedOptions}
            name="isPassed"
            onChange={this.handleChange}
            tooltip="Passed"
            tooltipOptions={{ position: "bottom" }}
          />
        </Separator>
        
      </Filter>
    );
  }
}

export default Filters;
