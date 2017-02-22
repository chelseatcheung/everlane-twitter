import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/index'
import App from './app';
import '../../assets/styles/main.scss';

let store = createStore(reducer, applyMiddleware(thunk))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)