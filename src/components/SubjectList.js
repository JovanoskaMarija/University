import React from "react";
import { Container, List } from "../styles/SubjectListStyle";
import Subject from "./Subject.js";

class SubjectList extends React.Component {
  render() {
    const { filteredData, handleSelected, handlePassed } = this.props;
    return (
      <Container>
        <List>
          {filteredData.map(subject => {
            return (
              <Subject
                key={subject.id}
                data={subject}
                handleSelected={handleSelected}
                handlePassed={handlePassed}
              />
            );
          })}
        </List>
      </Container>
    );
  }
}

export default SubjectList;
