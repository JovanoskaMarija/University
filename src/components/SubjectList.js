import React from "react";
import { Container, List } from "../styles/SubjectListStyle";
import Subject from "./Subject.js";

const SubjectList = props => {
  
    const { filteredData, handleSelected, handlePassed, handleCurrentlyListening } = props;
    return (
      <Container showFilters={props.showFilters}>
        <List>
          {filteredData.map(subject => {
            return (
              <Subject
                key={subject.name}
                data={subject}
                handleSelected={handleSelected}
                handlePassed={handlePassed}
                handleCurrentlyListening={handleCurrentlyListening}
              />
            );
          })}
        </List>
      </Container>
    );
  }

export default SubjectList;
