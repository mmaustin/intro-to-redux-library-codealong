// ./src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import counterReducer from './reducers/counterReducer.js';
import App from './App';
import './index.css';

const store = createStore(counterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(<App store={store}/>, document.getElementById('root'));

/*   Manually written createStore() function
function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = reducer(state, action);
    render();
  }

  function getState() {
    return state;
  };

  return {
    dispatch,
    getState
  };
};
*/