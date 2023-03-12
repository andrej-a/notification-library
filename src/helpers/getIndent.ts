import { css, FlattenSimpleInterpolation } from 'styled-components';

import { indent } from '@/types/alert';
import constants from '@/types/constants';

const { SMALL_MARGIN, MEDIUM_MARGIN, LARGE_MARGIN } = constants;

const getIndent = (indent: indent): FlattenSimpleInterpolation => {
    switch (indent) {
        case 'small':
            return css`
                margin: 0 ${SMALL_MARGIN}px;
            `;
        case 'medium':
            return css`
                margin: 0 ${MEDIUM_MARGIN}px;
            `;
        case 'large':
            return css`
                margin: 0 ${LARGE_MARGIN}px;
            `;
        default:
            return css`
                margin: 0 ${SMALL_MARGIN}px;
            `;
    }
};

export default getIndent;
