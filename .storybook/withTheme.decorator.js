import { ThemeProvider } from 'styled-components';
import theme from '../src/styles/theme';

const withTheme = Story => (
    <ThemeProvider theme={theme}>
        <Story />
    </ThemeProvider>
);

export default withTheme;
