import React from "react";
import styled from "styled-components";

import Footer from "../components/Footer";
import Header from "../components/Header";
import AddTodo from "../containers/AddTodo";
import TodoList from "../containers/TodoList";

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

const Home = () => (
  <Screen>
    <Header />
    <Container>
      <StyledAddTodo />
      <TodoList />
    </Container>
    <Footer />
  </Screen>
);

export default Home;
