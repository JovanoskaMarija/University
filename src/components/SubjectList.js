import React from "react";
import {Container, List} from '../styles/SubjectListStyle'
import Subject from "./Subject.js";


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

