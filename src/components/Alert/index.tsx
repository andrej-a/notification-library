import React from 'react';
import { AiOutlineStop } from 'react-icons/ai';
import { GrStatusGood } from 'react-icons/gr';
import { RiErrorWarningLine } from 'react-icons/ri';

import { IAlert } from '@/models/alert';

import { ContentWrapper,DescriptionWrapper, IconWrapper, TitleWrapper, Wrapper } from './styles';

export const Alert = ({ position, type, duration, title, description, indent, color }: IAlert) => {
    return (
        <Wrapper params={{ position, indent, color }}>
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
    );
};

Alert.defaultProps = {
    position: 'button-left',
    type: 'success',
    duration: 5,
    title: 'Success message',
    description: 'Some success message',
    indent: 'medium',
    color: 'green',
};
