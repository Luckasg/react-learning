import React from 'react'
import ReactDOM from 'react-dom/client'

import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const setMark = (mark, number) => {
    store.dispatch({
      type: mark,
      payload: {number}
    })
  }

  return (
    <div>
      <button onClick={() => setMark('GOOD', 5)}>good</button> 
      <button onClick={() => setMark('OK', 4)}>ok</button> 
      <button onClick={() => setMark('BAD', 3)}>bad</button>
      <button onClick={() => setMark('ZERO', 0)}>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>ok {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderApp = () => {
  root.render(<App />)
}

renderApp()
store.subscribe(renderApp)
