const initialState = {
  score: { 'X': 0, 'O': 0 }
}

export const rootReducer = (state = initialState, action = {}) => {
  console.log('reducer', action.payload)
  switch (action.type) {
    case 'UPDATE_SCORE':
      return {
        ...state,
        score: action.payload
      }
    default: return state
  }
}