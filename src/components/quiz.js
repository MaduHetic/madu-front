import styled from "styled-components";
import {Color, Font} from '../styles/variables';

export const QTitle = styled.h2`
    padding-bottom: 10px;
    margin-bottom: 40px;
    border-bottom: 1px dashed #B8B8C9;
    font-size: 2rem;
    color: #000000;
    margin-top: 20px;
    margin-right: 64px;
`
export const QLabel = styled.span`
    font-weight: 600;
    color: #B8B8C9;
    width: 180px;
`

export const QRow = styled.div`
    display: flex;
    align-items: center;
    height: 48px;

    input {
        width: 280px;
        padding: 4px 8px;
    }

    input.mgRight{
        margin-right: 24px;
    }

    input.radio {
        width: unset;
        margin: 0 16px;
    }
`

export const QLTitle = styled.h2`
    margin: 16px 0;
    font-size: 1.5rem;
    color: #000000;
    font-weight: 600;
`

export const RedBtn = styled.button`
    cursor: pointer;
    padding: 8px 20px;
    font-size: 1rem;
    font-weight: 600;
    color: #FFFFFF;
    background: #EE6363;
    border: solid 1px #EE6363;
    border-radius: 3rem;
    margin-left: 64px;
`

export const AddBtn = styled.button`
    cursor: pointer;
    padding: 8px 20px;
    font-size: 1rem;
    font-weight: 600;
    color: #FFFFFF;
    background: #1B58E4;
    border: solid 1px #1B58E4;
    border-radius: 3rem;
`

export const Separator = styled.div`
    padding-bottom: 16px;
    border-bottom: 2px solid #F5F5FA;
    margin-right: 96px;
    margin-bottom: 16px;
`;

export const ARight = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 96px;
    margin-bottom: 24px;
`


