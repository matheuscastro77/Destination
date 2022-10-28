import React, { useContext } from 'react'
import GlobalStateContext from '../../Context/GlobalStateContext';
import { Main } from './Syled';

 const Home = () => {

    const { name, setName, phone, setPhone, cpf, setCpf, email, setEmail, country, city } =
    useContext(GlobalStateContext);

  return (
    <Main>
        <div>{name}</div>
        <div>{phone}</div>
        <div>{email}</div>
        <div>{cpf}</div>

        {/* <div>{country}</div> */}
        <div>{city}</div>
    </Main>
  )
}

export default Home