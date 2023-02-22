import styled, { css } from 'styled-components';
import { IAlert } from '@/models/alert';

export const Wrapper = styled.div<{ params: Pick<IAlert, 'position' | 'color' | 'indent'> }>`
    position: absolute;

    width: 100%;
    min-width: 50px;
    max-width: 200px;
    height: auto;
    min-height: 50px;
    max-height: 250px;

    text-align: center;
    background-color: ${({ params: { color } }) => color};
`;
