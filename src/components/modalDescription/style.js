import styled from "styled-components";

export const Root = styled.div`
    position: absolute;
    bottom: 36px;
    right: 20px;
    display: ${props => props.isDisplayed ? "block" : "none"};
    background: white;
    min-width: 420px;
    padding: 32px;
    border-radius: 2rem;
    box-shadow: 0px 2px 14px rgba(0,0,0,0.15);
    z-index: 10;

    .wrapperModalDescription {
        position: relative;
    }

    .closeIcon {
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
    }
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
    margin-bottom: 20px;
`;

export const DetailsContainer = styled.div`
    p {
        font-style: normal;
        font-weight: 800;
        font-size: 16px;
        line-height: 24px;
        color: #B8B8C9;
        margin-bottom: 6px;

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
        margin-left: 2px;
    }
`;

export const Tag = styled.p`
    padding: 8px 6px;
    font-size: 10px;
    line-height: 14px;
    letter-spacing: -0.6px;
    color: ${props => props.colorRGB ? `rgba(${props.colorRGB.r}, ${props.colorRGB.g}, ${props.colorRGB.b}, 1)` : "black"};
    background: ${props => props.colorRGB ? `rgba(${props.colorRGB.r}, ${props.colorRGB.g}, ${props.colorRGB.b}, 0.05)` : "rgba(0, 0, 0, 0.05)"};
    border: 0.5px solid ${props => props.colorRGB ? `rgba(${props.colorRGB.r}, ${props.colorRGB.g}, ${props.colorRGB.b}, 1)` : "black"};
    width: fit-content;
    border-radius: 2px;
    margin-right: 8px;
    &:last-child {
        margin-right: 0px;
    }
`;