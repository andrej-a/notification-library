import { css, FlattenSimpleInterpolation } from 'styled-components';
import constants from '@/models/enums';
import { position } from '@/models/alert';
const { TABLET, DEFAULT_INDENT, DEFAULT_TABLET_INDENT, DEFAULT_TOP_INDENT } = constants;

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
                left: calc(100vw - ${DEFAULT_INDENT}px);

                @media (max-width: ${TABLET}px) {
                    left: calc(100vw - ${DEFAULT_TABLET_INDENT}px);
                }
            `;
        case 'bottom-left':
            return css`
                top: calc(100vh - ${DEFAULT_TOP_INDENT * alertsCount}px);
                left: 0;
            `;
        case 'bottom-right':
            return css`
                top: calc(100vh - ${DEFAULT_TOP_INDENT * alertsCount}px);
                left: calc(100vw - ${DEFAULT_INDENT}px);

                @media (max-width: ${TABLET}px) {
                    left: calc(100vw - ${DEFAULT_TABLET_INDENT}px);
                }
            `;
        default:
            return css`
                top: calc(100vh - ${DEFAULT_TOP_INDENT * alertsCount}px);
                left: calc(100vw - ${DEFAULT_INDENT}px);

                @media (max-width: ${TABLET}px) {
                    left: calc(100vw - ${DEFAULT_TABLET_INDENT}px);
                }
            `;
    }
};

export default getPosition;
