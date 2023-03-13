import theme from '@/styles/theme';

const {
    color: { lightBlue, brightGreen, darkOrange, darkRed },
} = theme;

const getBackgroundColor = (type: string): string => {
    switch (type) {
        case 'info':
            return lightBlue;
        case 'success':
            return brightGreen;
        case 'warning':
            return darkOrange;
        case 'error':
            return darkRed;
        default:
            return lightBlue;
    }
};
export default getBackgroundColor;
