import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { fetchPosts } from '../../../redux/posts/ActionCreators'
import Loader from '../../commons/Loader'
import Error from '../../commons/Error'

const Posts = props => {
    const dispatch = useDispatch();
    const postsState = useSelector(state => state.postsState);

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    const postClickHandler = (event, post) => {
        event.preventDefault();
        props.history.push({
            pathname: `/posts/${post.id}`,
            state: post
        })
    }

    return (
        postsState.isLoading ? <Loader /> :
            postsState.ErrMess ? <Error msg="Error al cargar información" /> :
                <ul>
                    {postsState.posts.map(post => {
                        return (
                            <li
                                key={post.id}
                                onClick={e => postClickHandler(e, post)}>
                                <p>{post.title}</p>
                            </li>
                        )
                    })
                    }
                </ul>
    )
}

export default withRouter(Posts);