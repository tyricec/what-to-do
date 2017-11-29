import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import EditPanel from "./EditPanel/EditPanel";

const ListItem = styled.li`
  border-bottom: 1px solid #ececec;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.div`
  padding: 8px;
`;

const Todo = ({ children, onEdit, onRemove }) => (
  <ListItem>
    <Text>{children}</Text>
    <EditPanel onEdit={onEdit} onRemove={onRemove} />
  </ListItem>
);

Todo.propTypes = {
  children: PropTypes.element.isRequired,
  onEdit: PropTypes.func,
  onRemove: PropTypes.func
};

Todo.defaultProps = {
  onEdit: () => {},
  onRemove: () => {}
};

export default Todo;
