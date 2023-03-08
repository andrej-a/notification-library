import styled from 'styled-components';

import getFadeAnimation from '@/helpers/animation/getFadeAnimation';
import getSpawnAnimation from '@/helpers/animation/getSpawnAnimation';
import getIndent from '@/helpers/getIndent';
import getPosition from '@/helpers/getPosition';
import { IAlert } from '@/models/alert';
import constants from '@/models/enums';

const { TABLET } = constants;
export const Wrapper = styled.div<{ params: IAlert }>`
    position: relative;
    ${({ params: { position, alertsCount } }) => getPosition(position, alertsCount!)}
    z-index: ${({ theme: { zIndex } }) => zIndex[100]};

    width: ${({ theme: { width } }) => width[350]}px;
    height: ${({ theme: { height } }) => height[70]}px;
    display: flex;
    padding: ${({ theme: { padding } }) => padding[10]}px;
    ${({ params: { indent } }) => getIndent(indent)};

    text-align: center;
    background-color: ${({ params: { color } }) => color};
    color: ${({ theme: { color } }) => color.white};
    font-size: ${({ theme: { fontSize } }) => fontSize.s}px;
    font-family: ${({ theme: { fontFamily } }) => fontFamily.default};
    cursor: pointer;

    pointer-events: auto;

    will-change: opacity, transform;

    ${({ params: { animationDuration, position, spawnAnimation, fadeAnimation, visibleState } }) => {
        return visibleState
            ? getSpawnAnimation(spawnAnimation, position, animationDuration!)
            : getFadeAnimation(fadeAnimation, position, animationDuration!);
    }};

    @media (max-width: ${TABLET}px) {
        width: ${({ theme: { width } }) => width[260]}px;
    }
`;
export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-right: ${({ theme: { margin } }) => margin[5]}px;

    svg {
        display: block;
        fill: ${({ theme: { color } }) => color.white};
        width: ${({ theme: { width } }) => width[40]}px;
        height: ${({ theme: { height } }) => height[40]}px;
    }
`;
export const ContentWrapper = styled.div`
    width: ${({ theme: { width } }) => width[90]}%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${({ theme: { gap } }) => gap[10]}px;

    align-items: center;
    overflow: hidden;
`;
export const TitleWrapper = styled.div`
    width: auto;
    height: auto;
    max-height: ${({ theme: { height } }) => height[40]}%;
    display: flex;
    justify-content: flex-start;

    overflow: hidden;
`;
export const DescriptionWrapper = styled.div`
    width: auto;
    height: auto;
    max-height: ${({ theme: { height } }) => height[60]}%;
    display: flex;
    justify-content: flex-start;

    overflow: hidden;
`;
