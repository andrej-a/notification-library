import GlobalStyle from '../src/globalStyles';

export const parameters = {
    actions: {
        argTypesRegex: '^on[A-Z].*',
    },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

const withGlobalStyle = Story => (
    <>
        <GlobalStyle />
        <Story />
    </>
);

export const decorators = [withGlobalStyle];
