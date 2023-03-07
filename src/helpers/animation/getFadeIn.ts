import { css, FlattenSimpleInterpolation } from 'styled-components';
import constants from '@/models/enums';

const { OPACITY_FULL, OPACITY_NONE } = constants;
const getFadeIn = (animationDuration: number): FlattenSimpleInterpolation => {
    return css`
        animation-name: fade-in;
        animation-duration: ${animationDuration}ms;

        @keyframes fade-in {
            0% {
                opacity: ${OPACITY_NONE};
            }

            100% {
                opacity: ${OPACITY_FULL};
            }
        }
    `;
};

export default getFadeIn;
