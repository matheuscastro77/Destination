import React, { useContext } from "react";
import { Main, Form, H2 } from "./Styled";
import GlobalStateContext from "../../Context/GlobalStateContext";
import { TextField } from "@mui/material";
import InputMask from "react-input-mask";

const PersonalData = () => {
  
  const { name, setName, phone, setPhone, cpf, setCpf, email, setEmail } = useContext(GlobalStateContext);

  return (
    <Main>
      <H2>Dados pessoais</H2>
      <Form>
        <TextField
          label="Nome"
          required
          sx={{ width: 425 }}
          value={name}
          inputProps={{
            pattern: "^.{3,}$",
            title: "O nome deve ter no mínimo 3 caracteres",
          }}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          label="E-mail"
          sx={{ width: 425 }}
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
          {() => <TextField label="Telefone" sx={{ width: 425 }} required />}
        </InputMask>

        <InputMask
          mask="999.999.999-99"
          maskPlaceholder=" "
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        >
          {() => <TextField label="CPF" required sx={{ width: 425 }} />}
        </InputMask>
      </Form>
    </Main>
  );
};

export default PersonalData;
