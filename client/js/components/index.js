import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import twitterSearch from '../reducers/main'
import App from './app'

let store = createStore(twitterSearch)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)