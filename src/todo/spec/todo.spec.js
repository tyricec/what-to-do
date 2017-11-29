import { addTodo, editTodo, removeTodo, updateTodo } from "../actions";
import todos, { getTodos } from "../reducer";

describe("todo", () => {
  it("should be able to add a todo", () => {
    const todo = "Something todo";
    const action = addTodo(todo);
    const result = todos(undefined, action);

    expect(result).toEqual({
      todos: [{ value: todo }]
    });
  });

  it("should be able to remove a todo", () => {
    const state = { todos: [{ value: "Something todo" }] };
    const action = removeTodo(0);
    const result = todos(state, action);

    expect(result).toEqual({
      todos: []
    });
  });

  it("should be able to signal that a todo is in edit mode", () => {
    const state = { todos: [{ value: "Some todo" }] };
    const action = editTodo(0);

    const result = todos(state, action);

    expect(result).toEqual({
      todos: [
        {
          value: "Some todo",
          isInEditMode: true
        }
      ]
    });
  });

  it("should be able to update a todo", () => {
    const todo = "Something todo";
    const updatedTodo = "Updated todo";
    const state = { todos: [todo] };
    const action = updateTodo(updatedTodo, 0);
    const result = todos(state, action);

    expect(result).toEqual({
      todos: [{ value: updatedTodo }]
    });
  });

  it("should be able to view all todos", () => {
    const todoList = [
      { value: "A todo" },
      { value: "Another todo" },
      { value: "The last todo" }
    ];
    const state = { todos: todoList };

    const result = getTodos(state);

    expect(result).toEqual(todoList);
  });
});
