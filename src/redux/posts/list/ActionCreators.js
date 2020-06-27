import * as ActionTypes from './ActionTypes';
import * as client from '../../../restServices/jsonplaceholderApiClient'

export const fetchPosts = () => (dispatch) => {

	dispatch(postsLoading());

	return client.getPosts()
		.then(response => {
			dispatch(postsFetch(response.data))
		})
		.catch(error => dispatch(postsFailed(error.message)));
}

const postsLoading = _ => ({
	type: ActionTypes.POSTS_LOADING
});

const postsFailed = (errmess) => ({
	type: ActionTypes.POSTS_FAILED,
	payload: errmess
});

const postsFetch = (posts) => ({
	type: ActionTypes.POSTS_FETCHED,
	payload: posts
});