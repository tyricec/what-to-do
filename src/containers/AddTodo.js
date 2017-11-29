import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

import { addTodo } from "../todo/actions";

import TodoInput from "../components/TodoInput/TodoInput";

const AddTodo = props => {
  const { className, dispatch } = props;
  return (
    <TodoInput
      buttonText="Add"
      className={className}
      onSubmit={todo => dispatch(addTodo(todo))}
    />
  );
};

AddTodo.propTypes = {
  className: PropTypes.string,
  dispatch: PropTypes.func.isRequired
};

AddTodo.defaultProps = {
  className: ""
};

export default connect()(AddTodo);
