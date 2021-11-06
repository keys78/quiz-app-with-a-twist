import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html {
  background: ${props => (props.darkmode ? 'rgb(1, 5, 32)' : '')};
}


`;

export default GlobalStyles;