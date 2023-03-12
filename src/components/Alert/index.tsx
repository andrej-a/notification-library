import React, { FC, useCallback, useEffect, useState } from 'react';

import alertService from '@/service/SingeltonController';
import { IAlert } from '@/types/alert';
import { TYPES } from '@/types/constants';

import alertionIcons from './config/icons';
import {
    ContentWrapper,
    DescriptionWrapper,
    IconWrapper,
    Title,
    TitleWrapper,
    Wrapper,
} from './styles';

export const Alert: FC<IAlert> = ({
    position,
    spawnAnimation,
    fadeAnimation,
    id,
    type,
    visibleTime,
    title,
    description,
    indent,
    color,
    animationDuration,
}) => {
    const [visibleState, setVisibleState] = useState(true);

    const componentManager = useCallback(
        (id: string) => () => {
            setVisibleState(false);
            setTimeout(() => {
                alertService.removeAlert(id!);
            }, animationDuration - 20);
        },
        [visibleState],
    );

    useEffect(() => {
        if (visibleState) {
            const timer = setTimeout(() => {
                componentManager(id!)();
            }, visibleTime + animationDuration - 20);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [visibleState]);

    return (
        <Wrapper
            data-test="alertion"
            onClick={componentManager(id!)}
            params={{
                animationDuration,
                visibleState,
                fadeAnimation,
                spawnAnimation,
                position,
                indent,
                color,
            }}
        >
            <IconWrapper>
                {TYPES.map((alertionType: string, index: number) => {
                    if (alertionType === type) {
                        return alertionIcons[index];
                    }
                })}
            </IconWrapper>
            <ContentWrapper>
                <TitleWrapper>
                    <Title>{title}</Title>
                </TitleWrapper>
                <DescriptionWrapper>{description}</DescriptionWrapper>
            </ContentWrapper>
        </Wrapper>
    );
};
