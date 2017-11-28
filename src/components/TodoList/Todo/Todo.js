import React from "react";
import styled from "styled-components";

import EditPanel from "./EditPanel/EditPanel";

const ListItem = styled.li`
  border-bottom: 1px solid #ececec;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.div`
  padding: 8px;
`;

const Todo = ({ children }) => (
  <ListItem>
    <Text>{children}</Text>
    <EditPanel />
  </ListItem>
);

export default Todo;
