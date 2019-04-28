import React from "react";
import "./App.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { persistStore, persistReducer, createMigrate } from "redux-persist";
import storage from "redux-persist/es/storage";
import { PersistGate } from "redux-persist/es/integration/react";
import Home from "./pages/Home";

import todos from "./todo/reducer";

const App = () => {
  const migrations = {
    1: state => {
      const byId = {};
      state.todos.forEach((t, index) => {
        byId[index] = { ...t, id: index, list: 0 };
      });
      return {
        ...state,
        todos: {
          byId,
          idCounter: state.todos.length
        }
      };
    }
  };
  const config = {
    key: "todo",
    storage,
    version: 1,
    migrate: createMigrate(migrations, { debug: false })
  };
  const reducer = persistReducer(config, todos);
  const store = createStore(reducer);
  const persistor = persistStore(store);
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <Home />
      </Provider>
    </PersistGate>
  );
};

export default App;
