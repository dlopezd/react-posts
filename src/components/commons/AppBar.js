import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const drawerWidth = 200;
const useStyles = makeStyles((theme) => ({
    container: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
    },
}));

const NavBar = props => {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.container}>
            <Toolbar>
                <Typography variant="h6">
                    Posts
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
export default NavBar;