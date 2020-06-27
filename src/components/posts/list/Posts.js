import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles'

import { fetchPosts } from '../../../redux/posts/list/ActionCreators'
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
        width: 500
    },
    pagination: {
        margin: '20px 0',
        display: 'flex',
        justifyContent: 'center'
    },
});


const Posts = props => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const postsState = useSelector(state => state.postsState);
    const [page, setPage] = useState(1);
    const itemPerPage = 10;

    useEffect(() => {
        if (!postsState.posts) {
            dispatch(fetchPosts());
        }
    }, []);

    const handlePageChange = (event, value) => {
        event.preventDefault();
        setPage(value);
    };

    return (
        postsState.isLoading ? <Loader /> :
            postsState.errMess ? <Error msg="Error al cargar información" /> :
                <>
                    <Grid container className={classes.container}>
                        {
                            postsState.posts.slice((page - 1) * itemPerPage, (page - 1) * itemPerPage + itemPerPage)
                                .map(post => {
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
                    <Pagination
                        className={classes.pagination}
                        color="primary"
                        count={Math.ceil(postsState.posts.length / itemPerPage)}
                        page={page}
                        onChange={handlePageChange} />
                </>
    )
}

export default withRouter(Posts);