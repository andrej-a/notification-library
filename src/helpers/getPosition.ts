import { css, FlattenSimpleInterpolation } from 'styled-components';

const getPosition = (position: string): FlattenSimpleInterpolation => {
    switch (position) {
        case 'top-left':
            return css`
                top: 0;
                left: 0;
            `;
        case 'top-right':
            return css`
                top: 0;
                right: 0;
            `;
        case 'bottom-left':
            return css`
                bottom: 0;
                left: 0;
            `;
        case 'bottom-right':
            return css`
                bottom: 0;
                right: 0;
            `;
        default:
            return css`
                bottom: 0;
                right: 0;
            `;
    }
};

export default getPosition;
