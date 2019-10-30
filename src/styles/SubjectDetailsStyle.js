import styled from "styled-components";

export const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 30px 0 30px;
`;

export const Title = styled.div`
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
`;

export const Info = styled.div`
  margin: 20px 0 40px 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Description = styled.div`
  height: calc(100vh - 342.6px);
  padding: 20px 30px;
  font-size: 20px;
  letter-spacing: 1px;
  font-weight: normal;
  text-align: justify;
  text-indent: 40px;
  color: #053d57;
  background-color: #f2f1ef;
`;
