import styled from 'styled-components';

export const ListWrapper = styled.div`
    position: fixed;
    top: ${({ theme: { top } }) => top[0]};
    left: ${({ theme: { left } }) => left[0]};

    width: ${({ theme: { width } }) => width[100]}%;
    height: ${({ theme: { height } }) => height[100]}%;
    display: flex;
    flex-direction: column;
    gap: ${({ theme: { gap } }) => gap[10]}px;

    pointer-events: none;
`;
