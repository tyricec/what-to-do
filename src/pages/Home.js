import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../todo/actions";
import { getTodos } from "../todo/reducers";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <div className="App">
          <input
            onChange={evt => this.handleChange(evt)}
            name="todo"
            type="text"
            placeholder="Enter next item todo"
          />
          <button
            onClick={() => this.props.dispatch(addTodo(this.state.value))}
          >
            Add Todo
          </button>
          <ul>{this.props.todos.map((todo, i) => <li key={i}>{todo}</li>)}</ul>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  todos: getTodos(state)
}))(Home);
