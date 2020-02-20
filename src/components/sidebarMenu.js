import React from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { Color, Font } from '../styles/variables';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import BusinessOutlinedIcon from '@material-ui/icons/BusinessOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import MapOutlinedIcon from '@material-ui/icons/MapOutlined';

const Sidebar = styled.aside`
    position: absolute;
    width: 220px;
    top: 0;
    left: 0;
    padding: 32px 0;
    height: 100%;
    background: ${Color.white};
    ul {
        margin-top: 30px;
        a {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: 8px 24px;
            font-size: ${Font.size.m};
            font-weight: ${Font.weight.bold};
            color: ${Color.lightgrey2};
            text-transform: uppercase;
        }
        svg {
            width: 25px;
            margin-right: 16px;
        }
        li:not(:last-child) {
            margin-bottom: 12px;
        }
        a.active {
            position: relative;
            opacity: 1;
            color: ${Color.main};
            background: ${Color.lightgrey};
            &:before {
                position: absolute;
                content: '';
                top: 0;
                right: 0;
                height: 100%;
                width: 4px;
                background: ${Color.main};
            }
        }
    }
`;

const SidebarMenu = () => {
    return (
        <Sidebar>
            <ul>
                <li>
                    <NavLink to="/dashboard" activeClassName="active">
                        <DashboardOutlinedIcon style={{ fontSize: 22 }}/>Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/clients">
                        <BusinessOutlinedIcon style={{ fontSize: 21 }}/>Clients
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/point-d-interet">
                        <RoomOutlinedIcon style={{ fontSize: 24 }}/>POI
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/map">
                        <MapOutlinedIcon style={{ fontSize: 22 }}/>Map
                    </NavLink>
                </li>
            </ul>
        </Sidebar>
    )
}

export default SidebarMenu;