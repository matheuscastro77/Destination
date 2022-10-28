import React, { useContext } from 'react'
import GlobalStateContext from '../../Context/GlobalStateContext';
import { Main, Container, Button, ButtonConfirm } from './Syled';

 const Modal = () => {

    const { name, setName, phone, setPhone, cpf, setCpf, email, setEmail, city, setCity, setCountry, setIsModalVisible } =
    useContext(GlobalStateContext);

    const Closemodal = () => {
      setIsModalVisible(false)
    }

    const confirm = () => {
      setName('')
      setPhone('')
      setCpf('')
      setEmail('')
      setCity(null)
      setCountry(null)
      setIsModalVisible(false)
    }
  return (
    <Main>
      <Container>

        <Button onClick={Closemodal}>X</Button>
          
        <h3>Confirme seu interesse de viagem. Entraremos em contato em breve.</h3>
        
        <div>
        <h5>Nome: <span>{name}</span></h5>
        <h5>Telefone: <span>{phone}</span></h5>
        <h5>E-mail: <span>{email}</span></h5>
        <h5>CPF: <span>{cpf}</span></h5>
        <h5>Cidade e país de interesse: <span>{city}</span></h5>
        </div>

        <ButtonConfirm onClick={confirm}>Confirmar</ButtonConfirm>
        </Container>
    </Main>
  )
}

export default Modal