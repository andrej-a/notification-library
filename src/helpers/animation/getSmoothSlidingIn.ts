import { css, FlattenSimpleInterpolation } from 'styled-components';
import { position } from '../../models/alert';

const getSmoothSlidingIn = (position: position): FlattenSimpleInterpolation => {
    switch (position) {
        case 'top-left':
            return css`
                animation-name: from-right;
                animation-duration: 400ms;
                @keyframes from-right {
                    0% {
                        opacity: 0;
                        left: 9000px;
                    }
                    100% {
                        opacity: 1;
                        left: 0;
                    }
                }
            `;
        case 'top-right':
            return css`
                animation-name: from-left;
                animation-duration: 400ms;
                @keyframes from-left {
                    0% {
                        opacity: 0;
                        left: -9000px;
                    }
                    100% {
                        opacity: 1;
                        left: 100%;
                    }
                }
            `;
        case 'bottom-left':
            return css`
                animation-name: from-top-on-the-left;
                animation-duration: 400ms;
                @keyframes from-top-on-the-left {
                    0% {
                        opacity: 0;
                        left: 0;
                        top: -9000px;
                    }
                    100% {
                        opacity: 1;
                        left: 0;
                        top: 100%;
                    }
                }
            `;
        case 'bottom-right':
            return css`
                animation-name: from-top-on-the-right;
                animation-duration: 400ms;
                @keyframes from-top-on-the-right {
                    0% {
                        opacity: 0;
                        left: 100%;
                        top: -9000px;
                    }
                    100% {
                        opacity: 1;
                        left: 100%;
                        top: 100%;
                    }
                }
            `;
        default:
            return css`
                animation-name: from-top-on-the-right;
                animation-duration: 400ms;
                @keyframes from-top-on-the-right {
                    0% {
                        opacity: 0;
                        left: 100%;
                        top: -9000px;
                    }
                    100% {
                        opacity: 1;
                        left: 100%;
                        top: 100%;
                    }
                }
            `;
    }
};

export default getSmoothSlidingIn;
