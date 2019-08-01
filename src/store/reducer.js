const initialState = {
  score: { 'X': 0, 'O': 0 },
  squares: Array(9).fill(null)
}

export const rootReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'UPDATE_SCORE':
      return {
        ...state,
        score: action.payload.score,
        squares: action.payload.squares
      }
    case 'UPDATE_SQUARE':
      return {
        ...state,
        squares: action.payload
      }
    case 'RESET':
      return {
        ...state,
        squares: action.payload.squares,
        score: action.payload.score
      }
    case 'RESTART':
      return {
        ...state,
        squares: action.payload
      }
    default: return state
  }
}