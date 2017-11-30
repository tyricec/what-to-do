import React from "react";
import "./App.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage";
import { PersistGate } from "redux-persist/es/integration/react";
import Home from "./pages/Home";

import todos from "./todo/reducer";

const App = () => {
  const config = {
    key: "todo",
    storage
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
