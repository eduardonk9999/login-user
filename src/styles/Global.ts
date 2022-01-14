import { createGlobalStyle } from 'styled-components';

import backgroungImg from '../assets/img/bg.png';

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #fff;
    --colorButton: #A93159;
    --colorBorder: #BCBEC0;
    --colorFontsOne: #465685;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    @media(max-width: 1080) {
      font-size: 93.75%;
    }
    @media(max-width: 768) {
      font-size: 87.5%;
    }
  }
  body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, strong{
    font-weight: 600;
  }
  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }
  button {
    cursor: pointer;
  }
  body {
    background-image: url(${backgroungImg});
    background-repeat: no-repeat;
    background-size: cover;
  }

`;