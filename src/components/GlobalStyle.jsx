import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Pretendard";
    font-weight: 100 900;
    font-display: swap;
    src:
      url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.woff2")
        format("woff2-variations"),
      url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-regular.woff2")
        format("woff2");
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  body {
    font-family: "Pretendard", -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
    background: #fff7f0;
    color: #333;
  }

  button,
  input,
  textarea,
  select {
    font-family: inherit;
  }
`;

export default GlobalStyle;
