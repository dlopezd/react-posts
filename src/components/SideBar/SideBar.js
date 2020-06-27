import React from 'react'
import { withRouter } from 'react-router-dom'

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
}));


const SideBar = props => {
    const classes = useStyles();

    const itemListClickHandler = (event, type) => {
        event.preventDefault();
        switch (type) {
            case "posts":
                props.history.push({
                    pathname: `/`,
                });
                return;
            case "create":
                props.history.push({
                    pathname: `/posts/create`,
                });
                return;
            default:
                return;
        }
    }

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            anchor="left"
            classes={{
                paper: classes.drawerPaper,
              }}>
            <List>
                <ListItem button key="posts">
                    <ListItemText
                        primary="Posts"
                        onClick={e => itemListClickHandler(e, "posts")} />
                </ListItem>
                <ListItem button key="create">
                    <ListItemText
                        primary="Crear post"
                        onClick={e => itemListClickHandler(e, "create")} />
                </ListItem>
            </List>
        </Drawer>
    )
}

export default withRouter(SideBar);