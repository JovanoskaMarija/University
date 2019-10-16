import React from "react";
import styled from "styled-components";
import Subject from "./Subject.js";

const Container = styled.div`
  width: 96%;
  height: 550px;
  overflow-y: scroll;
  margin: auto;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  margin-top: 30px;
  background-color: #ECF1FF;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: none;
  border-radius: 6px;
`;

const List = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

class SubjectList extends React.Component {
  render() {
    const { data } = this.props;

    if (data.lenght === 0) {
      return "Nema predmeti od toj profesor";
    }
    return (
      <Container>
        <List>
          {data.map(subject => {
            return <Subject key={subject.id} data={subject} />;
          })}
        </List>
      </Container>
    );
  }
}

// class SubjectList extends React.Component {
//   render() {
//     const { filteredData } = this.props;

//     if (filteredData.lenght === 0) {
//       return "Nema predmeti od toj profesor";
//     }
//     return (
//       <Container>
//         <List>
//           {filteredData.map(subject => {
//             return <Subject key={subject.id} data={subject} />;
//           })}
//         </List>
//       </Container>
//     );
//   }
// }

export default SubjectList;
