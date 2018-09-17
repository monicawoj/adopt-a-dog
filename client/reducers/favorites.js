//reducer takes two parameters 1-action, 2-copy of current state
//and returns new state

const favorites = (state=[], action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      //return the new state with a new comment
      const data = action.data;
      return [
        ...state,
        {...data}
      ]
    case 'REMOVE_FROM_FAVORITES':
      const id = action.id;
      const itemsToKeep = [...state].filter(item => item.id['$t'] !== id);
      return [
        ...itemsToKeep
      ]
    case 'GET_FAVORITES':
      return [
        ...state
      ]
    default:
      return state;
  }
  return state;
}

export default favorites;
