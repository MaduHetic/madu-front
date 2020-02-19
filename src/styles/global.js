import styled from "styled-components";
import { Font, Color } from './variables';

export const Wrapper = styled.div`
    padding: 48px 32px;
`;

export const TitleDefault = styled.div`
    padding-bottom: 20px;
    margin-bottom: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px dashed ${Color.lightgrey2};
    .title {
        font-size: ${Font.size.xl};
    }
`;