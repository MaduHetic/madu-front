import styled from "styled-components";
import { Color, Font } from '../../styles/variables';

export const ChartContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: wrap;
    .chartCard {
        padding: 20px;
        margin-bottom: 15px;
        width: calc(100% / 2 - 7.5px);
        background: ${Color.white};
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
        border-radius: 4px;
        &:nth-child(even) {
            margin-left: 15px;
        }
        .title {
            margin-bottom: 20px;
            font-size: ${Font.size.l};
            color: ${Color.black};
        }
    }
`;