import React, { useContext } from "react";
import GlobalStateContext from "../../Context/GlobalStateContext";
import { Main } from "./Styled";
import { MenuItem, Select, InputLabel, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { Controller } from "react-hook-form"
import { useForm } from "react-hook-form"
import { country } from "../../Constants/baseUrl";
import UseRequestData from "../../Hooks/UseRequestData";

const Destination = () => {
  const { name, setName, phone, setPhone, cpf, setCpf, email, setEmail } =
    useContext(GlobalStateContext);

    const { register, handleSubmit, control } = useForm();

    const [contry] = UseRequestData([], `${country}`)
    
    const country1 = contry

    console.log(country1)

  return (
    <Main>
      <FormControl sx={{ width: 425, borderRadius: 50 }}>
        <InputLabel id="Turma">Turma</InputLabel>
        <Controller
          name="team"
          required
          control={control}
          render={({ field }) => (
            <Select label="Turma" {...field}>
              {/* {teamss?.map((data) => {
                return (
                  <MenuItem value={data.id} label={data.id}>
                    {data.team}
                  </MenuItem>
                );
              })} */}
            </Select>
          )}
        />
      </FormControl>
    </Main>
  );
};

export default Destination;
