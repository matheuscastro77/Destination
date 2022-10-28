import React, { useContext } from "react";
import GlobalStateContext from "../../Context/GlobalStateContext";
import { Form, H2, Main } from "./Styled";
import { MenuItem, Select, InputLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";
import { cityAPI, countryAPI } from "../../Constants/baseUrl";
import UseRequestData from "../../Hooks/UseRequestData";

const Destination = () => {
  const {
    country,
    setCountry,
    city,
    setCity,
    cidadesFiltradas,
    setCidadesFiltradas,
  } = useContext(GlobalStateContext);

  const { register, handleSubmit, control } = useForm();

  const [dataCountry] = UseRequestData([], `${countryAPI}`);
  const [dataCity] = UseRequestData([], `${cityAPI}`);
  const paisFiltro = (paisSelecionado) => {
    const pais = dataCity.filter((data) => {
      if (data?.country_code === paisSelecionado[0]?.code) {
        return data;
      }
    });

    setCidadesFiltradas(pais);
  };

  const onChangeCountry = (event) => {
    const paisSelecionado = dataCountry.filter((data) => {
      if (data.name === event.target.value) {
        return data;
      }
    });
    setCountry(paisSelecionado[0].name_ptbr);
    paisFiltro(paisSelecionado);
  };

  const onChangeCity = (event) => {
    setCity(event.target.value);
  };

  return (
    <Main>
        <H2>Destino de interesse</H2>
      <Form>
        <FormControl sx={{ width: 425 }}>
          <InputLabel id="País">País</InputLabel>
          <Controller
            name="country"
            required
            control={control}
            render={({ field }) => (
              <Select label="País" {...field} onChange={onChangeCountry}>
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
            required
            control={control}
            render={({ field }) => (
              <Select label="Cidade" {...field} onChange={onChangeCity}>
                {cidadesFiltradas?.map((data) => {
                  return (
                    <MenuItem value={data.name_ptbr} label={data.name_ptbr}>
                      {data.name_ptbr}
                    </MenuItem>
                  );
                })}
              </Select>
            )}
          />
        </FormControl>
      </Form>
    </Main>
  );
};

export default Destination;
