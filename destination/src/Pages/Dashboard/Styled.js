import styled from "styled-components";
import background from '../../Assets/wallpaper2.jpg'


export const Main = styled.main`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image:url(${background});
    background-size: cover;
`

export const Body = styled.body`
    display: flex;
    justify-content: space-between;
    width: 60%;
`

export const Button = styled.button`
    width: 8%;
    height: 4vh;
    margin-top: 2%;
    border: 0px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`