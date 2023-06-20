import styled from "styled-components";

import magnifyingGlass from "../../Assests/icons/magnifying-glass-icon.svg";

export const Title = styled.h2`
  text-align: center;
  margin-top: 0;
`;

export const InputBox = styled.div`
  width: 80%;
  margin: 0 auto;
  border-bottom: 1px solid red;
  padding: 0 0 5px 45px;
  background: url(${magnifyingGlass}) left top no-repeat;
  background-size: 25px 25px;

  input {
    outline: none;
    font-size: 16px;
    width: 80%;
    border: 0;

    &::placeholder {
      color: #b6aeac;
    }
  }
`;
