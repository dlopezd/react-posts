import React from 'react';
import { withRouter } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

const PostItem = props => {
    const classes = useStyles();
    const post = props.post;

    const readMoreHandler = (event) => {
        event.preventDefault();
        props.history.push({
            pathname: `/posts/${post.id}`,
            state: post
        })
    }

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent
                    onClick={e => readMoreHandler(e)}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {post.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {post.body.substring(0, 50)}...
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button
                    size="small"
                    color="primary"
                    onClick={e => readMoreHandler(e)}>
                    Leer más
                </Button>
            </CardActions>
        </Card>
    );
}

export default withRouter(PostItem);