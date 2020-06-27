import * as ActionTypes from './ActionTypes';

const initialState =  {
    isLoading: true,
    errMess: null,
    post: undefined
};

export const PostState = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.POST_FETCHED:
            return { ...state, isLoading: false, errMess: null, post:action.payload };

        case ActionTypes.POST_LOADING:
            return { ...state, isLoading: true, errMess: null };

        case ActionTypes.POST_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };

        default:
            return state;
    }
};