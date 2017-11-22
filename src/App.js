import React from "react";
import "./App.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Home from "./pages/Home";

import todos from "./todo/reducers";

const App = () => {
  const store = createStore(todos);
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
