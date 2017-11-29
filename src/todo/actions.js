import { ADD_TODO, EDIT_TODO, REMOVE_TODO, UPDATE_TODO } from "./actionTypes";

export const addTodo = todo => ({
  payload: {
    todo
  },
  type: ADD_TODO
});

export const editTodo = index => ({
  payload: {
    index
  },
  type: EDIT_TODO
});

export const updateTodo = (update, index) => ({
  payload: {
    update,
    index
  },
  type: UPDATE_TODO
});

export const removeTodo = index => ({
  payload: {
    index
  },
  type: REMOVE_TODO
});
