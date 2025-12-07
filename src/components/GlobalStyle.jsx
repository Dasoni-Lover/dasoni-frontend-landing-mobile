import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Pretendard", system-ui, sans-serif;
    background: #fff7f0;
    color: #333;
  }

  button {
    font-family: inherit;
  }
`;

export default GlobalStyle;
