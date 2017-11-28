import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Input = styled.input`
  margin: 16px;
  width: 75%;
`;

const Button = styled.button`
  background-color: #398c3a;
  border: none;
  color: #ffffff;
  margin: 16px;
  padding: 8px;
`;

const TodoInput = ({ className, onAdd, onTextChange, value }) => (
  <Container className={className}>
    <Input
      onChange={onTextChange}
      name="todo"
      type="text"
      placeholder="Enter what to do"
      value={value}
    />
    <Button onClick={onAdd}>Add</Button>
  </Container>
);

export default TodoInput;
