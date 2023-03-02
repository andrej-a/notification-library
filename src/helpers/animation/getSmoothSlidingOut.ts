import { css } from 'styled-components';
import { position } from '@/models/alert';

const getSmoothSlidingOut = (position: position, animationDuration: number) => {
    const leftSide = css`
        animation-name: to-left;
        animation-duration: ${animationDuration}ms;
        @keyframes to-left {
            0% {
                opacity: 1;
                transform: translateX(0);
            }
            100% {
                opacity: 0;
                transform: translateX(-9000px);
            }
        }
    `;
    const rightSide = css`
        animation-name: to-right;
        animation-duration: ${animationDuration}ms;
        @keyframes to-right {
            0% {
                opacity: 1;
                transform: translateX(0);
            }
            100% {
                opacity: 0;
                transform: translateX(9000px);
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
