import { createGlobalStyle } from 'styled-components';

import backgroundImg from '../assets/background-pokedex.svg';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Ubuntu", "Roboto", sans-serif;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    min-height: 100vh;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    background-color: #ffffff;

    background-image: url(${backgroundImg});
    background-repeat: no-repeat;
    background-position: 100% 0%;
  }

  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }
`;

export default GlobalStyles;
