import styled from "styled-components";

export const Root = styled.div`
    height: 100vh;
    width: calc(100vw - 220px);
    display: flex;
    align-items: center;
    margin: 0 auto;

    @media (min-width: 1441px) {
        width: calc(100vw - 400px);
    }
`;