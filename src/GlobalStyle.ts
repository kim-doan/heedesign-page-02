import { createGlobalStyle } from "styled-components";

const GmarketSansLight = require("./assets/GmarketSansTTFLight.ttf");
const GmarketSans = require("./assets/GmarketSansTTFMedium.ttf");

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "GmarketSans";
    src: url("${GmarketSans}") format("truetype");
  }

  @font-face {
    font-family: "GmarketSansLight";
    src: url("${GmarketSansLight}") format("truetype");
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
