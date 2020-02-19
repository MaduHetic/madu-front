import styled from "styled-components";

export const Root = styled.div`
    position: absolute;
    bottom: 36px;
    right: 20px;
    display: ${props => props.isDisplayed ? "block" : "none"};
    background: white;
    min-width: 453px;
    padding: 32px;
`;

export const HeaderContainer = styled.div`
    display: flex;
    margin-bottom: 16px;

    div {
        margin-right: 16px;
    }
    h4 {
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 32px;
        letter-spacing: -1px;
        color: #000000;
    }
    p {
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        letter-spacing: -0.6px;
        color: #6FBC77;
    }
    span {
        margin-right: 4px;
    }
`;

export const TagContainer = styled.div`
    display: flex;
    margin-bottom: 30px;
`;

export const DetailsContainer = styled.div`
    p {
        font-style: normal;
        font-weight: 800;
        font-size: 16px;
        line-height: 24px;
        color: #B8B8C9;
        margin-bottom: 16px;

        &:last-child {
            margin-bottom: 0px;
        }
    }
    span {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: #000000;
        margin-left: 16px;
    }
`;

export const Tag = styled.p`
    padding: 8px 6px;
    font-size: 10px;
    line-height: 14px;
    letter-spacing: -0.6px;
    color: ${props => props.color || "black"};
    background: ${props => props.background || "lightgrey"};
    border: 0.5px solid ${props => props.color || "black"};
    width: fit-content;
    border-radius: 2px;
    margin-right: 8px;
    &:last-child {
        margin-right: 0px;
    }
`;