import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { PostsState } from './posts/list/PostsState';
import { CreatePostsState } from './posts/create/CreatePostsState';
import { PostState } from './posts/detail/PostsState';

export const ConfigureStore = () => {
	const store = createStore(
		combineReducers({
			postsState: PostsState,
			createPostState: CreatePostsState,
			postState: PostState,
		}),
		applyMiddleware(thunk, logger)
	);

	return store;
}