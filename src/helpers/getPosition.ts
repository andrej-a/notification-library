import { css, FlattenSimpleInterpolation } from 'styled-components';

import constants from '@/types/constants';

const { SCREEN_OFFSET } = constants;
const getPosition = (position: string): FlattenSimpleInterpolation => {
    switch (position) {
        case 'top-left':
            return css`
                top: ${SCREEN_OFFSET}px;
                left: 0;
            `;
        case 'top-right':
            return css`
                top: ${SCREEN_OFFSET}px;
                right: 0;
            `;
        case 'bottom-left':
            return css`
                bottom: ${SCREEN_OFFSET}px;
                left: 0;
            `;
        case 'bottom-right':
            return css`
                bottom: ${SCREEN_OFFSET}px;
                right: 0;
            `;
        default:
            return css`
                bottom: ${SCREEN_OFFSET}px;
                right: 0;
            `;
    }
};

export default getPosition;
