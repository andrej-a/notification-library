import styled from 'styled-components';

import getPosition from '@/helpers/getPosition';

export const ListWrapper = styled.div<{ position: string }>`
    position: fixed;
    ${({ position }) => getPosition(position)}
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: ${({ theme: { gap } }) => gap.s}px;

    pointer-events: none;
`;
