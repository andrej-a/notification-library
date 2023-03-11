import React, { FC, useCallback, useEffect } from 'react';

import alertService from '@/service/SingeltonController';
import { IAlert } from '@/types/alert';
import { TYPES } from '@/types/constants';

import alertionIcons from './config/icons';
import {
    ContentWrapper,
    DescriptionWrapper,
    IconWrapper,
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
    visibleState,
}) => {
    const componentManager = useCallback(
        (id: string) => () => {
            alertService.hideAlert(id);
            setTimeout(() => {
                alertService.removeAlert(id!);
            }, animationDuration! - 20);
        },
        [animationDuration],
    );

    useEffect(() => {
        if (visibleState) {
            const timer = setTimeout(() => {
                componentManager(id!)();
            }, visibleTime! + animationDuration! - 20);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [animationDuration, componentManager, id, visibleState, visibleTime]);

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
                    <h4>{title}</h4>
                </TitleWrapper>
                <DescriptionWrapper>{description}</DescriptionWrapper>
            </ContentWrapper>
        </Wrapper>
    );
};
