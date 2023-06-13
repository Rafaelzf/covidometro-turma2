import React from "react";

import { Container, Header, MainContent } from "./styles";
import Logo from "../../Assests/icons/logo.png";

function PageDefault({ children }) {
  return (
    <Container>
      <Header>
        <img src={Logo} alt="logo" />
      </Header>
      <MainContent>{children}</MainContent>
    </Container>
  );
}

export default PageDefault;
