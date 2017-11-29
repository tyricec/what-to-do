import { ADD_TODO, REMOVE_TODO, UPDATE_TODO, EDIT_TODO } from "./actionTypes";

const initialState = {
  todos: []
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        todos: [...state.todos, { value: action.payload.todo }]
      };
    }
    case EDIT_TODO: {
      return {
        todos: state.todos.map((todo, idx) => {
          if (idx === action.payload.index) {
            return {
              ...todo,
              isInEditMode: true
            };
          }
          return todo;
        })
      };
    }
    case REMOVE_TODO: {
      return {
        todos: state.todos.filter(
          (val, index) => index !== action.payload.index
        )
      };
    }
    case UPDATE_TODO: {
      return {
        todos: state.todos.map((todo, index) => {
          if (index === action.payload.index) {
            return { value: action.payload.update };
          }
          return todo;
        })
      };
    }
    default:
      return state;
  }
};

export const getTodos = state => state.todos;

export default todos;
