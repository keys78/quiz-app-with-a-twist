import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
html {
  transition: background-color 0.3s ease-in-out;
  ${({ darkmode }) => darkmode ? css`
    background-color: var(--darkmodelayer_3);
    color: var(--color-white); ` : ""}
}


`;

export default GlobalStyles;