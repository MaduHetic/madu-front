import styled from "styled-components";
import { Font, Color } from './variables';

export const Wrapper = styled.div`
    padding: 48px 32px;
`;

export const TitleDefault = styled.div`
    padding-bottom: 20px;
    margin-bottom: 25px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px dashed ${Color.lightgrey2};
    .title {
        font-size: ${Font.size.xl};
        text-transform: capitalize;
    }
    button {
        margin-left: auto;
        & + button {
            margin-left: 8px;
        }
    }
`;

export const ListHeader = styled.div`
    margin-bottom: 25px;
    padding: 0 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    & > div {
        padding: 10px;
        flex-grow: 1;
    }
    &.client,
    &.poi {
        .name {
            max-width: 15%;
        }
        .date {
            max-width: 20%;
        }
        .actions {
            max-width: 25%;
            text-align: right;
        }
    }
    &.client {
        .nbWorkers {
            max-width: 25%;
        }
        .type {
            max-width: 15%;
        }
    }
    &.poi {
        .greenscore {
            max-width: 20%;
        }
        .tags {
            max-width: 20%;
        }
    }
    .filter {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        cursor: pointer;
        &.active {
            color: ${Color.main};
        }
    }
    p {
        font-size: 12px;
        font-weight: ${Font.weight.bold};
        text-transform: uppercase;
        user-select: none;
    }
`;

export const ListContainer = styled.div`
    & > div:not(:last-child) {
        margin-bottom: 8px;
    }
`;

export const Tag = styled.p`
    padding: 8px 6px;
    font-size: ${Font.size.s};
    color: ${props => props.colorRGB ? `rgba(${props.colorRGB.r}, ${props.colorRGB.g}, ${props.colorRGB.b}, 1)` : "black"};
    background: ${props => props.colorRGB ? `rgba(${props.colorRGB.r}, ${props.colorRGB.g}, ${props.colorRGB.b}, 0.05)` : "rgba(0, 0, 0, 0.05)"};
    border: 0.5px solid ${props => props.colorRGB ? `rgba(${props.colorRGB.r}, ${props.colorRGB.g}, ${props.colorRGB.b}, 1)` : "black"};
    border-radius: 2px;
    &:not(last-child) {
        margin-right: 8px;
    }
`;