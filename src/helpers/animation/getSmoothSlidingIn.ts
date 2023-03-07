import { css, FlattenSimpleInterpolation } from 'styled-components';

import { position } from '@/models/alert';
import constants from '@/models/enums';
const { OPACITY_FULL, OPACITY_NONE, BEHIND_SCREEN, ON_SCREEN } = constants;

const getSmoothSlidingIn = (position: position, animationDuration: number): FlattenSimpleInterpolation => {
    const leftSide = css`
        animation-name: from-left;
        animation-duration: ${animationDuration}ms;
        @keyframes from-left {
            0% {
                opacity: ${OPACITY_NONE};
                transform: translateX(-${BEHIND_SCREEN}px);
            }
            100% {
                opacity: ${OPACITY_FULL};
                transform: translateX(${ON_SCREEN});
            }
        }
    `;
    const rightSide = css`
        animation-name: from-right;
        animation-duration: ${animationDuration}ms;
        @keyframes from-right {
            0% {
                opacity: ${OPACITY_NONE};
                transform: translateX(${BEHIND_SCREEN}px);
            }
            100% {
                opacity: ${OPACITY_FULL};
                transform: translateX(${ON_SCREEN});
            }
        }
    `;
    switch (position) {
        case 'top-left':
            return leftSide;
        case 'top-right':
            return rightSide;
        case 'bottom-left':
            return leftSide;
        case 'bottom-right':
            return rightSide;
        default:
            return rightSide;
    }
};

export default getSmoothSlidingIn;
