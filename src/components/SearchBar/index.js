import React from 'react';
import SearchInput from "./input";
import SearchIcon from '@material-ui/icons/Search';
import Tooltip from '@material-ui/core/Tooltip';
import Avatar from '@material-ui/core/Avatar';
import { TopBar } from "./style";
import { makeStyles } from '@material-ui/core/styles';
import GirlUser from "../../images/girl-user.jpeg";

import { Color, Font } from '../../styles/variables';

const useStyles = makeStyles({
	icon: {
        marginBottom: '4px',
        marginRight: '1rem',
		fill: `${Color.textcolor}`
    },
    size: {
        width: "32px",
        height: "32px",
    },
});

export default function SearchBar() {
    const classes = useStyles();

    return (
        <TopBar>
            <SearchIcon
				classes={{
					root: classes.icon
				}} 
			/>
            <SearchInput/>
            <Tooltip title="SE DÉCONNECTER" arrow>
                <Avatar src={GirlUser} classes={{ root: classes.size}}></Avatar>
            </Tooltip>
        </TopBar>
    )
}