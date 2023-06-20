import styled from "styled-components";

import Nurses from "../../Assests/imgs/doctors.png";

const Container = styled.div`
  width: 80%;
`;

const Presentation = styled.div`
  min-height: 385px;
  margin-bottom: 0px;
  background: url(${Nurses}) right center no-repeat;
`;

const MainText = styled.div`
  width: 50%;

  h1 {
    font-size: 38px;
    margin-bottom: 20px;
  }
`;

const Main = styled.main`
  width: 70%;
  margin: -100px auto 0;
  border: 1px solid red;
`;

export { Container, Presentation, MainText, Main };
