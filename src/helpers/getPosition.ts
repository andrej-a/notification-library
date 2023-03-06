import { css, FlattenSimpleInterpolation } from 'styled-components';

import { position } from '@/models/alert';

const getPosition = (position: position, alertsCount: number): FlattenSimpleInterpolation => {
    switch (position) {
        case 'top-left':
            return css`
                top: 0;
                left: 0;
            `;
        case 'top-right':
            return css`
                top: 0;
                left: calc(100vw - 390px);

                @media (max-width: 768px) {
                    left: calc(100vw - 290px);
                }
            `;
        case 'bottom-left':
            return css`
                top: calc(100vh - ${80 * alertsCount}px);
                left: 0;
            `;
        case 'bottom-right':
            return css`
                top: calc(100vh - ${80 * alertsCount}px);
                left: calc(100vw - 390px);

                @media (max-width: 768px) {
                    left: calc(100vw - 290px);
                }
            `;
        default:
            return css`
                top: calc(100vh - ${80 * alertsCount}px);
                left: calc(100vw - 390px);

                @media (max-width: 768px) {
                    left: calc(100vw - 290px);
                }
            `;
    }
};

export default getPosition;
