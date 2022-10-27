import React, { useContext } from "react";
import { Main, Form } from "./Styled";
import GlobalStateContext from "../../Context/GlobalStateContext";
import { MenuItem, Select, InputLabel, TextField } from "@mui/material";
import InputMask from "react-input-mask";

const PersonalData = () => {
  const { name, setName, phone, setPhone, cpf, setCpf, email, setEmail } =
    useContext(GlobalStateContext);

  const onSubmitEdit = (event) => {
    event.preventDefault();
    const data = {
      name,
      phone,
      cpf,
      email,
    };

    console.log(data)
  };

  /* const checkCpf = () => {
    if(cpf !== 14) {
      a
    }
  } */

  /* const onlyNumbers = (str) => str.replace(/[^0-9]/g, ""); */

  return (
    <Main>
      <Form onSubmit={onSubmitEdit}>
        <TextField
          label="Nome"
          required
          value={name}
          inputProps={{
            pattern: "^.{3,}$",
            title: "O nome deve ter no mínimo 3 caracteres",
          }}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          label="E-mail"
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputMask
          mask="(99)9 9999-9999"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        >
          {() => <TextField label="Telefone" required />}
        </InputMask>

        <InputMask
          mask="999.999.999-99"
          maskPlaceholder=" "
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        >
          {() => <TextField label="CPF" required minLength='11'/>}
        </InputMask>

        <button> Enviar </button>
      </Form>
    </Main>
  );
};

export default PersonalData;
