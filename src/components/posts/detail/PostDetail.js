import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

import { fetchPost } from '../../../redux/posts/detail/ActionCreators';
import Loader from '../../commons/Loader';
import Error from '../../commons/Error';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const PostDetail = props => {
    const [post, setPost] = useState(undefined);
    const postState = useSelector(state => state.postState);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!props.history.location.state) {
            dispatch(fetchPost(props.id));
        }
    }, []);

    useEffect(() => {
        if (!postState.isLoading && !postState.ErrMess) {
            setPost(postState.post);
        }
    }, [postState]);

    !post && props.history.location.state &&
        setPost(props.history.location.state);

    return (
        post ? (
            <Grid container>
                <Typography variant="h5" gutterBottom>
                    <strong>{post.title}</strong>
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {post.body}
                </Typography>
            </Grid>
        ) :
            postState.isLoading ? <Loader /> :
                postState.errMess ? <Error msg="Error al cargar el post deseado" /> : null
    );
}

export default withRouter(PostDetail);