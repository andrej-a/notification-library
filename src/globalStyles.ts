import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@font-face {
	font-family: 'Helvetica';
	src: local('Helvetica'),
	    url('./assets/fonts/Helvetica/HelveticaRegular.woff2') format('woff2'),
	    url('./assets/fonts/Helvetica/HelveticaRegular.woff') format('woff'),
	    url('./assets/fonts/Helvetica/HelveticaRegular.ttf') format('ttf'),
	    url('./assets/fonts/Helvetica/HelveticaRegular.eot') format('eot');
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
export default GlobalStyle;
