import React from "react";

import { Title, InputBox } from "./styles";

import { BoxDefault } from "../";

function Filter() {
  return (
    <BoxDefault>
      <Title>Filtar dados sobre um país</Title>
      <InputBox>
        <input type="text" name="search" placeholder="Digite o nome do país." />
      </InputBox>
    </BoxDefault>
  );
}

export default Filter;
