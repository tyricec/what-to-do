import React from "react";
import styled from "styled-components";
import Sidebar from "react-sidebar";

import Footer from "../components/Footer";
import Header from "../components/Header";
import AddTodo from "../containers/AddTodo";
import TodoList from "../containers/TodoList";

const styles = {
  sidebartitle: {
    backgroundColor: "#45ac4f",
    color: "#fff",
    margin: 0,
    padding: "8px",
    minWidth: "300px"
  },
  createListButton: {
    margin: "8px",
    padding: "8px",
    backgroundColor: "#398c3a",
    border: "none",
    color: "#ffffff"
  },
  createListSubmitButton: {
    margin: "0",
    padding: "8px",
    backgroundColor: "#398c3a",
    border: "none",
    color: "#ffffff"
  },
  createListCancelButton: {
    margin: "0 8px",
    padding: "8px",
    backgroundColor: "#bc0000",
    border: "none",
    color: "#ffffff"
  },
  createListContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  list: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "8px 8px 0",
    borderBottom: "1px solid #000000"
  }
};
const Screen = styled.div`
  position: relative;
  min-height: 100vh;
`;

const Container = styled.div`
  margin: 8px;
`;

const StyledAddTodo = styled(AddTodo)`
  background-color: #ffffff;
  border-bottom: 1px solid #ececec;
`;

const EditButton = styled.button`
  background-color: #ffffff;
  cursor: pointer;
  padding: 4px;
  margin: 0 8px;
  border: none;

  &:disabled {
    opacity: 0.5;
  }
`;
const Input = styled.input`
  border: none;
  margin: 8px 8px;
  &:focus {
    border-bottom: 1px solid #398c3a;
    outline: none;
    outline-style: none;
  }
`;

class SidebarContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: ["Work", "Gifts", "Shopping", "School"],
      mode: "view",
      currentList: 0,
      listInEdit: undefined,
      value: ""
    };
  }

  render() {
    if (this.state.mode === "create") {
      return (
        <div>
          <h2 style={styles.sidebartitle}>Lists</h2>
          <form
            style={styles.createListContainer}
            onSubmit={evt => {
              evt.preventDefault();
              this.setState({
                mode: "view",
                lists: this.state.lists.concat(this.state.value),
                value: ""
              });
            }}
          >
            <Input
              placeholder="Enter list name"
              type="text"
              autoFocus
              onChange={evt => this.setState({ value: evt.target.value })}
            />
            <div>
              <EditButton
                type="button"
                style={styles.createListCancelButton}
                onClick={() => this.setState({ mode: "view", value: "" })}
              >
                <i className="fa fa-close" aria-hidden="true" />
              </EditButton>
              <EditButton
                disabled={this.state.value.length <= 0}
                style={styles.createListSubmitButton}
              >
                <i className="fa fa-check" aria-hidden="true" />
              </EditButton>
            </div>
          </form>
        </div>
      );
    }

    if (this.state.mode === "edit") {
      return (
        <div>
          <h2 style={styles.sidebartitle}>Lists</h2>
          <form
            style={styles.createListContainer}
            onSubmit={evt => {
              this.setState({
                mode: "view",
                lists: this.state.lists.map(
                  (l, lId) =>
                    lId === this.state.listInEdit ? this.state.value : l
                ),
                value: ""
              });
              evt.preventDefault();
            }}
          >
            <Input
              placeholder="Enter list name"
              type="text"
              autoFocus
              defaultValue={this.state.value}
              onChange={evt => this.setState({ value: evt.target.value })}
            />
            <div>
              <EditButton
                type="button"
                style={styles.createListCancelButton}
                onClick={() =>
                  this.setState({
                    mode: "view",
                    value: "",
                    listInEdit: undefined
                  })
                }
              >
                <i className="fa fa-close" aria-hidden="true" />
              </EditButton>
              <EditButton
                disabled={this.state.value.length <= 0}
                style={styles.createListSubmitButton}
                type="submit"
              >
                <i className="fa fa-check" aria-hidden="true" />
              </EditButton>
            </div>
          </form>
        </div>
      );
    }

    return (
      <div>
        <h2 style={styles.sidebartitle}>Lists</h2>
        <button
          style={styles.createListButton}
          onClick={() => this.setState({ mode: "create" })}
        >
          Create New List
        </button>
        {this.state.lists.map((name, index) => (
          <div style={styles.list}>
            <div>{name}</div>
            <div>
              <EditButton
                onClick={() =>
                  this.setState({
                    mode: "edit",
                    listInEdit: index,
                    value: name
                  })
                }
              >
                <i className="fa fa-pencil-square-o" aria-hidden="true" />
              </EditButton>
              <EditButton
                onClick={() =>
                  window.confirm(
                    `Are you sure you want to delete the list "${name}?"`
                  )
                    ? this.setState({
                        lists: this.state.lists.filter(l => l !== name)
                      })
                    : null
                }
              >
                <i className="fa fa-trash-o" aria-hidden="true" />
              </EditButton>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <Sidebar
        sidebar={<SidebarContent />}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "white" } }}
      >
        <Screen>
          <Header onHamburgerButtonPress={() => this.onSetSidebarOpen(true)} />
          <Container>
            <StyledAddTodo />
            <TodoList />
          </Container>
          <Footer />
        </Screen>
      </Sidebar>
    );
  }
}

export default Home;
