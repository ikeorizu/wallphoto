import photos from '../data/posts';
import { combineReducers } from 'redux';

const comments = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            if (!state[action.postId]) {
                return { ...state, [action.postId]: [action.comment] };
            } else {
                return { ...state, [action.postId]: [...state[action.postId], action.comment] };
            }
        case 'LOAD_COMMENTS':
            return action.comments;
        default:
            return state;
    }
};

const posts = (state = photos, action) => {
    switch (action.type) {
        // removePhoto action
        case 'REMOVE_PHOTO':
            return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
        case 'ADD_PHOTO':
            return [...state, action.post];
        case 'LOAD_PHOTOS':
            return action.photos;
        default:
            return state;
    }
};

const rootReducer = combineReducers({ comments, posts });

export default rootReducer;
