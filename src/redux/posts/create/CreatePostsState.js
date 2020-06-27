import * as ActionTypes from './ActionTypes';

const initialState = {
    isLoading: false,
    errMess: null,
    ok: false
};

export const CreatePostsState = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.CREATE_POST_OK:
            return { ...state, isLoading: false, errMess: null, ok: true };

        case ActionTypes.CREATE_POST_LOADING:
            return { ...state, isLoading: true, errMess: null };

        case ActionTypes.CREATE_POST_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, ok: false };

        default:
            return state;
    }
};