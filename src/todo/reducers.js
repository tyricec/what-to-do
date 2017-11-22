import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from './actionTypes';

const initialState = {
  todos: [],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case (ADD_TODO): {
      return {
        todos: [...state.todos, action.payload.todo],
      };
    }
    case (REMOVE_TODO): {
      return {
        todos: state.todos.filter((val, index) => index !== action.payload.index),
      };
    }
    case (EDIT_TODO): {
      return {
        todos: state.todos.map((todo, index) => {
          if (index === action.payload.index) {
            return action.payload.update;
          }
          return todo;
        }),
      };
    }
    default:
      return state;
  }
};

export const getTodos = state => state.todos;

export default todos;
