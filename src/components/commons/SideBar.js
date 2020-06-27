import React from 'react'
import { withRouter } from 'react-router-dom'

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const SideBar = props => {

    const listClickHandler = (event) => {
        event.preventDefault();
        props.history.push({
            pathname: `/`,
        })
    }
    
    const createClickHandler = (event) => {
        event.preventDefault();
        props.history.push({
            pathname: `/posts/create`,
        })
    }
    


    return (
    <Grid container>
        <Grid>
            <Button size="small" onClick={e => listClickHandler(e)}> Posts </Button>
        </Grid>
        <Grid>
            <Button size="small" onClick={e => createClickHandler(e)}> Nuevo Post </Button>
        </Grid>
    </Grid>
    )
}

export default withRouter(SideBar);