import * as ActionTypes from './ActionTypes';
import * as client from '../../../restServices/jsonplaceholderApiClient'

export const fetchPost = (id) => (dispatch) => {

	dispatch(postLoading());

	return client.getPost(id)
		.then(response => {
			dispatch(postFetch(response.data))
		})
		.catch(error => dispatch(postFailed(error.message)));
}

const postLoading = _ => ({
	type: ActionTypes.POST_LOADING
});

const postFailed = (errmess) => ({
	type: ActionTypes.POST_FAILED,
	payload: errmess
});

const postFetch = (post) => ({
	type: ActionTypes.POST_FETCHED,
	payload: post
});