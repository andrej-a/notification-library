import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { AiOutlineStop } from 'react-icons/ai';
import { GrStatusGood } from 'react-icons/gr';
import { RiErrorWarningLine } from 'react-icons/ri';
import { HiOutlineBellAlert } from 'react-icons/hi2';
import instance from '../../service/alertController';
import { IAlert } from '@/models/alert';

import { ContentWrapper, DescriptionWrapper, IconWrapper, TitleWrapper, Wrapper } from './styles';

export const Alert = ({
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
    isVisible,
}: IAlert) => {
    const [visibleState, setVisibleState] = useState(isVisible);

    const componentManager = (id: string) => () => {
        setVisibleState(!isVisible);
        instance.removeAlert(id!);
    };

    /* useEffect(() => {
        const timer = setTimeout(() => {
            componentManager(id!)();
        }, visibleTime * 1000);
        return () => {
            clearTimeout(timer);
        };
    }, [visibleTime]); */

    return (
        <>
            {visibleState && (
                <Wrapper
                    onClick={componentManager(id!)}
                    params={{ isVisible, fadeAnimation, spawnAnimation, position, indent, color }}>
                    <IconWrapper>
                        {type === 'alert' && <HiOutlineBellAlert />}
                        {type === 'success' && <GrStatusGood />}
                        {type === 'warning' && <RiErrorWarningLine />}
                        {type === 'error' && <AiOutlineStop />}
                    </IconWrapper>
                    <ContentWrapper>
                        <TitleWrapper>
                            <h4>{title}</h4>
                        </TitleWrapper>
                        <DescriptionWrapper>{description}</DescriptionWrapper>
                    </ContentWrapper>
                </Wrapper>
            )}
        </>
    );
};

Alert.defaultProps = {
    isVisible: true,
    position: 'bottom-left',
    spawnAnimation: 'smooth-sliding-in',
    fadeAnimation: 'to-right',
    type: 'success',
    visibleTime: 5,
    title: 'Success message',
    description: 'Some success message',
    indent: 'medium',
    color: 'green',
};
