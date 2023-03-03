import styled from 'styled-components';

import { IAlert } from '@/models/alert';

import getFadeAnimation from '../../helpers/animation/getFadeAnimation';
import getSpawnAnimation from '../../helpers/animation/getSpawnAnimation';
import getIndent from '../../helpers/getIndent';
import getPosition from '../../helpers/getPosition';

export const Wrapper = styled.div<{ params: IAlert }>`
    position: sticky;
    ${({ params: { position } }) => getPosition(position)}
    z-index: 1000000;

    width: auto;
    width: 350px;
    height: auto;
    max-height: 130px;
    display: flex;
    padding: 10px;
    ${({ params: { indent } }) => getIndent(indent)};

    text-align: center;
    background-color: ${({ params: { color } }) => color};
    color: #fff;
    font-size: 16px;
    font-family: Helvetica, sans-serif;
    cursor: pointer;

    will-change: opacity, transform;

    ${({ params: { animationDuration, position, spawnAnimation, fadeAnimation, visibleState } }) => {
        return visibleState
            ? getSpawnAnimation(spawnAnimation, position, animationDuration!)
            : getFadeAnimation(fadeAnimation, position, animationDuration!);
    }};
`;
export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
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
