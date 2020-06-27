import React from 'react'
import { withRouter } from 'react-router-dom'

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const PostDetail = props => {
    const post = props.history.location.state;

    return (
        <Grid container>
            <Typography variant="h5" gutterBottom>
                <strong>{post.title}</strong>
            </Typography>
            <Typography variant="body1" gutterBottom>
                {post.body}
            </Typography>
        </Grid>
    );
}

export default withRouter(PostDetail);