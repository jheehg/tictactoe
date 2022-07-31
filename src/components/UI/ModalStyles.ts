import styled from "@emotion/styled";

export const Backdrop = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 9998;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 24vh;
  left: calc(50% - 11rem);
  width: 350px;
  height: 350px;
  font-weight: bolder;
  z-index: 9999;
`;

export const DialogBox = styled.dialog`
  width: 350px;
  height: 350px;
  display: flex;
  font-size: 40px;
  flex-direction: column;
  align-items: center;
  background-color: rgb(255, 255, 255);
  border: none;
  border-radius: 3px;
  box-shadow: 0 0 10px rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  color: rgb(0, 0, 0);
  z-index: 10000;
  & p:nth-of-type(1) {
    font-size: 17px;
    color: rgb(0, 34, 102);
  }
`;

export const Button = styled.button`
  width: 120px;
  margin: 1.3rem 0;
  padding: 0.5rem;
  border: none;
  outline: none;
  background-color: rgba(104, 108, 186, 0.8);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.008);
  font-size: 20px;
  font-weight: bolder;
  color: white;
  &:hover {
    background-color: rgb(104, 108, 186);
  }
`;
