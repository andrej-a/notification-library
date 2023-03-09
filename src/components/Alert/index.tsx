import React, { FC, useCallback, useEffect } from 'react';
import { AiOutlineStop } from 'react-icons/ai';
import { GrStatusGood } from 'react-icons/gr';
import { HiOutlineBellAlert } from 'react-icons/hi2';
import { RiErrorWarningLine } from 'react-icons/ri';

import { IAlert } from '@/models/alert';
import instance from '@/service/alertController';

import { ContentWrapper, DescriptionWrapper, IconWrapper, TitleWrapper, Wrapper } from './styles';

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
    alertsCount,
}) => {
    const componentManager = useCallback(
        (id: string) => () => {
            instance.hideAlert(id);
            setTimeout(() => {
                instance.removeAlert(id!);
            }, animationDuration!);
        },
        [animationDuration],
    );

    useEffect(() => {
        if (visibleState) {
            const timer = setTimeout(() => {
                componentManager(id!)();
            }, visibleTime! + animationDuration!);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [visibleTime, visibleState, animationDuration, componentManager, id]);

    const icons = [<HiOutlineBellAlert />, <RiErrorWarningLine />, <AiOutlineStop />, <GrStatusGood />];
    const types = ['alert', 'warning', 'error', 'success'];

    return (
        <Wrapper
            data-test="alertion"
            onClick={componentManager(id!)}
            params={{
                alertsCount,
                animationDuration,
                visibleState,
                fadeAnimation,
                spawnAnimation,
                position,
                indent,
                color,
            }}>
            <IconWrapper>
                {types.map((t: string, index: number) => {
                    if (t === type) {
                        return icons[index];
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

Alert.defaultProps = {
    id: '12345',
    visibleState: true,
    position: 'bottom-left',
    spawnAnimation: 'smooth-sliding-in',
    fadeAnimation: 'smooth-sliding-out',
    type: 'success',
    visibleTime: 5000,
    animationDuration: 1500,
    title: 'Success message',
    description: 'Some success message',
    indent: 'medium',
    color: 'green',
};
