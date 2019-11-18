import styled from "styled-components";

export const Header = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding-left: 10px;
  z-index: 1;
  justify-content: space-between;
  border: none;
  border-radius: 0 0 6px 6px;
  color: #053d57;
  background-color: white;
  box-shadow: 1px 1px 4px 1px rgba(177, 177, 177, 0.4);

  .menu-icon {
    display: none;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    min-height: 56px;
    position: relative;
    padding: 15px;

    .menu-icon {
      display: inline-block;
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }

    ul.collapsed {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      flex-wrap: wrap;
      overflow: hidden;
      max-height: 0;
      padding: 0;
      margin: 0;

      &.is-expanded {
        overflow: hidden;
        max-height: 500px;
        padding-top: 10px;
        /* margin: 10px; */
        /* padding: 20px; */
        /* background-color: red; */
      }
    }
  }
`;

export const NavigationBar = styled.div`
  a {
    text-decoration: none;
    margin-right: 40px;
    color: #053d57;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 0;
    :hover {
      color: #97bcc7;
    }
  }
  @media only screen and (max-width: 600px) {
    padding: 0;
    margin: 0;
  }
`;
