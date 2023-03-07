import styled from 'styled-components';

import getFadeAnimation from '@/helpers/animation/getFadeAnimation';
import getSpawnAnimation from '@/helpers/animation/getSpawnAnimation';
import getIndent from '@/helpers/getIndent';
import getPosition from '@/helpers/getPosition';
import { IAlert } from '@/models/alert';

export const Wrapper = styled.div<{ params: IAlert }>`
    position: relative;
    ${({ params: { position, alertsCount } }) => getPosition(position, alertsCount!)}
    z-index: 1000000;

    width: 350px;
    height: auto;
    min-height: 60px;
    max-height: 100px;
    display: flex;
    padding: 10px;
    ${({ params: { indent } }) => getIndent(indent)};

    text-align: center;
    background-color: ${({ params: { color } }) => color};
    color: #fff;
    font-size: 16px;
    font-family: Helvetica, sans-serif;
    cursor: pointer;

    pointer-events: auto;

    will-change: opacity, transform;

    ${({ params: { animationDuration, position, spawnAnimation, fadeAnimation, visibleState } }) => {
        return visibleState
            ? getSpawnAnimation(spawnAnimation, position, animationDuration!)
            : getFadeAnimation(fadeAnimation, position, animationDuration!);
    }};

    @media (max-width: 768px) {
        width: 260px;
    }
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
    justify-content: center;
    align-items: center;
    overflow: hidden;
    gap: 10px;
`;
export const TitleWrapper = styled.div`
    width: auto;
    height: auto;
    max-height: 40%;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
`;
export const DescriptionWrapper = styled.div`
    width: auto;
    height: auto;
    max-height: 60%;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
`;
