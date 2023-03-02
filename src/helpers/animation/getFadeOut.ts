import { css, FlattenSimpleInterpolation } from 'styled-components';

const getFadeOut = (animationDuration: number): FlattenSimpleInterpolation => {
    return css`
        animation-name: fade-in;
        animation-duration: ${animationDuration}ms;

        @keyframes fade-in {
            0% {
                opacity: 1;
            }

            100% {
                opacity: 0;
            }
        }
    `;
};
export default getFadeOut;
