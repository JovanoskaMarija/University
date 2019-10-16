import React, { Component } from "react";
import styled from "styled-components";

// import { SelectButton } from '@bit/primefaces.primereact.selectbutton';
// import PrimereactStyle from '@bit/primefaces.primereact.internal.stylelinks';

// import { SelectButton } from "primereact/selectbutton";
// import {MultiSelect} from 'primereact/multiselect';

// import "primereact/resources/themes/nova-light/theme.css";
// import "primereact/resources/primereact.min.css";
// import "primeicons/primeicons.css";

const Filter = styled.div`
  width: 96%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  margin-top: 30px;
  padding: 10px;
  background-color: #ffffff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: none;
  border-radius: 6px;
`;

class Filters extends Component {
  constructor(props) {
    super(props);
  }
  handleFilterProfessorChange = e => {
    //console.log("Search text , ", e.target.name, e.target.value)
    this.props.onFilterProfessorChange(e.target.value);
  };

  handleFilterNameChange = e => {
    this.props.onFilterNameChange(e.target.value);
  };

  handleFilterFacultyChange = e => {
    this.props.onFilterFacultyChange(e.target.value);
  };

  render() {
    //let data = this.props.data;
    //const options = this.props.program;

    const option =[
      {label: 'Audi', value: 'Audi'},
      {label: 'BMW', value: 'BMW'},
      {label: 'Fiat', value: 'Fiat'},
      {label: 'Honda', value: 'Honda'},
      {label: 'Jaguar', value: 'Jaguar'},
      {label: 'Mercedes', value: 'Mercedes'},
      {label: 'Renault', value: 'Renault'},
      {label: 'VW', value: 'VW'},
      {label: 'Volvo', value: 'Volvo'}

    ]
    return (
      <Filter>
        <form>
          <input
            type="text"
            placeholder="Search Professor"
            onChange={this.handleFilterProfessorChange}
            value={this.props.filterProfessor}
          />{" "}

          <input
            type="text"
            placeholder="Search Subject Name"
            onChange={this.handleFilterNameChange}
            value={this.props.filterName}
          />{" "}

          <input
            type="text"
            placeholder="Search Faculty"
            onChange={this.handleFilterFacultyChange}
            value={this.props.filterFaculty}
          />{" "}

          {/* <MultiSelect 
            value={this.props.filterProfessor}
            placeholder="Search Professor"
            onChange={this.handleFilterProfessorChange}
            filter={true}
            options={option}
          /> */}

          {/* <SelectButton 
            value={this.props.filterProgram} 
            multiple={true} 
            options={cars} 
            onChange={(e) => this.setState({filterProgram: e.value})} 
          /> */}
          <br />
          {/* <select onChange={this.handleTitleChange} >
            {data &&
              data.map(subjectDetails => (
                <option value={subjectDetails.title} key={subjectDetails.id}>
                  {subjectDetails.title}
                </option>
              ))}
          </select>
          <select>
            {data &&
              data.map(subjectDetails => (
                <option value={subjectDetails.professor} key={subjectDetails.id}>
                  {subjectDetails.professor}
                </option>
              ))}
          </select> */}
        </form>
      </Filter>
    );
  }
}

export default Filters;
