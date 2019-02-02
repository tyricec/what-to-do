import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import EditPanel from "./EditPanel";

const ListItem = styled.li`
  border-bottom: 1px solid #ececec;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.div`
  padding: 8px;
  text-decoration: ${({ checked }) => (checked ? "line-through" : "none")};
  color: ${({ checked }) => (checked && "#398c3a") || "#000000"};
`;

const Todo = ({ checked, children, onCheck, onEdit, onRemove }) => (
  <ListItem>
    <Text checked={checked}>{children}</Text>
    <EditPanel onCheck={onCheck} onEdit={onEdit} onRemove={onRemove} />
  </ListItem>
);

Todo.propTypes = {
  children: PropTypes.node.isRequired,
  onCheck: PropTypes.func,
  onEdit: PropTypes.func,
  onRemove: PropTypes.func
};

Todo.defaultProps = {
  onCheck: () => {},
  onEdit: () => {},
  onRemove: () => {}
};

export default Todo;
