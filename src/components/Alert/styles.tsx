import styled, { css } from 'styled-components';
import { IAlert } from '@/models/alert';

export const Wrapper = styled.div<{ params: Pick<IAlert, 'position' | 'color' | 'indent'> }>`
    position: absolute;

    width: auto;
    min-width: 300px;
    max-width: 600px;
    height: auto;
    max-height: 130px;
    display: flex;

    border-radius: 40px;
    text-align: center;
    background-color: ${({ params: { color } }) => color};

    ${({ params: { indent } }) => {
        switch (indent) {
            case 'small':
                return css`
                    padding: 5px;
                `;
            case 'medium':
                return css`
                    padding: 10px;
                `;
            case 'big':
                return css`
                    padding: 15px;
                `;
            default:
                return css`
                    padding: 5px;
                `;
        }
    }};

    ${({ params: { position } }) => {
        switch (position) {
            case 'top-left':
                return css`
                    top: 0;
                    left: 0;
                `;
            case 'top-right':
                return css`
                    top: 0;
                    left: 100%;
                `;
            case 'bottom-left':
                return css`
                    top: 100%;
                    left: 0;
                `;
            case 'bottom-right':
                return css`
                    top: 100%;
                    left: 100%;
                `;
            default:
                return css`
                    top: 100%;
                    left: 100%;
                `;
        }
    }}
`;
export const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
`;
export const ContentWrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;
export const TitleWrapper = styled.div`
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
`;
export const DescriptionWrapper = styled.div`
    display: flex;
    justify-content: center;
`;
