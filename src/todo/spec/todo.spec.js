import {
  addTodo,
  editTodo,
  removeTodo,
  updateTodo,
  checkTodo
} from "../actions";
import todos, { getTodos } from "../reducer";

describe("todo", () => {
  it("should be able to add a todo", () => {
    const todo = "Something todo";
    const state = undefined;
    const action = addTodo(todo);
    const result = getTodos(todos(state, action));

    expect(result).toEqual([{ value: "Something todo", id: 0, list: 0 }]);
  });

  it("should be able to remove a todo", () => {
    const state = {
      todos: {
        byId: {
          0: {
            value: "Something todo",
            id: 0,
            list: 0
          },
          1: {
            value: "Another thing todo",
            id: 1,
            list: 0
          }
        }
      }
    };
    const action = removeTodo(0);
    const newState = todos(state, action);
    const result = getTodos(newState);

    expect(result).toEqual([
      {
        value: "Another thing todo",
        id: 1,
        list: 0
      }
    ]);
  });

  it("should be able to signal that a todo is in edit mode", () => {
    const state = {
      todos: {
        byId: {
          0: {
            value: "Something todo",
            id: 0,
            list: 0,
            checked: false
          }
        }
      }
    };
    const action = editTodo(0);

    const newState = todos(state, action);
    const result = getTodos(newState);

    expect(result[0]).toEqual({
      value: "Something todo",
      isInEditMode: true,
      checked: false,
      id: 0,
      list: 0
    });
  });

  it("should be able to update a todo", () => {
    const updatedTodo = "Updated todo";
    const state = {
      todos: {
        byId: {
          0: {
            value: "Something todo",
            id: 0,
            list: 0,
            checked: false
          }
        }
      }
    };
    const action = updateTodo(updatedTodo, 0);
    const newState = todos(state, action);
    const result = getTodos(newState);

    expect(result[0].value).toEqual(updatedTodo);
    expect(result[0].isInEditMode).toEqual(false);
  });

  it("should be able to check off a todo", () => {
    const state = {
      todos: {
        byId: {
          0: {
            value: "Something todo",
            id: 0,
            list: 0,
            checked: false
          }
        }
      }
    };
    const action = checkTodo(0);
    const newState = todos(state, action);
    const result = getTodos(newState);

    expect(result[0].checked).toBe(true);
  });

  it("should be able to remove check from todo", () => {
    const state = {
      todos: {
        byId: {
          0: {
            value: "Something todo",
            id: 0,
            list: 0,
            checked: true
          }
        }
      }
    };
    const action = checkTodo(0);
    const newState = todos(state, action);
    const result = getTodos(newState);

    expect(result[0].checked).toBe(false);
  });

  it("should be able to view all todos", () => {
    const state = {
      todos: {
        byId: {
          0: {
            value: "Something todo",
            id: 0,
            list: 0
          },
          1: {
            value: "Another todo",
            id: 1,
            list: 0
          },
          2: {
            value: "The last todo",
            id: 2,
            list: 0
          }
        }
      }
    };
    const result = getTodos(state);

    expect(result).toEqual([
      {
        value: "Something todo",
        id: 0,
        list: 0
      },
      {
        value: "Another todo",
        id: 1,
        list: 0
      },
      {
        value: "The last todo",
        id: 2,
        list: 0
      }
    ]);
  });
});
