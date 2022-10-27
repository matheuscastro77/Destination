import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext"
const GlobalState = (props, initialState) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [cpf, setCpf] = useState('')

    return (
        <GlobalStateContext.Provider value ={{ name, setName, phone, setPhone, cpf, setCpf, email, setEmail }}>
            {props.children}
        </GlobalStateContext.Provider> 
    )
}
export default GlobalState
