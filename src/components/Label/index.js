import styled from "styled-components";
import {Color, Font} from '../../styles/variables';

export const Container = styled.div`
    width: 100%;
    max-width: 1080px;
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
        width: 70%;
    }
`;

export const Labels = styled.div`
    background: #F5F5FA;
    width: 30%;
`;

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 80px;
    margin-left: 24px;
    max-width: 420px;

    .MuiInput-root {
        padding: 8px 16px;
        /* border: 1px solid lightgray; */
        /* border-radius: 4px; */
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