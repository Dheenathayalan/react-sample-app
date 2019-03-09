import { FETCH_TODOS, ADD_TODO, UPDATE_TODO, TOGGLE_TODO, DELETE_TODO } from './types';

export const fetchTodos = (todos) => dispatch => {
    dispatch({
        type: FETCH_TODOS,
        payload: todos
    });
}

export const addTodo = (todo) => dispatch => {
    dispatch({
        type: ADD_TODO,
        payload: todo
    });
}

export const updateTodo = (todos) => dispatch => {
    dispatch({
        type: UPDATE_TODO,
        payload: todos
    });
}

export const toggleTodo = (todos) => dispatch => {
    dispatch({
        type: TOGGLE_TODO,
        payload: todos
    });
}

export const deleteTodo = (todos) => dispatch => {
    dispatch({
        type: DELETE_TODO,
        payload: todos
    });
}