import styled from "styled-components";
import {Color, Font} from '../../styles/variables';

export const WrapperTitle = styled.div`
    margin: 32px 0;
    padding-bottom: 16px;
    border-bottom: 1px dashed #B8B8C9;
`;

export const MainTitle = styled.h2`
    color: ${Color.title};
    font-family: ${Font.family.main};
    font-size: ${Font.size.xl};
`;