import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";

import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyles from "./styles/globals";

const renderApp = () => {
  const store = configureStore({});

  if (process.env.NODE_ENV !== "production") {
    console.log("Initial state ->");
    console.log(store.getState());
  }

  ReactDOM.render(
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>,

    document.getElementById("root")
  );
};

renderApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
