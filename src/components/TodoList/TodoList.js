import React from "react";
import styled from "styled-components";

import Todo from "./Todo/Todo";

const List = styled.ul`
  background-color: #ffffff;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const TodoList = ({ todos }) => (
  <List>{todos && todos.map(todo => <Todo>{todo}</Todo>)}</List>
);

export default TodoList;
