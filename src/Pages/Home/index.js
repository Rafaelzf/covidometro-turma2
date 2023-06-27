import { useState, useEffect } from "react";
import axios from "axios";
import { PageDefault, Filter, Nations, BoxDefault } from "../../Components";
import { baseUrl } from "../../Connections";
import { useQuery } from "react-query";

import {
  Container,
  Presentation,
  MainText,
  Main,
  ContainerBoxes,
} from "./styles";

function App() {
  const [countries, setContries] = useState([]);
  const [searchText, setSearchText] = useState("");

  const { isLoading, data, error } = useQuery("data", () =>
    axios.get(`${baseUrl}countries`)
  );

  useEffect(() => {
    if (data?.data.data) {
      setContries(data.data.data);
    }
  }, [data?.data.data]);

  const search = (searchText) => {
    if (!data?.data.data && !searchText) return;

    const newData = data?.data.data;
    const value = String(searchText).toLowerCase();

    const countriesFiltered = newData.filter((country) =>
      country.country.toLowerCase().includes(value)
    );

    setContries(countriesFiltered);
  };

  useEffect(() => {
    if (!searchText) return;
    search(searchText);
  }, [searchText]);

  return (
    <PageDefault>
      <Container>
        <Presentation>
          <MainText>
            <h1>Conheça o Covidrômetro</h1>
            <p>
              Fique atualizado com velocidade e transparência. O Covidrômetro é
              uma ferramenta que mostra para você em tempo real o número de
              casos de óbitos relacionados à pandemia do COVID-19 ao redor do
              mundo.
            </p>
          </MainText>
        </Presentation>
        <Main>
          {isLoading && <BoxDefault>Loading...</BoxDefault>}

          {!isLoading && error ? (
            <BoxDefault>
              💢 Infelizmente houve algum erro inexperado. Volte mais tarde. ⛔️
            </BoxDefault>
          ) : (
            !isLoading &&
            countries && (
              <ContainerBoxes>
                <Filter searchText={searchText} setSearchText={setSearchText} />
                {countries.length &&
                  countries.map((country) => (
                    <Nations key={country.country} {...country} />
                  ))}
              </ContainerBoxes>
            )
          )}
        </Main>
      </Container>
    </PageDefault>
  );
}

export default App;
