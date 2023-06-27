import React from "react";
import { BoxDefault } from "../";

import { Title, CountriesData } from "./styles";

function Nations() {
  return (
    <BoxDefault>
      <div>
        <Title>Nome do país</Title>
        <CountriesData>
          <li>
            <h3>Total de casos</h3>
            <strong>11111</strong>
          </li>
          <li>
            <h3>Mortes</h3>
            <strong>11111</strong>
          </li>
          <li>
            <h3>Última atualização</h3>
            <strong>11111</strong>
          </li>
        </CountriesData>
      </div>
    </BoxDefault>
  );
}

export default Nations;
