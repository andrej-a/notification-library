import styled, { css } from 'styled-components';
import getIndent from '../../helpers/getIndent';
import getPosition from '../../helpers/getPosition';
import getSpawnAnimation from '../../helpers/animation/getSpawnAnimation';
import { Params } from '@/models/alert';

export const Wrapper = styled.div<{ params: Params }>`
    position: absolute;
    ${({ params: { position } }) => getPosition(position)}

    width: auto;
    min-width: 350px;
    max-width: 600px;
    height: auto;
    max-height: 130px;
    display: flex;
    padding: 10px;

    text-align: center;
    background-color: ${({ params: { color } }) => color};
    color: #fff;
    font-size: 16px;
    font-family: Helvetica, sans-serif;

    ${({ params: { indent } }) => getIndent(indent)};

    ${({ params: { position, spawnAnimation } }) => getSpawnAnimation(spawnAnimation, position)};
`;
export const IconWrapper = styled.div`
    margin-right: 5px;
    svg {
        display: block;
        fill: #fff;
        width: 40px;
        height: 40px;
    }
`;
export const ContentWrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;
export const TitleWrapper = styled.div`
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
`;
export const DescriptionWrapper = styled.div`
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
`;
