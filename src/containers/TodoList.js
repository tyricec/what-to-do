import React from "react";
import { connect } from "react-redux";
import { removeTodo } from "../todo/actions";
import { getTodos } from "../todo/reducer";
import styled from "styled-components";

import Todo from "../components/Todo/Todo";

const List = styled.ul`
  background-color: #ffffff;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const TodoList = ({ removeTodo, todos }) => (
  <List>
    {todos && todos.map((todo, idx) => <Todo key={idx} onRemove={() => removeTodo(idx)}>{todo}</Todo>)}
  </List>
);

export default connect(
  state => ({
    todos: getTodos(state)
  }),
  {
    removeTodo
  }
)(TodoList);
