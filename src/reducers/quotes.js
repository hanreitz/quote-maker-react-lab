export default (state = [], action) => {
  switch(action.type){
    case 'ADD_QUOTE':
      state = state.concat(action.quote)
      return state
    case 'REMOVE_QUOTE':
      state = state.filter(quote => quote.id !== action.quoteId)
      return state
    case 'UPVOTE_QUOTE':
      const quoteIndex = state.findIndex(quote => quote.id === action.quoteId)
      const quote = state[quoteIndex]
      return [...state.slice(0, quoteIndex), {...quote, votes: quote.votes += 1}, ...state.slice(quoteIndex + 1)]
    case 'DOWNVOTE_QUOTE':
      const quoteIndex = state.findIndex(quote => quote.id === action.quoteId)
      const quote = state[quoteIndex]
      return [...state.slice(0, quoteIndex), {...quote, votes: quote.votes -= 1}, ...state.slice(quoteIndex + 1)]
    default:
      return state
  }
}
