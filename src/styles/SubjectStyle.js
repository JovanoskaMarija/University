import styled from "styled-components";

export const Item = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  max-width: 330px;
  box-shadow: 2px 2px 4px 3px rgba(177, 177, 177, 0.4);
  border-radius: 6px;
  margin: 20px;
  background-color: white;
  color: grey;

  h4 {
    margin-top: 10px;
    padding: 0 20px 0 10px;
  }
  p {
    text-indent: 30px;
    margin-top: 0;
    padding: 0 20px 0 10px;
    text-align: justify;
  }
`;

export const SideColor = styled.div`
  border-radius: 6px 0 0 6px;
  height: 100%;
  width: 30px;
  margin-right: 10px;
  ${props =>
    props.isSelected 
      ? "background-color: #246d8b"
      : "background-color: #add7e8"};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  h2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 10px;
    padding: 10px 20px 10px 10px;
    height: 60px;
    color: #349cc7;
    ${props =>
    props.isSelected 
      ? "color: #246d8b; text-shadow: 2px 2px 5px rgba(128,128,128,0.4)"
      : null};
  }
  div {
    margin-right: -7px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
  }
`;

export const Icons = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: flex-end;
  flex-wrap: wrap;
  padding: 10px;
  margin: 0;
`;

export const Tooltip = styled.div`
  span {
    position: relative;
    padding: 2px;
    font-size: 16px;
    cursor: pointer;
  }

  span::before,
  span::after {
    position: absolute;
    left: 40%;
    opacity: 0;
    transition: all ease 0.1s;
    z-index: 1;
  }

  span::before {
    content: "";
    border-width: 0 4px 5px 4px;
    border-style: solid;
    border-color: transparent transparent #373737 transparent;
    transform: translateX(-50%);
    transform: translateY(-150%);
    margin-left: -4px;
    margin-top: 40px;
  }

  span::after {
    content: attr(data-tooltip);
    background: #373737;
    font-size: 14px;
    margin-left: -52px;
    width: 100px;
    border-radius: 4px;
    color: #eee;
    padding: 5px 0;
    margin-top: 40px;
    text-align: center;
  }

  /* Hover states */

  span:hover::before,
  span:hover::after {
    opacity: 1;
  }
`;
