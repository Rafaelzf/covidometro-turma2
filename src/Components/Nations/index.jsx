import React from "react";
import { BoxDefault } from "../";

import { Title, CountriesData } from "./styles";

function Nations(props) {
  const { country, confirmed, deaths, updated_at } = props;

  const date = new Date(updated_at);
  const formatedDate = new Intl.DateTimeFormat("pt-BR").format(date);

  return (
    <BoxDefault>
      <div>
        <Title>{country}</Title>
        <CountriesData>
          <li>
            <h3>Total de casos</h3>
            <strong>{confirmed}</strong>
          </li>
          <li>
            <h3>Mortes</h3>
            <strong>{deaths}</strong>
          </li>
          <li>
            <h3>Última atualização</h3>
            <strong>{formatedDate}</strong>
          </li>
        </CountriesData>
      </div>
    </BoxDefault>
  );
}

export default Nations;
