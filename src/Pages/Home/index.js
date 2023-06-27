import axios from "axios";
import { PageDefault, Filter, Nations } from "../../Components";
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
  const { isLoading, data, error } = useQuery("data", () =>
    axios.get(`${baseUrl}countries`)
  );

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
          <ContainerBoxes>
            <Filter />
            <Nations />
          </ContainerBoxes>
        </Main>
      </Container>
    </PageDefault>
  );
}

export default App;
