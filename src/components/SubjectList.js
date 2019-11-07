import React from "react";
import { Container, List } from "../styles/SubjectListStyle";
import Subject from "./Subject.js";

const SubjectList = props => {
  
    const { filteredData, handleSelected, handlePassed } = props;
    return (
      <Container>
        <List>
          {filteredData.map(subject => {
            return (
              <Subject
                key={subject.name}
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

export default SubjectList;
