import styled from "styled-components";

export const Item = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  max-width: 300px;
  box-shadow: 2px 2px 4px 3px rgba(177, 177, 177, 0.4);
  border-radius: 6px;
  margin: 20px;
  background-color: #fbf9f9;
  color: #053d57;
`;
function getColor(diff, sel, attr = "background-color") {
  const lightness = sel ? 85 : 50;
  switch (diff) {
    case 1:
      return `${attr}: hsl(100, 100%, ${lightness}%)`;
    case 5:
      return `${attr}: hsl(54, 100%, ${lightness}%)`;
    case 10:
      return `${attr}: hsl(0, 100%,  ${lightness}%)`;
    default:
      return;
  }
}

export const SideColor = styled.div`
  border-radius: 6px 0 0 6px;
  height: 100%;
  width: 40px;
  margin-right: 10px;
  ${props =>
    props.difficulty ? getColor(props.difficulty, props.isSelected) : null}
`;

export const Content = styled.div`
  box-sizing: border-box;
  margin: 10px 0;
  p {
    color: rgba(5, 61, 87, 0.7);
  }
`;

export const DifficultyLevel = styled.div`
  margin: 10px 0 0 10px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  font-weight: bold;
  ${props =>
    props.difficulty
      ? getColor(props.difficulty, props.isSelected, "color")
      : null};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin-top: 0;
  p {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    margin-right: 10px;
    padding: 10px 20px 10px 10px;
    height: 50px;
    color: #053d57;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
    padding-right: 10px;
  }
`;

export const Description = styled.div`
  text-indent: 30px;
  margin-top: 0;
  padding: 0 20px 10px 10px;
  text-align: justify;
  color: rgba(5, 61, 87, 0.7);
  span {
    color: #053d57;
    border-bottom: 1px solid #053d57;
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
    border-color: transparent transparent #053d57 transparent;
    transform: translateX(-50%);
    transform: translateY(-150%);
    margin-left: -4px;
    margin-top: 40px;
  }

  span::after {
    content: attr(data-tooltip);
    background: #053d57;
    font-size: 16px;
    margin-left: -52px;
    width: 100px;
    border-radius: 4px;
    color: #f2f1ef;
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
