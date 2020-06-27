import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { PostsState } from './posts/list/PostsState';
import { CreatePostsState } from './posts/create/CreatePostsState';

export const ConfigureStore = () => {
	const store = createStore(
		combineReducers({
			postsState: PostsState,
			createPostState: CreatePostsState
		}),
		applyMiddleware(thunk, logger)
	);

	return store;
}