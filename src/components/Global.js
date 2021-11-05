import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html {
  background: ${props => (props.darkmode ? 'black' : 'white')};
}


`;

export default GlobalStyles;