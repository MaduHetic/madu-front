import React from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { Color, Font } from '../styles/variables';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import BusinessOutlinedIcon from '@material-ui/icons/BusinessOutlined';
import MeetingRoomOutlinedIcon from '@material-ui/icons/MeetingRoomOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import MapOutlinedIcon from '@material-ui/icons/MapOutlined';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { User } from '../core/user';
import CustomButton from './button/button';

import Logo from '../images/maduLogo.png'

const Sidebar = styled.aside`
    position: absolute;
    width: 220px;
    top: 0;
    left: 0;
    padding: 32px 0;
    height: 100%;
    background: ${Color.white};
    ul {
        margin-top: 50px;
        li > a {
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

        a.disconnect {
            position: relative;
            opacity: 1;
            color: #EE6363;
            margin-top: 30px;
        }
    }
`;

const StyledButtonContainer = styled.div`
    position: absolute;
    bottom: 9rem;
    left: 50%;
    transform: translateX(-50%);
    & > span {
        font-size: 1.6rem !important;
        white-space: nowrap;
    }
`;

const StyledLogo = styled.div`
    width: 6rem;
    height: 6rem;
    background: ${Color.main};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    & img {
        width: 80%;
        height: auto;
    }
`

const StyledRole = styled.p`
    text-align: center;
    text-transform: uppercase;
    color: ${Color.black};
    line-height: 1.5;
    margin-top: 1.6rem;
`;

const SidebarMenu = () => {
    const logout = User.signOut();
    return (
        <Sidebar>
            <StyledLogo>
                <img src={Logo} alt="madu" />
            </StyledLogo>
            <StyledRole>Admin</StyledRole>
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
                <li>
                    <NavLink to="/quizz">
                        <AssignmentIcon style={{ fontSize: 22 }}/>Quizz
                    </NavLink>
                </li>
                {/* <li>
                    <NavLink to="/content">
                        <AssignmentIcon style={{ fontSize: 22 }}/>Contenus
                    </NavLink>
                </li> */}
                <li>
                  <NavLink exact to='/' onClick={() => logout()} className="disconnect">
                    <MeetingRoomOutlinedIcon style={{ fontSize: 22 }} />Déconnection
                  </NavLink>
                </li>
                <StyledButtonContainer>
                    <CustomButton
                      text="Créer une fiche"
                      size="large"
                      textcolor={Color.white}
                      backgroundcolor={Color.main}
                      bordercolor={Color.main}
                      href={`/create`}
                    />
                </StyledButtonContainer>
            </ul>
        </Sidebar>
    )
}

export default SidebarMenu;