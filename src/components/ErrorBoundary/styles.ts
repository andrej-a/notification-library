import styled from 'styled-components';

const Wrapper = styled.div`
    position: fixed;
    top: ${({ theme: { top } }) => top[0]};
    left: ${({ theme: { left } }) => left[0]};

    width: ${({ theme: { width } }) => width[100]}wv;
    height: ${({ theme: { height } }) => height[100]}wh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    pointer-events: none;
`;
export const ErrorDescription = styled.p`
    max-width: ${({ theme: { width } }) => width[80]}%;

    font-size: ${({ theme: { fontSize } }) => fontSize.s}px;
`;
export default Wrapper;
