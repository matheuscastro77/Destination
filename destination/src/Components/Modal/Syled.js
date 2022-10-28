import styled from "styled-components";

export const Main = styled.main`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background-color: #f3f7fa;
  color: #000;
  width: 50%;
  height: 55vh;
  text-align: center;
  margin-top: 2.8%;

  div{
    margin-top: 5%;
    font-size: 1.2rem;

    span{
      font-weight:600;
    }
  }
`;

export const Button = styled.button`
  border: 0px;
  padding: 8px;
  background-color: transparent;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 0.5%;
  margin-left: 90%;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.5s;
  }
`;

export const ButtonConfirm = styled.button`
  border: 1px solid black;
  padding: 8px;
  background-color: transparent;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 5%;

  :hover {
    cursor: pointer;
    transform: scale(1.07);
    transition: 0.5s;
  }
`;
