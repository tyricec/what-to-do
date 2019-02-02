import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Container = styled.form`
  display: flex;
  background-color: #ffffff;
  align-items: center;
  justify-content: space-between;
`;

const Input = styled.input`
  border: none;
  margin: 8px 16px;
  width: 75%;

  &:focus {
    border-bottom: 1px solid #398c3a;
    outline: none;
    outline-style: none;
  }
`;

const Button = styled.button`
  background-color: #398c3a;
  border: none;
  color: #ffffff;
  margin: 8px;
  padding: 8px;
`;

class TodoInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value
    };
  }

  componentDidMount() {
    this.textInput.focus();
  }

  onChange = evt => {
    this.setState({ value: evt.target.value });
  };

  onFocus = evt => {
    evt.target.select();
  };

  onSubmit = evt => {
    evt.preventDefault();

    this.props.onSubmit(this.state.value);

    this.setState({ value: "" });
  };

  render() {
    const { buttonText, className, placeholder } = this.props;
    return (
      <Container className={className} onSubmit={this.onSubmit}>
        <Input
          onChange={this.onChange}
          onFocus={this.onFocus}
          placeholder={placeholder}
          innerRef={input => (this.textInput = input)}
          value={this.state.value}
        />
        <Button>{buttonText}</Button>
      </Container>
    );
  }
}

TodoInput.propTypes = {
  buttonText: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

TodoInput.defaultProps = {
  buttonText: "Save",
  className: "",
  placeholder: "Enter what todo",
  value: ""
};

export default TodoInput;
