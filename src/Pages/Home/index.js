import { PageDefault, Filter, Nations } from "../../Components";

import {
  Container,
  Presentation,
  MainText,
  Main,
  ContainerBoxes,
} from "./styles";

function App() {
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
