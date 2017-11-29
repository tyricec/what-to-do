import React from "react";
import { connect } from 'react-redux';
import styled from "styled-components";

import { addTodo } from '../todo/actions';

const Container = styled.form`
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

class TodoInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch(addTodo(this.state.value));
    this.setState({ value: '' });
  }

  onTextChange = (event) => {
    this.setState({ value: event.target.value });
  }

  render() {
    const { className } = this.props;
    return (
      <Container className={className} onSubmit={this.onSubmit}>
        <Input
          onChange={this.onTextChange}
          name="todo"
          type="text"
          placeholder="Enter what to do"
          value={this.state.value}
        />
        <Button>Add</Button>
      </Container>
    );
  }
}

export default connect()(TodoInput);
