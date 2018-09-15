//reducer takes two parameters 1-action, 2-copy of current state
//and returns new state

const comments = (state=[], action) => {
  if (typeof action.postId !== 'undefined') {
    return {
      //take current state
      ...state,
      //overwrite this post with a new one based on the postComments reducer
      [action.postId] : postComments(state[action.postId], action)
    }
  }
  return state;
}

const postComments = (state=[], action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      //return the new state with a new comment
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
