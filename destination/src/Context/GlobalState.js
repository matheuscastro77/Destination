import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext"
const GlobalState = (props, initialState) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [cpf, setCpf] = useState('')
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [filteredCity, setFilteredCity] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false)


    return (
        <GlobalStateContext.Provider value ={{ name, setName, filteredCity, setFilteredCity, phone, setPhone, cpf, setCpf, email, setEmail, country, setCountry, city, setCity, isModalVisible, setIsModalVisible }}>
            {props.children}
        </GlobalStateContext.Provider> 
    )
}
export default GlobalState
