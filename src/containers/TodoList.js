import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { editTodo, removeTodo, updateTodo, checkTodo } from "../todo/actions";
import { getTodos } from "../todo/reducer";
import styled from "styled-components";

import Todo from "../components/Todo";
import TodoInput from "../components/TodoInput";

const List = styled.ul`
  background-color: #ffffff;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const TodoList = ({ dispatch, todos }) => (
  <List>
    {todos &&
      todos.map((todo, idx) => {
        if (todo.isInEditMode) {
          return (
            <TodoInput
              onSubmit={update => dispatch(updateTodo(update, todo.id))}
              value={todo.value}
            />
          );
        }
        return (
          <Todo
            key={idx}
            checked={todo.checked}
            onCheck={() => dispatch(checkTodo(todo.id))}
            onEdit={() => dispatch(editTodo(todo.id))}
            onRemove={() => dispatch(removeTodo(todo.id))}
          >
            {todo.value}
          </Todo>
        );
      })}
  </List>
);

TodoList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      isInEditMode: PropTypes.bool,
      value: PropTypes.string.isRequired
    })
  )
};

TodoList.defaultProps = {
  todos: []
};

export default connect(state => ({
  todos: getTodos(state)
}))(TodoList);
