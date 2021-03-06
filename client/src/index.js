import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

// console.log("Stripe key is", process.env.REACT_APP_STRIPE_KEY);
// console.log("Environment is", process.env.NODE_ENV);
