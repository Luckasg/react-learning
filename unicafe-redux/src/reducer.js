const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      return {...state, good: state.good + action.payload.number}
    case 'OK':
      return {...state, ok: state.ok + action.payload.number}
    case 'BAD':
      return {...state, bad: state.bad + action.payload.number}
    case 'ZERO':
      return {...state, good: 0, ok: 0, bad: 0}
    default: return state
  }
  
}

export default counterReducer
