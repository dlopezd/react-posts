import * as ActionTypes from './ActionTypes';
import * as client from '../../../restServices/jsonplaceholderApiClient'

export const createPost = (data, resetForm, showAlertOk) => (dispatch) => {
	dispatch(createPostLoading());

	return client.createPost(data)
		.then(response => {
			if (response.status == 201) {
				resetForm();
				dispatch(createPostOk());
				showAlertOk();
			}
		})
		.catch(error => dispatch(createPostFailed(error.message)));
}

const createPostLoading = _ => ({
	type: ActionTypes.CREATE_POST_LOADING
});

const createPostFailed = (errmess) => ({
	type: ActionTypes.CREATE_POST_FAILED,
	payload: errmess
});

const createPostOk = _ => ({
	type: ActionTypes.CREATE_POST_OK
});