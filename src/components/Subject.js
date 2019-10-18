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
    color: #349cc7;
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
    text-align: justify;
  }
`;

const Header = styled.div`
  border-radius: 6px 6px 0 0;
  height: 10px;
  ${props =>
    props.program === "new"
      ? "background-color: red"
      : "background-color: blue"};
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const Subject = props => {
  return (
    <Item>
      <Header program={props.data.program}></Header>
      <h2>
        {props.data.name}
        <span>+</span>
      </h2>
      <h4>{props.data.professor}</h4>
      <p>{props.data.description}</p>
      <Icons>
        <p>{props.data.faculty}</p>
        <p>{props.data.attendance}</p>
        <p>{props.data.program}</p>
        <p>{props.data.projects}</p>
        <p>{props.data.exam}</p>
      </Icons>
    </Item>
  );
};

export default Subject;
