import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import reducerAnecdotes from './reducers/anecdoteReducer'

const store = createStore(reducerAnecdotes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)