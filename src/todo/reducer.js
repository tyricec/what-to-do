import {
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  EDIT_TODO,
  CHECK_TODO
} from "./actionTypes";

const initialState = {
  todos: {
    byId: {},
    idCounter: 0
  },
  lists: {
    byId: {
      0: {
        id: 0,
        name: "What Todo"
      }
    }
  },
  app: {
    currentList: 0
  }
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: {
          ...state.todos,
          byId: {
            ...state.todos.byId,
            [state.todos.idCounter]: {
              id: state.todos.idCounter,
              list: 0,
              value: action.payload.todo
            }
          },
          idCounter: state.todos.idCounter + 1
        }
      };
    }
    case CHECK_TODO: {
      return {
        ...state,
        todos: {
          ...state.todos,
          byId: {
            ...state.todos.byId,
            [action.payload.index]: {
              ...state.todos.byId[action.payload.index],
              checked: !state.todos.byId[action.payload.index].checked
            }
          }
        }
      };
    }
    case EDIT_TODO: {
      return {
        ...state,
        todos: {
          ...state.todos,
          byId: {
            ...state.todos.byId,
            [action.payload.index]: {
              ...state.todos.byId[action.payload.index],
              isInEditMode: true
            }
          }
        }
      };
    }
    case REMOVE_TODO: {
      const {
        [action.payload.index]: removed,
        ...stateWithItemRemoved
      } = state.todos.byId;
      return {
        ...state,
        todos: {
          ...state.todos,
          byId: {
            ...stateWithItemRemoved
          }
        }
      };
    }
    case UPDATE_TODO: {
      return {
        ...state,
        todos: {
          ...state.todos,
          byId: {
            ...state.todos.byId,
            [action.payload.index]: {
              ...state.todos.byId[action.payload.index],
              value: action.payload.update,
              isInEditMode: false
            }
          }
        }
      };
    }
    default:
      return state;
  }
};

export const getTodos = state => Object.values(state.todos.byId);
export const getListToDisplay = state => {
  const listId = state.app.currentList;

  return state.lists.byId[listId];
};

export default todos;
