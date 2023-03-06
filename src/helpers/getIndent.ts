import { css, FlattenSimpleInterpolation } from 'styled-components';

import { indent } from '@/models/alert';

const getIndent = (indent: indent): FlattenSimpleInterpolation => {
    switch (indent) {
        case 'small':
            return css`
                margin: 0 10px;
            `;
        case 'medium':
            return css`
                margin: 0 20px;
            `;
        case 'large':
            return css`
                margin: 0 30px;
            `;
        default:
            return css`
                margin: 0 10px;
            `;
    }
};

export default getIndent;
