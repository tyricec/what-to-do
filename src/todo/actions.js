import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from './actionTypes';

export const addTodo = todo => ({
  payload: {
    todo,
  },
  type: ADD_TODO,
});

export const editTodo = (update, index) => ({
  payload: {
    update,
    index,
  },
  type: EDIT_TODO,
});

export const removeTodo = index => ({
  payload: {
    index,
  },
  type: REMOVE_TODO,
});
