import React from 'react'
import Destination from '../../Components/Destination/Destination'
import PersonalData from '../../Components/PersonalData/PersonalData'
import { Main } from './Styled'

const Dashboard = () => {
  return (
    <Main>
    <PersonalData />
    <Destination />
    </Main>
  )
}

export default Dashboard
