import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url("https://fonts.cdnfonts.com/css/helvetica-neue-9");
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    color: #fff;
    stroke: #fff;
    font-size: 16px;
    font-family: Helvetica, sans-serif;
  }
`;
export default GlobalStyle;
