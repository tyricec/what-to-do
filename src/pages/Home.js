import React from "react";
import styled from "styled-components";

import Footer from "../components/Footer";
import Header from "../components/Header";
import TodoInput from "../containers/TodoInput";
import TodoList from "../containers/TodoList";

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

const Home = () => (
      <Screen>
        <Header />
        <Container>
          <StyledTodoInput />
          <TodoList />
        </Container>
        <Footer />
      </Screen>
    );

export default Home;
