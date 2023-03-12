import styled from 'styled-components';

const Wrapper = styled.div`
    position: fixed;
    top: ${({ theme: { top } }) => top.s};
    left: ${({ theme: { left } }) => left.s};

    width: ${({ theme: { width } }) => width.l}wv;
    height: ${({ theme: { height } }) => height.l}wh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    pointer-events: none;
`;
export const ErrorDescription = styled.p`
    max-width: ${({ theme: { width } }) => width.s}%;

    font-size: ${({ theme: { fontSize } }) => fontSize.s}px;
`;
export default Wrapper;
