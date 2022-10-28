import React from 'react'
import { useNavigate } from 'react-router-dom'
import Destination from '../../Components/Destination/Destination'
import PersonalData from '../../Components/PersonalData/PersonalData'
import { Main, Body, Button } from './Styled'

const Dashboard = () => {

  const navigate = useNavigate()

  return (
    <Main>
      <Body>
    <PersonalData />
    <Destination />
    </Body>
    <Button onClick={() => navigate("/home")}>Enviar</Button>
    
    </Main>
  )
}

export default Dashboard
