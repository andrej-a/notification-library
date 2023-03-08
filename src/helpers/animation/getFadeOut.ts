import { css, FlattenSimpleInterpolation } from 'styled-components';

import constants from '@/models/enums';

const { OPACITY_FULL, OPACITY_NONE } = constants;
const getFadeOut = (animationDuration: number): FlattenSimpleInterpolation => {
    return css`
        animation-name: fade-out;
        animation-duration: ${animationDuration}ms;

        @keyframes fade-out {
            0% {
                opacity: ${OPACITY_FULL};
            }

            100% {
                opacity: ${OPACITY_NONE};
            }
        }
    `;
};
export default getFadeOut;
