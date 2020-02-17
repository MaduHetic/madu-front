import React from 'react';
import SearchInput from "./input";
import SearchIcon from '@material-ui/icons/Search';
import Tooltip from '@material-ui/core/Tooltip';
import Avatar from '@material-ui/core/Avatar';
import { TopBar } from "./style";
import { makeStyles } from '@material-ui/core/styles';
import GirlUser from "../../images/girl-user.jpeg";

const useStyles = makeStyles({
	icon: {
		fill: '#393838'
	}
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
                <Avatar src={GirlUser}></Avatar>
            </Tooltip>
        </TopBar>
    )
}