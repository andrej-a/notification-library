import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { AiOutlineStop } from 'react-icons/ai';
import { GrStatusGood } from 'react-icons/gr';
import { RiErrorWarningLine } from 'react-icons/ri';
import instance from '../../service/alertController';
import { IAlert } from '@/models/alert';

import { ContentWrapper, DescriptionWrapper, IconWrapper, TitleWrapper, Wrapper } from './styles';

export const Alert = ({
    position,
    showAnimation,
    hideAnimation,
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

    useEffect(() => {
        const timer = setTimeout(() => {
            componentManager(id!)();
        }, visibleTime * 1000);
        return () => {
            clearTimeout(timer);
        };
    }, [visibleTime]);

    return (
        <>
            {visibleState && (
                <Wrapper
                    onClick={componentManager(id!)}
                    params={{ isVisible, hideAnimation, showAnimation, position, indent, color }}>
                    <IconWrapper>
                        {type === 'success' && <GrStatusGood style={{ width: '40px', height: '40px' }} />}
                        {type === 'warning' && <RiErrorWarningLine style={{ width: '40px', height: '40px' }} />}
                        {type === 'error' && <AiOutlineStop style={{ width: '40px', height: '40px' }} />}
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
    showAnimation: 'left-right',
    hideAnimation: 'to-right',
    type: 'success',
    visibleTime: 5,
    title: 'Success message',
    description: 'Some success message',
    indent: 'medium',
    color: 'green',
};

/* const [state, setState] = useState<IAlert>({
    isVisible: false,
    position: 'bottom-right',
    type: 'success',
    visibleTime: 5,
    title: 'Success message',
    description: 'Some success message',
    indent: 'medium',
    color: 'green',
}); */
