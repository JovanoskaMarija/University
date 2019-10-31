import styled from "styled-components";

export const Details = styled.div`
 box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
 box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 30px 0 30px;
`;

export const Title = styled.div`
 box-sizing: border-box;
  margin: 0 20px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: #053d57;
  p {
    font-size: 40px;
    font-weight: bold;
  }
  span {
    font-size: 30px;
    font-weight: normal;
  }

  @media only screen and (max-width: 600px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const Info = styled.div`
 box-sizing: border-box;
  margin: 20px 0 40px 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media only screen and (max-width: 600px) {
    width: 95%;
    margin-left: 0;
    margin-right: 0;
    display: flex;
    justify-content: space-around;
    padding-left: 10px;
  }
`;

export const Description = styled.div`
  box-sizing: border-box;
  height: auto;
  margin: 0 20px;
  box-shadow: 1px 1px 4px 1px rgba(177, 177, 177, 0.4);
  padding: 20px 30px;
  font-size: 20px;
  letter-spacing: 1px;
  font-weight: normal;
  text-align: justify;
  text-indent: 40px;
  color: #053d57;
  background-color: #f2f1ef;

  @media only screen and (max-width: 600px) {
    margin-left: 0;
    margin-right: 0;
  }
`;
