import styled from "styled-components";
import background from "../../Assets/wallpaper2.jpg";

export const Main = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${background});
  background-size: cover;
`;

export const Body = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 60vh;
  width: 65%;
`;

export const Container = styled.div`
  height: 55vh;
  width: 47.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: auto 0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: white;
`;

export const ContainerChildren1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: auto 0;
  height: 60%;
`;

export const ContainerChildren2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin: auto 0;
  justify-content: space-between;
  height: 25%;
`;

export const Button = styled.button`
  width: 8%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1rem;
  padding: 5px;
  font-weight: 600;
  margin-top: 2%;
  border: 0px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  :hover {
    cursor: pointer;
  }
`;

export const FirstContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60vh;
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  height: 60vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const H2 = styled.h2`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 600;
`;

export const Tittle = styled.h2`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 600;
  margin-bottom: 3%;
`