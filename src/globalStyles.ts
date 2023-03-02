import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url("https://fonts.cdnfonts.com/css/helvetica-neue-9");
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    position: relative;
  }
`;
export default GlobalStyle;
