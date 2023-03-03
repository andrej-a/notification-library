import { css, FlattenSimpleInterpolation } from 'styled-components';

import { position } from '../models/alert';

const getPosition = (position: position): FlattenSimpleInterpolation => {
    switch (position) {
        case 'top-left':
            return css`
                top: 0;
                left: 0;
            `;
        case 'top-right':
            return css`
                top: 0;
                left: 100%;
            `;
        case 'bottom-left':
            return css`
                top: 100%;
                left: 0;
            `;
        case 'bottom-right':
            return css`
                top: 100%;
                left: 100%;
            `;
        default:
            return css`
                top: 100%;
                left: 100%;
            `;
    }
};

export default getPosition;
