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
    padding: 0 42px;
    display: flex;
    align-items: center;
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
    margin-bottom: 34px;

    &.mgTop {
        margin-top: 64px;
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
    display: flex;
    align-items: center;
    height: 80px;
    /* margin-left: 24px; */
    max-width: 420px;

    .MuiInput-root {
        padding: 8px 16px;
        /* border: 1px solid lightgray; */
        /* border-radius: 4px; */
        flex-grow: 1;
        width: 100%;
        font-size: ${Font.size.m};
        font-weight: ${Font.weight.bold};
        color: ${Color.textcolor};
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
    margin-bottom: 32px;
    margin-top: 16px;
    margin-right: 64px;
`;

export const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;