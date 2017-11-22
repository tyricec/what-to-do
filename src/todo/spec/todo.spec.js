import { addTodo, editTodo, removeTodo } from '../actions';
import todos, { getTodos } from '../reducers';

describe('todo', () => {
  it('should be able to add a todo', () => {
    const todo = 'Something todo';
    const action = addTodo(todo);
    const result = todos(undefined, action);

    expect(result).toEqual({
      todos: [todo],
    });
  });

  it('should be able to remove a todo', () => {
    const state = { todos: ['Something todo'] };
    const action = removeTodo(0);
    const result = todos(state, action);

    expect(result).toEqual({
      todos: [],
    });
  });

  it('should be able to edit a todo', () => {
    const todo = 'Something todo';
    const updatedTodo = 'Updated todo';
    const state = { todos: [todo] };
    const action = editTodo(updatedTodo, 0);
    const result = todos(state, action);

    expect(result).toEqual({
      todos: [updatedTodo],
    });
  });

  it('should be able to view all todos', () => {
    const todoList = ['A todo', 'Another todo', 'The last todo'];
    const state = { todos: todoList };

    const result = getTodos(state);

    expect(result).toEqual(todoList);
  });
});
