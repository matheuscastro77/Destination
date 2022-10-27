import React, { useContext } from "react";
import GlobalStateContext from "../../Context/GlobalStateContext";
import { Main } from "./Styled";
import {
  MenuItem,
  Select,
  InputLabel,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";
import { cityAPI, countryAPI } from "../../Constants/baseUrl";
import UseRequestData from "../../Hooks/UseRequestData";

const Destination = () => {
  const { country, setCountry, city, setCity, country_code, setCountry_code, teste, setTeste, cidadesFiltradas, setCidadesFiltradas } =
    useContext(GlobalStateContext);

  const { register, handleSubmit, control } = useForm();

  const [dataCountry] = UseRequestData([], `${countryAPI}`);
  const [dataCity] = UseRequestData([], `${cityAPI}`);

  console.log(dataCity)
  console.log(dataCountry)

 

  const paisFiltro = (paisSelecionado) => {
      const pais = dataCity.filter((data) => {
        if(data?.country_code === paisSelecionado[0]?.code) {
          return data
        } 
      })

      console.log('paispaispaispaispais',pais)
      setCidadesFiltradas(pais)
  }

  console.log('cidadesFiltradas', cidadesFiltradas)

  const onChangeCountry = (event) => {
    const paisSelecionado =  dataCountry.filter((data) => {
       if(data.name === event.target.value){
         return data 
       }
     } 
     
     )
      console.log(event.target.value)
      paisFiltro(paisSelecionado)
   }
  
  const onSubmitEdit = (data) => {
    const {
      country,
      city,
      country_code,
    } = data

    console.log("data", data);

    /* console.log("data", data); */
  };

  return (
    <Main>
      <form onSubmit={handleSubmit(onSubmitEdit)}>
        <div>
          <FormControl sx={{ width: 425, borderRadius: 50 }}>
            <InputLabel id="País">País</InputLabel>
            <Controller
              name="country"
              required
              control={control}
              render={({ field }) => (
                <Select label="País" {...field} onChange={onChangeCountry}>
                  {dataCountry?.map((data) => {
                    return (
                      <MenuItem value={data.name} label={data.name}>
                        {data.name_ptbr}
                      </MenuItem>
                    );
                  })}
                </Select>
              )}
            />
          </FormControl>

          <FormControl sx={{ width: 425, borderRadius: 50 }}>
            <InputLabel id="Cidade">Cidade</InputLabel>
            <Controller
              name="city"
              required
              control={control}
              render={({ field }) => (
                <Select label="Cidade" {...field}>
                  {cidadesFiltradas?.map((data) => {
                    return (
                      <MenuItem value={data.name} label={data.name}>
                        {data.name_ptbr === '' ? null : data.name_ptbr}
                      </MenuItem>
                    );
                  })}
                </Select>
              )}
            />
          </FormControl>
        </div>
        <button>enviar</button>
      </form>
    </Main>
  );
};

export default Destination;
