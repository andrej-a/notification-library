import styled from 'styled-components';

import getFadeAnimation from '@/helpers/animation/getFadeAnimation';
import getSpawnAnimation from '@/helpers/animation/getSpawnAnimation';
import getIndent from '@/helpers/getIndent';
import { Params } from '@/types/alert';
import constants from '@/types/constants';

const { TABLET } = constants;
export const Wrapper = styled.div<{ params: Params }>`
    position: relative;
    z-index: ${({ theme: { zIndex } }) => zIndex.xxl};

    width: ${({ theme: { width } }) => width.xxl}px;
    height: ${({ theme: { height } }) => height.xl}px;
    display: flex;
    padding: ${({ theme: { padding } }) => padding.s}px;
    ${({ params: { indent } }) => getIndent(indent)};

    text-align: center;
    background-color: ${({ params: { color } }) => color};
    color: ${({ theme: { color } }) => color.white};
    font-size: ${({ theme: { fontSize } }) => fontSize.s}px;
    font-family: ${({ theme: { fontFamily } }) => fontFamily.default};
    cursor: pointer;

    pointer-events: auto;

    will-change: opacity, transform;

    ${({
        params: {
            animationDuration,
            position,
            spawnAnimation,
            fadeAnimation,
            visibleState,
        },
    }) => {
        return visibleState
            ? getSpawnAnimation(spawnAnimation, position, animationDuration!)
            : getFadeAnimation(fadeAnimation, position, animationDuration!);
    }};

    @media (max-width: ${TABLET}px) {
        width: ${({ theme: { width } }) => width.xl}px;
    }
`;
export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-right: ${({ theme: { margin } }) => margin.s}px;

    svg {
        display: block;
        fill: ${({ theme: { color } }) => color.white};
        width: ${({ theme: { width } }) => width.xs}px;
        height: ${({ theme: { height } }) => height.m}px;
    }
`;
export const ContentWrapper = styled.div`
    width: ${({ theme: { width } }) => width.m}%;
    height: ${({ theme: { height } }) => height.xxl}%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${({ theme: { gap } }) => gap.s}px;

    align-items: center;
    overflow: hidden;
`;
export const TitleWrapper = styled.div`
    width: auto;
    height: auto;
    max-height: ${({ theme: { height } }) => height.m}%;
    display: flex;
    justify-content: flex-start;

    overflow: hidden;
`;

export const Title = styled.h4``;

export const DescriptionWrapper = styled.div`
    width: auto;
    height: auto;
    max-height: ${({ theme: { height } }) => height.l}%;
    display: flex;
    justify-content: flex-start;

    overflow: hidden;
`;
