import React, { useContext } from "react";
import GlobalStateContext from "../../Context/GlobalStateContext";
import {
  Main,
  Body,
  Button,
  Form,
  H2,
  Tittle,
  FirstContainer,
  Container,
  ContainerChildren1,
  ContainerChildren2,
} from "./Styled";
import Modal from "../Modal/Modal";
import { TextField } from "@mui/material";
import InputMask from "react-input-mask";
import { MenuItem, Select, InputLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";
import { cityAPI, countryAPI } from "../../Constants/baseUrl";
import UseRequestData from "../../Hooks/UseRequestData";

const Dashboard = () => {
  const {
    name,
    setName,
    phone,
    setPhone,
    cpf,
    setCpf,
    email,
    setEmail,
    isModalVisible,
    setIsModalVisible,
    country,
    setCountry,
    city,
    setCity,
    filteredCity, 
    setFilteredCity
  } = useContext(GlobalStateContext);

  const onSubmitEdit = (event) => {
    const data = {
      name,
      phone,
      cpf,
      email,
      country,
      city,
    };
    modal();
  };

  const [dataCountry] = UseRequestData([], `${countryAPI}`);
  const [dataCity] = UseRequestData([], `${cityAPI}`);


  const filteredCountry = (selectedCountry) => {
    const pais = dataCity.filter((data) => {
      if (data?.country_code === selectedCountry[0]?.code) {
        return data;
      }
    });
    setFilteredCity(pais);
  };

  const onChangeCountry = (event) => {
    const selectedCountry = dataCountry.filter((data) => {
      if (data.name === event.target.value) {
        return data;
      }
    });
    setCountry(selectedCountry[0].name_ptbr);
    filteredCountry(selectedCountry);
  };

  const onChangeCity = (event) => {
    setCity(event.target.value);
  };

  const { handleSubmit, control } = useForm();

  const modal = () => {
    setIsModalVisible(true);
  };

  return (
    <Main>
      <Tittle>
        Por favor, insira suas informações pessoais e seu destino de interesse.
      </Tittle>
      <Body>
        <Form onSubmit={handleSubmit(onSubmitEdit)}>
          <FirstContainer>
            <Container>
              <H2>Dados pessoais</H2>
              <ContainerChildren1>
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
                  {() => (
                    <TextField label="Telefone" sx={{ width: 425 }} required />
                  )}
                </InputMask>

                <InputMask
                  mask="999.999.999-99"
                  maskPlaceholder=" "
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                >
                  {() => <TextField label="CPF" required sx={{ width: 425 }} />}
                </InputMask>
              </ContainerChildren1>
            </Container>
            <Container>
              <H2>Destino de interesse</H2>
              <ContainerChildren2>
                <FormControl sx={{ width: 425 }}>
                  <InputLabel id="País">País</InputLabel>
                  <Controller
                    name="country"
                    required
                    control={control}
                    render={({ field }) => (
                      <Select
                        label="País"
                        {...field}
                        onChange={onChangeCountry}
                        required
                      >
                        {dataCountry?.map((data) => {
                          return (
                            <MenuItem value={data?.name} label={data?.name}>
                              {data?.name_ptbr}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    )}
                  />
                </FormControl>

                <FormControl sx={{ width: 425 }}>
                  <InputLabel id="Cidade">Cidade</InputLabel>
                  <Controller
                    name="city"
                    control={control}
                    render={({ field }) => (
                      <Select
                        label="Cidade"
                        {...field}
                        onChange={onChangeCity}
                        required
                      >
                        {filteredCity?.map((data) => {
                          return (
                            <MenuItem
                              value={data.name_ptbr}
                              label={data.name_ptbr}
                            >
                              {data.name_ptbr}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    )}
                  />
                </FormControl>
              </ContainerChildren2>
            </Container>
          </FirstContainer>
          <Button>Enviar</Button>
          {isModalVisible ? <Modal /> : null}
        </Form>
      </Body>
    </Main>
  );
};

export default Dashboard;
