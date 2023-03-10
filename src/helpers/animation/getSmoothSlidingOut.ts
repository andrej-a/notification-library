import { css } from 'styled-components';

import { position } from '@/types/alert';
import constants from '@/types/constants';

const { OPACITY_FULL, OPACITY_NONE, ON_SCREEN, BEHIND_SCREEN } = constants;
const getSmoothSlidingOut = (position: position, animationDuration: number) => {
    const leftSide = css`
        animation-name: to-left;
        animation-duration: ${animationDuration}ms;
        @keyframes to-left {
            0% {
                opacity: ${OPACITY_FULL};
                transform: translateX(${ON_SCREEN});
            }
            100% {
                opacity: ${OPACITY_NONE};
                transform: translateX(-${BEHIND_SCREEN}px);
            }
        }
    `;
    const rightSide = css`
        animation-name: to-right;
        animation-duration: ${animationDuration}ms;
        @keyframes to-right {
            0% {
                opacity: ${OPACITY_FULL};
                transform: translateX(${ON_SCREEN});
            }
            100% {
                opacity: ${OPACITY_NONE};
                transform: translateX(${BEHIND_SCREEN}px);
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

export default getSmoothSlidingOut;
