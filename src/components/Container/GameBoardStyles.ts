import styled from "@emotion/styled";

export const GameBoardContainer = styled.div`
  margin-top: 50px;
  & table {
    margin: auto;
    width: 300px;
    height: 300px;
    border-collapse: collapse;
    & td {
      width: 33.3%;
      height: 33.3%;
      border-width: 0px;
      border-style: solid;
      border-color: rgb(0, 0, 0);
      text-align: center;
      font-size: 50px;
    }
    & tr:nth-of-type(-n + 2) td:nth-of-type(-n + 2) {
      border-width: 0px 10px 10px 0px;
    }
    & tr:nth-of-type(-n + 2) td:nth-of-type(3) {
      border-width: 0px 0px 10px 0px;
    }
    & tr:nth-of-type(3) td:nth-of-type(-n + 2) {
      border-width: 0px 10px 0px 0px;
    }
  }
`;

export const PlayerContainer = styled.div`
  align-items: center;
  justify-content: center;
  height: 80px;
  display: flex;
`;

export const PlayerSelect = styled.div`
  text-align: center;
  width: 150px;
  padding: 10px 20px;
  margin: 8px;
  border: 3px solid;
  border-radius: 10px;
  font-size: 20px;
`;

export const TitleContainer = styled.div`
  font-family: "Futura";
  font-weight: bolder;
  color: rgb(127, 171, 18);
  text-align: center;
  margin: 20px;
  font-size: 30px;
`;
