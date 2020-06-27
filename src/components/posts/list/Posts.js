import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import { fetchPosts } from '../../../redux/posts/ActionCreators'
import Loader from '../../commons/Loader'
import Error from '../../commons/Error'
import PostItem from './PostItem'


const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    item: {
        height: 'wrap',
        margin: 10,
        width:300
    }
});


const Posts = props => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const postsState = useSelector(state => state.postsState);

    useEffect(() => {
        if (!postsState.posts) {
            dispatch(fetchPosts());
        }
    }, []);

    return (
        postsState.isLoading ? <Loader /> :
            postsState.ErrMess ? <Error msg="Error al cargar información" /> :
                <Grid container className={classes.container}>
                    {
                        postsState.posts.slice(0, 15).map(post => {
                            return (
                                <Grid
                                    item
                                    key={post.id}
                                    className={classes.item}>
                                    <PostItem post={post} />
                                </Grid>
                            )
                        })
                    }
                </Grid>
    )
}

export default withRouter(Posts);