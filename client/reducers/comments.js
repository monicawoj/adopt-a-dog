//reducer takes two parameters 1-action, 2-copy of current state
//and returns new state

const comments = (state=[], action) => {
  if (typeof action.id !== 'undefined') {
    return {
      //take current state
      ...state,
      //overwrite this post with a new one based on the postComments reducer
      [action.id] : postComments(state[action.id], action)
    }
  }
  return state;
}

const postComments = (state=[], action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state, {
        text: action.text
      }]
    case 'REMOVE_COMMENT':
      return [
        ...state.slice(0,action.i),
        ...state.slice(action.i + 1)
      ]
    default:
      return state;
  }
  return state;
}

export default comments;
