import { css, FlattenSimpleInterpolation } from 'styled-components';

import { position } from '@/models/alert';

const getSmoothSlidingIn = (position: position, animationDuration: number): FlattenSimpleInterpolation => {
    const leftSide = css`
        animation-name: from-left;
        animation-duration: ${animationDuration}ms;
        @keyframes from-left {
            0% {
                opacity: 0;
                transform: translateX(-9000px);
            }
            100% {
                opacity: 1;
                transform: translateX(0);
            }
        }
    `;
    const rightSide = css`
        animation-name: from-right;
        animation-duration: ${animationDuration}ms;
        @keyframes from-right {
            0% {
                opacity: 0;
                transform: translateX(9000px);
            }
            100% {
                opacity: 1;
                transform: translateX(0);
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
