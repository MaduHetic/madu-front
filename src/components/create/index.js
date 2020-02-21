import styled from "styled-components";
import {Color, Font} from '../../styles/variables';

export const Container = styled.div`
    width: 100%;
    max-width: 1140px;
    margin: 48px 32px;
`;

export const FormWrapper = styled.div`
    display: flex;
    background: #FFFFFF;
    border: 0.5px solid #D7D7D7;
    box-sizing: border-box;
    box-shadow: 0px 2px 14px rgba(0, 0, 0, 0.15);
    border-radius: 4px;

    form {
        flex-grow: 1;
        margin-left: 64px;
    }
    .tagWrapper {
        flex-wrap: nowrap !important;
        max-width: 400px;
        overflow-x: auto;
    }
    .createTag {
        margin-top: 20px;
        label {
            margin-right: 10px;
            color: ${Color.black};
        }
        input {
            font-size: ${Font.size.m};
        }
        button {
            margin-left: 10px;
            padding: 6px 8px;
            font-size: ${Font.size.s};
            background: ${Color.lightgrey};
            border-radius: 4px;
        }
    }
`;

export const FormHead = styled.div`
    margin-top: 48px;
    margin-bottom: 64px;
    padding-bottom: 8px;
    border-bottom: 0.5px solid #B8B8C9;
    font-family: ${Font.family.main};
    font-size: 24px;
    color: black;
    max-width: 512px;
`;

export const Progress = styled.div`
    background: #F5F5FA;
    padding: 128px 42px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    min-width: 30%;
`;

export const Steps = styled.div`
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 28px;
    text-transform: uppercase;
    font-family: ${Font.family.main};
    letter-spacing: .5px;
    color: #B8B8C9;
    font-weight: 800;

    div:first-child {
        margin-bottom: 2px;
    }

    div.blue {
        color: #1B58E4;
    } 
`;

export const Label = styled.div`
    font-family: ${Font.family.main};
    font-weight: 800;
    color: #6A6A85;
    margin-bottom: 20px;

    &.mgTop {
        margin-top: 40px;
    }
`;

export const Option = styled.div`
    display: flex;
    align-items: center;
    margin-right: 38px;
`;

export const OptionLabel = styled.div`
    font-family: ${Font.family.main};
    font-weight: 800;
    font-size: 12px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #6A6A85;

    &.active {
        color: #1B58E4;
    }

    &.inactive {
        color: #6A6A85;
    }
`;

export const Field = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    &.mgRight {
        margin-right: 64px;
    }
`;

export const InputWrapper = styled.div`
    flex-grow: 1;
    max-width: 420px;

    .MuiInput-root {
        padding: 8px 16px;
        font-size: 16px;
        font-weight: 600;
        color: #B8B8C9;
        width: 100%;
    }
`;

export const LabelName = styled.div`
    height: 80px;
    margin-left: 24px;
    display: flex;
    align-items: center;
    color: ${Color.lightgray};
    font-family: ${Font.family.main};
    font-size: ${Font.size.l};
    font-weight: ${Font.weight.bolder};
`

export const Button = styled.button`
    width: 160px;
    background: #1B58E4;
    text-align: center;
    border-radius: 30px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    padding: 16px 0;
    color: white;
    text-transform: uppercase;
`;

export const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 32px;
    margin-top: 32px;
    padding-right: 64px;

    &.end {
        justify-content: flex-end;
    }

    &.between {
        justify-content: space-between;
    }
`;

export const TagContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-shrink: 0;
    &:not(:last-child) {
        margin-right: 10px;
    }
    & > label {
        ${props => console.log(props.colorRGB)}
        margin-left: 8px;
        padding: 8px 6px;
        display: block;
        flex-shrink: 0;
        font-size: ${Font.size.s};
        color: ${props => props.colorRGB ? `rgba(${props.colorRGB.r}, ${props.colorRGB.g}, ${props.colorRGB.b}, 1)` : "black"};
        background: ${props => props.colorRGB ? `rgba(${props.colorRGB.r}, ${props.colorRGB.g}, ${props.colorRGB.b}, 0.05)` : "rgba(0, 0, 0, 0.05)"};
        border: 0.5px solid ${props => props.colorRGB ? `rgba(${props.colorRGB.r}, ${props.colorRGB.g}, ${props.colorRGB.b}, 1)` : "black"};
        border-radius: 2px;
    }
`;