import * as ActionTypes from './ActionTypes';

const initialState =  {
    isLoading: true,
    errMess: null,
    posts: undefined
};

export const PostsState = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.POSTS_FETCHED:
            return { ...state, isLoading: false, errMess: null, posts:action.payload };

        case ActionTypes.POSTS_LOADING:
            return { ...state, isLoading: true, errMess: null, posts: [] };

        case ActionTypes.POSTS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };

        default:
            return state;
    }
};