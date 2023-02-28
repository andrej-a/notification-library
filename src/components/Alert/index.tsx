import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { AiOutlineStop } from 'react-icons/ai';
import { GrStatusGood } from 'react-icons/gr';
import { RiErrorWarningLine } from 'react-icons/ri';

import { IAlert } from '@/models/alert';

import { ContentWrapper, DescriptionWrapper, IconWrapper, TitleWrapper, Wrapper } from './styles';

export const Alert = forwardRef(({ position, type, visibleTime, title, description, indent, color }: IAlert, ref) => {
    const [isVisible, setIsVisible] = useState(true);
    const myRef = useRef(null);

    useEffect(() => {
        let t = visibleTime;
        while (t > 0) {
            t -= 1;
            console.log(visibleTime);
        }
        setIsVisible(!isVisible);
    }, []);

    useImperativeHandle(ref, () => ({
        get: () => {
            if (myRef) {
                return myRef.current;
            }
        },
    }));
    return (
        <>
            {isVisible && (
                <Wrapper ref={myRef} params={{ position, indent, color }}>
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
});

Alert.defaultProps = {
    position: 'bottom-right',
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
