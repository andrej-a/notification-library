import { css, FlattenSimpleInterpolation } from 'styled-components';

import { indent } from '../models/alert';

const getIndent = (indent: indent): FlattenSimpleInterpolation => {
    switch (indent) {
        case 'small':
            return css`
                margin: 5px;
            `;
        case 'medium':
            return css`
                margin: 10px;
            `;
        case 'large':
            return css`
                margin: 15px;
            `;
        default:
            return css`
                padding: 5px;
            `;
    }
};

export default getIndent;
