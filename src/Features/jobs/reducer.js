import { GET_TODO_FAIL, GET_TODO_LOADING, GET_TODO_SUCCESS, ADD_TODO_FAIL, ADD_TODO_LOADING, ADD_TODO_SUCCESS } from "./actionTypes";

const init = { loading: false, todo: [], error: false }

export const reducer = (state = init, { type, payload }) => {

    switch (type) {
        case GET_TODO_LOADING: { return { ...state, loading: true } }
        case GET_TODO_SUCCESS: { return { ...state, todo: payload, loading: false } }
        case GET_TODO_FAIL: return { ...state, loading: false, error: true }

        case ADD_TODO_LOADING: return { ...state, loading: true }
        case ADD_TODO_SUCCESS: return { ...state, todo: [...state.todo, payload], loading: false };
        case ADD_TODO_FAIL: return { ...state, loading: false, error: true };

        default:
            return state;
    }

}