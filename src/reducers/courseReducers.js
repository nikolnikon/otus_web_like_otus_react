import {
    FETCH_COURSES_BEGIN,
    FETCH_COURSES_SUCCESS,
    FETCH_COURSES_FAILURE
} from '../actions/courseActions'

const initialState = {
    items: [],
    loading: false,
    error: null
};

export default function courseReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_COURSES_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_COURSES_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.courses
            };

        case FETCH_COURSES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            };

        default:
            return state;
    }
}

