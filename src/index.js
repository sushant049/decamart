import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './redux/reducers/rootReducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// import reportWebVitals from "./reportWebVitals";

const middleware = [
  thunk
];

const composeEnhancers =
  (process.env.NODE_ENV === "development" && window.__REDUX_DEVTOOLS_EXTENSION__) ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
  compose;

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(...middleware)
));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// serviceWorker.register();

// reportWebVitals();
