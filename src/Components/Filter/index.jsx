import React from "react";

import { Title, InputBox } from "./styles";

import { BoxDefault } from "../";

function Filter(props) {
  const {searchText, setSearchText} = props
  return (
    <BoxDefault>
      <Title>Filtar dados sobre um país</Title>
      <InputBox>
        <input type="text" name="search" placeholder="Digite o nome do país." value={searchText} onChange={(e) => setSearchText(e.target.value)} />
      </InputBox>
    </BoxDefault>
  );
}

export default Filter;
