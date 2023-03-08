import React from 'react';
import { createPortal } from 'react-dom';
import { ThemeProvider } from 'styled-components';

import AlertList from '@/components/AlertList';
import ErrorBoundary from '@/components/ErrorBoundary';
import theme from '@/styles/theme';

const AlertPortal = () => {
    return createPortal(
        <ThemeProvider theme={theme}>
            <ErrorBoundary>
                <AlertList />
            </ErrorBoundary>
        </ThemeProvider>,
        document.body,
    );
};
export default AlertPortal;
