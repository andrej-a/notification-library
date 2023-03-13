import React, { FC, useCallback, useEffect, useState } from 'react';

import alertService from '@/service/SingletonController';
import { IAlert } from '@/types/alert';
import { TYPES } from '@/types/constants';

import alertionIcons from './icons';
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
    const [alertVisibleState, setVisibleState] = useState(true);

    const componentManager = useCallback(
        (id: string) => () => {
            setVisibleState(false);
            setTimeout(() => {
                alertService.removeAlert(id!);
            }, animationDuration - 20);
        },
        [alertVisibleState],
    );

    useEffect(() => {
        if (alertVisibleState) {
            const timer = setTimeout(() => {
                componentManager(id!)();
            }, visibleTime + animationDuration - 20);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [alertVisibleState]);

    return (
        <Wrapper
            data-test="alertion"
            onClick={componentManager(id!)}
            params={{
                animationDuration,
                alertVisibleState,
                fadeAnimation,
                spawnAnimation,
                position,
                indent,
                color,
            }}>
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
