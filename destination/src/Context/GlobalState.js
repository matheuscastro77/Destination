import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext"
const GlobalState = (props, initialState) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [cpf, setCpf] = useState('')
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [cidadesFiltradas, setCidadesFiltradas] = useState([])

    return (
        <GlobalStateContext.Provider value ={{ name, setName, cidadesFiltradas, setCidadesFiltradas, phone, setPhone, cpf, setCpf, email, setEmail, country, setCountry, city, setCity }}>
            {props.children}
        </GlobalStateContext.Provider> 
    )
}
export default GlobalState
