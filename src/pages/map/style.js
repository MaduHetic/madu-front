import styled from "styled-components";

export const ButtonContainer = styled.div`
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
    background: #FFFFFF;
    box-shadow: 0px 2px 14px rgba(0, 0, 0, 0.15);
    border-radius: 38px;
    padding: 3.5px 2px;
    display: flex;
    align-items: center;

    div {
        width: 1px;
        height: 16px;
        background: #1B58E4;
        mix-blend-mode: normal;
        opacity: 0.3;
        border-radius: 0.5px;
        margin: 0px 2px;
    }
`;

export const ButtonFilter = styled.button`
    background: ${props => props.isActive ? "#1B58E4" : "transparent"};
    border: none;
    border-radius: 48px;
    padding: 10px 20px;
    min-width: 108px;
    color: ${props => props.isActive ? "white" : "black"};
    cursor: pointer;
    transition: all ease-in-out 0.2s;
    font-size: 14px;
    font-style: normal;
    font-weight: normal;
    margin: 0px 2px;
`;

export const CheckboxesContainer = styled.div`
    position: absolute;
    top: 60px;
    right: 20px;
    display: ${props => props.isDisplayed ? "block" : "none"};
    background: white;
    padding: 32px 24px 32px 32px;
    box-shadow: 0px 2px 14px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    min-width: 240px;

    h3 {
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        letter-spacing: -1px;
        color: #000000;
        margin-bottom: 14px;
    }

    label {
        margin: 0;
        margin-bottom: 0px;
        margin-left: -9px;

        &:last-child {
            margin-bottom: 0px;
        }

        .MuiFormControlLabel-label {
            margin-left: 7px;
            color: #6A6A85;
            font-size: 16px;
            font-style: normal;
            font-weight: normal;
        }

        svg {
            font-size: 20px;
            fill: none;
            border: 1px solid #B8B8C9;
            border-radius: 2px;
        }
    }
    .Mui-checked {
        svg {
            fill: #1B58E4;
            border: 1px solid #1B58E4;
        }
        &+span {
            color: #1B58E4;
        }
    }
`;