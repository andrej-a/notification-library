import { css, FlattenSimpleInterpolation } from 'styled-components';

const getFadeIn = (animationDuration: number): FlattenSimpleInterpolation => {
    return css`
        animation-name: fade-in;
        animation-duration: ${animationDuration}ms;

        @keyframes fade-in {
            0% {
                opacity: 0;
            }

            100% {
                opacity: 1;
            }
        }
    `;
};

export default getFadeIn;
