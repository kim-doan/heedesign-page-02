import { createGlobalStyle } from "styled-components";

const Jalnan = require("./assets/Jalnan.ttf");
const JalnanOtf = require("./assets/JalnanOTF.otf");

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Jalnan";
    src: url("${Jalnan}") format("truetype");
    src: url("${JalnanOtf}") format("opentype");
  }

  html,
  body {
    font-size: calc(0.75em + 1vw);
    background-color: #F5F5F5;
    height: 100%;
    margin: 0px;
  }

  button,
  input,
  select,
  textarea {
  }

  @media (max-width: 500px) {
    html {
      font-size: 14px;
    }
  }
`;

export default GlobalStyle;
