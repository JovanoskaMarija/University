import React from "react";
import styled from "styled-components";

const Item = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

    const List = props => {
    const { filteredData } = props;
    return (
        <div>
        {filteredData.map(subject => {
            return <ListItem key={subject.id} data={subject} />;
        })}
        </div>
    );
    };

const ListItem = (props) => {
  return (
    <Item>
        <input type="checkbox" />
      <h3>{props.data.professor}</h3>
      <p>({props.data.name})</p>
      <p> - {props.data.semester}</p>
    </Item>
  );
};

export default List;
