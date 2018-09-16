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
        user: action.author,
        text: action.comment
      }]
    case 'REMOVE_COMMENT':
      return [
        ...state.slice(0,action.index),
        ...state.slice(action.index + 1)
      ]
    default:
      return state;
  }
  return state;
}

export default comments;
