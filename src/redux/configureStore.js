import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { PostsState } from './posts/PostsState';

export const ConfigureStore = () => {
	const store = createStore(
		combineReducers({
			postsState: PostsState
		}),
		applyMiddleware(thunk, logger)
	);

	return store;
}