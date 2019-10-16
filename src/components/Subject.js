import React from "react";
import styled from "styled-components";

const Item = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  max-width: 300px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2),
    0 2px 4px -1px rgba(0, 0, 0, 0.2);
  /* border: 2px solid #349cc7; */
  border-radius: 6px;
  margin: 20px;
  padding-bottom: 10px;
  background-color: white;
  color: grey;
  h2 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 10px;
    min-height: 70px;
    /* background-color: #349cc7; */
    color: #349cc7;
    span {
      /* border: 1px solid white;
      background-color: transparent;
      border-radius: 50%;
      color: white */
    }
  }
  h4 {
    margin-top: 10px;
    padding-right: 10px;
    align-self: flex-end;
  }
  p {
    text-indent: 30px;
    margin-top: 0;
    padding: 0 10px;
  }
`;

const Subject = props => {
  return (
    <Item>
      <h2>
        {props.data.name}
        <span>+</span>
      </h2>
      <h4>{props.data.professor}</h4>
      <p>{props.data.description}</p>
      <div>
        <button>{props.data.faculty}</button>
        <button>{props.data.attendance}</button>
        <button>{props.data.program}</button>
        <button>{props.data.projects}</button>
      </div>
      <button>Select Subject</button>
    </Item>
  );
};

export default Subject;
