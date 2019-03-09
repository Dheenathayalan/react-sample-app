import { FETCH_TODOS, ADD_TODO, UPDATE_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions/types';

const initialState = {
    todos: [],
    todo: {},
}

const todos = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TODOS:
            return {
                ...state,
                todos: action.payload
            }
        case ADD_TODO:
            return {
                ...state,
                todo: action.payload
            }
        case UPDATE_TODO:
            return {
                ...state,
                todo: {}
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todo: {}
            }
        case DELETE_TODO:
            return {
                ...state,
                todo: {}
            }
        default:
            return state
    }
}

export default todos;