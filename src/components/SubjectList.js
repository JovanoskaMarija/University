import React from "react";
import styled from "styled-components";
import Subject from "./Subject.js";

const Container = styled.div`
  height: 500px;
  overflow-y: scroll;
  margin: auto;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  margin-top: 30px;
  padding: 20px;
  background-color: rgba(0,0,0,0.02);
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #f2f2f2;
  }
  &::-webkit-scrollbar {
    width: 12px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #349cc7;
  }
`;

const List = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

class SubjectList extends React.Component {
  render() {
    const { filteredData } = this.props;

    if (filteredData.lenght === 0) {
      return "Nema predmeti od toj profesor";
    }
    return (
      <Container>
        <List>
          {filteredData.map(subject => {
            return <Subject key={subject.id} data={subject} />;
          })}
        </List>
      </Container>
    );
  }
}

export default SubjectList;

