import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { addTodo } from "../todo/actions";
import { getTodos } from "../todo/reducer";

import Footer from "../components/Footer";
import Header from "../components/Header";
import TodoInput from "../components/TodoInput/TodoInput";
import TodoList from "../components/TodoList/TodoList";

const Screen = styled.div`
  position: relative;
  min-height: 100vh;
`;

const Container = styled.div`
  margin: 8px;
`;

const StyledTodoInput = styled(TodoInput)`
  background-color: #ffffff;
  border-bottom: 1px solid #ececec;
`;

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  handleChange = event => {
    console.log("here");
    this.setState({ value: event.target.value });
  };

  submitTodo = () => {
    console.log("here");
    this.props.dispatch(addTodo(this.state.value));
    this.setState({ value: "" });
  };

  render() {
    return (
      <Screen>
        <Header />
        <Container>
          <StyledTodoInput
            onTextChange={this.handleChange}
            onAdd={this.submitTodo}
            value={this.state.value}
          />
          <TodoList todos={this.props.todos} />
        </Container>
        <Footer />
      </Screen>
    );
  }
}

export default connect(state => ({
  todos: getTodos(state)
}))(Home);
